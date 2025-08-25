import type { LectureAtom } from '$lib/types/algebra';

export const magmaAtoms: LectureAtom[] = [
  {
    type: 'definition',
    id: 'magma-definition',
    title: '마그마 (Magma)',
    content: {
      undergraduate: `
        마그마는 집합 S와 S 위의 이항 연산 •로 이루어진<br>
        순서쌍 (S, •)로 정의되는 대수적 구조입니다.<br><br>
        
        마그마는 가장 기본적인 대수적 구조로,<br>
        단지 닫혀있음 성질만을 요구합니다.
      `,
      graduate: `
        <strong>정의 2.1</strong><br>
        <em>마그마</em>(magma) 또는 <em>그루포이드</em>(groupoid)는 다음과 같이 정의된다:<br><br>
        
        순서쌍 Μ = (M, τ)에서 M은 비어있지 않은 집합이고,<br>
        τ: M × M → M은 M 위의 이항 연산이다.<br><br>
        
        마그마는 대수적 구조의 계층에서 가장 약한 구조로,<br>
        단지 닫혀있음 성질만을 요구한다.
      `
    },
    formula: {
      undergraduate: '(S, •)',
      graduate: 'Μ = (M, τ) where τ: M × M → M'
    },
    conditions: {
      undergraduate: [
        'S는 비어있지 않은 집합',
        '• : S × S → S는 S 위의 이항 연산',
        '모든 a, b ∈ S에 대해 a • b ∈ S (닫혀있음)'
      ],
      graduate: [
        'M ≠ ∅ (non-empty carrier set)',
        'τ: M × M → M 이 well-defined',
        'Closure: ∀a,b ∈ M, τ(a,b) ∈ M',
        '최소 구조: associativity, commutativity, identity 등을 요구하지 않음'
      ]
    }
  },

  {
    type: 'theorem',
    id: 'magma-hierarchy-base',
    title: '대수적 구조 계층의 기초',
    statement: {
      undergraduate: `
        마그마는 닫혀있음 외에 다른 어떤 대수적 성질도 요구하지 않는<br>
        가장 기본적인 대수적 구조입니다.<br><br>
        
        모든 세미그룹, 모노이드, 그룹, 환 등은 마그마입니다.
      `,
      graduate: `
        <strong>정리 2.2</strong><br>
        마그마 Μ = (M, τ)는 대수적 구조의 계층에서 최소 구조이다.<br><br>
        
        즉, 모든 대수적 구조 S = (S, *)에 대해:<br>
        S가 세미그룹, 모노이드, 그룹, 환, 체 등이라면 S는 마그마이다.<br><br>
        
        수학적으로: 마그마는 다른 어떤 대수적 공리도 요구하지 않는다.
      `
    },
    proof: {
      undergraduate: `
        마그마는 다음을 요구하지 않습니다:<br>
        • 결합법칙: (a • b) • c = a • (b • c)<br>
        • 교환법칙: a • b = b • a<br>
        • 항등원: ∃e, a • e = e • a = a<br>
        • 역원소: ∃a⁻¹, a • a⁻¹ = e<br><br>
        
        단지 닫혀있음만 있으면 마그마가 됩니다.
      `,
      graduate: `
        <strong>증명</strong>:<br>
        1. 마그마의 정의에서 요구되는 유일한 조건은 closure이다.<br>
        2. 다음 성질들은 요구되지 않는다:<br><br>
        
        • Associativity: ∃ 마그마 s.t. (a τ b) τ c ≠ a τ (b τ c)<br>
        • Commutativity: ∃ 마그마 s.t. a τ b ≠ b τ a<br>
        • Identity: ∃ 마그마 s.t. ∄e ∈ M, ∀a ∈ M, e τ a = a τ e = a<br>
        • Invertibility: ∃ 마그마 s.t. ∀a ∈ M, ∄a⁻¹ ∈ M<br><br>
        
        ∴ 마그마는 가장 일반적인 대수적 구조이다. □
      `
    },
    corollary: {
      undergraduate: `
        따라서 모든 대수적 구조는 마그마입니다.<br>
        즉, Magma ⊃ Semigroup ⊃ Monoid ⊃ Group
      `,
      graduate: `
        <strong>따름정리</strong>: 모든 대수적 구조는 마그마이다.<br>
        즉, Magma ⊃ Semigroup ⊃ Monoid ⊃ Group ⊃ Abelian Group
      `
    }
  },

  {
    type: 'prog-definition',
    id: 'magma-prog-def',
    title: '마그마 - 프로그래밍적 정의',
    content: `
      프로그래밍에서 마그마는 <strong>타입과 이항 연산을 가진 구조</strong>입니다.<br><br>
      
      <strong>타입스크립트 인터페이스:</strong><br>
      • T: 기저 타입 (carrier type)<br>
      • operation: 닫혀진 이항 연산<br>
      • 타입 시스템이 닫혀있음을 컴파일 타임에 보장<br><br>
      
      모든 카테고리의 대수적 구조의 기초가 되는 가장 중요한 개념입니다.
    `,
    interface: `interface Magma<T> {
  operation: (a: T, b: T) => T;
}`
  },

  {
    type: 'math-definition',
    id: 'closure-math',
    title: '닫혀있음 - 수학적 관점',
    content: `
      마그마의 유일한 조건은 <strong>닫혀있음(Closure)</strong>입니다.<br><br>
      
      <strong>수학적 조건:</strong> ∀a, b ∈ S, a • b ∈ S<br><br>
      
      즉, 집합 S의 두 원소를 연산한 결과가 항상 S에 속해야 합니다.<br>
      예: (자연수, +)는 마그마 (닫혀있음)<br>
      반례: (자연수, -)는 마그마 아님 (3-5=-2, 음수 나옴)
    `
  },

  {
    type: 'prog-definition',
    id: 'closure-prog',
    title: '닫혀있음 - 프로그래밍 관점',
    content: `
      타입스크립트에서는 함수의 반환 타입이 입력 타입과 같음을 의미합니다.<br><br>
      
      <strong>타입 시그니처:</strong> <code>(a: T, b: T) => T</code><br><br>
      
      컴파일러가 닫혀있음을 자동으로 체크하여 런타임 오류를 방지합니다.<br>
      잘못된 타입 반환 시 컴파일 에러가 발생합니다.
    `
  },

  {
    type: 'code-example',
    id: 'basic-magma',
    title: '기본 마그마 구현',
    code: `// 마그마 인터페이스 정의
interface Magma<T> {
  operation: (a: T, b: T) => T;
}

// 예시 1: 숫자 뺄셈 마그마
const subtractionMagma: Magma<number> = {
  operation: (a, b) => a - b
};

// 예시 2: 문자열 첫 글자 선택 마그마
const firstCharMagma: Magma<string> = {
  operation: (a, b) => a.charAt(0) || b.charAt(0)
};

// 예시 3: 최댓값 마그마
const maxMagma: Magma<number> = {
  operation: Math.max
};

// 테스트
console.log(subtractionMagma.operation(10, 3)); // 7
console.log(firstCharMagma.operation("hello", "world")); // "h"
console.log(maxMagma.operation(5, 3)); // 5`,
    language: 'typescript',
    output: `7
h
5`
  },

  {
    type: 'code-example',
    id: 'closure-example',
    title: '닫혀있음의 중요성',
    code: `// ✅ 올바른 예: 닫혀있는 연산들
const addNumbers: (a: number, b: number) => number = (a, b) => a + b;
// 어떤 두 숫자를 더해도 결과는 숫자

const concatStrings: (a: string, b: string) => string = (a, b) => a + b;
// 어떤 두 문자열을 연결해도 결과는 문자열

const andBooleans: (a: boolean, b: boolean) => boolean = (a, b) => a && b;
// 어떤 두 불린값을 AND해도 결과는 불린값

// ❌ 잘못된 예: 닫혀있지 않은 연산들 (타입 에러 발생!)
// const badOperation: (a: number, b: number) => string = (a, b) => a + b;
//                                              ~~~~~~ 타입 에러!

// 자연수에서 뺄셈의 문제점
type NaturalNumber = 0 | 1 | 2 | 3 | 4 | 5; // {0, 1, 2, 3, 4, 5}

// 이 함수는 타입적으로는 올바르지만 수학적으로는 틀림
const subtract: (a: NaturalNumber, b: NaturalNumber) => NaturalNumber = 
  (a, b) => (a - b) as NaturalNumber; // 강제 타입 캐스팅

// 문제: subtract(2, 5) = -3 (자연수가 아님!)
console.log("자연수 뺄셈의 문제:", subtract(2, 5)); // -3 (위험!)`,
    language: 'typescript',
    output: `자연수 뺄셈의 문제: -3`
  },

  {
    type: 'important',
    id: 'magma-key-point',
    content: `
      <strong>중요!</strong> 마그마는 어떤 특별한 규칙도 요구하지 않습니다. 
      결합 법칙, 교환 법칙, 항등원 등이 없어도 됩니다. 
      오직 연산이 닫혀있기만 하면 됩니다.
    `
  },

  {
    type: 'code-example',
    id: 'color-mixing-example',
    title: '마그마 예시: 색상 혼합',
    code: `// 색상 혼합 마그마 구현해보기
interface RGB {
  r: number; // 0-255
  g: number; // 0-255
  b: number; // 0-255
}

const colorMixMagma: Magma<RGB> = {
  operation: (c1, c2) => ({
    r: Math.floor((c1.r + c2.r) / 2),
    g: Math.floor((c1.g + c2.g) / 2),
    b: Math.floor((c1.b + c2.b) / 2)
  })
};

// 테스트
const red: RGB = { r: 255, g: 0, b: 0 };
const blue: RGB = { r: 0, g: 0, b: 255 };
const green: RGB = { r: 0, g: 255, b: 0 };

const purple = colorMixMagma.operation(red, blue);
const yellow = colorMixMagma.operation(red, green);

console.log('빨강:', red);
console.log('파랑:', blue);
console.log('빨강 + 파랑 = 보라:', purple);
console.log('빨강 + 초록 = 노랑:', yellow);

// 이 연산이 닫혀있나요? 네! RGB 타입 -> RGB 타입`,
    language: 'typescript',
    output: `빨강: { r: 255, g: 0, b: 0 }
파랑: { r: 0, g: 0, b: 255 }
빨강 + 파랑 = 보라: { r: 127, g: 0, b: 127 }
빨강 + 초록 = 노랑: { r: 127, g: 127, b: 0 }`
  }
];