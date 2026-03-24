import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '心の状態記録',
  description: '毎日の心の状態を記録して、健やかな生活を',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* Phone frame */}
        <div className="phone-frame">
          {/* Notch */}
          <div className="phone-notch" />
          {/* Screen content */}
          <div className="phone-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
