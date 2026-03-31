'use client';

import { useRouter } from 'next/navigation';
import { Camera, FileText, Clock } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import BottomNavigation from '@/components/layout/BottomNavigation';
import Card from '@/components/ui/Card';
import ScoreBadge from '@/components/ui/ScoreBadge';
import { dummyBadges, dummyTodayRecord } from '@/lib/dummyData';

export default function HomePage() {
  const router = useRouter();
  const todayRecord = dummyTodayRecord;

  return (
    <>
      <PageWrapper showNav>
        {/* Greeting */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-text mb-1">
            🌸 田中さん、こんにちは
          </h1>
          <p className="text-lg text-gray-500">
            今日もあなたの一日を応援しています ☀️
          </p>
        </div>

        {/* Streak badge */}
        <div className="mb-4 px-4 py-2.5 bg-primary/10 border border-primary/20 rounded-2xl flex items-center gap-2">
          <span className="text-xl">🔥</span>
          <p className="text-base font-bold text-primary-dark">5日連続記録中！</p>
          <p className="text-sm text-gray-600">素晴らしいですね</p>
        </div>

        {/* Start recording card - TOP PRIORITY */}
        <Card className="mb-5 border-2 border-primary/30 bg-gradient-to-b from-primary/5 to-white">
          <div className="flex flex-col items-center text-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mb-3">
              <Camera size={36} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-text">今日の心の状態を記録</h2>
            <p className="text-sm text-gray-500 mt-1">顔を撮影して、今の状態を確認しましょう</p>
          </div>
          <button
            onClick={() => router.push('/camera-guide')}
            className="w-full bg-primary text-white text-2xl font-bold rounded-2xl py-6 active:bg-primary-dark transition-colors shadow-lg"
          >
            記録開始
          </button>
        </Card>

        {/* Today's record */}
        <Card className="mb-4 border border-primary/20">
          <h2 className="text-xl font-bold text-text mb-4">📝 今日の記録</h2>
          <div className="flex items-center gap-4 mb-3">
            <ScoreBadge score={todayRecord.score} size="lg" />
            <div className="flex-1">
              <p className="text-xl font-bold text-text">
                {todayRecord.score >= 80
                  ? 'とてもいい調子です！😊'
                  : todayRecord.score >= 60
                  ? '落ち着いた状態です'
                  : '少し疲れ気味です'}
              </p>
              <div className="flex items-center gap-1 mt-1 text-gray-500">
                <Clock size={16} />
                <span className="text-base">{todayRecord.time} に記録</span>
              </div>
            </div>
          </div>
          {todayRecord.memo && (
            <div className="bg-bg rounded-xl p-4 mt-2">
              <p className="text-lg text-text">💬 {todayRecord.memo}</p>
            </div>
          )}

          {/* Family read status */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-white flex items-center justify-center">
                  <span className="text-sm">👩</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                  <span className="text-sm">👨</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">娘さん、息子さんはみました</p>
            </div>
          </div>
        </Card>

        {/* Monthly report notification - moved lower */}
        <div
          className="mb-4 px-4 py-3 border border-accent/30 bg-accent/5 rounded-2xl flex items-center gap-3 cursor-pointer"
          onClick={() => router.push('/report')}
        >
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <FileText size={20} className="text-accent-dark" />
          </div>
          <div className="flex-1">
            <p className="text-base font-bold text-text">今月のレポートが届きました</p>
            <p className="text-sm text-gray-500">タップして確認する →</p>
          </div>
        </div>

        {/* Badges section - bottom */}
        <Card className="mb-6">
          <h2 className="text-xl font-bold text-text mb-4">🏅 バッジコレクション</h2>

          <p className="text-base font-medium text-primary-dark mb-3">達成したバッジ</p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {dummyBadges
              .filter((b) => b.achieved)
              .map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center text-center p-3 bg-primary/10 rounded-2xl border border-primary/20"
                >
                  <span className="text-3xl mb-1">{badge.emoji}</span>
                  <span className="text-sm font-bold text-text leading-tight">{badge.label}</span>
                </div>
              ))}
          </div>

          <p className="text-base font-medium text-gray-400 mb-3">つぎの目標</p>
          <div className="grid grid-cols-3 gap-3">
            {dummyBadges
              .filter((b) => !b.achieved)
              .map((badge) => (
                <div
                  key={badge.id}
                  className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200"
                >
                  <span className="text-3xl mb-1 opacity-30">{badge.emoji}</span>
                  <span className="text-sm font-bold text-gray-300 leading-tight">{badge.label}</span>
                </div>
              ))}
          </div>
        </Card>
      </PageWrapper>
      <BottomNavigation />
    </>
  );
}
