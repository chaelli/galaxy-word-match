import { useEffect, useRef } from 'react';

export function StarParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  const createStar = (x: number, y: number) => {
    if (!containerRef.current) return;

    const star = document.createElement('div');
    star.className = 'star-particle';
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${Math.random() * 10 + 5}px`;
    star.style.height = star.style.width;

    containerRef.current.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1000);
  };

  const createStarBurst = (x: number, y: number) => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;
        createStar(x + offsetX, y + offsetY);
      }, Math.random() * 500);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      createStarBurst(e.clientX, e.clientY);
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}