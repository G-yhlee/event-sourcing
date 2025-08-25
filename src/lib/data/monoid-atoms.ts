import type { LectureAtom } from '$lib/types/algebra';

export const monoidAtoms: LectureAtom[] = [
  {
    type: 'definition',
    id: 'monoid-definition',
    title: '모노이드 (Monoid)',
    content: {
      undergraduate: `
        모노이드는 항등원을 가진 세미그룹입니다.<br>
        즉, 집합 M과 M 위의 이항 연산 •, 그리고 항등원 e에 대해<br>
        (M, •, e)가 모노이드라는 것은:<br><br>
        
        • (M, •)는 세미그룹<br>
        • e ∈ M은 항등원: e • m = m • e = m
      `,
      graduate: `
        <strong>정의 4.1</strong><br>
        <em>모노이드</em>(monoid)는 항등원(identity element)을 가진 세미그룹이다.<br><br>
        
        순서쌍 Μ = (M, ∗, ε)에서 M은 비어있지 않은 집합,<br>
        ∗: M × M → M은 결합법칙을 만족하는 이항 연산,<br>
        ε ∈ M은 항등원이다:<br><br>
        
        ∀m ∈ M, ε ∗ m = m ∗ ε = m<br><br>
        
        모노이드는 범주론에서 단일 대상 범주(one-object category)와 대응된다.
      `
    },
    formula: {
      undergraduate: '(M, •, e) with e • m = m • e = m',
      graduate: 'Μ = (M, ∗, ε) with ε ∗ m = m ∗ ε = m'
    },
    conditions: {
      undergraduate: [
        'M는 비어있지 않은 집합',
        '• : M × M → M는 M 위의 이항 연산',
        '모든 a, b, c ∈ M에 대해 (a • b) • c = a • (b • c) (결합법칙)',
        '항등원 e ∈ M이 존재: e • m = m • e = m'
      ],
      graduate: [
        'Carrier set: M ≠ ∅',
        'Closure: ∀a,b ∈ M, a ∗ b ∈ M', 
        'Associativity: ∀a,b,c ∈ M, (a ∗ b) ∗ c = a ∗ (b ∗ c)',
        'Identity existence: ∃ε ∈ M s.t. ∀m ∈ M, ε ∗ m = m ∗ ε = m',
        'Identity uniqueness: 항등원은 유일하다'
      ]
    }
  },
  
  {
    type: 'theorem',
    id: 'identity-uniqueness-and-characterization',
    title: '항등원의 유일성과 특성',
    statement: {
      undergraduate: `
        모노이드에서 항등원은 유일합니다.<br><br>
        
        만약 e₁과 e₂가 모두 항등원이라면,<br>
        e₁ = e₁ • e₂ = e₂가 되어 같은 원소입니다.
      `,
      graduate: `
        <strong>정리 4.2</strong> (항등원의 유일성과 특성화)<br>
        모노이드 Μ = (M, ∗, ε)에서 항등원은 유일하며,<br>
        다음과 같이 특성화될 수 있다:<br><br>
        
        ε는 항등원 ⇔ ε는 idempotent이고 ∀m ∈ M에 대해 central
      `
    },
    proof: {
      undergraduate: `
        두 항등원 e₁, e₂가 있다고 가정:<br>
        • e₁ = e₁ • e₂ (e₂가 항등원이므로)<br>
        • e₁ • e₂ = e₂ (e₁이 항등원이므로)<br>
        • 따라서 e₁ = e₂<br><br>
        
        항등원은 유일합니다.
      `,
      graduate: `
        <strong>증명</strong>:<br>
        <em>Part 1</em>: 유일성<br>
        ε₁, ε₂가 모두 항등원이라고 가정하자.<br>
        ε₁ = ε₁ ∗ ε₂ (ε₂가 right identity) = ε₂ (ε₁이 left identity)<br>
        ∴ ε₁ = ε₂ □<br><br>
        
        <em>Part 2</em>: 특성화<br>
        (⇒) ε가 항등원이면 ε ∗ ε = ε (idempotent)이고<br>
        ∀m ∈ M, ε ∗ m = m = m ∗ ε (central)<br><br>
        
        (⇐) ε가 central idempotent이면<br>
        정의에 의해 ε는 항등원이다. □
      `
    },
    corollary: {
      undergraduate: `
        항등원의 유일성 덕분에 모노이드는 명확히 정의됩니다.<br>
        또한 모노이드 사이의 함수는 항등원을 보존해야 합니다.
      `,
      graduate: `
        <strong>따름정리</strong>: 모노이드에서 항등원은 유일한 central idempotent이다.<br>
        이는 모든 모노이드 동형사상이 항등원을 보존함을 의미한다.
      `
    }
  },
  
  {
    type: 'definition',
    id: 'free-monoid',
    title: '자유 모노이드',
    content: {
      undergraduate: `
        집합 X에 대한 자유 모노이드 X*는<br>
        X의 유한 수열들의 집합이며, 빈 수열을 포함합니다.<br>
        연산은 수열의 연결(concatenation)입니다.
      `,
      graduate: `
        <strong>정의 4.3</strong><br>
        집합 X에 대한 <em>자유 모노이드</em>(free monoid) X*는<br>
        X의 유한 수열들의 집합이며, 연산은 수열 연결이다.<br><br>
        
        X* = {(x₁, x₂, ..., xₙ) : n ≥ 0, xᵢ ∈ X}<br>
        (x₁, ..., xₘ) ∗ (y₁, ..., yₙ) = (x₁, ..., xₘ, y₁, ..., yₙ)<br>
        항등원은 빈 수열 () 이다.
      `
    },
    formula: {
      undergraduate: 'X* = 모든 X-수열들 (빈 수열 포함)',
      graduate: 'X^* = \\bigcup_{n=0}^{\\infty} X^n with identity ε = ()'
    },
    conditions: {
      undergraduate: [
        'X*의 원소들은 X의 원소들로 이루어진 유한 수열',
        '연산은 수열 연결(concatenation)', 
        '빈 수열이 항등원',
        '모든 모노이드로의 함수 확장이 유일하게 존재'
      ],
      graduate: [
        'Universal property: 모든 모노이드 M과 함수 f: X → M에 대해',
        '유일한 모노이드 동형사상 f̄: X* → M이 존재',
        'f̄의 X에 대한 제한이 f와 일치',
        '이는 functor X ↦ X*를 정의하며 Set에서 Monoid로의 left adjoint'
      ]
    }
  },

  {
    type: 'theorem',
    id: 'monoid-homomorphism-theorem',
    title: '모노이드 동형사상 정리',
    statement: {
      undergraduate: `
        모노이드 사이의 함수가 동형사상이려면<br>
        연산과 항등원을 모두 보존해야 합니다.
      `,
      graduate: `
        <strong>정리 4.4</strong> (모노이드 동형사상 정리)<br>
        함수 f: M₁ → M₂가 모노이드 동형사상인 필요충분조건은:<br><br>
        
        1. f(a ∗₁ b) = f(a) ∗₂ f(b) (연산 보존)<br>
        2. f(ε₁) = ε₂ (항등원 보존)
      `
    },
    proof: {
      undergraduate: `
        동형사상은 구조를 완전히 보존하는 함수입니다.<br>
        따라서 연산뿐만 아니라 항등원도 보존해야 합니다.
      `,
      graduate: `
        <strong>증명</strong>:<br>
        (⇒) f가 모노이드 동형사상이면 정의에 의해 성립<br><br>
        
        (⇐) 조건 1,2가 성립한다고 하자.<br>
        임의의 m ∈ M₁에 대해:<br>
        f(ε₁ ∗₁ m) = f(ε₁) ∗₂ f(m) = ε₂ ∗₂ f(m) = f(m)<br>
        또한 f(ε₁ ∗₁ m) = f(m)이므로 조건을 만족한다. □
      `
    },
    corollary: {
      undergraduate: `
        모노이드의 구조가 보존되므로<br>
        동형사상을 통해 문제를 다른 모노이드로 옮겨 풀 수 있습니다.
      `,
      graduate: `
        <strong>따름정리</strong>: 모노이드 동형사상 f: M₁ → M₂에 대해<br>
        M₁의 모든 모노이드 성질이 M₂에서도 보존된다.
      `
    }
  },

  {
    type: 'prog-definition',
    id: 'monoid-prog-def',
    title: '모노이드 - 프로그래밍적 정의',
    content: `
      프로그래밍에서 모노이드는 <strong>빈 컬렉션을 안전하게 처리할 수 있는 구조</strong>입니다.<br><br>
      
      항등원 덕분에:<br>
      • 빈 배열을 fold할 수 있음<br>
      • 기본값이 자동으로 정해짐<br>
      • 더 안전하고 예측 가능한 API<br>
      • 모노이드 조합으로 복잡한 구조 생성<br><br>
      
      <strong>프로그래밍적 핵심:</strong><br>
      • fold/reduce의 완전체 - 빈 컬렉션부터 안전<br>
      • 함수형 프로그래밍에서 가장 유용한 패턴<br>
      • 데이터 집계, 로그 분석, 통계 수집에 필수
    `,
    interface: `interface Monoid<T> {
  operation: (a: T, b: T) => T;
  identity: T;
}`
  },

  {
    type: 'code-example',
    id: 'basic-monoids',
    title: '기본 모노이드 구현',
    code: `interface Monoid<T> {
  operation: (a: T, b: T) => T;
  identity: T;
}

// 덧셈 모노이드
const additionMonoid: Monoid<number> = {
  operation: (a, b) => a + b,
  identity: 0  // 0 + n = n + 0 = n
};

// 곱셈 모노이드
const multiplicationMonoid: Monoid<number> = {
  operation: (a, b) => a * b,
  identity: 1  // 1 * n = n * 1 = n
};

// 문자열 연결 모노이드
const stringMonoid: Monoid<string> = {
  operation: (a, b) => a + b,
  identity: ""  // "" + s = s + "" = s
};

// 불린 AND 모노이드
const andMonoid: Monoid<boolean> = {
  operation: (a, b) => a && b,
  identity: true  // true && b = b
};

// 불린 OR 모노이드
const orMonoid: Monoid<boolean> = {
  operation: (a, b) => a || b,
  identity: false  // false || b = b
};

// 항등원 테스트
console.log("0은 덧셈의 항등원:", 
  additionMonoid.operation(5, additionMonoid.identity)
); // 5

console.log("빈 문자열은 연결의 항등원:",
  stringMonoid.operation("Hello", stringMonoid.identity)
); // "Hello"`,
    language: 'typescript',
    output: `0은 덧셈의 항등원: 5
빈 문자열은 연결의 항등원: Hello`
  },

  {
    type: 'code-example',
    id: 'fold-power',
    title: '모노이드의 핵심: fold',
    code: `// 세미그룹과 달리 빈 배열도 처리 가능!
function fold<T>(monoid: Monoid<T>, values: T[]): T {
  if (values.length === 0) return monoid.identity;
  
  return values.reduce(
    (acc, val) => monoid.operation(acc, val),
    monoid.identity
  );
}

// 빈 배열 테스트 - 세미그룹으로는 불가능!
console.log("빈 배열의 합:", fold(additionMonoid, [])); // 0
console.log("빈 배열의 곱:", fold(multiplicationMonoid, [])); // 1
console.log("빈 문자열 연결:", fold(stringMonoid, [])); // ""

// 일반 배열 테스트
const numbers = [1, 2, 3, 4, 5];
console.log("합계:", fold(additionMonoid, numbers)); // 15
console.log("곱:", fold(multiplicationMonoid, numbers)); // 120

// 불린 연산
const bools = [true, false, true, true];
console.log("모두 참?", fold(andMonoid, bools)); // false
console.log("하나라도 참?", fold(orMonoid, bools)); // true

// 문자열 배열
const words = ["Hello", " ", "World", "!"];
console.log("문장:", fold(stringMonoid, words)); // "Hello World!"`,
    language: 'typescript',
    output: `빈 배열의 합: 0
빈 배열의 곱: 1
빈 문자열 연결: 
합계: 15
곱: 120
모두 참? false
하나라도 참? true
문장: Hello World!`
  },

  {
    type: 'important',
    id: 'monoid-vs-semigroup',
    content: `
      <strong>세미그룹 vs 모노이드:</strong><br><br>
      
      <strong>세미그룹의 한계:</strong><br>
      • 빈 컬렉션을 처리할 수 없음<br>
      • 초기값이 필요함<br><br>
      
      <strong>모노이드의 장점:</strong><br>
      • 빈 컬렉션도 자연스럽게 처리<br>
      • 초기값이 자동으로 정해짐<br>
      • 더 안전하고 예측 가능한 API
    `
  },

  {
    type: 'code-example',
    id: 'monoid-composition',
    title: '모노이드 합성의 힘',
    code: `// 여러 모노이드를 합성하여 새로운 모노이드 생성
interface Pair<A, B> {
  first: A;
  second: B;
}

function pairMonoid<A, B>(
  firstMonoid: Monoid<A>,
  secondMonoid: Monoid<B>
): Monoid<Pair<A, B>> {
  return {
    operation: (a, b) => ({
      first: firstMonoid.operation(a.first, b.first),
      second: secondMonoid.operation(a.second, b.second)
    }),
    identity: {
      first: firstMonoid.identity,
      second: secondMonoid.identity
    }
  };
}

// (숫자 합, 문자열 연결) 모노이드
const sumAndConcat = pairMonoid(additionMonoid, stringMonoid);

const data: Pair<number, string>[] = [
  { first: 10, second: "Hello" },
  { first: 20, second: " " },
  { first: 30, second: "World" }
];

const result = fold(sumAndConcat, data);
console.log("합성된 결과:", result); 
// { first: 60, second: "Hello World" }

// 빈 배열도 안전하게 처리
const emptyResult = fold(sumAndConcat, []);
console.log("빈 배열 결과:", emptyResult);
// { first: 0, second: "" }`,
    language: 'typescript',
    output: `합성된 결과: { first: 60, second: "Hello World" }
빈 배열 결과: { first: 0, second: "" }`
  },

  {
    type: 'code-example',
    id: 'stats-monoid-example',
    title: '실용적인 모노이드: 통계 수집',
    code: `// 실용적인 모노이드: 통계 수집
interface Stats {
  count: number;
  sum: number;
  min: number;
  max: number;
}

const statsMonoid: Monoid<Stats> = {
  operation: (a, b) => ({
    count: a.count + b.count,
    sum: a.sum + b.sum,
    min: Math.min(a.min, b.min),
    max: Math.max(a.max, b.max)
  }),
  identity: {
    count: 0,
    sum: 0,
    min: Infinity,
    max: -Infinity
  }
};

// 숫자를 Stats로 변환
function toStats(n: number): Stats {
  return { count: 1, sum: n, min: n, max: n };
}

// 사용 예시
const numbers = [5, 2, 8, 1, 9, 3];
const numberStats = numbers.map(toStats);
const result = fold(statsMonoid, numberStats);

console.log("통계 결과:", result);
console.log("평균:", result.count > 0 ? result.sum / result.count : 0);
console.log("범위:", result.max - result.min);

// 빈 배열도 안전하게 처리
const emptyStats = fold(statsMonoid, []);
console.log("빈 배열 통계:", emptyStats);

// 점진적 추가도 가능
const moreNumbers = [4, 7, 6];
const moreStats = fold(statsMonoid, moreNumbers.map(toStats));
const combined = statsMonoid.operation(result, moreStats);
console.log("합친 통계:", combined);`,
    language: 'typescript',
    output: `통계 결과: { count: 6, sum: 28, min: 1, max: 9 }
평균: 4.666666666666667
범위: 8
빈 배열 통계: { count: 0, sum: 0, min: Infinity, max: -Infinity }
합친 통계: { count: 9, sum: 45, min: 1, max: 9 }`
  }
];