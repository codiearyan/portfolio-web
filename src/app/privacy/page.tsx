import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${DATA.name} handles data when helping businesses integrate WhatsApp messaging.`,
  alternates: { canonical: "/privacy" },
};

const CONTENT = `
This Privacy Policy explains how ${DATA.name} ("we", "us"), a sole proprietorship registered in India (Udyam Registration No. ${DATA.udyamNumber}), handles information when we help businesses integrate WhatsApp messaging into their products, and when you visit this website.

## What we do

We are a technology provider on the WhatsApp Business Platform by Meta. We help businesses connect their WhatsApp Business Account to their own software (such as a CRM, ERP, or mobile app) so they can send notifications, reminders, and updates, and reply to their customers on WhatsApp.

For example, Rainbow English School uses our integration to send attendance alerts, fee reminders, and notices to parents on WhatsApp, and to reply to parents from its admin dashboard.

## Our role

The businesses we work with ("clients") decide who they message and why. For the personal data of their customers, the client is the data fiduciary (controller) and we process that data only on the client's behalf and instructions. If you receive messages from one of our clients, please contact that business first about how it uses your data.

## Information we process

**Business account information.** When a client connects WhatsApp through Meta's Embedded Signup, we receive their WhatsApp Business Account ID, phone number ID, business phone number, display name, and an access token issued by Meta. We also store the name and contact details of the people who manage the integration.

**Messaging data.** To send and receive messages for a client, we process recipients' phone numbers and WhatsApp profile names, the content of messages (text and media), message templates, and delivery and read statuses with timestamps.

**WhatsApp Business app data.** If a client keeps using the WhatsApp Business app on the same number (coexistence) and gives permission, we also receive their contacts, up to 180 days of past chat history, and copies of messages they send from the app, so conversations stay complete in their software.

**Website visitors.** This website has no sign-up and uses no advertising or analytics cookies. Our hosting provider may keep standard server logs (such as IP address and browser type) for security and reliability. Your light or dark theme choice is saved only in your browser.

## How we use information

- To provide the messaging service the client asked for: sending messages, receiving replies, and showing conversations in the client's software.
- To keep the service secure, prevent abuse, and fix problems.
- To comply with the law and with Meta's policies.

We do not sell personal data, use it for advertising, or use one client's data for any other client. We use data received from Meta only to provide the service to the client it belongs to.

## Sharing

We share data only with service providers that are needed to run the service, and only as much as they need:

- **Meta Platforms, Inc.**, which operates the WhatsApp Business Platform and delivers the messages.
- **Cloud hosting, database, and file storage providers** where the service runs.

We may also disclose information if the law requires it.

## Storage and security

Data is encrypted in transit (HTTPS). Access tokens issued by Meta are stored on our servers and never exposed to browsers. Access to client data is limited to the people who need it to provide the service.

## Retention and deletion

We keep a client's data only while they use our service. When a client disconnects or asks us to, we delete their access tokens, account identifiers, templates, and message data within 30 days, unless the law requires us to keep certain records longer. See [Data Deletion](/data-deletion) for how to ask.

## Your rights

Depending on the law that applies to you, including India's Digital Personal Data Protection Act, 2023, you may have the right to access, correct, or delete your personal data, to withdraw consent, and to raise a grievance. If a business messaged you through our service, you can contact that business, or write to us and we will help.

## Changes

We may update this policy. The date at the top shows when it last changed.

## Contact

${DATA.name}, email: [${DATA.contact.email}](mailto:${DATA.contact.email})
`;

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" content={CONTENT} />;
}
