'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageWrapper from '@/components/layout/PageWrapper';

export default function CameraPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      router.push('/result');
      return;
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-between h-[calc(100vh-80px)] max-h-[740px]">
        {/* Header */}
        <div className="text-center pt-6">
          <h1 className="text-2xl font-bold text-text mb-1">測定中です</h1>
          <p className="text-base text-gray-500">そのままお待ちください</p>
        </div>

        {/* Camera preview with face */}
        <div className="relative w-56 h-56">
          <div className="w-full h-full rounded-3xl bg-gray-200 overflow-hidden flex items-center justify-center">
            <svg width="120" height="150" viewBox="0 0 120 150" fill="none">
              <ellipse cx="60" cy="55" rx="40" ry="48" fill="#c4c4c4" />
              <ellipse cx="60" cy="130" rx="55" ry="35" fill="#c4c4c4" />
            </svg>
          </div>
          {/* Scanning frame */}
          <div className="absolute inset-4 rounded-[2rem] border-4 border-primary animate-pulse" />
        </div>

        {/* Countdown */}
        <div className="flex flex-col items-center gap-4 pb-12">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">{countdown}</span>
          </div>
          <p className="text-base text-gray-500">あと {countdown} 秒で完了します</p>

          {/* Progress bar */}
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((5 - countdown) / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
