'use client';

import { useRouter } from 'next/navigation';
import { Camera, FileText, Clock, Coins } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import BottomNavigation from '@/components/layout/BottomNavigation';
import Card from '@/components/ui/Card';
import ScoreBadge from '@/components/ui/ScoreBadge';
import { dummyBadges, dummyTodayRecord } from '@/lib/dummyData';
import { assetPath } from '@/lib/basePath';

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

        {/* Start recording card */}
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
                <img src={assetPath("/family-hanako.png")} alt="美咲" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src={assetPath("/family-taro.png")} alt="健太" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              </div>
              <p className="text-sm text-gray-500">美咲、健太は見ました</p>
            </div>
          </div>
        </Card>

        {/* Badges section */}
        <Card className="mb-4">
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

        {/* Monthly report notification */}
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

        {/* Tree growth game */}
        <Card className="mb-4 bg-gradient-to-b from-green-50 to-white">
          <h2 className="text-xl font-bold text-text mb-2 text-center">🌳 こころの木</h2>
          {/* Tree main visual */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-[120px] leading-none">🌳</div>
            <div className="w-32 h-3 bg-amber-800/20 rounded-full -mt-2" />
            <div className="flex items-center gap-2 mt-3">
              <span className="text-sm text-gray-500">育成レベル</span>
              <span className="text-3xl font-bold text-primary">Lv.5</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">次のレベルまであと3回</p>
          </div>
          {/* Growth progress */}
          <div className="bg-white/80 rounded-xl p-3">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-gray-500">記録回数</span>
              <span className="text-sm font-bold text-text">22回 / 25回</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all" style={{ width: '88%' }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>🌱 芽</span>
              <span>🌿 若木</span>
              <span>🌳 大木</span>
              <span>🌸 満開</span>
            </div>
          </div>
        </Card>

        {/* Points */}
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-text flex items-center gap-1.5"><Coins size={22} className="text-amber-500" /> ポイント</h2>
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <Coins size={18} className="text-amber-500" />
              <span className="text-xl font-bold text-amber-600">1,250</span>
              <span className="text-sm text-amber-600">pt</span>
            </div>
          </div>
          <div className="bg-bg rounded-xl p-3 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">📷 記録するたびに</span>
              <span className="text-sm font-bold text-primary">+10 pt</span>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mb-3">
            <p className="text-sm text-amber-700">
              💡 貯まったポイントは、各種ポイント（dポイント・Pontaなど）に交換してご利用いただけます。
            </p>
          </div>
          <button className="w-full bg-amber-500 text-white text-base font-bold rounded-xl py-3 active:bg-amber-600 transition-colors">
            ポイントを交換する →
          </button>
        </Card>
      </PageWrapper>
      <BottomNavigation />
    </>
  );
}
