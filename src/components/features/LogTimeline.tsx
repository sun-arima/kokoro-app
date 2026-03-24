import { MoodLog } from '@/lib/types';
import Card from '@/components/ui/Card';
import ScoreBadge from '@/components/ui/ScoreBadge';

type Props = {
  logs: MoodLog[];
};

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
            {/* Photo placeholder */}
            <div className="w-14 h-14 rounded-xl bg-gray-200 flex-shrink-0 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-40">
                <circle cx="12" cy="10" r="4" stroke="#2D3748" strokeWidth="1.5" />
                <path d="M4 20 C4 16, 20 16, 20 20" stroke="#2D3748" strokeWidth="1.5" fill="none" />
              </svg>
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
