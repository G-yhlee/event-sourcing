import type { LectureAtom } from '$lib/types/algebra';

export const semigroupAtoms: LectureAtom[] = [
  {
    type: 'definition',
    id: 'semigroup-definition',
    title: '세미그룹 (Semigroup)',
    content: {
      undergraduate: `
        세미그룹은 결합법칙을 만족하는 마그마입니다.<br>
        즉, 집합 S와 S 위의 이항 연산 •에 대해<br>
        (S, •)가 세미그룹이라는 것은 결합법칙이 성립한다는 것입니다.
      `,
      graduate: `
        <strong>정의 3.1</strong><br>
        <em>세미그룹</em>(semigroup)은 결합법칙(associativity)을 만족하는 마그마이다.<br><br>
        
        순서쌍 S = (S, ∗)에서 S는 비어있지 않은 집합,<br>
        ∗: S × S → S는 결합법칙을 만족하는 이항 연산이다:<br><br>
        
        ∀a,b,c ∈ S, (a ∗ b) ∗ c = a ∗ (b ∗ c)
      `
    },
    formula: {
      undergraduate: '(S, •) with (a • b) • c = a • (b • c)',
      graduate: 'S = (S, ∗) with (a ∗ b) ∗ c = a ∗ (b ∗ c)'
    },
    conditions: {
      undergraduate: [
        'S는 비어있지 않은 집합',
        '• : S × S → S는 S 위의 이항 연산 (닫혀있음)',
        '모든 a, b, c ∈ S에 대해 (a • b) • c = a • (b • c) (결합법칙)'
      ],
      graduate: [
        'Carrier set: S ≠ ∅',
        'Closure: ∀a,b ∈ S, a ∗ b ∈ S',
        'Associativity: ∀a,b,c ∈ S, (a ∗ b) ∗ c = a ∗ (b ∗ c)',
        'Commutativity나 identity는 요구되지 않음'
      ]
    }
  },

  {
    type: 'theorem',
    id: 'generalized-associativity',
    title: '일반화된 결합법칙',
    statement: {
      undergraduate: `
        세미그룹에서 결합법칙이 성립하면<br>
        n개의 원소의 곱 a₁ • a₂ • ... • aₙ에 대해<br>
        괄호를 어떻게 넣든 결과가 같습니다.
      `,
      graduate: `
        <strong>정리 3.2</strong> (Generalized Associativity)<br>
        세미그룹 S = (S, ∗)에서 n ≥ 3인 임의의 n개 원소 a₁, a₂, ..., aₙ ∈ S에 대해<br>
        곱 a₁ ∗ a₂ ∗ ⋯ ∗ aₙ의 값은 괄호치기(parenthesization)에 무관하게 유일하다.<br><br>
        
        수학적으로: 모든 올바른 괄호치기는 동일한 결과를 산출한다.
      `
    },
    proof: {
      undergraduate: `
        귀납법으로 증명:<br>
        • n=3일 때: 결합법칙에 의해 성립<br>
        • n=k일 때 성립한다고 가정<br>
        • n=k+1일 때: 결합법칙을 반복 적용하여 증명 가능<br><br>
        
        따라서 결합법칙은 연산의 순서에 자유도를 줍니다.
      `,
      graduate: `
        <strong>증명</strong>: n에 대한 강한 귀납법으로 증명한다.<br><br>
        
        <em>Base cases</em>:<br>
        • n = 1,2: trivial (parenthesization 불필요)<br>
        • n = 3: 결합법칙에 의해 (a₁ ∗ a₂) ∗ a₃ = a₁ ∗ (a₂ ∗ a₃)<br><br>
        
        <em>Inductive step</em>: n = k+1일 때 임의의 괄호치기를<br>
        (a₁ ∗ ⋯ ∗ aᵢ) ∗ (aᵢ₊₁ ∗ ⋯ ∗ aₖ₊₁)의 형태로 나타낼 수 있다.<br>
        귀납 가정에 의해 각 부분의 값이 유일하므로,<br>
        전체 식의 값도 유일하다. □
      `
    },
    corollary: {
      undergraduate: `
        이 정리로 인해 세미그룹에서는 괄호 없이 a₁ • a₂ • ⋯ • aₙ를 쓸 수 있습니다.<br>
        또한 병렬 연산(parallel computation)이 가능해집니다.
      `,
      graduate: `
        이 정리로 인해 세미그룹에서는 괄호 없이 a₁ ∗ a₂ ∗ ⋯ ∗ aₙ를 쓸 수 있다.<br>
        또한 대체 연산(parallel computation)이 가능해진다.
      `
    }
  },

  {
    type: 'definition',
    id: 'free-semigroup',
    title: '자유 세미그룹',
    content: {
      undergraduate: `
        집합 X에 대한 자유 세미그룹 X⁺는<br>
        X의 비어있지 않은 유한 수열들의 집합이며,<br>
        연산은 수열의 연결(concatenation)입니다.
      `,
      graduate: `
        <strong>정의 3.3</strong><br>
        집합 X에 대한 <em>자유 세미그룹</em>(free semigroup) X⁺는<br>
        X의 비어있지 않은 유한 수열들의 집합이며,<br>
        연산은 수열의 연결(concatenation)이다.<br><br>
        
        X⁺ = {(x₁, x₂, ..., xₙ) : n ≥ 1, xᵢ ∈ X}<br>
        (x₁, ..., xₘ) ∗ (y₁, ..., yₙ) = (x₁, ..., xₘ, y₁, ..., yₙ)
      `
    },
    formula: {
      undergraduate: 'X⁺ = 모든 비어있지 않은 X-수열들',
      graduate: 'X^+ = \\bigcup_{n=1}^{\\infty} X^n'
    },
    conditions: {
      undergraduate: [
        'X⁺의 원소들은 X의 원소들로 이루어진 비어있지 않은 수열',
        '연산은 수열 연결(concatenation)',
        '결합법칙이 자동으로 성립',
        '모든 세미그룹으로의 함수 확장이 유일하게 존재'
      ],
      graduate: [
        'Universal property: 모든 세미그룹 S와 함수 f: X → S에 대해',
        '유일한 세미그룹 동형사상 f̄: X⁺ → S가 존재',
        'f̄의 X에 대한 제한이 f와 일치',
        '이는 functor X ↦ X⁺를 정의하며 Set에서 Semigroup로의 left adjoint'
      ]
    }
  },

  {
    type: 'prog-definition',
    id: 'semigroup-prog-def',
    title: '세미그룹 - 프로그래밍적 정의',
    content: `
      프로그래밍에서 세미그룹은 <strong>reduce 연산이 가능한 구조</strong>로 이해할 수 있습니다.<br><br>
      
      결합법칙 덕분에:<br>
      • 병렬 처리가 가능함 (MapReduce 패러다임)<br>
      • 계산 순서를 최적화할 수 있음<br>
      • 점진적 계산과 캐싱이 가능함<br>
      • 안전하게 reduce/fold 연산 수행 가능<br><br>
      
      <strong>프로그래밍적 핵심:</strong><br>
      • reduce/fold는 세미그룹의 핵심 활용법<br>
      • 함수형 프로그래밍의 기본 연산들과 완벽 연결<br>
      • 빈 컬렉션 문제는 모노이드에서 해결 (한계 존재)
    `,
    interface: `interface Semigroup<T> {
  operation: (a: T, b: T) => T;
}`
  },

  {
    type: 'code-example',
    id: 'associativity-test',
    title: '결합 법칙 검증',
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
); // true`,
    language: 'typescript',
    output: `(2 + 3) + 4 = 9
2 + (3 + 4) = 9
결합 법칙 만족: true`
  },

  {
    type: 'code-example',
    id: 'non-semigroup',
    title: '세미그룹이 아닌 마그마',
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
console.log("결합 법칙 위반!", leftFirst !== rightFirst);

// 나눗셈도 마찬가지
// (8 / 4) / 2 = 2 / 2 = 1
// 8 / (4 / 2) = 8 / 2 = 4`,
    language: 'typescript',
    output: `(5 - 3) - 2 = 0
5 - (3 - 2) = 4
결합 법칙 위반! true`
  },

  {
    type: 'code-example',
    id: 'reduce-power',
    title: '세미그룹과 리듀스 연산',
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
console.log(reduce(stringConcat, ["Hello", " ", "World"])); // "Hello World"
console.log(reduce(maxSemigroup, [3, 7, 2, 9, 1])); // 9

// 병렬 처리도 가능!
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// [1,2,3,4]와 [5,6,7,8]을 따로 계산 후 합쳐도 됨
console.log("전체 합:", reduce(additionSemigroup, numbers)); // 36`,
    language: 'typescript',
    output: `Hello World
9
전체 합: 36`
  },

  {
    type: 'important',
    id: 'semigroup-limitation',
    content: `
      <strong>세미그룹의 한계:</strong> 빈 배열을 처리할 수 없습니다! 
      reduce 함수에서 초기값이 필요한 이유가 바로 이것입니다. 
      이 문제는 다음 단계인 <strong>모노이드</strong>에서 해결됩니다.
    `
  },

  {
    type: 'code-example',
    id: 'config-merge-example',
    title: '실용적인 세미그룹: 설정 병합',
    code: `// 실용적인 세미그룹: 설정 병합
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

// reduce로 모든 설정 병합 (결합법칙 덕분에 순서 무관)
const configs = [defaultConfig, userConfig, envConfig];
const finalConfig = configs.reduce(
  (acc, cfg) => configMerge.operation(acc, cfg)
);

console.log('최종 설정:', finalConfig);
console.log('포트:', finalConfig.port);
console.log('기능들:', finalConfig.features);`,
    language: 'typescript',
    output: `최종 설정: {
  port: 8080,
  host: 'production.com',
  debug: true,
  features: ['basic', 'advanced', 'monitoring']
}
포트: 8080
기능들: ['basic', 'advanced', 'monitoring']`
  }
];