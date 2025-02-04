import { useState, useEffect } from 'react';
import { Word, getRandomWord, getWrongWords } from '@/lib/words';
import { searchImages } from '@/lib/pexels';
import { GameCard } from '@/components/GameCard';
import { StarParticles } from '@/components/StarParticles';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

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
      const correctImages = await searchImages(word.searchTerm);
      const correctImage = correctImages[0];
      
      // Get wrong images
      const wrongImage1 = (await searchImages(wrongWords[0].searchTerm))[0];
      const wrongImage2 = (await searchImages(wrongWords[1].searchTerm))[0];
      
      // Shuffle images and keep track of correct index
      const allImages = [correctImage, wrongImage1, wrongImage2];
      const shuffledImages = [...allImages];
      for (let i = shuffledImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
        if (j === 0) setCorrectImageIndex(i);
        if (i === 0) setCorrectImageIndex(j);
      }
      
      setCurrentWord(word);
      setImages(shuffledImages);
    } catch (error) {
      toast({
        title: "Fehler beim Laden der Bilder",
        description: "Bitte versuche es erneut",
        variant: "destructive"
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
      setScore(s => s + 1);
      toast({
        title: "Super gemacht! 🌟",
        description: "Das ist richtig!",
      });
    } else {
      toast({
        title: "Nicht ganz richtig",
        description: "Versuche es noch einmal!",
        variant: "destructive"
      });
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
            <Switch
              checked={isUpperCase}
              onCheckedChange={setIsUpperCase}
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-secondary mb-8">
            {isUpperCase ? currentWord?.german.toUpperCase() : currentWord?.german}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <GameCard
              key={image}
              image={image}
              isCorrect={index === correctImageIndex}
              onSelect={() => handleSelect(index)}
              disabled={selectedIndex !== null}
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
