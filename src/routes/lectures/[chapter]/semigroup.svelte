<script lang="ts">
  import NoteBox from '$lib/components/NoteBox.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import InteractivePlayground from '$lib/components/InteractivePlayground.svelte';
  import type { Note, CodeExample as CodeExampleType } from '$lib/types/algebra';
  
  const definition: Note = {
    id: 'semigroup-def',
    type: 'definition',
    title: '세미그룹 (Semigroup)',
    content: `
      세미그룹은 <strong>결합 법칙(Associativity)</strong>을 만족하는 마그마입니다.<br><br>
      결합 법칙: 연산의 순서를 바꿔도 결과가 같습니다.<br>
      (a • b) • c = a • (b • c)
    `,
    math: '∀a, b, c ∈ S : (a • b) • c = a • (b • c)'
  };
  
  const associativityExample: CodeExampleType = {
    id: 'semigroup-associativity',
    title: '결합 법칙 검증',
    language: 'typescript',
    runnable: true,
    code: `interface Semigroup<T> {
  operation: (a: T, b: T) => T;
}

// 결합 법칙을 테스트하는 함수
function isAssociative<T>(
  op: (a: T, b: T) => T,
  a: T, b: T, c: T
): boolean {
  const leftFirst = op(op(a, b), c);
  const rightFirst = op(a, op(b, c));
  return leftFirst === rightFirst;
}

// 세미그룹 예시: 숫자 덧셈
const additionSemigroup: Semigroup<number> = {
  operation: (a, b) => a + b
};

// 덧셈은 결합 법칙을 만족합니다
console.log("(2 + 3) + 4 =", additionSemigroup.operation(
  additionSemigroup.operation(2, 3), 4
)); // 9

console.log("2 + (3 + 4) =", additionSemigroup.operation(
  2, additionSemigroup.operation(3, 4)
)); // 9

console.log("결합 법칙 만족:", 
  isAssociative(additionSemigroup.operation, 2, 3, 4)
); // true`
  };
  
  const counterExample: CodeExampleType = {
    id: 'semigroup-counter',
    title: '세미그룹이 아닌 마그마',
    language: 'typescript',
    runnable: true,
    code: `// 뺄셈은 세미그룹이 아닙니다!
const subtractionMagma = {
  operation: (a: number, b: number) => a - b
};

// (5 - 3) - 2 = 2 - 2 = 0
const leftFirst = subtractionMagma.operation(
  subtractionMagma.operation(5, 3), 2
);

// 5 - (3 - 2) = 5 - 1 = 4
const rightFirst = subtractionMagma.operation(
  5, subtractionMagma.operation(3, 2)
);

console.log("(5 - 3) - 2 =", leftFirst); // 0
console.log("5 - (3 - 2) =", rightFirst); // 4
console.log("결합 법칙 위반!", leftFirst !== rightFirst);`
  };
  
  const reduceExample: CodeExampleType = {
    id: 'semigroup-reduce',
    title: '세미그룹과 리듀스 연산',
    language: 'typescript',
    runnable: true,
    code: `// 세미그룹의 가장 중요한 활용: reduce
function reduce<T>(
  semigroup: Semigroup<T>, 
  values: T[]
): T | undefined {
  if (values.length === 0) return undefined;
  
  return values.reduce((acc, val) => 
    semigroup.operation(acc, val)
  );
}

// 문자열 연결 세미그룹
const stringConcat: Semigroup<string> = {
  operation: (a, b) => a + b
};

// 최댓값 세미그룹
const maxSemigroup: Semigroup<number> = {
  operation: Math.max
};

// 결합 법칙 덕분에 어떤 순서로 계산해도 OK!
console.log(reduce(stringConcat, ["a", "b", "c"])); // "abc"
console.log(reduce(maxSemigroup, [3, 7, 2, 9, 1])); // 9

// 병렬 처리도 가능!
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// [1,2,3,4]와 [5,6,7,8]을 따로 계산 후 합쳐도 됨`
  };
  
  const practicalNote: Note = {
    id: 'semigroup-practical',
    type: 'tip',
    title: '세미그룹의 실용적 가치',
    content: `
      결합 법칙이 있으면:<br>
      • <strong>병렬 처리</strong>가 가능합니다 (MapReduce)<br>
      • <strong>부분 계산 결과를 캐싱</strong>할 수 있습니다<br>
      • <strong>점진적 계산</strong>이 가능합니다<br>
      • 계산 순서를 <strong>최적화</strong>할 수 있습니다
    `
  };
  
  const playgroundCode = `// 실용적인 세미그룹: 설정 병합
interface Config {
  port?: number;
  host?: string;
  debug?: boolean;
  features?: string[];
}

const configMerge: Semigroup<Config> = {
  operation: (a, b) => ({
    ...a,
    ...b,
    // 배열은 합치기
    features: [...(a.features || []), ...(b.features || [])]
  })
};

// 여러 설정 소스를 병합
const defaultConfig: Config = {
  port: 3000,
  host: 'localhost',
  features: ['basic']
};

const userConfig: Config = {
  port: 8080,
  debug: true,
  features: ['advanced']
};

const envConfig: Config = {
  host: 'production.com',
  features: ['monitoring']
};

// reduce로 모든 설정 병합
const configs = [defaultConfig, userConfig, envConfig];
const finalConfig = configs.reduce(
  (acc, cfg) => configMerge.operation(acc, cfg)
);

console.log('최종 설정:', finalConfig);`;
</script>

<section>
  <NoteBox note={definition} />
  
  <div class="my-8">
    <h2 class="text-2xl font-bold text-amber-900 mb-4">왜 결합 법칙이 중요한가?</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-4 bg-green-100 rounded-lg">
        <h3 class="font-bold text-green-900 mb-2">결합 법칙이 있으면</h3>
        <p class="text-sm">((1 + 2) + 3) + 4 = (1 + 2) + (3 + 4)</p>
        <p class="text-sm mt-2">→ 원하는 순서로 계산 가능!</p>
      </div>
      <div class="p-4 bg-red-100 rounded-lg">
        <h3 class="font-bold text-red-900 mb-2">결합 법칙이 없으면</h3>
        <p class="text-sm">((5 - 3) - 2) ≠ (5 - (3 - 2))</p>
        <p class="text-sm mt-2">→ 순서를 바꿀 수 없음</p>
      </div>
    </div>
  </div>
  
  <CodeExample example={associativityExample} />
  
  <CodeExample example={counterExample} />
  
  <div class="my-8">
    <h2 class="text-2xl font-bold text-amber-900 mb-4">세미그룹의 힘: Reduce</h2>
    <p class="text-amber-800 mb-4">
      결합 법칙이 있으면 여러 값을 하나로 합치는 reduce 연산을 안전하게 수행할 수 있습니다.
    </p>
  </div>
  
  <CodeExample example={reduceExample} />
  
  <NoteBox note={practicalNote} />
  
  <InteractivePlayground 
    title="세미그룹 실습: 설정 병합"
    initialCode={playgroundCode}
  />
  
  <div class="mt-8 p-6 bg-amber-100 rounded-lg">
    <h3 class="font-bold text-amber-900 mb-3">정리</h3>
    <ul class="list-disc list-inside text-amber-800 space-y-2">
      <li>세미그룹 = 마그마 + 결합 법칙</li>
      <li>결합 법칙으로 계산 순서를 자유롭게 바꿀 수 있음</li>
      <li>reduce, fold 같은 연산의 수학적 기반</li>
      <li>병렬 처리와 최적화가 가능해짐</li>
    </ul>
  </div>
</section>