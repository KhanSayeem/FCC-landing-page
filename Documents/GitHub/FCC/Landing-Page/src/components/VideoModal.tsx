import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VideoModal({ open, onOpenChange }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0" onClose={() => onOpenChange(false)}>
        <div className="p-6 pb-4">
          <DialogHeader>
            <DialogTitle>See Financial Command Center AI in Action</DialogTitle>
            <DialogDescription>
              Watch how FCC automates financial operations in seconds
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="aspect-video w-full bg-slate-900">
          {/* Local video file from public folder */}
          <video
            className="h-full w-full"
            controls
            autoPlay
            src="/10.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}
