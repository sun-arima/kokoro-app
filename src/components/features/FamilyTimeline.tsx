'use client';

import { FamilyTimelineEntry } from '@/lib/types';
import Card from '@/components/ui/Card';

type Props = {
  entries: FamilyTimelineEntry[];
};

export default function FamilyTimeline({ entries }: Props) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  };

  // Flatten all reactions into a single list with date context
  const allReactions = entries.flatMap((entry) =>
    entry.reactions.map((reaction) => ({
      ...reaction,
      date: entry.date,
      score: entry.score,
      memo: entry.memo,
    }))
  );

  return (
    <Card>
      <div className="flex flex-col divide-y divide-gray-100">
        {allReactions.map((item, i) => (
          <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            {/* Person icon */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">
                {item.from.includes('花子') ? '👩' : item.from.includes('太郎') ? '👨' : '👧'}
              </span>
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-text">{item.from}</span>
                <span className="text-2xl">{item.stamp}</span>
              </div>
              {item.message && (
                <p className="text-sm text-gray-600 mt-0.5">「{item.message}」</p>
              )}
            </div>
            {/* Date */}
            <span className="text-sm text-gray-400 flex-shrink-0">{formatDate(item.date)}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
