import { NextResponse } from 'next/server'

export async function POST (request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )

    if (response.status >= 400) {
      return NextResponse.json({
        error: `There was an error subscribing to the newsletter.
        Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
      });
    }

    return NextResponse.json({ error: '' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || error.toString() });
  }
};