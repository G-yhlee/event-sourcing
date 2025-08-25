import type { LectureAtom } from '$lib/types/algebra';
import { introductionAtoms } from './introduction-atoms';
import { magmaAtoms } from './magma-atoms';
import { semigroupAtoms } from './semigroup-atoms';
import { monoidAtoms } from './monoid-atoms';
import { groupAtoms } from './group-atoms';
import { abelianGroupAtoms } from './abelian-group-atoms';
import { ringAtoms } from './ring-atoms';
import { fieldAtoms } from './field-atoms';

// Chapter ID별로 atoms 데이터를 매핑
export const chapterAtomsMap: Record<string, { atoms: LectureAtom[]; title: string; subtitle: string }> = {
  'intro': {
    atoms: [], // intro는 별도 처리
    title: '강의 소개',
    subtitle: '대수적 구조 전체 개요'
  },
  'introduction': {
    atoms: introductionAtoms,
    title: '집합과 연산',
    subtitle: '대수적 구조의 기초'
  },
  'magma': {
    atoms: magmaAtoms,
    title: '마그마 (Magma)',
    subtitle: '가장 기본적인 대수적 구조'
  },
  'semigroup': {
    atoms: semigroupAtoms,
    title: '세미그룹 (Semigroup)',
    subtitle: '결합 법칙의 도입'
  },
  'monoid': {
    atoms: monoidAtoms,
    title: '모노이드 (Monoid)',
    subtitle: '항등원의 추가'
  },
  'group': {
    atoms: groupAtoms,
    title: '그룹 (Group)',
    subtitle: '역원의 도입'
  },
  'abelian-group': {
    atoms: abelianGroupAtoms,
    title: '아벨 그룹 (Abelian Group)',
    subtitle: '교환 법칙의 추가'
  },
  'ring': {
    atoms: ringAtoms,
    title: '링 (Ring)',
    subtitle: '두 개의 연산'
  },
  'field': {
    atoms: fieldAtoms,
    title: '필드 (Field)',
    subtitle: '완전한 대수적 구조'
  }
};

// 특정 chapter의 atoms 데이터 가져오기
export function getChapterAtoms(chapterId: string): LectureAtom[] {
  const chapterData = chapterAtomsMap[chapterId];
  return chapterData?.atoms || [];
}

// 특정 chapter의 메타데이터 가져오기
export function getChapterMetadata(chapterId: string) {
  const chapterData = chapterAtomsMap[chapterId];
  return chapterData ? {
    title: chapterData.title,
    subtitle: chapterData.subtitle
  } : null;
}