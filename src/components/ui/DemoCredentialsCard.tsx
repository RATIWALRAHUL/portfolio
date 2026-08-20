"use client";

import { useState } from "react";
import { ExternalLink, Copy, Check, ShieldCheck, KeyRound, Sparkles } from "lucide-react";
import styles from "./DemoCredentialsCard.module.css";

interface Credential {
  role: string;
  email: string;
  category: "Admin" | "Designer" | "Leadership" | "Engineering";
  note?: string;
}

const allCredentials: Credential[] = [
  { role: "Super Administrator", email: "admin@gmail.com", category: "Admin", note: "Full system & multi-branch access" },
  { role: "UI/UX Designer (Geeta)", email: "geeta@gmail.com", category: "Designer", note: "Design system & project asset portal" },
  { role: "Operations Lead", email: "harsh@gmail.com", category: "Leadership", note: "Branch telemetry & attendance approvals" },
  { role: "Full Stack Engineer", email: "animeshj720@gmail.com", category: "Engineering", note: "Developer & API management" },
  { role: "Senior Engineer", email: "uttam@gmail.com", category: "Engineering", note: "Product sprint & task tracker" },
  { role: "QA & Verification Lead", email: "balram@gmail.com", category: "Engineering", note: "Release & validation pipelines" },
  { role: "Product Associate", email: "rishi@gmail.com", category: "Leadership", note: "Client deliverables & milestone reports" },
  { role: "Product Analyst", email: "vibhu@gmail.com", category: "Leadership", note: "Operations & time tracking telemetry" },
  { role: "Business Lead", email: "rahul@gmail.com", category: "Leadership", note: "Company billing & financial logs" },
  { role: "Frontend Lead", email: "parth@gmail.com", category: "Engineering", note: "UI component architecture" },
];

export default function DemoCredentialsCard() {
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedEmail(text);
      setTimeout(() => setCopiedEmail(null), 2000);
    }
  };

  const filteredCredentials = selectedTab === "All"
    ? allCredentials
    : allCredentials.filter((c) => c.category === selectedTab);

  return (
    <section className={styles.demoCard} aria-labelledby="demo-access-heading">
      {/* Top Header Bar */}
      <div className={styles.topBar}>
        <div className={styles.titleArea}>
          <div className={styles.badgeRow}>
            <div className={styles.livePulseBadge}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <span>Live Production System</span>
            </div>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>• 10 Active Portals</span>
          </div>
          <h3 id="demo-access-heading" className={styles.heading}>
            Gatecode OMS — Live System Access &amp; Credentials
          </h3>
          <p className={styles.subtitle}>
            This 4-in-1 enterprise suite is deployed and fully operational at <strong>http://gatecode.net/</strong>. Select any test account below to test the live role-based dashboard:
          </p>
        </div>

        <a
          href="http://gatecode.net/"
          target="_blank"
          rel="noreferrer"
          className={styles.launchBtn}
        >
          <span>Launch OMS Portal</span>
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>

      {/* Role Filter Tabs */}
      <div className={styles.tabsRow} role="tablist" aria-label="Credential roles">
        {["All", "Admin", "Designer", "Leadership", "Engineering"].map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab}
            className={`${styles.tabBtn} ${selectedTab === tab ? styles.tabActive : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab === "All" ? `All Logins (${allCredentials.length})` : tab}
          </button>
        ))}
      </div>

      {/* Credentials Grid */}
      <div className={styles.grid}>
        {filteredCredentials.map((cred) => {
          const isCopied = copiedEmail === cred.email;

          return (
            <div key={cred.email} className={styles.cardItem}>
              <div className={styles.cardRole}>
                <ShieldCheck size={14} aria-hidden="true" />
                <span>{cred.role}</span>
              </div>

              {/* Email Row */}
              <div className={styles.fieldRow}>
                <span className={styles.fieldLabel}>Email:</span>
                <div className={styles.codeWrap}>
                  <code className={styles.codeSnippet}>{cred.email}</code>
                  <button
                    type="button"
                    className={styles.copyBtn}
                    onClick={() => copyToClipboard(cred.email)}
                    title="Copy Email"
                    aria-label={`Copy email ${cred.email}`}
                  >
                    {isCopied ? (
                      <Check size={14} color="#10b981" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Row */}
              <div className={styles.fieldRow}>
                <span className={styles.fieldLabel}>Password:</span>
                <div className={styles.codeWrap}>
                  <code className={styles.codeSnippet}>password</code>
                  <button
                    type="button"
                    className={styles.copyBtn}
                    onClick={() => copyToClipboard("password")}
                    title="Copy Password"
                    aria-label="Copy password"
                  >
                    <KeyRound size={14} />
                  </button>
                </div>
              </div>

              {cred.note && (
                <span style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                  {cred.note}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className={styles.footerNote}>
        <div>
          <span className={styles.defaultPassNotice}>Universal Demo Password: </span>
          <code className={styles.codeSnippet}>password</code>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
          <Sparkles size={14} color="var(--accent-orange)" aria-hidden="true" />
          <span>Click any copy icon to quickly paste credentials on the login screen.</span>
        </div>
      </div>
    </section>
  );
}
