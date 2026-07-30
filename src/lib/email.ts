export function isEmailConfigured() {
  return Boolean(process.env.WEB3FORMS_ACCESS_KEY);
}

interface SendNotificationInput {
  subject: string;
  heading: string;
  rows: Array<{ label: string; value: string }>;
}

export async function sendNotificationEmail({ subject, heading, rows }: SendNotificationInput) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return;

  const replyTo = rows.find((r) => r.label.toLowerCase() === "email")?.value;

  const message = rows.map((row) => `${row.label}: ${row.value}`).join("\n");

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: heading,
      replyto: replyTo,
      message,
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.success) {
    throw new Error(`Web3Forms error (${res.status}): ${JSON.stringify(data)}`);
  }
}
