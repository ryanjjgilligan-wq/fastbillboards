import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      budget_range,
      target_market,
      billboard_type,
      campaign_start,
      existing_quotes,
      referral_source,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error: dbError } = await supabase.from("leads").insert([
      {
        name,
        company,
        email,
        phone,
        budget_range,
        target_market,
        billboard_type,
        campaign_start,
        existing_quotes,
        referral_source,
      },
    ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      // Don't fail the request for DB errors — still send email
    }

    // Send notification email to team
    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL || "hello@fastbillboards.com",
      to:
        process.env.NOTIFICATION_EMAIL || "hello@fastbillboards.com",
      subject: `New Lead: ${name} — ${company || "No company"} (${budget_range || "Budget TBD"})`,
      html: `
        <h2 style="font-family: sans-serif; color: #0A1628;">New FastBillboards Lead</h2>
        <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px 0; color: #666; width: 160px;"><strong>Name:</strong></td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td><td style="padding: 8px 0;">${company || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Budget Range:</strong></td><td style="padding: 8px 0;">${budget_range || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Target Market:</strong></td><td style="padding: 8px 0;">${target_market || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Billboard Type:</strong></td><td style="padding: 8px 0;">${billboard_type || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Campaign Start:</strong></td><td style="padding: 8px 0;">${campaign_start || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Existing Quotes:</strong></td><td style="padding: 8px 0;">${existing_quotes || "—"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Referral Source:</strong></td><td style="padding: 8px 0;">${referral_source || "—"}</td></tr>
        </table>
        <p style="font-family: sans-serif; margin-top: 24px;">
          <a href="https://fastbillboards.com" style="background: #FFD60A; color: #0A1628; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
            View FastBillboards Dashboard
          </a>
        </p>
      `,
    });

    // Send confirmation to lead
    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL || "hello@fastbillboards.com",
      to: email,
      subject:
        "We received your FastBillboards request — you'll hear from us within 24 hours",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A1628; color: #ffffff; padding: 40px; border-radius: 12px;">
          <h1 style="color: #FFD60A; font-size: 24px; margin-bottom: 8px;">FastBillboards.com</h1>
          <h2 style="color: #ffffff; font-size: 20px; margin-bottom: 16px;">Thanks, ${name}!</h2>
          <p style="color: #94A3B8; line-height: 1.6; margin-bottom: 16px;">
            We've received your campaign brief and will reach out within 24 hours to schedule your free strategy call.
          </p>
          <p style="color: #94A3B8; line-height: 1.6; margin-bottom: 16px;">
            On that call, we'll review your campaign goals, target market, and budget — and explain exactly what we'll negotiate on your behalf.
          </p>
          <div style="background: #0F1F3D; border: 1px solid #1A2F4D; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="color: #FFD60A; font-weight: bold; margin: 0 0 8px 0;">What happens next:</p>
            <ol style="color: #94A3B8; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Check your inbox for this confirmation</li>
              <li>We'll reach out within 24 hours to schedule your call</li>
              <li>After your strategy call, negotiation begins — options back in 5–7 business days</li>
            </ol>
          </div>
          <p style="color: #94A3B8; line-height: 1.6;">
            Questions? Reply to this email or call us at <a href="tel:+18005550199" style="color: #FFD60A;">(800) 555-0199</a>.
          </p>
          <p style="color: #94A3B8; margin-top: 24px;">— The FastBillboards Team</p>
          <hr style="border: none; border-top: 1px solid #1A2F4D; margin: 24px 0;" />
          <p style="color: #475569; font-size: 12px;">
            FastBillboards.com · Flat-fee billboard negotiation concierge · hello@fastbillboards.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
