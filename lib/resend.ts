import { Resend } from 'resend';

let resendClient: Resend | null = null;

export const getResend = () => {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // In development or build, we return a dummy client or handle it
      // For build to pass, we can return null or a proxy, but better to check in the caller
      return null;
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
};
