type Props = {
  score: number;
  size?: 'sm' | 'lg';
};

export default function ScoreBadge({ score, size = 'sm' }: Props) {
  const color =
    score >= 80 ? 'bg-primary text-white' : score >= 60 ? 'bg-accent text-white' : 'bg-gray-400 text-white';

  if (size === 'lg') {
    return (
      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${color}`}>
        <div className="text-center">
          <span className="text-3xl font-bold">{score}</span>
          <span className="text-base block -mt-1">点</span>
        </div>
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-base font-bold ${color}`}>
      {score}点
    </span>
  );
}
