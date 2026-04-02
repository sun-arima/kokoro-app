'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Camera } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import { assetPath } from '@/lib/basePath';

function Step1() {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Camera size={48} className="text-primary" />
      </div>
      <h1 className="text-2xl font-bold text-text mb-4">
        今からお顔を撮影し、<br />心の状態を測定します
      </h1>
      <p className="text-lg text-gray-500 leading-relaxed">
        自然な表情でOKです。<br />リラックスして進めてください。
      </p>
    </div>
  );
}

function Step2({ onReadyChange }: { onReadyChange: (ready: boolean) => void }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
      onReadyChange(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onReadyChange]);

  return (
    <div className="flex flex-col items-center text-center px-4">
      {/* Face frame simulation */}
      <div className="relative w-56 h-56 mb-6">
        {/* Camera preview background */}
        <div className="w-full h-full rounded-3xl bg-gray-200 overflow-hidden flex items-center justify-center">
          {ready ? (
            <img
              src={assetPath("/sokutei.png")}
              alt="測定準備完了"
              className="w-full h-full object-cover"
            />
          ) : (
            <svg width="120" height="150" viewBox="0 0 120 150" fill="none">
              <ellipse cx="60" cy="55" rx="40" ry="48" fill="#c4c4c4" />
              <ellipse cx="60" cy="130" rx="55" ry="35" fill="#c4c4c4" />
            </svg>
          )}
        </div>
        {/* Face detection frame */}
        <div
          className={`absolute inset-4 rounded-[2rem] border-4 transition-colors duration-500 ${
            ready ? 'border-green-500' : 'border-white/80'
          }`}
        />
        {/* Ready indicator */}
        {ready && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full">
            準備できました ✓
          </div>
        )}
      </div>

      <h1 className="text-xl font-bold text-text mb-3">
        枠の中に顔が入るように<br />調整してください
      </h1>
      <p className={`text-base leading-relaxed transition-colors ${ready ? 'text-green-600 font-bold' : 'text-gray-500'}`}>
        {ready
          ? '測定開始ボタンを押すと\n撮影が開始します'
          : '顔を検出しています...'}
      </p>
    </div>
  );
}

const totalSteps = 2;

export default function CameraGuidePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [step2Ready, setStep2Ready] = useState(false);

  const isLastStep = currentStep === totalSteps - 1;
  const isButtonDisabled = currentStep === 1 && !step2Ready;

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-between h-[calc(100vh-80px)] max-h-[740px]">
        {/* Step indicator */}
        <div className="flex items-center gap-2 pt-4">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === currentStep ? 'w-8 bg-primary' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        {currentStep === 0 && <Step1 />}
        {currentStep === 1 && <Step2 onReadyChange={setStep2Ready} />}

        {/* Buttons */}
        <div className="w-full px-2 pb-8 space-y-3">
          <button
            disabled={isButtonDisabled}
            onClick={() => {
              if (isButtonDisabled) return;
              if (isLastStep) {
                router.push('/camera');
              } else {
                setCurrentStep(currentStep + 1);
              }
            }}
            className={`w-full text-xl font-bold rounded-2xl py-5 transition-colors ${
              isButtonDisabled
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-primary text-white active:bg-primary-dark'
            }`}
          >
            {currentStep === 1 ? '測定開始' : isLastStep ? '撮影をはじめる' : '次へ'}
          </button>
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="w-full text-gray-400 text-base py-2"
            >
              戻る
            </button>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
