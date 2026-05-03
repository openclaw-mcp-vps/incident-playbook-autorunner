export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Incident Response Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-execute incident response<br />
          <span className="text-[#58a6ff]">playbook steps</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Trigger automated playbook actions based on alert patterns. Scale services, send notifications, create tickets — all without waking up your team at 3am.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start for $59/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Webhook Ingestion", desc: "Receive alerts from PagerDuty, Datadog, Grafana, or any HTTP source." },
            { title: "Pattern Matching", desc: "Define rules that match alert fields and route to the right playbook." },
            { title: "Auto Execution", desc: "Run actions: scale infra, post to Slack, open Jira tickets — automatically." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$59<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need for reliable incident automation</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited playbooks",
              "Webhook ingestion from any source",
              "Auto-execute: scale, notify, ticket",
              "Execution history & audit log",
              "Team collaboration & role access",
              "Slack, PagerDuty, Jira integrations",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get started now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does alert matching work?",
              a: "You define pattern rules using field conditions (e.g. severity=critical AND service=payments). When an incoming webhook matches, the linked playbook fires automatically."
            },
            {
              q: "What actions can a playbook execute?",
              a: "Playbooks can scale cloud services, send Slack messages, create Jira/Linear tickets, call arbitrary HTTP endpoints, or run custom scripts via secure runners."
            },
            {
              q: "Can I review what was executed?",
              a: "Yes. Every playbook run is logged with timestamps, action outputs, and status. You get a full audit trail for post-mortems and compliance."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Incident Playbook Autorunner. All rights reserved.
      </footer>
    </main>
  );
}
