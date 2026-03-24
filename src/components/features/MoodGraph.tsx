'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoodLog } from '@/lib/types';

type Props = {
  logs: MoodLog[];
};

export default function MoodGraph({ logs }: Props) {
  const data = [...logs]
    .reverse()
    .map((log) => ({
      date: `${parseInt(log.date.split('-')[1])}/${parseInt(log.date.split('-')[2])}`,
      score: log.score,
    }));

  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="date" tick={{ fontSize: 14, fill: '#2D3748' }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 14, fill: '#2D3748' }} />
          <Tooltip
            contentStyle={{
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              fontSize: '16px',
            }}
            formatter={(value) => [`${value}点`, 'スコア']}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#7BB5A0"
            strokeWidth={3}
            dot={{ r: 6, fill: '#7BB5A0', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
