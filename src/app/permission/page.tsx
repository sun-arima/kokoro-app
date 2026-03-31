'use client';

import { useRouter } from 'next/navigation';
import PageWrapper from '@/components/layout/PageWrapper';
import Button from '@/components/ui/Button';

export default function PermissionPage() {
  const router = useRouter();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center h-[calc(100vh-80px)] max-h-[740px] justify-between">
        <div className="text-center pt-4">
          <h1 className="text-2xl font-bold text-text mb-3">カメラの許可</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            このアプリでは、
            <br />
            内側のカメラを使用し、
            <br />
            お顔を撮影します
          </p>
        </div>

        {/* Illustration */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-24 h-28 rounded-2xl border-3 border-primary flex items-center justify-center bg-primary/5">
            <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="25" r="14" stroke="#7BB5A0" strokeWidth="2.5" />
              <circle cx="24" cy="22" r="2" fill="#2D3748" />
              <circle cx="36" cy="22" r="2" fill="#2D3748" />
              <path d="M24 30 C26 34, 34 34, 36 30" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M15 48 C15 40, 45 40, 45 48" stroke="#7BB5A0" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <svg width="36" height="20" viewBox="0 0 40 24" fill="none">
            <path d="M0 12H32M32 12L24 4M32 12L24 20" stroke="#7BB5A0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="w-24 h-28 rounded-2xl border-3 border-accent flex flex-col items-center justify-center bg-accent/5 gap-1">
            <span className="text-2xl">😊</span>
            <span className="text-sm font-bold text-accent-dark">良好</span>
            <span className="text-xs text-gray-500">78点</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center">
          撮影した写真は安全に管理され、
          <br />
          あなたの許可なく外部に共有されません
        </p>

        <div className="w-full flex flex-col gap-3">
          <Button variant="primary" onClick={() => router.push('/family-setup-simple')}>
            許可する
          </Button>
          <Button variant="ghost" onClick={() => router.push('/home')}>
            あとで設定する
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
