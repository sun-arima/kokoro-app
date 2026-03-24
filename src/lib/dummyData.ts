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
  { id: 1, date: '2026-03-18', score: 82, memo: '散歩に行った', photoUrl: null },
  { id: 2, date: '2026-03-17', score: 71, memo: '雨で外に出られなかった', photoUrl: null },
  { id: 3, date: '2026-03-16', score: 78, memo: '孫と電話した', photoUrl: null },
  { id: 4, date: '2026-03-15', score: 65, memo: '少し疲れた', photoUrl: null },
  { id: 5, date: '2026-03-14', score: 88, memo: '友人とランチ', photoUrl: null },
  { id: 6, date: '2026-03-13', score: 75, memo: 'テレビを見てゆっくりした', photoUrl: null },
  { id: 7, date: '2026-03-12', score: 80, memo: '庭仕事をした', photoUrl: null },
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
      { from: '娘 花子', stamp: '👍', message: 'よかった！' },
      { from: '息子 太郎', stamp: '❤️', message: '' },
    ],
  },
  {
    id: 2,
    date: '2025-01-14',
    score: 71,
    memo: '雨で外に出られなかった',
    reactions: [
      { from: '息子 太郎', stamp: '❤️', message: '無理しないでね' },
    ],
  },
  {
    id: 3,
    date: '2025-01-13',
    score: 78,
    memo: '孫と電話した',
    reactions: [
      { from: '娘 花子', stamp: '😊', message: '楽しかったね！' },
      { from: '息子 太郎', stamp: '👍', message: '' },
    ],
  },
  {
    id: 4,
    date: '2025-01-12',
    score: 65,
    memo: '少し疲れた',
    reactions: [
      { from: '娘 花子', stamp: '💪', message: 'ゆっくり休んでね' },
    ],
  },
];
