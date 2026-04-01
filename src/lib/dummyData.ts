import { MoodLog, FamilyTimelineEntry, Badge, TodayRecord } from './types';

export const dummyBadges: Badge[] = [
  { id: 'first', label: '初回記録達成', emoji: '🌱', achieved: true, description: 'はじめての記録をしました' },
  { id: 'streak3', label: '3日連続記録', emoji: '🌿', achieved: true, description: '3日続けて記録できました' },
  { id: 'streak5', label: '5日連続記録', emoji: '🌳', achieved: true, description: '5日続けて記録できました' },
  { id: 'streak7', label: '7日連続記録', emoji: '🔥', achieved: false, description: '7日続けて記録しよう' },
  { id: 'streak14', label: '14日連続記録', emoji: '⭐', achieved: false, description: '14日続けて記録しよう' },
  { id: 'streak30', label: '30日連続記録', emoji: '👑', achieved: false, description: '30日続けて記録しよう' },
];

export const dummyTodayRecord: TodayRecord = {
  score: 82,
  memo: '散歩に行った',
  time: '09:15',
};

// 今週 (3/12〜3/18)
export const dummyLogsThisWeek: MoodLog[] = [
  { id: 1, date: '2026-03-18', score: 82, memo: '朝から近所の公園まで散歩に行った。桜のつぼみが膨らんでいて春を感じた。帰りにパン屋さんに寄った。', photoUrl: null },
  { id: 2, date: '2026-03-17', score: 71, memo: '一日中雨で外に出られなかった。家で本を読んで過ごした。少し退屈だった。', photoUrl: null },
  { id: 3, date: '2026-03-16', score: 78, memo: '孫と30分ほど電話した。学校の話を聞いて楽しかった。声を聞くと元気が出る。', photoUrl: null },
  { id: 4, date: '2026-03-15', score: 65, memo: '少し疲れが残っていた。午前中は横になって休んだ。午後は少し気分が回復した。', photoUrl: null },
  { id: 5, date: '2026-03-14', score: 88, memo: '友人3人とランチに出かけた。久しぶりにたくさん笑った。また来月も集まる約束をした。', photoUrl: null },
  { id: 6, date: '2026-03-13', score: 75, memo: 'テレビで旅番組を見てゆっくり過ごした。温泉に行きたくなった。', photoUrl: null },
  { id: 7, date: '2026-03-12', score: 80, memo: '庭の草むしりと花壇の手入れをした。体を動かすと気持ちがいい。チューリップが咲き始めた。', photoUrl: null },
];

// 前週 (3/5〜3/11)
export const dummyLogsLastWeek: MoodLog[] = [
  { id: 8, date: '2026-03-11', score: 76, memo: '買い物に行った', photoUrl: null },
  { id: 9, date: '2026-03-10', score: 68, memo: '少し頭が痛かった', photoUrl: null },
  { id: 10, date: '2026-03-09', score: 84, memo: '公園で体操した', photoUrl: null },
  { id: 11, date: '2026-03-08', score: 72, memo: '読書をした', photoUrl: null },
  { id: 12, date: '2026-03-07', score: 79, memo: '娘が来てくれた', photoUrl: null },
  { id: 13, date: '2026-03-06', score: 70, memo: '曇りで気分が沈んだ', photoUrl: null },
  { id: 14, date: '2026-03-05', score: 85, memo: '花を植えた', photoUrl: null },
];

// 前々週 (2/26〜3/4)
export const dummyLogsTwoWeeksAgo: MoodLog[] = [
  { id: 15, date: '2026-03-04', score: 80, memo: '散歩と買い物', photoUrl: null },
  { id: 16, date: '2026-03-03', score: 62, memo: '眠れなかった', photoUrl: null },
  { id: 17, date: '2026-03-02', score: 77, memo: '料理を楽しんだ', photoUrl: null },
  { id: 18, date: '2026-03-01', score: 81, memo: '孫とビデオ通話', photoUrl: null },
  { id: 19, date: '2026-02-28', score: 73, memo: 'のんびり過ごした', photoUrl: null },
  { id: 20, date: '2026-02-27', score: 86, memo: '友人と散歩', photoUrl: null },
  { id: 21, date: '2026-02-26', score: 74, memo: 'テレビを見た', photoUrl: null },
];

export const dummyLogs = dummyLogsThisWeek;

export const dummyWeeklyLogs = [
  { label: '3/12〜3/18', logs: dummyLogsThisWeek },
  { label: '3/5〜3/11', logs: dummyLogsLastWeek },
  { label: '2/26〜3/4', logs: dummyLogsTwoWeeksAgo },
];

export const dummyFamilyTimeline: FamilyTimelineEntry[] = [
  {
    id: 1,
    date: '2025-01-15',
    score: 82,
    memo: '散歩してきました',
    reactions: [
      { from: '娘 美咲', stamp: '👍', message: 'よかった！' },
      { from: '息子 健太', stamp: '❤️', message: '' },
    ],
  },
  {
    id: 2,
    date: '2025-01-14',
    score: 71,
    memo: '雨で外に出られなかった',
    reactions: [
      { from: '息子 健太', stamp: '❤️', message: '無理しないでね' },
    ],
  },
  {
    id: 3,
    date: '2025-01-13',
    score: 78,
    memo: '孫と電話した',
    reactions: [
      { from: '娘 美咲', stamp: '😊', message: '楽しかったね！' },
      { from: '息子 健太', stamp: '👍', message: '' },
    ],
  },
  {
    id: 4,
    date: '2025-01-12',
    score: 65,
    memo: '少し疲れた',
    reactions: [
      { from: '娘 美咲', stamp: '💪', message: 'ゆっくり休んでね' },
    ],
  },
  {
    id: 5,
    date: '2025-01-11',
    score: 85,
    memo: '公園で体操をした',
    reactions: [
      { from: '娘 美咲', stamp: '😊', message: '素晴らしい！' },
      { from: '息子 健太', stamp: '👍', message: '続けてね！' },
    ],
  },
  {
    id: 6,
    date: '2025-01-10',
    score: 74,
    memo: '友達とお茶をした',
    reactions: [
      { from: '息子 健太', stamp: '❤️', message: '良い時間だね' },
    ],
  },
  {
    id: 7,
    date: '2025-01-09',
    score: 80,
    memo: '庭の花に水をやった',
    reactions: [
      { from: '娘 美咲', stamp: '🌸', message: 'お花きれいだね！' },
    ],
  },
  {
    id: 8,
    date: '2025-01-08',
    score: 68,
    memo: '天気が悪くて家にいた',
    reactions: [
      { from: '娘 美咲', stamp: '☕', message: '温かくしてね' },
      { from: '息子 健太', stamp: '❤️', message: '' },
    ],
  },
  {
    id: 9,
    date: '2025-01-07',
    score: 88,
    memo: '孫が遊びに来た',
    reactions: [
      { from: '娘 美咲', stamp: '😊', message: '楽しそう！' },
      { from: '息子 健太', stamp: '👍', message: 'また行くね' },
    ],
  },
  {
    id: 10,
    date: '2025-01-06',
    score: 72,
    memo: '買い物に行った',
    reactions: [
      { from: '息子 健太', stamp: '💪', message: '重いものは言ってね' },
    ],
  },
  {
    id: 11,
    date: '2025-01-05',
    score: 79,
    memo: 'テレビで映画を見た',
    reactions: [
      { from: '娘 美咲', stamp: '🎬', message: '何の映画？' },
    ],
  },
  {
    id: 12,
    date: '2025-01-04',
    score: 83,
    memo: '朝早く起きて散歩した',
    reactions: [
      { from: '息子 健太', stamp: '👍', message: '早起きすごい！' },
      { from: '娘 美咲', stamp: '❤️', message: '' },
    ],
  },
  {
    id: 13,
    date: '2025-01-03',
    score: 70,
    memo: '少し腰が痛かった',
    reactions: [
      { from: '娘 美咲', stamp: '💪', message: '無理しないでね' },
      { from: '息子 健太', stamp: '❤️', message: '病院行く？' },
    ],
  },
  {
    id: 14,
    date: '2025-01-02',
    score: 90,
    memo: '家族みんなで食事した',
    reactions: [
      { from: '娘 美咲', stamp: '😊', message: '楽しかったね！' },
      { from: '息子 健太', stamp: '❤️', message: 'また集まろう' },
    ],
  },
];
