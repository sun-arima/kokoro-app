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

function getScoreColor(score: number) {
  if (score >= 80) return 'bg-green-100 border-green-300';
  if (score >= 70) return 'bg-emerald-50 border-emerald-200';
  if (score >= 60) return 'bg-yellow-50 border-yellow-200';
  if (score >= 50) return 'bg-orange-50 border-orange-200';
  return 'bg-red-50 border-red-200';
}

export default function LogTimeline({ logs }: Props) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  };

  return (
    <div className="flex flex-col gap-4">
      {logs.map((log) => (
        <Card key={log.id}>
          <div className="flex items-start gap-4">
            {/* Emotion icon based on score */}
            <div className={`w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center border ${getScoreColor(log.score)}`}>
              <span className="text-3xl">{getScoreEmoji(log.score)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-base text-gray-500">{formatDate(log.date)}</span>
                <ScoreBadge score={log.score} />
              </div>
              <p className="text-lg text-text">{log.memo}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
