import { useState, useEffect } from "react";
import { Word, getRandomWord, getWrongWords } from "@/lib/words";
import { GameCard } from "@/components/GameCard";
import { StarParticles } from "@/components/StarParticles";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [correctImageIndex, setCorrectImageIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const loadNewWord = async () => {
    setLoading(true);
    setSelectedIndex(null);

    const word = getRandomWord();
    const wrongWords = getWrongWords(word);

    try {
      // Get correct image
      const correctImage = word.path;

      // Get wrong images
      const wrongImage1 = wrongWords[0].path;
      const wrongImage2 = wrongWords[1].path;

      // Create array with all images
      const allImages = [correctImage, wrongImage1, wrongImage2];

      // Shuffle images
      const shuffledImages = [...allImages];
      const newCorrectIndex = Math.floor(Math.random() * 3);

      // Swap correct image to random position
      [shuffledImages[0], shuffledImages[newCorrectIndex]] = [
        shuffledImages[newCorrectIndex],
        shuffledImages[0],
      ];

      setCorrectImageIndex(newCorrectIndex);
      setCurrentWord(word);
      setImages(shuffledImages);
    } catch (error) {
      toast({
        title: "Fehler beim Laden der Bilder",
        description: "Bitte versuche es erneut",
        variant: "destructive",
        className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNewWord();
  }, []);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    const isCorrect = index === correctImageIndex;

    if (isCorrect) {
      setScore((s) => s + 1);
      toast({
        title: "Super gemacht! 🌟",
        description: "Das ist richtig!",
        duration: 1500,
        className: "fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white border-none shadow-lg rounded-lg p-4",
      });
    } else {
      toast({
        title: "Nicht ganz richtig",
        description: "Versuche es noch einmal!",
        duration: 1500,
        variant: "destructive",
        className: "fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg p-4",
      });
      setTimeout(() => setSelectedIndex(null), 1000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-secondary animate-bounce">Laden...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <StarParticles />

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold text-secondary">
            Punkte: {score}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-secondary">GROßBUCHSTABEN</span>
            <Switch checked={isUpperCase} onCheckedChange={setIsUpperCase} />
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-secondary mb-8">
            {isUpperCase
              ? currentWord?.german.toUpperCase()
              : currentWord?.german}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <GameCard
              key={`${image}-${index}`}
              image={image}
              isCorrect={index === correctImageIndex}
              onSelect={() => handleSelect(index)}
              disabled={selectedIndex === correctImageIndex}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={loadNewWord}
            className="bg-secondary text-primary font-bold py-3 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-colors"
          >
            Nächstes Wort
          </button>
        </div>
      </div>
    </div>
  );
}
