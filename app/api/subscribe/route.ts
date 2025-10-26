import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('⚠️ RESEND_API_KEY not configured. Email would be sent to: bytrosprotocol@gmail.com');
      console.log('New subscription:', {
        email,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for subscribing! We\'ll notify you when Bytros launches.'
        },
        { status: 200 }
      );
    }

    // Send email to bytrosprotocol@gmail.com using Resend
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Bytros Landing <onboarding@resend.dev>', // You'll need to verify your domain
        to: 'bytrosprotocol@gmail.com',
        subject: 'New Bytros Landing Page Subscription',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ed786a;">New Bytros Landing Page Subscription</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p style="color: #666; font-size: 14px;">This email was sent from the Bytros landing page subscription form.</p>
          </div>
        `,
      });

      console.log('✅ Email sent successfully to bytrosprotocol@gmail.com');
    } catch (emailError) {
      console.error('❌ Failed to send email:', emailError);
      // Still return success to user, but log the error
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing! We\'ll notify you when Bytros launches.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}

