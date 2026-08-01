// Web3Forms only accepts submissions made directly from the browser (their
// free tier rejects server-to-server calls with a 403), so this must run
// client-side and the access key must be a NEXT_PUBLIC_ env var.
export function isWeb3FormsConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
}

interface SubmitToWeb3FormsInput {
  subject: string;
  heading: string;
  rows: Array<{ label: string; value: string }>;
}

export async function submitToWeb3Forms({ subject, heading, rows }: SubmitToWeb3FormsInput) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

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
  return Boolean(res.ok && data?.success);
}
