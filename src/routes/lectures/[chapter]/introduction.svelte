<script lang="ts">
  import NoteBox from '$lib/components/NoteBox.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import InteractivePlayground from '$lib/components/InteractivePlayground.svelte';
  import type { Note, CodeExample as CodeExampleType } from '$lib/types/algebra';
  
  const setDefinition: Note = {
    id: 'intro-set',
    type: 'definition',
    title: '집합 (Set)',
    content: `
      집합은 명확히 정의된 대상들(원소)의 모임입니다.<br><br>
      
      <strong>수학적 표기:</strong><br>
      • S = {1, 2, 3} (유한 집합)<br>
      • ℕ = {0, 1, 2, 3, ...} (자연수 집합)<br>
      • a ∈ S (a는 S의 원소)<br><br>
      
      <strong>타입스크립트에서:</strong><br>
      집합은 <strong>타입(Type)</strong>으로 표현됩니다!
    `
  };
  
  const whyTypeScript: Note = {
    id: 'intro-typescript',
    type: 'tip',
    title: '왜 타입스크립트로 배우는가?',
    content: `
      타입스크립트의 타입 시스템은 대수적 구조를 표현하기에 매우 적합합니다:<br><br>
      
      • <strong>집합 → 타입</strong>: number, string, boolean<br>
      • <strong>연산 → 함수</strong>: (a: T, b: T) => T<br>
      • <strong>공리 → 테스트</strong>: 결합법칙, 항등원 검증<br>
      • <strong>인터페이스</strong>: 구조의 요구사항 명시
    `
  };
  
  const setExample: CodeExampleType = {
    id: 'intro-sets',
    title: '타입스크립트에서 집합 표현하기',
    language: 'typescript',
    runnable: false,
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
    output: `집합의 개념이 타입으로 자연스럽게 표현됩니다!`
  };
  
  const operationExample: CodeExampleType = {
    id: 'intro-operations',
    title: '이항 연산 (Binary Operation)',
    language: 'typescript',
    runnable: false,
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
    output: `8
hello world
false`
  };
  
  const closureNote: Note = {
    id: 'intro-closure',
    type: 'definition',
    title: '닫혀있음 (Closure)',
    content: `
      집합 S의 이항 연산 •가 <strong>닫혀있다</strong>는 것은:<br>
      S의 임의의 두 원소를 연산한 결과도 반드시 S에 속한다는 의미입니다.<br><br>
      
      <strong>수학적 표현:</strong> ∀a, b ∈ S : a • b ∈ S<br><br>
      
      <strong>타입스크립트에서:</strong><br>
      함수의 반환 타입이 입력 타입과 같으면 자동으로 닫혀있음이 보장됩니다!<br>
      <code>(a: T, b: T) => T</code>
    `
  };
  
  const closureExample: CodeExampleType = {
    id: 'intro-closure-example',
    title: '닫혀있음의 예시',
    language: 'typescript',
    runnable: false,
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
    output: `타입 시스템이 닫혀있음을 자연스럽게 보장해줍니다!`
  };

  const algebraicStructureNote: Note = {
    id: 'intro-algebraic',
    type: 'tip',
    title: '대수적 구조로의 여정',
    content: `
      이제 집합과 연산의 기본을 이해했으니, 본격적인 대수적 구조를 배워봅시다!<br><br>
      
      <strong>앞으로 배울 것들:</strong><br>
      • <strong>마그마</strong>: 집합 + 닫혀있는 이항 연산<br>
      • <strong>세미그룹</strong>: 마그마 + 결합법칙<br>
      • <strong>모노이드</strong>: 세미그룹 + 항등원<br>
      • <strong>그룹</strong>: 모노이드 + 역원<br>
      • <strong>링, 필드</strong>: 두 개의 연산을 가진 구조<br><br>
      
      각각은 이전 구조에 하나의 규칙을 추가한 형태입니다!
    `
  };
  
  const playgroundCode = `// 실습: 다양한 집합과 연산 실험해보기

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
// 타입스크립트가 보장해줍니다.`;
</script>

<section>
  <div class="mb-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">대수적 구조의 시작점</h2>
    <p class="text-lg text-gray-700">
      모든 대수적 구조는 <strong>집합</strong>과 <strong>연산</strong>에서 시작됩니다. 
      타입스크립트의 타입 시스템을 통해 이 개념들을 자연스럽게 이해해봅시다.
    </p>
  </div>

  <NoteBox note={setDefinition} />
  
  <CodeExample example={setExample} />
  
  <div class="my-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">이항 연산</h2>
    <p class="text-gray-700 mb-4">
      집합의 두 원소를 받아서 같은 집합의 하나의 원소를 만드는 것이 <strong>이항 연산</strong>입니다.
    </p>
  </div>
  
  <CodeExample example={operationExample} />
  
  <NoteBox note={closureNote} />
  
  <CodeExample example={closureExample} />
  
  <NoteBox note={whyTypeScript} />
  
  <div class="my-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
    <h3 class="font-bold text-blue-900 mb-3">🔑 핵심 개념 정리</h3>
    <ul class="list-disc list-inside text-blue-800 space-y-2">
      <li><strong>집합</strong> = 타입 (number, string, boolean, 리터럴 타입 등)</li>
      <li><strong>이항 연산</strong> = <code>(a: T, b: T) => T</code> 형태의 함수</li>
      <li><strong>닫혀있음</strong> = 타입 시스템이 자동으로 보장</li>
      <li>모든 대수적 구조는 이 기초 위에 규칙을 추가한 것</li>
    </ul>
  </div>
  
  <NoteBox note={algebraicStructureNote} />
  
  <InteractivePlayground 
    title="실습: 집합과 연산 실험"
    initialCode={playgroundCode}
  />
  
  <div class="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
    <h3 class="font-bold text-gray-900 mb-3">다음 단계</h3>
    <p class="text-gray-700">
      집합과 연산의 기본을 이해했으니 이제 <strong>마그마</strong>부터 시작해서 
      점진적으로 더 복잡한 대수적 구조들을 배워봅시다. 
      각 구조는 이전 구조에 하나의 새로운 규칙을 추가한 형태입니다.
    </p>
  </div>
</section>