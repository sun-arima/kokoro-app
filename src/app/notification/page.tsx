'use client';

import { useRouter } from 'next/navigation';

export default function NotificationPage() {
  const router = useRouter();

  return (
    <div className="h-full bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50 flex flex-col">
      {/* Status bar mock */}
      <div className="flex items-center justify-between px-6 pt-2 pb-1">
        <span className="text-sm font-semibold text-gray-800">10:00</span>
        <div className="flex items-center gap-1.5">
          {/* Signal bars */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0" y="8" width="3" height="4" rx="0.5" fill="#1f2937" />
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="#1f2937" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" fill="#1f2937" />
            <rect x="13" y="0" width="3" height="12" rx="0.5" fill="#1f2937" opacity="0.3" />
          </svg>
          {/* WiFi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#1f2937" />
            <path d="M4.5 8.5a5 5 0 017 0" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 5.5a9 9 0 0112 0" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {/* Battery */}
          <div className="flex items-center">
            <div className="w-6 h-3 border border-gray-800 rounded-sm relative">
              <div className="absolute inset-0.5 bg-green-500 rounded-[1px]" style={{ width: '75%' }} />
            </div>
            <div className="w-0.5 h-1.5 bg-gray-800 rounded-r-sm ml-px" />
          </div>
        </div>
      </div>

      {/* Lock screen wallpaper area */}
      <div className="flex-1 flex flex-col items-center pt-8">
        {/* Date & time display */}
        <p className="text-sm text-gray-600 mb-1">3月18日 水曜日</p>
        <p className="text-6xl font-light text-gray-800 mb-12">10:00</p>

        {/* Notification banner */}
        <div className="mx-4 w-[calc(100%-32px)]">
          <div
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-lg cursor-pointer"
            onClick={() => router.push('/camera-guide')}
          >
            {/* App header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white text-lg">🌿</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">こころアプリ</p>
              </div>
              <p className="text-xs text-gray-400">午前10:00</p>
            </div>

            {/* Notification content */}
            <p className="text-lg font-bold text-gray-800 mb-1">
              今日も記録の時間です ☺️
            </p>
            <p className="text-sm text-gray-500 mb-4">
              今の心の状態を記録しましょう。毎日の記録があなたの健康を守ります。
            </p>

            {/* Action button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push('/camera-guide');
              }}
              className="w-full bg-primary text-white text-lg font-bold rounded-2xl py-4 active:bg-primary-dark transition-colors"
            >
              記録をはじめる
            </button>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="mt-auto pb-8 flex flex-col items-center">
          <div className="w-36 h-1 bg-gray-400/40 rounded-full" />
        </div>
      </div>
    </div>
  );
}
