'use client';

import { useState } from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { assetPath } from '@/lib/basePath';
import Card from '@/components/ui/Card';

const familyRecords = [
  {
    id: 1,
    date: '2026-03-18',
    score: 82,
    memo: '朝から近所の公園まで散歩に行った。桜のつぼみが膨らんでいて春を感じた。帰りにパン屋さんに寄った。',
    stamped: false,
  },
  {
    id: 2,
    date: '2026-03-17',
    score: 71,
    memo: '一日中雨で外に出られなかった。家で本を読んで過ごした。少し退屈だった。',
    stamped: true,
  },
  {
    id: 3,
    date: '2026-03-16',
    score: 78,
    memo: '孫と30分ほど電話した。学校の話を聞いて楽しかった。声を聞くと元気が出る。',
    stamped: true,
  },
  {
    id: 4,
    date: '2026-03-15',
    score: 65,
    memo: '少し疲れが残っていた。午前中は横になって休んだ。午後は少し気分が回復した。',
    stamped: false,
  },
  {
    id: 5,
    date: '2026-03-14',
    score: 88,
    memo: '友人3人とランチに出かけた。久しぶりにたくさん笑った。また来月も集まる約束をした。',
    stamped: true,
  },
  {
    id: 6,
    date: '2026-03-13',
    score: 75,
    memo: 'テレビで旅番組を見てゆっくり過ごした。温泉に行きたくなった。',
    stamped: false,
  },
  {
    id: 7,
    date: '2026-03-12',
    score: 80,
    memo: '庭の草むしりと花壇の手入れをした。体を動かすと気持ちがいい。チューリップが咲き始めた。',
    stamped: true,
  },
];

function getScoreEmoji(score: number) {
  if (score >= 80) return '😊';
  if (score >= 70) return '🙂';
  if (score >= 60) return '😐';
  if (score >= 50) return '😟';
  return '😢';
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function FamilyViewPage() {
  const [stamps, setStamps] = useState<Record<number, boolean>>(
    Object.fromEntries(familyRecords.map((r) => [r.id, r.stamped]))
  );

  const toggleStamp = (id: number) => {
    setStamps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <PageWrapper showNav>
        {/* Header with family member info */}
        <div className="flex items-center gap-3 mb-2">
          <img
            src={assetPath("/family-taro.png")}
            alt="健太"
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
          <div>
            <h1 className="text-2xl font-bold text-text">健太の記録</h1>
          </div>
        </div>
        <p className="text-base text-gray-500 mb-5">
          息子 健太の記録が確認できます
        </p>

        {/* Record cards */}
        <div className="flex flex-col gap-3">
          {familyRecords.map((record) => (
            <Card key={record.id}>
              {/* Date */}
              <p className="text-sm text-gray-400 mb-2">{formatDate(record.date)}</p>

              {/* Score pill with parent icon */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1.5">
                  <span className="text-lg">{getScoreEmoji(record.score)}</span>
                  <span className="text-base font-bold text-primary">{record.score}点</span>
                </div>
              </div>

              {/* Memo */}
              <p className="text-base text-text leading-relaxed mb-3">{record.memo}</p>

              {/* Stamp button */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <button
                  onClick={() => toggleStamp(record.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all ${
                    stamps[record.id]
                      ? 'bg-pink-100 border border-pink-300'
                      : 'bg-gray-50 border border-gray-200 active:scale-95'
                  }`}
                >
                  <span className={`text-2xl transition-transform ${stamps[record.id] ? 'scale-110' : ''}`}>
                    {stamps[record.id] ? '❤️' : '🤍'}
                  </span>
                  <span className={`text-sm font-medium ${stamps[record.id] ? 'text-pink-600' : 'text-gray-500'}`}>
                    {stamps[record.id] ? 'いいねしました！' : 'いいね！'}
                  </span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="h-6" />
      </PageWrapper>
      <BottomNavigation />
    </>
  );
}
