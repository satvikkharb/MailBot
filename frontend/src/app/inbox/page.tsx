import { Mail, RefreshCw } from "lucide-react";

export default function InboxPage() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Inbox</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Primary Gmail — pending replies
          </p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-secondary hover:bg-secondary/80 hover:border-primary/40 transition-all text-sm text-muted-foreground hover:text-foreground">
          <RefreshCw className="w-3.5 h-3.5" />
          Sync
        </button>
      </div>

      {/* Empty state — will be replaced with real email list in Phase 2 */}
      <div className="rounded-xl border border-border bg-card">
        <EmptyInbox />
      </div>
    </div>
  );
}

function EmptyInbox() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="p-4 rounded-xl border border-border bg-secondary/50 mb-4">
        <Mail className="w-8 h-8 text-muted-foreground" />
      </div>
      <p className="text-sm font-medium text-foreground mb-1">No emails yet</p>
      <p className="text-xs text-muted-foreground max-w-xs">
        Click Sync to fetch your latest Gmail messages. Gmail integration coming
        in Phase 2.
      </p>
    </div>
  );
}
