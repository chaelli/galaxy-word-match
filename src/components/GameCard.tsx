import { useState } from "react";
import { cn } from "@/lib/utils";

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
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">(
    "idle"
  );

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
        "choice-card",
        status === "correct" && "correct",
        status === "incorrect" && "incorrect",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <img
        src={`images/${image}`}
        alt="Choice"
        className="w-full h-48 object-cover rounded-lg"
      />
    </div>
  );
}
