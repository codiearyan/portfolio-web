import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: `How to request deletion of your data from ${DATA.name}'s WhatsApp messaging services.`,
  alternates: { canonical: "/data-deletion" },
};

const CONTENT = `
This page explains how to ask ${DATA.name} to delete data held for our WhatsApp messaging integration services. See our [Privacy Policy](/privacy) for what data we hold.

## If you are a business that connected WhatsApp

1. **Remove our access.** In Meta Business Suite, open your business settings and remove our app from your WhatsApp Business Account. We can no longer access your account once you do this.
2. **Ask us to delete your data.** Email [${DATA.contact.email}](mailto:${DATA.contact.email}) with the subject "Data deletion request", your business name, and the WhatsApp phone number you connected.

We confirm your request within 7 days and delete your access tokens, account identifiers, message templates, contacts, and message history within 30 days.

## If you received messages from a business using our service

The business that messaged you controls your data. Contact them first to update or delete it, or block their number in WhatsApp to stop messages.

You can also email [${DATA.contact.email}](mailto:${DATA.contact.email}) with your phone number and the name of the business. We will confirm the request with that business and delete your phone number, profile name, and messages from our systems within 30 days.

## What we may keep

We may keep records that the law requires us to keep, such as invoices, for the period the law requires. We keep nothing else.
`;

export default function DataDeletionPage() {
  return <LegalPage title="Data Deletion" content={CONTENT} />;
}
