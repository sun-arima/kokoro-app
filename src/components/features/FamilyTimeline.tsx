'use client';

import { useState } from 'react';
import { FamilyTimelineEntry } from '@/lib/types';
import Card from '@/components/ui/Card';
import ScoreBadge from '@/components/ui/ScoreBadge';

type Props = {
  entries: FamilyTimelineEntry[];
};

const stamps = ['👍', '❤️', '😊', '🌸', '💪'];

export default function FamilyTimeline({ entries }: Props) {
  const [showStampModal, setShowStampModal] = useState<number | null>(null);
  const [addedStamps, setAddedStamps] = useState<Record<number, string[]>>({});

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  };

  const addStamp = (entryId: number, stamp: string) => {
    setAddedStamps((prev) => ({
      ...prev,
      [entryId]: [...(prev[entryId] || []), stamp],
    }));
    setShowStampModal(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {entries.map((entry) => (
        <Card key={entry.id}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-base text-gray-500">{formatDate(entry.date)}</span>
            <ScoreBadge score={entry.score} />
          </div>
          <p className="text-lg text-text mb-4">{entry.memo}</p>

          {/* Reactions */}
          <div className="flex flex-col gap-2 mb-3">
            {entry.reactions.map((reaction, i) => (
              <div key={i} className="flex items-center gap-2 bg-bg rounded-xl px-4 py-2">
                <span className="text-2xl">{reaction.stamp}</span>
                <span className="text-base text-gray-600 font-medium">{reaction.from}</span>
                {reaction.message && (
                  <span className="text-base text-text ml-1">「{reaction.message}」</span>
                )}
              </div>
            ))}
            {addedStamps[entry.id]?.map((stamp, i) => (
              <div key={`added-${i}`} className="flex items-center gap-2 bg-primary/10 rounded-xl px-4 py-2">
                <span className="text-2xl">{stamp}</span>
                <span className="text-base text-primary-dark font-medium">あなた</span>
              </div>
            ))}
          </div>

          {/* Stamp button */}
          <button
            onClick={() => setShowStampModal(showStampModal === entry.id ? null : entry.id)}
            className="text-base text-primary font-medium hover:text-primary-dark transition-colors"
          >
            + スタンプを送る
          </button>

          {/* Stamp selector */}
          {showStampModal === entry.id && (
            <div className="flex gap-3 mt-3 p-3 bg-bg rounded-xl">
              {stamps.map((stamp) => (
                <button
                  key={stamp}
                  onClick={() => addStamp(entry.id, stamp)}
                  className="text-3xl hover:scale-125 transition-transform active:scale-95"
                >
                  {stamp}
                </button>
              ))}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
