<script lang="ts">
  import NoteBox from '$lib/components/NoteBox.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import InteractivePlayground from '$lib/components/InteractivePlayground.svelte';
  import type { Note, CodeExample as CodeExampleType } from '$lib/types/algebra';
  
  const definition: Note = {
    id: 'magma-def',
    type: 'definition',
    title: '마그마 (Magma)',
    content: `
      마그마는 집합 S와 이항 연산 • 로 이루어진 순서쌍 (S, •) 입니다.<br>
      이항 연산 • : S × S → S 는 <strong>닫혀있다</strong>고 합니다.<br>
      즉, 집합 S의 임의의 두 원소를 연산한 결과도 S에 속해야 합니다.
    `,
    math: '∀a, b ∈ S : a • b ∈ S'
  };
  
  const basicExample: CodeExampleType = {
    id: 'magma-basic',
    title: '기본 마그마 구현',
    language: 'typescript',
    runnable: false,
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

// 테스트
console.log(subtractionMagma.operation(10, 3)); // 7
console.log(firstCharMagma.operation("hello", "world")); // "h"`,
    output: `7
h`
  };
  
  const closureExample: CodeExampleType = {
    id: 'magma-closure',
    title: '닫혀있음의 중요성',
    language: 'typescript',
    runnable: false,
    code: `// 잘못된 예: 닫혀있지 않은 연산
// 자연수 집합에서 뺄셈은 마그마가 아닙니다!
type NaturalNumber = number; // 0, 1, 2, 3, ...

// 문제: 3 - 5 = -2 (자연수가 아님!)
const badOperation = (a: NaturalNumber, b: NaturalNumber): NaturalNumber => {
  return a - b; // 타입상으로는 맞지만 실제로는 틀림!
};

// 올바른 예: 항상 닫혀있는 연산
const maxMagma: Magma<number> = {
  operation: Math.max // max(a, b)는 항상 입력과 같은 타입
};

console.log(maxMagma.operation(5, 3)); // 5
console.log(maxMagma.operation(-2, -7)); // -2`,
    output: `5
-2`
  };
  
  const practicalExample: Note = {
    id: 'magma-practical',
    type: 'example',
    title: '실용적인 마그마 예제',
    content: `
      <strong>1. 색상 혼합 마그마:</strong><br>
      두 RGB 색상을 혼합하는 연산<br><br>
      <strong>2. 행렬 곱셈 마그마:</strong><br>
      정사각 행렬들의 곱셈 연산<br><br>
      <strong>3. 함수 합성 마그마:</strong><br>
      같은 타입을 받아 반환하는 함수들의 합성
    `
  };
  
  const playgroundCode = `// 색상 혼합 마그마 구현해보기
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
const purple = colorMixMagma.operation(red, blue);

console.log('빨강:', red);
console.log('파랑:', blue);
console.log('혼합 결과:', purple);`;
</script>

<section>
  <NoteBox note={definition} />
  
  <div class="my-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">핵심 개념</h2>
    
    <div class="math-note">
      <p class="mb-2">마그마의 유일한 조건은 <strong>닫혀있음(Closure)</strong>입니다.</p>
      <p>타입스크립트에서는 함수의 반환 타입이 입력 타입과 같음을 의미합니다:</p>
      <code class="block mt-2">(a: T, b: T) => T</code>
    </div>
  </div>
  
  <CodeExample example={basicExample} />
  
  <div class="important-point">
    <strong>중요!</strong> 마그마는 어떤 특별한 규칙도 요구하지 않습니다. 
    결합 법칙, 교환 법칙, 항등원 등이 없어도 됩니다. 
    오직 연산이 닫혀있기만 하면 됩니다.
  </div>
  
  <CodeExample example={closureExample} />
  
  <NoteBox note={practicalExample} />
  
  <InteractivePlayground 
    title="마그마 실습: 색상 혼합"
    initialCode={playgroundCode}
  />
  
  <div class="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
    <h3 class="font-bold text-gray-900 mb-3">정리</h3>
    <ul class="list-disc list-inside text-gray-700 space-y-2">
      <li>마그마는 가장 기본적인 대수적 구조입니다</li>
      <li>유일한 요구사항은 연산이 닫혀있어야 한다는 것입니다</li>
      <li>타입 시스템은 닫혀있음을 자연스럽게 표현합니다</li>
      <li>실제 프로그래밍에서 많은 연산이 마그마 구조를 가집니다</li>
    </ul>
  </div>
</section>