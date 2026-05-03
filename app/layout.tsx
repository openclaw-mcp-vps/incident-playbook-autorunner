import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Playbook Autorunner — Auto-execute incident response steps",
  description: "Monitors incoming alerts via webhooks, matches them against predefined playbook patterns, and automatically executes response actions. Built for DevOps, SRE, and on-call engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2ad9d9c9-14b1-4c94-8129-61fb38914739"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
