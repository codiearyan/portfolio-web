import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for the WhatsApp messaging integration services provided by ${DATA.name}.`,
  alternates: { canonical: "/terms" },
};

const CONTENT = `
These Terms govern the WhatsApp messaging integration services provided by ${DATA.name} ("we", "us"), a sole proprietorship registered in India (Udyam Registration No. ${DATA.udyamNumber}), to businesses ("clients"). By connecting a WhatsApp Business Account to our service or using it, you agree to these Terms.

## The service

We help businesses connect their WhatsApp Business Account to their own software through the WhatsApp Business Platform by Meta. This includes onboarding through Meta's Embedded Signup, sending and receiving messages, managing message templates, and support. For example, Rainbow English School uses it to send attendance alerts, fee reminders, and notices to parents on WhatsApp.

The exact scope, fees, and timelines for each client are agreed in writing, for example in a proposal, invoice, or email.

## Your WhatsApp Business Account

Your WhatsApp Business Account and phone number stay in your own Meta business portfolio. By connecting them, you allow us to access and manage them only to provide the service. You can remove our access at any time from your Meta business settings.

## Your responsibilities

- Get opt-in from people before you message them on WhatsApp, and honour requests to stop.
- Follow the WhatsApp Business Terms of Service, the WhatsApp Business Messaging Policy, and the Meta Commerce Policy.
- Do not send spam or content that is unlawful, misleading, or harmful.
- Make sure you are allowed to share the personal data you send through the service.
- Keep the credentials for your accounts secure.

We may pause messaging on your account if it is needed to protect the account, the people you message, or to comply with Meta's requirements. We will tell you when we do.

## Meta and message charges

Meta charges for some WhatsApp messages. Unless we agree otherwise in writing, Meta bills those charges directly to the payment method on your WhatsApp Business Account. Meta decides on template approvals, quality ratings, messaging limits, and account restrictions, and we are not responsible for those decisions or for outages of the WhatsApp Business Platform.

## Fees

Our fees for setup, development, and support are as agreed with each client and are payable as stated on the invoice.

## Data

You own the data you send through the service. We process it as described in our [Privacy Policy](/privacy).

## Intellectual property

Our software, integrations, and this website remain ours. You may use them for your business while you use our service. Ownership of any custom work is as agreed in writing.

## Availability

We work to keep the service running reliably, but we cannot guarantee it will always be available or free of errors.

## Ending the service

Either side may stop the service as set out in your agreement with us. We may suspend or end the service if these Terms are seriously breached. When the service ends, we delete your data as described in our [Data Deletion](/data-deletion) page.

## Liability

The service is provided "as is". To the extent the law allows, we are not liable for indirect or consequential losses, and our total liability is limited to the fees you paid us in the three months before the claim.

## Governing law

These Terms are governed by the laws of India. Courts in Kachchh, Gujarat have jurisdiction.

## Changes

We may update these Terms. The date at the top shows when they last changed.

## Contact

${DATA.name}, email: [${DATA.contact.email}](mailto:${DATA.contact.email})
`;

export default function TermsPage() {
  return <LegalPage title="Terms of Service" content={CONTENT} />;
}
