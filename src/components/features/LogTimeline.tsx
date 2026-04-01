import { MoodLog } from '@/lib/types';
import Card from '@/components/ui/Card';
import ScoreBadge from '@/components/ui/ScoreBadge';

type Props = {
  logs: MoodLog[];
};

function getScoreEmoji(score: number) {
  if (score >= 80) return '😊';
  if (score >= 70) return '🙂';
  if (score >= 60) return '😐';
  if (score >= 50) return '😟';
  return '😢';
}

export default function LogTimeline({ logs }: Props) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  };

  return (
    <div className="flex flex-col gap-3">
      {logs.map((log) => (
        <Card key={log.id}>
          {/* Date top-left */}
          <p className="text-sm text-gray-400 mb-2">{formatDate(log.date)}</p>
          <div className="flex items-start gap-3">
            {/* Score pill: emoji + score */}
            <div className="flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1.5 flex-shrink-0">
              <span className="text-lg">{getScoreEmoji(log.score)}</span>
              <span className="text-base font-bold text-primary">{log.score}点</span>
            </div>
          </div>
          {/* Memo */}
          <p className="text-base text-text mt-2 leading-relaxed">{log.memo}</p>
        </Card>
      ))}
    </div>
  );
}
