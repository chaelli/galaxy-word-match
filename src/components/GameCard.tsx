import { useState } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GameCardProps {
  image: string;
  isCorrect: boolean;
  onSelect: () => void;
  disabled: boolean;
}

export function GameCard({
  image,
  isCorrect,
  onSelect,
  disabled,
}: GameCardProps) {
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");

  const handleClick = () => {
    if (disabled) return;

    if (isCorrect) {
      setStatus("correct");
    } else {
      setStatus("incorrect");
    }
    onSelect();
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "choice-card relative h-48",
        status === "correct" && "correct",
        status === "incorrect" && "incorrect",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {/* Blurred background */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-md opacity-50 scale-105"
        style={{ backgroundImage: `url(images/${image})` }}
      />
      
      {/* Container for centered image */}
      <div className="absolute inset-0 flex items-center justify-center p-2">
        <img
          src={`images/${image}`}
          alt="Choice"
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
}