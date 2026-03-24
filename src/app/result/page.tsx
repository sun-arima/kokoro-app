'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mic } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ScoreBadge from '@/components/ui/ScoreBadge';

export default function ResultPage() {
  const router = useRouter();
  const [memo, setMemo] = useState('');
  const [score, setScore] = useState(78);

  useEffect(() => {
    setScore(Math.floor(Math.random() * 21) + 70);
  }, []);

  const getFeedback = () => {
    if (score >= 70) {
      return {
        message: '心がリラックスしていて、落ち着いた状態です ☀️',
        advice: null,
        color: 'text-primary-dark',
        bgColor: 'bg-primary/5',
      };
    } else if (score >= 50) {
      return {
        message: '少し疲れが出ているようです',
        advice: '🌿 軽い散歩やストレッチで気分転換してみましょう',
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
      };
    } else {
      return {
        message: '少し緊張しているようです',
        advice: '🧘 目を閉じて、ゆっくり深呼吸を1分間してみてください',
        color: 'text-gray-600',
        bgColor: 'bg-gray-50',
      };
    }
  };

  const feedback = getFeedback();

  const gaugePercent = score;

  return (
    <PageWrapper>
      <div className="flex flex-col gap-6 py-4">
        <h1 className="text-2xl font-bold text-text text-center">測定結果</h1>

        {/* Score display */}
        <Card className="text-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-base text-gray-500 font-medium">心の状態スコア</p>
            <ScoreBadge score={score} size="lg" />

            {/* Gauge bar */}
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${gaugePercent}%`,
                  backgroundColor: score >= 70 ? '#7BB5A0' : score >= 50 ? '#F4A261' : '#A0AEC0',
                }}
              />
            </div>

            <div className={`w-full p-4 rounded-xl ${feedback.bgColor}`}>
              <p className={`text-lg font-bold ${feedback.color} mb-1`}>{feedback.message}</p>
              {feedback.advice && (
                <p className="text-base text-gray-600 mt-2">{feedback.advice}</p>
              )}
            </div>
          </div>
        </Card>

        {/* Memo input */}
        <Card>
          <label className="block text-lg font-bold text-text mb-3">今日の出来事</label>
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="今日の出来事を書いてください（任意）"
            className="w-full h-32 p-4 text-lg border-2 border-gray-200 rounded-xl resize-none focus:border-primary focus:outline-none transition-colors bg-bg"
          />
          <button className="flex items-center gap-2 mt-3 text-primary font-medium text-lg hover:text-primary-dark transition-colors">
            <Mic size={24} />
            <span>音声で入力</span>
          </button>
        </Card>

        <Button variant="primary" onClick={() => router.push('/home')}>
          保存する
        </Button>
      </div>
    </PageWrapper>
  );
}
