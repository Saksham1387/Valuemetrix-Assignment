import { toast } from "sonner";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

interface ActiveShareCardProps {
  activeShares: {
    id: string;
    token: string;
    viewCount: number;
    createdAt: Date;
  }[];
  handleRevokeShare: (token: string) => void;
  revokingShare: string | null;
}

export const ActiveShareCard = ({ activeShares, handleRevokeShare, revokingShare }: ActiveShareCardProps) => {
  return (
    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
    {activeShares.map((share) => (
      <div
        key={share.id}
        className="flex items-center justify-between p-2 bg-zinc-900 rounded-md"
      >
        <div className="flex-1 min-w-0 mr-4">
          <p className="text-sm truncate">
            {`${window.location.origin}/portfolio/${share.token}`}
          </p>
          <p className="text-xs text-muted-foreground">
            Created{" "}
            {new Date(share.createdAt).toLocaleDateString()} •{" "}
            {share.viewCount} views
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location.origin}/portfolio/${share.token}`
              );
              toast.success("Link copied to clipboard");
            }}
          >
            <Copy/>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleRevokeShare(share.token)}
            disabled={revokingShare === share.token}
          >
            {revokingShare === share.token
              ? "Revoking..."
              : "Revoke"}
          </Button>
        </div>
      </div>
    ))}
  </div>
  )
};
