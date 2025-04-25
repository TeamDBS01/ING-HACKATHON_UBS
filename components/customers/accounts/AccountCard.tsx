"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface AccountProps {
  bankName: string;
  accNumber: string;
  accType: string;
  balance: number;
}

export default function AccountCard(accInfo: AccountProps) {
  const [revealBalance, setRevealBalance] = useState(false);
  const [revealAccNum, setRevealAccNum] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center bg-card text-card-foreground rounded-md max-w-lg p-8">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
      <div>
        <div className="text-base font-bold flex items-center justify-between">
          <p className="text-muted-foreground">Account Num:</p>
          <span className={cn(revealAccNum ? "" : "blur-sm select-none")}>
            {accInfo.accNumber}
          </span>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setRevealAccNum(!revealAccNum)}
          >
            {revealAccNum ? <Eye /> : <EyeClosed />}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground">Account Type: </p>
          <p className="text-base font-bold">{accInfo.accType}</p>
        </div>
        <div className="text-base font-bold flex items-center justify-between">
          <p className="text-muted-foreground">Balance: </p>
          <span className={cn(revealBalance ? "" : "blur-sm select-none")}>
            {" "}
            {accInfo.balance}
          </span>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setRevealBalance(!revealBalance)}
          >
            {revealBalance ? <Eye /> : <EyeClosed />}
          </Button>
        </div>
      </div>
    </div>
  );
}
