import emailjs from '@emailjs/browser';

interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name?: string;
}

class EmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor() {
    this.serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    this.templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    this.publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    if (this.publicKey) {
      emailjs.init(this.publicKey);
    }
  }

  async sendEmail(data: EmailData): Promise<void> {
    if (!this.serviceId || !this.templateId || !this.publicKey) {
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
    }

    try {
      const templateParams = {
        from_name: data.from_name,
        from_email: data.from_email,
        subject: data.subject,
        message: data.message,
        to_name: data.to_name || 'Portfolio Owner',
        reply_to: data.from_email,
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }

      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }

  isConfigured(): boolean {
    return !!(this.serviceId && this.templateId && this.publicKey);
  }
}

export const emailService = new EmailService();