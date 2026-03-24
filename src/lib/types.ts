export type MoodLog = {
  id: number;
  date: string;
  score: number;
  memo: string;
  photoUrl: string | null;
};

export type Reaction = {
  from: string;
  stamp: string;
  message: string;
};

export type FamilyTimelineEntry = {
  id: number;
  date: string;
  score: number;
  memo: string;
  reactions: Reaction[];
};

export type Badge = {
  id: string;
  label: string;
  emoji: string;
  achieved: boolean;
  description: string;
};

export type TodayRecord = {
  score: number;
  memo: string;
  time: string;
};

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'lg' | 'md';
