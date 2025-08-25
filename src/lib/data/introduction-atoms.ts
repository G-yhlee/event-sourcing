import type { LectureAtom } from '$lib/types/algebra';

export const introductionAtoms: LectureAtom[] = [
  {
    type: 'definition',
    id: 'set-definition',
    title: '집합 (Set)',
    content: {
      undergraduate: `
        집합은 서로 구별되는 대상들을 하나로 모아놓은 전체를 말합니다.<br>
        집합의 각 대상을 그 집합의 <strong>원소(element)</strong> 또는 <strong>성분(member)</strong>이라 합니다.
      `,
      graduate: `
        <strong>정의 1.1</strong> (Cantor의 집합 정의)<br>
        집합 S는 명확히 구별되는 개체들의 모임이며, 이러한 개체들을 S의 <em>원소</em>(elements) 또는 <em>성분</em>(members)이라 한다.<br><br>
        
        현대적 접근에서는 ZFC 공리계에서 Extensionality 공리를 통해 정의된다:<br>
        ∀A ∀B (A = B ↔ ∀x (x ∈ A ↔ x ∈ B))
      `
    },
    formula: {
      undergraduate: 'S = {a, b, c, ...}',
      graduate: 'S := \\{x : P(x)\\}'
    },
    conditions: {
      undergraduate: [
        '집합의 원소들은 서로 구별되어야 하고, 순서는 중요하지 않습니다',
        '집합에서 중복된 원소는 한 번만 세어집니다',
        'a ∈ S: a가 집합 S의 원소임을 나타냅니다',
        'a ∉ S: a가 집합 S의 원소가 아님을 나타냅니다'
      ],
      graduate: [
        'Extensionality: 두 집합이 같은 원소를 가지면 동일하다',
        'Unorderedness: {a,b} = {b,a} (순서 무관)',
        'No multiplicity: {a,a,b} = {a,b} (중복 무시)',
        'Membership relation: x ∈ S 또는 x ∉ S 중 정확히 하나가 성립',
        'Russell의 역설 회피: S ∉ S인 comprehension 사용'
      ]
    }
  },
  
  
  {
    type: 'theorem',
    id: 'set-properties-theorem',
    title: '집합의 기본 성질',
    statement: {
      undergraduate: `
        임의의 두 집합 A, B에 대해 다음이 성립합니다:<br>
        1. A = B ⇔ (∀x: x ∈ A ⇔ x ∈ B) (집합의 동등)<br>
        2. A ⊆ B ⇔ (∀x ∈ A: x ∈ B) (부분집합)<br>
        3. A ∩ B = {x : x ∈ A ∧ x ∈ B} (교집합)<br>
        4. A ∪ B = {x : x ∈ A ∨ x ∈ B} (합집합)
      `,
      graduate: `
        <strong>정리 1.2</strong><br>
        임의의 universe U에 대해 먱의 집합 ℘(U)를 고려하자.<br>
        그러면 (℘(U), ∪, ∩, ᶜ, ∅, U)는 부울 대수를 이룬다:<br><br>
        
        • 결합법캙: A ∪ (B ∪ C) = (A ∪ B) ∪ C<br>
        • 교환법캙: A ∪ B = B ∪ A<br>
        • 대칭법칙: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)<br>
        • 보원법캙: A ∪ Aᶜ = U, A ∩ Aᶜ = ∅<br>
        • De Morgan 법캙: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ
      `
    },
    proof: {
      undergraduate: `
        이러한 성질들은 집합의 정의에서 직접 따라나옵니다.<br>
        특히 집합의 동등성은 원소의 소속 관계만으로 결정되며,<br>
        원소의 나열 순서나 중복은 무관합니다.
      `,
      graduate: `
        집합론의 공리들로부터 직접적으로 따라나는다.<br>
        각 성질의 증명은 원소의 멤버십 테스트를 통해 수행한다:<br><br>
        
        예: 결합법칙 증명<br>
        x ∈ A ∪ (B ∪ C) ⇔ x ∈ A ∨ x ∈ (B ∪ C)<br>
        ⇔ x ∈ A ∨ (x ∈ B ∨ x ∈ C)<br>
        ⇔ (x ∈ A ∨ x ∈ B) ∨ x ∈ C<br>
        ⇔ x ∈ (A ∪ B) ∪ C
      `
    },
    corollary: {
      undergraduate: `
        따라서 집합 연산들은 일반적인 대수 법칙들을 만족합니다.
      `,
      graduate: `
        따라서 ℘(U)는 완전한 atomic Boolean lattice를 이룬다.
      `
    }
  },
  
  {
    type: 'prog-definition', 
    id: 'set-as-type',
    title: '타입으로서의 집합',
    content: `
      프로그래밍에서 집합은 <strong>타입(Type)</strong>으로 표현됩니다.<br><br>
      
      <strong>타입스크립트에서:</strong><br>
      • <code>number</code> = 모든 숫자들의 집합<br>
      • <code>string</code> = 모든 문자열들의 집합<br>
      • <code>"A" | "B" | "C"</code> = {A, B, C} 유한 집합<br>
      • <code>boolean</code> = {true, false} 집합<br><br>
      
      <strong>프로그래밍적 핵심:</strong><br>
      • 타입 검사를 통해 컴파일 타임에 원소 소속 확인<br>
      • 집합 = 타입으로 대수적 구조 표현이 자연스러움<br>
      • 런타임 오류를 사전에 방지하는 안전장치 역할
    `
  },

  {
    type: 'code-example',
    id: 'set-example',
    title: '타입스크립트에서 집합 표현하기',
    code: `// 기본 타입들 = 무한 집합
type Numbers = number;        // 모든 숫자: {..., -1, 0, 1, 2, ...}
type Strings = string;        // 모든 문자열: {"", "a", "hello", ...}
type Booleans = boolean;      // {true, false}

// 리터럴 타입 = 유한 집합
type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Colors = "red" | "green" | "blue";
type Grade = "A" | "B" | "C" | "D" | "F";

// 집합의 원소들
const myNumber: Numbers = 42;     // 42 ∈ Numbers
const myColor: Colors = "red";    // "red" ∈ Colors
const myGrade: Grade = "A";       // "A" ∈ Grade

// 집합의 크기(Cardinality)
// |Booleans| = 2
// |Digits| = 10
// |Colors| = 3`,
    language: 'typescript',
    output: `집합의 개념이 타입으로 자연스럽게 표현됩니다!`
  },

  {
    type: 'definition',
    id: 'binary-operation-definition', 
    title: '이항 연산 (Binary Operation)',
    content: {
      undergraduate: `
        집합 S 위의 이항 연산은 S의 두 원소를 입력으로 받아서<br>
        S의 한 원소를 출력으로 하는 함수입니다.
      `,
      graduate: `
        <strong>정의 1.3</strong><br>
        집합 S에 대한 <em>이항 연산</em>(binary operation)은 다음과 같이 정의된다:<br><br>
        
        함수 μ: S × S → S를 S 위의 이항 연산이라 한다.<br>
        일반적으로 μ(a,b) = a ∗ b 또는 a τ b 등으로 표기한다.<br><br>
        
        대수적 구조를 위해서는 닫혀있음(closure) 성질이 필수적이다.
      `
    },
    formula: {
      undergraduate: '• : S × S → S',
      graduate: 'μ: S × S → S, \\quad (a,b) \\mapsto a ∗ b'
    },
    conditions: {
      undergraduate: [
        '모든 a, b ∈ S에 대해 a • b ∈ S (닫혀있음)',
        '연산은 정확히 정의되어야 합니다',
        'S × S의 모든 순서쌍에 대해 결과가 유일해야 합니다'
      ],
      graduate: [
        'Well-definedness: 모든 (a,b) ∈ S × S에 대해 μ(a,b)가 유일하게 정의됨',
        'Closure property: ∀a,b ∈ S, a ∗ b ∈ S',
        'Totality: S × S의 모든 원소에 대해 연산이 정의됨',
        'Deterministic: 동일한 입력에 대해 동일한 출력'
      ]
    }
  },
  
  {
    type: 'theorem',
    id: 'closure-necessity',
    title: '닫혀있음의 필수성',
    statement: `
      <strong>정리 1.4</strong><br>
      대수적 구조 (S, ∗)에서 닫혀있음 성질은 대수적 조작의 잘 정의됨을 위해 필수적이다.<br><br>
      
      더 정확하게는, S가 carrier set이고 ∗: S × S → S가 이항 연산이라면,<br>
      ∀a,b ∈ S, a ∗ b ∈ S가 성립해야 한다.
    `,
    proof: `
      <strong>증명</strong>: 귀무법으로 증명한다.<br><br>
      
      닫혀있음이 성립하지 않는다고 가정하자.<br>
      즉, ∃a,b ∈ S s.t. a ∗ b ∉ S.<br><br>
      
      그러면 연살 연산 (a ∗ b) ∗ c 또는 a ∗ (b ∗ c)가<br>
      S에서 정의되지 않을 수 있다.<br><br>
      
      이는 ∗이 S 위의 이항 연산이라는 가정과 모순이다.<br>
      따라서 닫혀있음은 필수적이다. □
    `,
    corollary: `
      닫혀있지 않은 연산은 대수적 구조를 형성할 수 없다.<br>
      예: (ℕ, -)는 3-2=1∈ℕ 이지만 2-3=-1∉ℕ 이므로 대수적 구조가 아니다.
    `
  },

  {
    type: 'prog-definition',
    id: 'operation-prog-def',
    title: '이항 연산 - 프로그래밍적 정의', 
    content: `
      프로그래밍에서 이항 연산은 <strong>두 개의 같은 타입을 받아 같은 타입을 반환하는 함수</strong>입니다.<br><br>
      
      <strong>타입스크립트 시그니처:</strong><br>
      • <code>type BinaryOperation&lt;T&gt; = (a: T, b: T) =&gt; T</code><br>
      • 타입 시스템이 닫혀있음을 자동으로 보장<br>
      • 컴파일 타임에 타입 안전성 확인<br><br>
      
      <strong>프로그래밍적 핵심:</strong><br>
      • 타입 시그니처로 닫혀있음을 컴파일러가 강제<br>
      • 함수형 프로그래밍과 대수적 구조의 자연스러운 연결<br>
      • reduce, fold 같은 고차 함수의 수학적 기반 제공
    `,
    interface: `type BinaryOperation<T> = (a: T, b: T) => T;`
  },

  {
    type: 'code-example',
    id: 'operation-example',
    title: '이항 연산 (Binary Operation)',
    code: `// 이항 연산: 두 원소를 받아 하나의 원소를 반환
// 수학적으로: • : S × S → S

type BinaryOperation<T> = (a: T, b: T) => T;

// 숫자 집합의 연산들
const add: BinaryOperation<number> = (a, b) => a + b;
const multiply: BinaryOperation<number> = (a, b) => a * b;
const max: BinaryOperation<number> = (a, b) => Math.max(a, b);

// 문자열 집합의 연산들
const concat: BinaryOperation<string> = (a, b) => a + b;
const longer: BinaryOperation<string> = (a, b) => 
  a.length >= b.length ? a : b;

// 불린 집합의 연산들
const and: BinaryOperation<boolean> = (a, b) => a && b;
const or: BinaryOperation<boolean> = (a, b) => a || b;

// 사용 예시
console.log(add(3, 5));           // 8
console.log(concat("hello", " world"));  // "hello world"
console.log(and(true, false));   // false`,
    language: 'typescript',
    output: `8
hello world
false`
  },

  {
    type: 'code-example',
    id: 'closure-example',
    title: '닫혀있음의 예시',
    code: `// ✅ 닫혀있는 연산들
const addNumbers: (a: number, b: number) => number = (a, b) => a + b;
// 어떤 두 숫자를 더해도 결과는 숫자

const concatStrings: (a: string, b: string) => string = (a, b) => a + b;
// 어떤 두 문자열을 연결해도 결과는 문자열

const andBooleans: (a: boolean, b: boolean) => boolean = (a, b) => a && b;
// 어떤 두 불린값을 AND해도 결과는 불린값

// ❌ 닫혀있지 않은 연산들 (타입 에러 발생!)
// const badOperation: (a: number, b: number) => string = (a, b) => a + b;
//                                              ~~~~~~ 타입 에러!

// 자연수에서 뺄셈은 닫혀있지 않음 (음수가 나올 수 있음)
type NaturalNumber = 0 | 1 | 2 | 3 | 4 | 5; // {0, 1, 2, 3, 4, 5}

// 이 함수는 타입적으로는 올바르지만 수학적으로는 틀림
const subtract: (a: NaturalNumber, b: NaturalNumber) => NaturalNumber = 
  (a, b) => (a - b) as NaturalNumber; // 강제 타입 캐스팅

// 예: subtract(2, 5) = -3 (자연수가 아님!)`,
    language: 'typescript',
    output: `타입 시스템이 닫혀있음을 자연스럽게 보장해줍니다!`
  },


  {
    type: 'code-example',
    id: 'sets-operations-example',
    title: '집합과 연산 실험',
    code: `// 다양한 집합과 연산 실험해보기

// 1. 유한 집합 정의
type Color = "red" | "green" | "blue";
type Size = "small" | "medium" | "large";

// 2. 색상 혼합 연산 (임의로 정의)
const mixColors = (a: Color, b: Color): Color => {
  if (a === b) return a;
  if ((a === "red" && b === "blue") || (a === "blue" && b === "red")) {
    return "green"; // 빨강 + 파랑 = 초록
  }
  if ((a === "red" && b === "green") || (a === "green" && b === "red")) {
    return "blue"; // 빨강 + 초록 = 파랑
  }
  if ((a === "blue" && b === "green") || (a === "green" && b === "blue")) {
    return "red"; // 파랑 + 초록 = 빨강
  }
  return a; // 기본값
};

// 3. 크기 비교 연산 (더 큰 것 선택)
const largerSize = (a: Size, b: Size): Size => {
  const sizeOrder = { small: 1, medium: 2, large: 3 };
  return sizeOrder[a] >= sizeOrder[b] ? a : b;
};

// 테스트해보기
console.log("색상 혼합:");
console.log('mixColors("red", "blue") =', mixColors("red", "blue"));
console.log('mixColors("green", "green") =', mixColors("green", "green"));

console.log("\\n크기 비교:");
console.log('largerSize("small", "large") =', largerSize("small", "large"));
console.log('largerSize("medium", "small") =', largerSize("medium", "small"));

// 이 연산들이 닫혀있나요? 그렇습니다!
// 타입스크립트가 보장해줍니다.`,
    language: 'typescript',
    output: `색상 혼합:
mixColors("red", "blue") = green
mixColors("green", "green") = green

크기 비교:
largerSize("small", "large") = large
largerSize("medium", "small") = medium`
  }
];