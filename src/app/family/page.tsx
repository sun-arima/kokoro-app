'use client';

import PageWrapper from '@/components/layout/PageWrapper';
import BottomNavigation from '@/components/layout/BottomNavigation';
import FamilyTimeline from '@/components/features/FamilyTimeline';
import { dummyFamilyTimeline } from '@/lib/dummyData';

export default function FamilyPage() {
  return (
    <>
      <PageWrapper showNav>
        <h1 className="text-2xl font-bold text-text mb-2">家族交流</h1>
        <p className="text-lg text-gray-500 mb-6">
          家族への共有状況と、もらったリアクションを確認できます
        </p>
        <FamilyTimeline entries={dummyFamilyTimeline} />
      </PageWrapper>
      <BottomNavigation />
    </>
  );
}
