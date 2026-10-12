"use server";

export type EnquiryState = {
  message: string;
  status: "error" | "idle" | "success";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(formData: FormData, name: string, maximumLength: number): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

export async function sendEnquiry(_: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const company = readField(formData, "company", 200);

  // Quietly accept submissions from bots that complete the hidden honeypot.
  if (company) {
    return { message: "Thanks. Your enquiry has been sent.", status: "success" };
  }

  const name = readField(formData, "name", 120);
  const email = readField(formData, "email", 254);
  const message = readField(formData, "message", 5_000);

  if (!name || !emailPattern.test(email) || !message) {
    return { message: "Enter your name, a valid email address and a message.", status: "error" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Enquiry email is not configured.");
    return { message: "The enquiry form is temporarily unavailable. Please try again later.", status: "error" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      body: JSON.stringify({
        from,
        reply_to: email,
        subject: `New b5r enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        to: [to]
      }),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    if (!response.ok) {
      console.error("Resend rejected enquiry", response.status);
      return { message: "Your enquiry could not be sent. Please try again later.", status: "error" };
    }
  } catch (error) {
    console.error("Enquiry delivery failed", error);
    return { message: "Your enquiry could not be sent. Please try again later.", status: "error" };
  }

  return { message: "Thanks. Your enquiry has been sent.", status: "success" };
}
