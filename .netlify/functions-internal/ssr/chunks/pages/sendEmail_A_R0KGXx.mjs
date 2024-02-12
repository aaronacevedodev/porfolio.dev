import { Resend } from 'resend';

const resend = new Resend({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.RESEND_API_KEY);
const POST = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject, text } = body;
  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data"
    });
  }
  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

export { POST };
