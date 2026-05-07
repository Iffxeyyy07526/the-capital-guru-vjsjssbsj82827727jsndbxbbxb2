import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface GuruEmailLayoutProps {
  previewText: string;
  title: string;
  children: React.ReactNode;
  footerText?: string;
}

export const GuruEmailLayout = ({
  previewText,
  title,
  children,
  footerText = "The world's most elite institutional trading infrastructure.",
}: GuruEmailLayoutProps) => (
  <Html>
    <Head />
    <Preview>{previewText}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Text style={logoText}>THE CAPITAL GURU</Text>
          <Text style={taglineText}>INSTITUTIONAL · PRECISE · ELITE</Text>
        </Section>
        
        <Section style={contentSection}>
          <Heading style={h1}>{title}</Heading>
          {children}
        </Section>

        <Hr style={hr} />

        <Section style={footer}>
          <Text style={footerLogo}>THE CAPITAL GURU</Text>
          <Text style={footerSub}>{footerText}</Text>
          <Row>
            <Column align="center">
              <Link href="https://thecapitalguru.net" style={footerLink}>Website</Link>
              <Text style={footerDivider}>|</Text>
              <Link href="https://t.me/yourgroup" style={footerLink}>Telegram</Link>
            </Column>
          </Row>
          <Text style={copyright}>
            © 2026 The Capital Guru. Institutional Clearance Required.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#060608',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#E8E4DA',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  width: '600px',
};

const logoSection = {
  textAlign: 'center' as const,
  padding: '40px 0',
  borderBottom: '1px solid #C9A84C',
  marginBottom: '40px',
};

const logoText = {
  fontSize: '32px',
  fontWeight: '800',
  letterSpacing: '0.2em',
  color: '#C9A84C',
  margin: '0',
  textTransform: 'uppercase' as const,
};

const taglineText = {
  fontSize: '10px',
  letterSpacing: '0.4em',
  color: '#8F7640',
  margin: '10px 0 0',
  fontWeight: '600',
};

const contentSection = {
  padding: '20px 0',
};

const h1 = {
  color: '#E8E4DA',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.4',
  margin: '0 0 20px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
};

const hr = {
  borderColor: '#1a1a1a',
  margin: '40px 0',
};

const footer = {
  textAlign: 'center' as const,
  padding: '40px 0',
};

const footerLogo = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#C9A84C',
  letterSpacing: '0.1em',
  marginBottom: '8px',
};

const footerSub = {
  fontSize: '12px',
  color: '#8F7640',
  margin: '0 0 20px',
};

const footerLink = {
  color: '#C9A84C',
  fontSize: '12px',
  textDecoration: 'none',
  display: 'inline-block',
};

const footerDivider = {
  color: '#1a1a1a',
  margin: '0 10px',
  fontSize: '12px',
  display: 'inline-block',
};

const copyright = {
  fontSize: '10px',
  color: '#444',
  marginTop: '20px',
  letterSpacing: '0.05em',
};
