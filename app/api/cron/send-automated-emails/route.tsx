import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { getResend } from '@/lib/resend';
import { SALES_EMAILS } from '@/lib/emails/content-sales';
import { EDUCATIONAL_EMAILS } from '@/lib/emails/content-education';
import * as React from 'react';
import { GuruEmailLayout } from '@/components/emails/guru-email-layout';
import { Text } from '@react-email/components';

// Force dynamic to avoid build-time pre-rendering issues with env vars
export const dynamic = 'force-dynamic';

const getSupabaseAdmin = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
};

export async function POST(req: Request) {
  try {
    const { type, secret } = await req.json();

    // Basic security check
    if (secret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();
    const resend = getResend();

    if (!supabase || !resend) {
      return NextResponse.json({ error: 'Infrastructure not configured' }, { status: 500 });
    }

    if (type === 'sales') {
      return await handleSalesCampaign(supabase, resend);
    } else if (type === 'education') {
      return await handleEducationCampaign(supabase, resend);
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (error: any) {
    console.error('Cron Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function handleSalesCampaign(supabase: any, resend: any) {
  const { data: users, error } = await supabase
    .from('profiles')
    .select('id, email, full_name, campaign_sales_index')
    .not('status', 'eq', 'active');

  if (error) throw error;
  if (!users || users.length === 0) return NextResponse.json({ message: 'No users found for sales' });

  for (const user of users) {
    if (!user.email) continue;

    const index = (user.campaign_sales_index || 0) % SALES_EMAILS.length;
    const emailData = SALES_EMAILS[index];

    await resend.emails.send({
      from: 'The Capital Guru <desk@thecapitalguru.com>',
      to: user.email,
      subject: emailData.subject,
      react: (
        <GuruEmailLayout
          title={emailData.title}
          previewText={emailData.preview}
        >
          <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#E8E4DA' }}>
            {emailData.body}
          </Text>
        </GuruEmailLayout>
      ) as React.ReactElement,
    });

    await supabase
      .from('profiles')
      .update({ campaign_sales_index: index + 1 })
      .eq('id', user.id);
  }

  return NextResponse.json({ message: `Sales campaign triggered for ${users.length} users` });
}

async function handleEducationCampaign(supabase: any, resend: any) {
  const { data: users, error } = await supabase
    .from('profiles')
    .select('id, email, full_name, campaign_edu_index')
    .eq('status', 'active');

  if (error) throw error;
  if (!users || users.length === 0) return NextResponse.json({ message: 'No active users found for education' });

  for (const user of users) {
    if (!user.email) continue;

    const index = (user.campaign_edu_index || 0) % EDUCATIONAL_EMAILS.length;
    const emailData = EDUCATIONAL_EMAILS[index];

    await resend.emails.send({
      from: 'The Capital Guru <elite@thecapitalguru.com>',
      to: user.email,
      subject: emailData.subject,
      react: (
        <GuruEmailLayout
          title={emailData.title}
          previewText={emailData.preview}
          footerText="Premium Educational Transmission. Confidential."
        >
          <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#E8E4DA' }}>
            {emailData.body}
          </Text>
        </GuruEmailLayout>
      ) as React.ReactElement,
    });

    await supabase
      .from('profiles')
      .update({ campaign_edu_index: index + 1 })
      .eq('id', user.id);
  }

  return NextResponse.json({ message: `Educational campaign triggered for ${users.length} users` });
}
