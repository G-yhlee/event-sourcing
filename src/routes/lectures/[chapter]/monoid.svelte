<script lang="ts">
  import NoteBox from '$lib/components/NoteBox.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import InteractivePlayground from '$lib/components/InteractivePlayground.svelte';
  import type { Note, CodeExample as CodeExampleType } from '$lib/types/algebra';
  
  const definition: Note = {
    id: 'monoid-def',
    type: 'definition',
    title: '모노이드 (Monoid)',
    content: `
      모노이드는 <strong>항등원(Identity Element)</strong>을 가진 세미그룹입니다.<br><br>
      항등원 e는 다음을 만족합니다:<br>
      • e • a = a (왼쪽 항등원)<br>
      • a • e = a (오른쪽 항등원)
    `,
    math: '∀a ∈ S : e • a = a • e = a'
  };
  
  const basicExample: CodeExampleType = {
    id: 'monoid-basic',
    title: '기본 모노이드 구현',
    language: 'typescript',
    runnable: true,
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

console.log("0은 덧셈의 항등원:", 
  additionMonoid.operation(5, additionMonoid.identity)
); // 5`
  };
  
  const foldExample: CodeExampleType = {
    id: 'monoid-fold',
    title: '모노이드의 핵심: fold',
    language: 'typescript',
    runnable: true,
    code: `// 세미그룹과 달리 빈 배열도 처리 가능!
function fold<T>(monoid: Monoid<T>, values: T[]): T {
  if (values.length === 0) return monoid.identity;
  
  return values.reduce(
    (acc, val) => monoid.operation(acc, val),
    monoid.identity
  );
}

// 빈 배열 테스트
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
console.log("하나라도 참?", fold(orMonoid, bools)); // true`
  };
  
  const compositionExample: CodeExampleType = {
    id: 'monoid-composition',
    title: '모노이드 합성',
    language: 'typescript',
    runnable: true,
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
console.log(result); // { first: 60, second: "Hello World" }`
  };
  
  const practicalNote: Note = {
    id: 'monoid-practical',
    type: 'tip',
    title: '모노이드 vs 세미그룹',
    content: `
      <strong>세미그룹의 한계:</strong><br>
      • 빈 컬렉션을 처리할 수 없음<br>
      • 초기값이 필요함<br><br>
      
      <strong>모노이드의 장점:</strong><br>
      • 빈 컬렉션도 자연스럽게 처리<br>
      • 초기값이 자동으로 정해짐<br>
      • 더 안전하고 예측 가능한 API
    `
  };
  
  const arrayMonoidExample: CodeExampleType = {
    id: 'monoid-array',
    title: '배열 모노이드',
    language: 'typescript',
    runnable: true,
    code: `// 제네릭 배열 모노이드
function arrayMonoid<T>(): Monoid<T[]> {
  return {
    operation: (a, b) => [...a, ...b],
    identity: []
  };
}

// 옵션/Maybe 모노이드
type Option<T> = T | null;

function firstOption<T>(): Monoid<Option<T>> {
  return {
    operation: (a, b) => a !== null ? a : b,
    identity: null
  };
}

// 사용 예시
const arrays = [[1, 2], [3, 4], [5, 6]];
console.log("배열 합치기:", fold(arrayMonoid<number>(), arrays));

const options: Option<string>[] = [null, null, "찾았다!", null];
console.log("첫 번째 값:", fold(firstOption<string>(), options));`
  };
  
  const playgroundCode = `// 실용적인 모노이드: 통계 수집
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
console.log("평균:", result.sum / result.count);

// 빈 배열도 안전하게 처리
const emptyStats = fold(statsMonoid, []);
console.log("빈 배열 통계:", emptyStats);`;
</script>

<section>
  <NoteBox note={definition} />
  
  <div class="my-8">
    <h2 class="text-2xl font-bold text-amber-900 mb-4">항등원의 예시</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div class="p-3 bg-amber-100 rounded text-center">
        <div class="font-bold text-amber-900">덧셈</div>
        <div class="text-2xl mt-1">0</div>
      </div>
      <div class="p-3 bg-amber-100 rounded text-center">
        <div class="font-bold text-amber-900">곱셈</div>
        <div class="text-2xl mt-1">1</div>
      </div>
      <div class="p-3 bg-amber-100 rounded text-center">
        <div class="font-bold text-amber-900">문자열</div>
        <div class="text-2xl mt-1">""</div>
      </div>
      <div class="p-3 bg-amber-100 rounded text-center">
        <div class="font-bold text-amber-900">배열</div>
        <div class="text-2xl mt-1">[]</div>
      </div>
    </div>
  </div>
  
  <CodeExample example={basicExample} />
  
  <div class="important-point">
    <strong>핵심 차이점:</strong> 세미그룹은 빈 컬렉션을 처리할 수 없지만, 
    모노이드는 항등원을 사용하여 빈 컬렉션도 자연스럽게 처리합니다.
  </div>
  
  <CodeExample example={foldExample} />
  
  <NoteBox note={practicalNote} />
  
  <CodeExample example={arrayMonoidExample} />
  
  <div class="my-8">
    <h2 class="text-2xl font-bold text-amber-900 mb-4">모노이드 합성의 힘</h2>
    <p class="text-amber-800 mb-4">
      작은 모노이드들을 합성하여 복잡한 모노이드를 만들 수 있습니다.
    </p>
  </div>
  
  <CodeExample example={compositionExample} />
  
  <InteractivePlayground 
    title="모노이드 실습: 통계 수집"
    initialCode={playgroundCode}
  />
  
  <div class="mt-8 p-6 bg-amber-100 rounded-lg">
    <h3 class="font-bold text-amber-900 mb-3">정리</h3>
    <ul class="list-disc list-inside text-amber-800 space-y-2">
      <li>모노이드 = 세미그룹 + 항등원</li>
      <li>빈 컬렉션을 우아하게 처리할 수 있음</li>
      <li>함수형 프로그래밍의 핵심 개념</li>
      <li>작은 모노이드를 합성하여 복잡한 구조 생성 가능</li>
    </ul>
  </div>
</section>