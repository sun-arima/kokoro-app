'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageWrapper from '@/components/layout/PageWrapper';
import { assetPath } from '@/lib/basePath';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

type ToggleProps = {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
};

function Toggle({ label, value, onChange }: ToggleProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-base text-text flex-1 pr-3">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`w-14 h-8 rounded-full relative transition-colors ${
          value ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-6 h-6 rounded-full bg-white shadow-md absolute top-1 transition-all ${
            value ? 'left-7' : 'left-1'
          }`}
        />
      </button>
    </div>
  );
}

export default function FamilySetupPage() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    shareRecord: true,
    shareScore: true,
    shareMemo: true,
    sharePhoto: false,
  });

  const updateSetting = (key: keyof typeof settings, value: boolean) => {
    if (key === 'shareRecord' && !value) {
      // 記録をしたかどうかをいいえにすると全ていいえ
      setSettings({ shareRecord: false, shareScore: false, shareMemo: false, sharePhoto: false });
    } else {
      setSettings((prev) => ({ ...prev, [key]: value }));
    }
  };

  const allOff = !settings.shareRecord && !settings.shareScore && !settings.shareMemo && !settings.sharePhoto;

  return (
    <PageWrapper>
      <div className="flex flex-col h-[calc(100vh-80px)] max-h-[740px] justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text text-center mb-3">家族共有設定</h1>
          <p className="text-sm text-gray-500 text-center leading-relaxed mb-5">
            あなたの記録を家族に共有するかどうかを設定できます。あとから変更することもできます。
          </p>

          <Card className="mb-4">
            <p className="text-sm font-medium text-gray-400 mb-2">共有する情報を選択</p>
            <Toggle
              label="記録をしたかどうか"
              value={settings.shareRecord}
              onChange={(v) => updateSetting('shareRecord', v)}
            />
            <div className="border-t border-gray-100" />
            <Toggle
              label="心の状態スコア"
              value={settings.shareScore}
              onChange={(v) => updateSetting('shareScore', v)}
            />
            <div className="border-t border-gray-100" />
            <Toggle
              label="出来事記録"
              value={settings.shareMemo}
              onChange={(v) => updateSetting('shareMemo', v)}
            />
            <div className="border-t border-gray-100" />
            <Toggle
              label="顔写真"
              value={settings.sharePhoto}
              onChange={(v) => updateSetting('sharePhoto', v)}
            />
          </Card>

          {/* Family member view example */}
          <p className="text-sm font-medium text-gray-500 text-center mb-2">家族側の見え方例↓</p>
          <Card className="bg-blue-50/50 border border-blue-200/50">
            {allOff ? (
              <p className="text-sm text-gray-400 text-center py-4">何も共有されません</p>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">🧓</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text">お母さん</p>
                    <p className="text-xs text-gray-400">今日 09:15</p>
                  </div>
                </div>
                {settings.shareRecord && !settings.shareScore && !settings.shareMemo && !settings.sharePhoto && (
                  <p className="text-sm text-text py-1">今日も記録しました ✓</p>
                )}
                {settings.shareScore && (
                  <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 mb-2">
                    <span className="text-lg">😊</span>
                    <span className="text-sm font-bold text-primary-dark">心の状態スコア：82点</span>
                  </div>
                )}
                {settings.shareMemo && (
                  <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 mb-2">
                    <span className="text-lg">📝</span>
                    <span className="text-sm text-text">散歩に行った</span>
                  </div>
                )}
                {settings.sharePhoto && (
                  <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <img
                      src={assetPath("/face1.png")}
                      alt="顔写真"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </>
            )}
          </Card>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <Button variant="primary" onClick={() => router.push('/home')}>
            設定を完了する
          </Button>
          <Button variant="ghost" onClick={() => router.push('/home')}>
            あとで設定する
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
