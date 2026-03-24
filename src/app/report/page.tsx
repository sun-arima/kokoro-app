'use client';

import PageWrapper from '@/components/layout/PageWrapper';
import BottomNavigation from '@/components/layout/BottomNavigation';
import Card from '@/components/ui/Card';

export default function ReportPage() {
  return (
    <>
      <PageWrapper showNav>
        <h1 className="text-2xl font-bold text-text mb-1">3月の分析レポート</h1>
        <p className="text-base text-gray-400 mb-6">対象期間：3月1日〜3月31日</p>

        {/* Monthly summary */}
        <Card className="mb-4">
          <h2 className="text-xl font-bold text-text mb-4">今月のまとめ</h2>
          <div className="flex justify-around mb-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">72</p>
              <p className="text-base text-gray-500 mt-1">心の状態スコア<br />平均</p>
            </div>
            <div className="w-px bg-gray-200" />
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">22</p>
              <p className="text-base text-gray-500 mt-1">記録日数</p>
            </div>
          </div>

          <div className="p-3 bg-primary/5 rounded-xl">
            <p className="text-base text-text leading-relaxed">
              🌿 あなたは<span className="inline-block bg-white border border-primary/30 rounded-lg px-2 py-0.5 font-bold text-primary-dark mx-1">散歩をした</span>と記録した日は、心の状態が良い傾向にあります ☀️
            </p>
          </div>
        </Card>

        {/* AI analysis & advice */}
        <Card className="border-2 border-accent/30 bg-accent/5">
          <h2 className="text-xl font-bold text-accent-dark mb-4">🤖 AIからのおすすめ健康法</h2>

          <p className="text-base text-text leading-relaxed">
            引き続き散歩を続けてみましょう、散歩の際に、<span className="inline-block bg-white border border-primary/30 rounded-lg px-2 py-0.5 font-bold text-primary-dark mx-1">赤いものを3つ探してみる</span>など観察ゲームに取り組んでみると脳の刺激になります！ぜひ試してみてくださいね
          </p>
        </Card>
      </PageWrapper>
      <BottomNavigation />
    </>
  );
}
