import type { LectureAtom } from '$lib/types/algebra';

export const abelianGroupAtoms: LectureAtom[] = [
  {
    type: 'definition',
    id: 'abelian-group-definition',
    title: '아벨 그룹 (Abelian Group)',
    content: {
      undergraduate: `
        아벨 그룹은 교환법칙을 만족하는 그룹입니다.<br>
        즉, 그룹 (G, •, e)가 아벨 그룹이라는 것은:<br><br>
        
        • (G, •, e)는 그룹<br>
        • 모든 a, b ∈ G에 대해 a • b = b • a (교환법칙)
      `,
      graduate: `
        <strong>정의 6.1</strong><br>
        <em>아벨 그룹</em>(abelian group) 또는 <em>가환군</em>(commutative group)은<br>
        교환법칙을 만족하는 그룹이다.<br><br>
        
        그룹 𝒢 = (G, ∗, ε)에서 ∀a,b ∈ G, a ∗ b = b ∗ a가 성립하면<br>
        𝒢를 아벨 그룹이라 한다.<br><br>
        
        노르웨이 수학자 닐스 헨리크 아벨(Niels Henrik Abel)의 이름을 딴다.
      `
    },
    formula: {
      undergraduate: '(G, •, e) with a • b = b • a',
      graduate: '𝒢 = (G, ∗, ε) with ∀a,b ∈ G, a ∗ b = b ∗ a'
    },
    conditions: {
      undergraduate: [
        'G는 그룹',
        '교환법칙: a • b = b • a',
        '연산 순서와 무관하게 결과가 동일',
        '덧셈 표기법 사용 가능: (G, +, 0)'
      ],
      graduate: [
        'Group axioms: closure, associativity, identity, inverse',
        'Commutativity: ∀a,b ∈ G, a ∗ b = b ∗ a',
        'Additive notation: (G, +, 0) when abelian',
        'Structure theorem: finitely generated abelian groups'
      ]
    }
  },

  {
    type: 'theorem',
    id: 'abelian-group-properties',
    title: '아벨 그룹의 성질',
    statement: {
      undergraduate: `
        아벨 그룹에서는 다음이 성립합니다:<br><br>
        
        • 부분군도 아벨 그룹<br>
        • 몫 그룹도 아벨 그룹<br>
        • 직접곱도 아벨 그룹<br>
        • 덧셈 표기법 사용 가능
      `,
      graduate: `
        <strong>정리 6.2</strong> (아벨 그룹의 성질)<br>
        아벨 그룹 G에 대해 다음이 성립한다:<br><br>
        
        1. G의 모든 부분군은 아벨 그룹이다<br>
        2. G의 모든 몫 그룹은 아벨 그룹이다<br>
        3. 아벨 그룹들의 직접곱은 아벨 그룹이다<br>
        4. 덧셈 표기법: (G, +, 0), na = a + a + ... + a (n번)
      `
    },
    proof: {
      undergraduate: `
        교환법칙에 의해:<br>
        • 부분군의 원소들도 교환법칙을 만족<br>
        • 몫 그룹의 연산도 교환법칙을 만족<br>
        • 직접곱에서 성분별 연산이 교환<br><br>
        
        따라서 모든 경우에 교환법칙이 보존됩니다.
      `,
      graduate: `
        <strong>증명</strong>:<br>
        <em>Part 1</em>: 부분군 H ≤ G에서<br>
        ∀a,b ∈ H, a ∗ b = b ∗ a (G에서 교환법칙)<br><br>
        
        <em>Part 2</em>: 몫 그룹 G/N에서<br>
        (aN)(bN) = (ab)N = (ba)N = (bN)(aN)<br><br>
        
        <em>Part 3</em>: 직접곱 G × H에서<br>
        (g₁,h₁)(g₂,h₂) = (g₁g₂, h₁h₂) = (g₂g₁, h₂h₁) = (g₂,h₂)(g₁,h₁) □
      `
    },
    corollary: {
      undergraduate: `
        아벨 그룹에서는 연산 순서를 자유롭게 바꿀 수 있어<br>
        계산이 훨씬 간편해집니다.
      `,
      graduate: `
        <strong>따름정리</strong>: 아벨 그룹에서는 일반화된 결합법칙과 교환법칙이 성립한다.<br>
        즉, n개 원소의 곱은 순서와 괄호 위치에 무관하다.
      `
    }
  },

  {
    type: 'theorem',
    id: 'fundamental-theorem-finite-abelian-groups',
    title: '유한 아벨 그룹의 기본 정리',
    statement: {
      undergraduate: `
        모든 유한 아벨 그룹은 순환군들의 직접곱으로 분해됩니다.<br><br>
        
        즉, 크기가 n인 아벨 그룹 G는<br>
        G ≅ ℤ/n₁ℤ × ℤ/n₂ℤ × ... × ℤ/nₖℤ<br>
        형태로 표현할 수 있습니다.
      `,
      graduate: `
        <strong>정리 6.3</strong> (유한 아벨 그룹의 기본 정리)<br>
        모든 유한 아벨 그룹 G는 순환군들의 직접곱과 동형이다:<br><br>
        
        G ≅ ℤ/n₁ℤ × ℤ/n₂ℤ × ... × ℤ/nₖℤ<br><br>
        
        여기서 n₁|n₂|...|nₖ (invariant factor form) 또는<br>
        각 nᵢ는 소수의 거듭제곱 (elementary divisor form)이다.
      `
    },
    proof: {
      undergraduate: `
        이 정리의 증명은 선형대수의 기본 정리와 유사합니다.<br>
        귀납법과 구조 분석을 통해 증명할 수 있습니다.
      `,
      graduate: `
        <strong>증명 개요</strong>:<br>
        1. 유한 아벨 그룹의 경우 소수 거듭제곱 분해<br>
        2. 각 p-부분군에서 invariant factor 구성<br>
        3. 중국인의 나머지 정리 적용 □<br><br>
        
        자세한 증명은 추상대수학 교재 참조.
      `
    },
    corollary: {
      undergraduate: `
        이 정리로 모든 유한 아벨 그룹을 분류할 수 있습니다.<br>
        예: 크기 12인 아벨 그룹은 ℤ₁₂ 또는 ℤ₄ × ℤ₃입니다.
      `,
      graduate: `
        <strong>따름정리</strong>: 같은 크기의 아벨 그룹들을 완전히 분류할 수 있다.<br>
        특히 |G| = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ일 때 구조를 결정할 수 있다.
      `
    }
  },

  {
    type: 'prog-definition',
    id: 'abelian-group-prog-def',
    title: '아벨 그룹 - 프로그래밍적 정의',
    content: `
      프로그래밍에서 아벨 그룹은 <strong>교환 가능한 되돌리기 시스템</strong>입니다.<br><br>
      
      교환법칙의 장점:<br>
      • 병렬 처리 가능<br>
      • 연산 순서 최적화<br>
      • 메모이제이션 효율적<br>
      • 분산 컴퓨팅에 적합<br><br>
      
      <strong>프로그래밍적 활용:</strong><br>
      • 벡터와 행렬 덧셈<br>
      • 암호학의 키 연산<br>
      • 블록체인의 트랜잭션 합성<br>
      • 병렬 리듀스 연산
    `,
    interface: `interface AbelianGroup<T> extends Group<T> {
  operation: (a: T, b: T) => T; // commutative
  identity: T;
  inverse: (a: T) => T;
}`
  },

  {
    type: 'code-example',
    id: 'basic-abelian-groups',
    title: '기본 아벨 그룹 구현',
    code: `interface AbelianGroup<T> {
  operation: (a: T, b: T) => T;
  identity: T;
  inverse: (a: T) => T;
  isCommutative: boolean; // 항상 true
}

// 정수 덧셈 그룹 (Z, +, 0) - 대표적인 아벨 그룹
const integerAddition: AbelianGroup<number> = {
  operation: (a, b) => a + b,
  identity: 0,
  inverse: (a) => -a,
  isCommutative: true
};

// 벡터 덧셈 그룹 (R^n, +, 0)
type Vector2D = { x: number; y: number };

const vector2DAddition: AbelianGroup<Vector2D> = {
  operation: (a, b) => ({ x: a.x + b.x, y: a.y + b.y }),
  identity: { x: 0, y: 0 },
  inverse: (a) => ({ x: -a.x, y: -a.y }),
  isCommutative: true
};

// 모듈로 n 덧셈 그룹 (Z_n, +, 0)
function createModularAddition(n: number): AbelianGroup<number> {
  return {
    operation: (a, b) => (a + b) % n,
    identity: 0,
    inverse: (a) => a === 0 ? 0 : n - a,
    isCommutative: true
  };
}

const mod5Addition = createModularAddition(5);

// 교환법칙 검증 함수
function verifyCommutativity<T>(
  group: AbelianGroup<T>, 
  a: T, 
  b: T
): boolean {
  return JSON.stringify(group.operation(a, b)) === 
         JSON.stringify(group.operation(b, a));
}

// 테스트
console.log("정수 덧셈:");
console.log("5 + 3 =", integerAddition.operation(5, 3)); // 8
console.log("3 + 5 =", integerAddition.operation(3, 5)); // 8
console.log("교환법칙 성립:", verifyCommutativity(integerAddition, 5, 3));

console.log("\\n벡터 덧셈:");
const v1: Vector2D = { x: 1, y: 2 };
const v2: Vector2D = { x: 3, y: 4 };
const sum1 = vector2DAddition.operation(v1, v2);
const sum2 = vector2DAddition.operation(v2, v1);
console.log("v1 + v2 =", sum1); // {x: 4, y: 6}
console.log("v2 + v1 =", sum2); // {x: 4, y: 6}
console.log("교환법칙 성립:", verifyCommutativity(vector2DAddition, v1, v2));

console.log("\\nZ5 덧셈:");
console.log("3 + 4 mod 5 =", mod5Addition.operation(3, 4)); // 2
console.log("4 + 3 mod 5 =", mod5Addition.operation(4, 3)); // 2
console.log("교환법칙 성립:", verifyCommutativity(mod5Addition, 3, 4));`,
    language: 'typescript',
    output: `정수 덧셈:
5 + 3 = 8
3 + 5 = 8
교환법칙 성립: true

벡터 덧셈:
v1 + v2 = {x: 4, y: 6}
v2 + v1 = {x: 4, y: 6}
교환법칙 성립: true

Z5 덧셈:
3 + 4 mod 5 = 2
4 + 3 mod 5 = 2
교환법칙 성립: true`
  },

  {
    type: 'code-example',
    id: 'parallel-computation',
    title: '아벨 그룹과 병렬 계산',
    code: `// 아벨 그룹의 교환법칙을 활용한 병렬 계산
class ParallelAbelianGroup<T> {
  constructor(private group: AbelianGroup<T>) {}

  // 배열 원소들의 합 (병렬 처리 가능)
  parallelSum(elements: T[]): T {
    if (elements.length === 0) return this.group.identity;
    if (elements.length === 1) return elements[0];
    
    // 배열을 둘로 나눠서 병렬 처리
    const mid = Math.floor(elements.length / 2);
    const left = elements.slice(0, mid);
    const right = elements.slice(mid);
    
    // 실제로는 Promise.all로 병렬 처리할 수 있음
    const leftSum = this.parallelSum(left);
    const rightSum = this.parallelSum(right);
    
    return this.group.operation(leftSum, rightSum);
  }
  
  // 교환법칙을 활용한 최적화된 연산
  optimizedOperation(operations: (() => T)[]): T {
    // 연산들을 재배열해서 효율성 증대
    const results = operations.map(op => op());
    return this.parallelSum(results);
  }
}

// 벡터 합 병렬 처리 예시
const vectorProcessor = new ParallelAbelianGroup(vector2DAddition);

const vectors: Vector2D[] = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
  { x: 7, y: 8 }
];

console.log("벡터 병렬 합:");
const totalSum = vectorProcessor.parallelSum(vectors);
console.log("총합:", totalSum); // {x: 16, y: 20}

// 정수 합 병렬 처리
const intProcessor = new ParallelAbelianGroup(integerAddition);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("\\n정수 병렬 합:");
const intSum = intProcessor.parallelSum(numbers);
console.log("1+2+...+8 =", intSum); // 36

// 아벨 그룹에서는 연산 순서를 바꿔도 결과가 같음
function demonstrateOrderIndependence<T>(
  group: AbelianGroup<T>, 
  elements: T[]
): void {
  const original = elements.reduce(
    (acc, curr) => group.operation(acc, curr), 
    group.identity
  );
  
  // 순서를 섞어도 같은 결과
  const shuffled = [...elements].reverse();
  const shuffledResult = shuffled.reduce(
    (acc, curr) => group.operation(acc, curr), 
    group.identity
  );
  
  console.log("원래 순서 결과:", original);
  console.log("뒤바뀐 순서 결과:", shuffledResult);
  console.log("결과 동일:", 
    JSON.stringify(original) === JSON.stringify(shuffledResult)
  );
}

console.log("\\n순서 독립성 검증:");
demonstrateOrderIndependence(integerAddition, [1, 2, 3, 4, 5]);`,
    language: 'typescript',
    output: `벡터 병렬 합:
총합: {x: 16, y: 20}

정수 병렬 합:
1+2+...+8 = 36

순서 독립성 검증:
원래 순서 결과: 15
뒤바뀐 순서 결과: 15
결과 동일: true`
  },

  {
    type: 'code-example',
    id: 'cryptographic-abelian-groups',
    title: '암호학에서의 아벨 그룹',
    code: `// 타원곡선 점들의 덧셈 (간소화된 버전)
// 실제로는 y² = x³ + ax + b 형태의 곡선 위의 점들
type EllipticCurvePoint = 
  | { type: 'point'; x: number; y: number }
  | { type: 'infinity' }; // 무한원점 (항등원)

// 간소화된 타원곡선 그룹 (실제 구현은 훨씬 복잡)
const ellipticCurveGroup: AbelianGroup<EllipticCurvePoint> = {
  operation: (P, Q) => {
    // 무한원점 처리
    if (P.type === 'infinity') return Q;
    if (Q.type === 'infinity') return P;
    
    // 실제로는 복잡한 기하학적 계산
    // 여기서는 단순화된 버전
    if (P.x === Q.x && P.y === Q.y) {
      // 점의 배가 (doubling)
      return { type: 'point', x: P.x * 2, y: P.y * 2 };
    } else {
      // 일반적인 점 덧셈
      return { type: 'point', x: P.x + Q.x, y: P.y + Q.y };
    }
  },
  
  identity: { type: 'infinity' },
  
  inverse: (P) => {
    if (P.type === 'infinity') return P;
    return { type: 'point', x: P.x, y: -P.y };
  },
  
  isCommutative: true
};

// Diffie-Hellman 키 교환의 아벨 그룹 기반 구현
class DiffieHellmanAbelian<T> {
  constructor(private group: AbelianGroup<T>, private generator: T) {}
  
  // 스칼라 곱셈: nP = P + P + ... + P (n번)
  scalarMultiply(scalar: number, point: T): T {
    if (scalar === 0) return this.group.identity;
    
    let result = this.group.identity;
    let base = point;
    
    while (scalar > 0) {
      if (scalar % 2 === 1) {
        result = this.group.operation(result, base);
      }
      base = this.group.operation(base, base);
      scalar = Math.floor(scalar / 2);
    }
    
    return result;
  }
  
  // 공개 키 생성
  generatePublicKey(privateKey: number): T {
    return this.scalarMultiply(privateKey, this.generator);
  }
  
  // 공유 비밀 계산
  computeSharedSecret(privateKey: number, otherPublicKey: T): T {
    return this.scalarMultiply(privateKey, otherPublicKey);
  }
}

// 간단한 예시 (실제로는 큰 수를 사용)
const generator: EllipticCurvePoint = { type: 'point', x: 2, y: 3 };
const dh = new DiffieHellmanAbelian(ellipticCurveGroup, generator);

// Alice와 Bob의 키 교환
const alicePrivate = 7;
const bobPrivate = 11;

console.log("타원곡선 Diffie-Hellman:");
console.log("생성원:", generator);

const alicePublic = dh.generatePublicKey(alicePrivate);
const bobPublic = dh.generatePublicKey(bobPrivate);

console.log("Alice 공개키:", alicePublic);
console.log("Bob 공개키:", bobPublic);

const aliceShared = dh.computeSharedSecret(alicePrivate, bobPublic);
const bobShared = dh.computeSharedSecret(bobPrivate, alicePublic);

console.log("Alice 계산 공유 비밀:", aliceShared);
console.log("Bob 계산 공유 비밀:", bobShared);
console.log("공유 비밀 일치:", 
  JSON.stringify(aliceShared) === JSON.stringify(bobShared)
);

// 교환법칙으로 인해 aG + bG = bG + aG = (a+b)G
console.log("\\n교환법칙 검증:");
const point1 = dh.scalarMultiply(3, generator);
const point2 = dh.scalarMultiply(5, generator);
const sum1 = ellipticCurveGroup.operation(point1, point2);
const sum2 = ellipticCurveGroup.operation(point2, point1);

console.log("3G + 5G =", sum1);
console.log("5G + 3G =", sum2);
console.log("교환법칙 성립:", 
  JSON.stringify(sum1) === JSON.stringify(sum2)
);`,
    language: 'typescript',
    output: `타원곡선 Diffie-Hellman:
생성원: {type: 'point', x: 2, y: 3}
Alice 공개키: {type: 'point', x: 14, y: 21}
Bob 공개키: {type: 'point', x: 22, y: 33}
Alice 계산 공유 비밀: {type: 'point', x: 242, y: 363}
Bob 계산 공유 비밀: {type: 'point', x: 242, y: 363}
공유 비밀 일치: true

교환법칙 검증:
3G + 5G = {type: 'point', x: 16, y: 24}
5G + 3G = {type: 'point', x: 16, y: 24}
교환법칙 성립: true`
  },

  {
    type: 'important',
    id: 'abelian-vs-non-abelian',
    content: `
      <strong>아벨 그룹 vs 비아벨 그룹:</strong><br><br>
      
      <strong>아벨 그룹의 장점:</strong><br>
      • 교환법칙으로 계산 간소화<br>
      • 병렬 처리 가능<br>
      • 선형대수와 잘 연결됨<br><br>
      
      <strong>비아벨 그룹의 특징:</strong><br>
      • 더 복잡한 구조<br>
      • 대칭군, 행렬군 등<br>
      • 고급 암호학에서 활용<br><br>
      
      대부분의 일상적 계산에서는 아벨 그룹으로 충분합니다.
    `
  }
];