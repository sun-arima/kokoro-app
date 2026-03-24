'use client';

import { useState, useEffect } from 'react';

type Props = {
  onComplete: () => void;
};

const steps = [
  '枠線に顔を合わせてください',
  '深呼吸してください',
  '撮影します...',
];

export default function CameraView({ onComplete }: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        if (currentStep === steps.length - 1) {
          setTimeout(onComplete, 1500);
        } else {
          setCurrentStep((s) => s + 1);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onComplete]);

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-xl text-center text-text font-medium">心の状態を記録します</p>

      {/* Camera preview area */}
      <div className="relative w-64 h-80 bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center">
        {/* Face guide oval */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-44 h-56 rounded-full border-4 border-dashed transition-colors duration-500 ${
              currentStep === 2 ? 'border-primary animate-pulse' : 'border-primary/50'
            }`}
          />
        </div>
        {/* Placeholder face icon */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-30">
          <circle cx="40" cy="32" r="18" stroke="#2D3748" strokeWidth="2" />
          <path d="M15 70 C15 52, 65 52, 65 70" stroke="#2D3748" strokeWidth="2" fill="none" />
        </svg>
        {/* Flash effect on capture */}
        {currentStep === 2 && (
          <div className="absolute inset-0 bg-white/50 animate-pulse" />
        )}
      </div>

      {/* Step message */}
      <div className="min-h-16 flex items-center">
        <p
          className="text-xl text-center text-primary font-bold transition-opacity duration-300"
          key={currentStep}
        >
          {steps[currentStep]}
        </p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-3">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i <= currentStep ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
