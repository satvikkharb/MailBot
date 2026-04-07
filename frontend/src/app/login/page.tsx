import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { LoginButton } from "@/components/auth/LoginButton";
import { Mail, Zap, Shield, Database } from "lucide-react";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/inbox");

  return (
    <div className="min-h-screen bg-background bg-grid flex items-center justify-center p-4">
      {/* Ambient glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="p-2 rounded-lg border border-primary/30 bg-primary/10 glow-cyan">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-gradient-cyan">
            Mailbot
          </span>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-border bg-card p-8 shadow-2xl">
          <h1 className="text-2xl font-semibold mb-2 text-foreground">
            Sign in
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Connect your Gmail account to start managing replies with AI.
          </p>

          <LoginButton />

          <p className="mt-6 text-xs text-muted-foreground text-center">
            Read &amp; send access to your Gmail inbox. No emails sent without
            your approval.
          </p>
        </div>

        {/* Features row */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { icon: Zap, label: "AI Drafts" },
            { icon: Shield, label: "You Approve" },
            { icon: Database, label: "RAG Context" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border bg-card/50 text-muted-foreground"
            >
              <Icon className="w-4 h-4 text-primary/70" />
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
