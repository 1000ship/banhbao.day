'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function BanhBaoActions() {
  const triggerConfetti = () => {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: '🥟', scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
      zIndex: 100,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
        scalar: 1.2,
        shapes: ['circle']
      });

      confetti({
        ...defaults,
        particleCount: 10,
        flat: true,
        scalar: 2,
        shapes: [unicorn]
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button 
        onClick={triggerConfetti}
        className="w-16 h-16 rounded-full flex items-center justify-center bg-primary text-white shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 text-2xl border-4 border-white"
        aria-label="Yummy!"
      >
        🥟
      </button>
    </div>
  );
}

export function YummyButton() {
    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF9EAA', '#FFD580', '#B5EAD7']
        });
    };
    return (
        <button 
          onClick={triggerConfetti} 
          className="px-6 py-2 bg-primary text-white rounded-full font-bold shadow-md hover:bg-primary-dark hover:shadow-lg transition-all duration-200 active:transform active:scale-95"
        >
          Yummy!
        </button>
    );
}

export function OrderButton() {
    return (
        <button 
          onClick={() => alert("Searching for nearest Banh Bao cart... 🛵")} 
          className="px-8 py-3 bg-primary text-white rounded-full text-lg font-bold shadow-lg hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Get a Steamed Bun
        </button>
    );
}
