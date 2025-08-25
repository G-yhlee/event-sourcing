import type { Chapter } from '$lib/types/algebra';

export const chapters: Chapter[] = [
	// {
	//   id: 'intro',
	//   number: 0,
	//   title: '강의 소개',
	//   subtitle: '대수적 구조 전체 개요',
	//   description: '이 강의에서 배울 모든 대수적 구조를 한눈에 보고 시작합시다.',
	//   topics: ['학습 로드맵', '구조 관계', '타입스크립트'],
	//   difficulty: 'beginner'
	// },
	{
		id: 'introduction',
		number: 1,
		title: '집합과 연산',
		subtitle: '대수적 구조의 기초',
		description: '집합의 개념과 이항 연산을 타입스크립트로 이해해봅시다.',
		topics: ['집합과 타입', '이항 연산', '닫혀있음'],
		difficulty: 'beginner'
	},
	{
		id: 'magma',
		number: 2,
		title: '마그마 (Magma)',
		subtitle: '가장 기본적인 대수적 구조',
		description: '닫혀있는 이항 연산을 가진 집합의 개념을 이해합니다.',
		topics: ['이항 연산', '닫혀있음', '타입스크립트 인터페이스'],
		difficulty: 'beginner'
	},
	{
		id: 'semigroup',
		number: 3,
		title: '세미그룹 (Semigroup)',
		subtitle: '결합 법칙의 도입',
		description: '결합 법칙을 만족하는 마그마에 대해 학습합니다.',
		topics: ['결합 법칙', '리듀스 연산', '병렬 처리'],
		difficulty: 'beginner'
	},
	{
		id: 'monoid',
		number: 4,
		title: '모노이드 (Monoid)',
		subtitle: '항등원의 추가',
		description: '항등원을 가진 세미그룹의 강력한 활용법을 배웁니다.',
		topics: ['항등원', '폴드 연산', '모노이드 합성'],
		difficulty: 'intermediate'
	},
	{
		id: 'group',
		number: 5,
		title: '그룹 (Group)',
		subtitle: '역원의 도입',
		description: '모든 원소가 역원을 가지는 구조를 이해합니다.',
		topics: ['역원', '되돌리기 시스템', '대칭성'],
		difficulty: 'intermediate'
	},
	{
		id: 'abelian-group',
		number: 6,
		title: '아벨 그룹 (Abelian Group)',
		subtitle: '교환 법칙의 추가',
		description: '교환 법칙을 만족하는 그룹의 특성을 학습합니다.',
		topics: ['교환 법칙', '암호화', '벡터 공간'],
		difficulty: 'intermediate'
	},
	{
		id: 'ring',
		number: 7,
		title: '링 (Ring)',
		subtitle: '두 개의 연산',
		description: '덧셈과 곱셈을 가진 대수적 구조를 탐구합니다.',
		topics: ['분배 법칙', '다항식', '행렬'],
		difficulty: 'advanced'
	},
	{
		id: 'field',
		number: 8,
		title: '필드 (Field)',
		subtitle: '완전한 대수적 구조',
		description: '나눗셈이 가능한 가장 완전한 구조를 이해합니다.',
		topics: ['곱셈 역원', '선형 방정식', '오류 정정 코드'],
		difficulty: 'advanced'
	}
];
