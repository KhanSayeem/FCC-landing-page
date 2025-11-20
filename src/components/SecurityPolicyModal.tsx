import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { SecurityPolicyContent } from "./policies/SecurityPolicyContent";

interface SecurityPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SecurityPolicyModal({ open, onOpenChange }: SecurityPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] bg-slate-900 border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-100">Security Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <SecurityPolicyContent />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
