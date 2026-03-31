'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Camera } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import Button from '@/components/ui/Button';

const slides = [
  {
    title: '日々の出来事を簡単に記録',
    description:
      '振り返ることができます。毎日の積み重ねが、あなたの心の健康を守ります。',
    visual: (
      <div className="flex flex-col items-center gap-4 w-full px-2">
        {/* Timeline cards */}
        <div className="w-full flex flex-col gap-3">
          {[
            { date: '3/18', score: 82, memo: '散歩に行った', emoji: '🚶' },
            { date: '3/17', score: 71, memo: '雨で家にいた', emoji: '🌧️' },
            { date: '3/16', score: 78, memo: '孫と電話した', emoji: '📞' },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm ${
                i === 0 ? 'scale-100' : i === 1 ? 'scale-[0.97] opacity-80' : 'scale-[0.94] opacity-60'
              }`}
            >
              <div className="flex flex-col items-center w-10">
                <span className="text-xs text-gray-400">{item.date}</span>
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                  <span className="text-sm font-bold text-primary">{item.score}</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text">{item.memo}</p>
              </div>
              <span className="text-xl">{item.emoji}</span>
            </div>
          ))}
        </div>
        {/* Stacking hint */}
        <div className="flex items-center gap-1 text-gray-400">
          <span className="text-xs">記録がどんどん溜まっていきます</span>
          <span>📝</span>
        </div>
      </div>
    ),
  },
  {
    title: '心の健康をサポートします',
    description:
      '顔を撮るだけで心の状態を測定。毎日の変化を見える化します。',
    visual: (
      <div className="flex flex-col items-center gap-5">
        {/* Camera icon */}
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <Camera size={48} className="text-primary" />
        </div>
        {/* Face to score flow */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
                <ellipse cx="20" cy="18" rx="14" ry="16" fill="#c4c4c4" />
                <ellipse cx="20" cy="44" rx="18" ry="10" fill="#c4c4c4" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 mt-1">撮影</span>
          </div>
          <span className="text-2xl text-gray-300">→</span>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xl font-bold">82点</span>
            </div>
            <span className="text-xs text-gray-400 mt-1">心の状態スコア</span>
          </div>
        </div>
        {/* Mood range */}
        <div className="w-56">
          <div className="h-2.5 rounded-full bg-gradient-to-r from-blue-300 via-yellow-300 to-green-400" />
          <div className="flex justify-between mt-1.5 text-xs text-gray-400 font-medium">
            <span>緊張</span>
            <span>リラックス</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '家族に元気な姿を届けることもできます',
    description:
      '離れて暮らす家族にあなたの様子を伝えられます。家族からメッセージも届きます。',
    visual: (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
            <span className="text-3xl">🧓</span>
          </div>
          <span className="text-sm font-bold text-text mt-1">あなた</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent">
              <span className="text-2xl">👩</span>
            </div>
            <span className="text-xs font-medium text-text mt-1">娘</span>
            <span className="text-xs text-gray-400">😊 いいね！</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-300">
              <span className="text-2xl">👨</span>
            </div>
            <span className="text-xs font-medium text-text mt-1">息子</span>
            <span className="text-xs text-gray-400">❤️ 応援！</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center border-2 border-pink-300">
              <span className="text-2xl">👧</span>
            </div>
            <span className="text-xs font-medium text-text mt-1">孫</span>
            <span className="text-xs text-gray-400">👍 すごい！</span>
          </div>
        </div>

        <div className="bg-primary/10 rounded-2xl px-4 py-2 flex items-center gap-2">
          <span className="text-xl">💌</span>
          <span className="text-sm text-text font-medium">家族からメッセージも届きます</span>
        </div>
      </div>
    ),
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const isLast = current === slides.length - 1;

  return (
    <PageWrapper>
      <div className="flex flex-col h-[calc(100vh-80px)] max-h-[740px] justify-between">
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 pt-6 mb-6">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-text mb-3 px-2">{slide.title}</h1>
          <p className="text-base text-gray-500 leading-relaxed mb-6 px-4">
            {slide.description}
          </p>
          <div className="flex-1 flex items-center">{slide.visual}</div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-2 mt-4">
          <Button
            variant="primary"
            onClick={() => {
              if (isLast) {
                router.push('/permission');
              } else {
                setCurrent((prev) => prev + 1);
              }
            }}
          >
            {isLast ? 'はじめる' : '次へ'}
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
