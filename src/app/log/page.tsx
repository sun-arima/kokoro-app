'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import BottomNavigation from '@/components/layout/BottomNavigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import MoodGraph from '@/components/features/MoodGraph';
import LogTimeline from '@/components/features/LogTimeline';
import { dummyWeeklyLogs } from '@/lib/dummyData';

export default function LogPage() {
  const router = useRouter();
  const [weekIndex, setWeekIndex] = useState(0);

  const currentWeek = dummyWeeklyLogs[weekIndex];
  const canGoNewer = weekIndex > 0;
  const canGoOlder = weekIndex < dummyWeeklyLogs.length - 1;

  return (
    <>
      <PageWrapper showNav>
        <h1 className="text-2xl font-bold text-text mb-6">振り返り</h1>

        {/* Weekly graph with navigation */}
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => canGoOlder && setWeekIndex(weekIndex + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                canGoOlder ? 'bg-gray-100 text-text active:bg-gray-200' : 'text-gray-200'
              }`}
              disabled={!canGoOlder}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-lg font-bold text-text">{currentWeek.label}</h2>
              <p className="text-sm text-gray-400">
                {weekIndex === 0 ? '今週' : weekIndex === 1 ? '前週' : '前々週'}
              </p>
            </div>
            <button
              onClick={() => canGoNewer && setWeekIndex(weekIndex - 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                canGoNewer ? 'bg-gray-100 text-text active:bg-gray-200' : 'text-gray-200'
              }`}
              disabled={!canGoNewer}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <MoodGraph logs={currentWeek.logs} />
        </Card>

        {/* Timeline */}
        <h2 className="text-xl font-bold text-text mb-4">記録一覧</h2>
        <LogTimeline logs={currentWeek.logs} />

        <div className="mt-6">
          <Button variant="secondary" onClick={() => router.push('/report')}>
            月次レポートを見る
          </Button>
        </div>
      </PageWrapper>
      <BottomNavigation />
    </>
  );
}
