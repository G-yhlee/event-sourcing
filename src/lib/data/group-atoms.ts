import type { LectureAtom } from '$lib/types/algebra';

export const groupAtoms: LectureAtom[] = [
  {
    type: 'definition',
    id: 'group-definition',
    title: '그룹 (Group)',
    content: {
      undergraduate: `
        그룹은 모든 원소가 역원을 가지는 모노이드입니다.<br>
        즉, 집합 G와 G 위의 이항 연산 •, 항등원 e에 대해<br>
        (G, •, e)가 그룹이라는 것은:<br><br>
        
        • (G, •, e)는 모노이드<br>
        • 모든 g ∈ G에 대해 역원 g⁻¹이 존재: g • g⁻¹ = g⁻¹ • g = e
      `,
      graduate: `
        <strong>정의 5.1</strong><br>
        <em>그룹</em>(group)은 모든 원소가 역원을 가지는 모노이드이다.<br><br>
        
        순서쌍 𝒢 = (G, ∗, ε)에서 G는 비어있지 않은 집합,<br>
        ∗: G × G → G는 결합법칙을 만족하는 이항 연산,<br>
        ε ∈ G는 항등원, 모든 g ∈ G에 대해 g⁻¹ ∈ G가 존재하여:<br><br>
        
        ∀g ∈ G, g ∗ g⁻¹ = g⁻¹ ∗ g = ε<br><br>
        
        그룹은 대칭성(symmetry)의 수학적 추상화이다.
      `
    },
    formula: {
      undergraduate: '(G, •, e) with ∀g ∈ G, ∃g⁻¹: g • g⁻¹ = e',
      graduate: '𝒢 = (G, ∗, ε, inv) with g ∗ g⁻¹ = g⁻¹ ∗ g = ε'
    },
    conditions: {
      undergraduate: [
        'G는 비어있지 않은 집합',
        '• : G × G → G는 G 위의 이항 연산 (닫혀있음)',
        '모든 a, b, c ∈ G에 대해 (a • b) • c = a • (b • c) (결합법칙)',
        '항등원 e ∈ G이 존재: e • g = g • e = g',
        '모든 g ∈ G에 대해 역원 g⁻¹이 존재: g • g⁻¹ = g⁻¹ • g = e'
      ],
      graduate: [
        'Carrier set: G ≠ ∅',
        'Closure: ∀a,b ∈ G, a ∗ b ∈ G',
        'Associativity: ∀a,b,c ∈ G, (a ∗ b) ∗ c = a ∗ (b ∗ c)',
        'Identity: ∃ε ∈ G s.t. ∀g ∈ G, ε ∗ g = g ∗ ε = g',
        'Inverse: ∀g ∈ G, ∃g⁻¹ ∈ G s.t. g ∗ g⁻¹ = g⁻¹ ∗ g = ε'
      ]
    }
  },

  {
    type: 'theorem',
    id: 'inverse-uniqueness-theorem',
    title: '역원의 유일성 정리',
    statement: {
      undergraduate: `
        그룹에서 각 원소의 역원은 유일합니다.<br><br>
        
        만약 g의 역원이 h₁과 h₂ 둘 다라면,<br>
        h₁ = h₁ • e = h₁ • (g • h₂) = (h₁ • g) • h₂ = e • h₂ = h₂
      `,
      graduate: `
        <strong>정리 5.2</strong> (역원의 유일성)<br>
        그룹 𝒢 = (G, ∗, ε)에서 각 원소의 역원은 유일하다.<br><br>
        
        또한 다음이 성립한다:<br>
        1. (g⁻¹)⁻¹ = g (역원의 역원)<br>
        2. (g ∗ h)⁻¹ = h⁻¹ ∗ g⁻¹ (곱의 역원)<br>
        3. ε⁻¹ = ε (항등원의 역원)
      `
    },
    proof: {
      undergraduate: `
        g의 역원을 h₁, h₂라고 가정:<br>
        • h₁ = h₁ • e (항등원의 성질)<br>
        • h₁ • e = h₁ • (g • h₂) (h₂가 g의 역원)<br>
        • h₁ • (g • h₂) = (h₁ • g) • h₂ (결합법칙)<br>
        • (h₁ • g) • h₂ = e • h₂ = h₂ (h₁이 g의 역원)<br><br>
        
        따라서 h₁ = h₂이므로 역원은 유일합니다.
      `,
      graduate: `
        <strong>증명</strong>:<br>
        <em>Part 1</em>: 유일성<br>
        h₁, h₂가 모두 g의 역원이라고 가정하자.<br>
        h₁ = h₁ ∗ ε = h₁ ∗ (g ∗ h₂) = (h₁ ∗ g) ∗ h₂ = ε ∗ h₂ = h₂<br>
        ∴ h₁ = h₂ □<br><br>
        
        <em>Part 2</em>: 추가 성질들<br>
        1. g ∗ g⁻¹ = ε에서 g는 g⁻¹의 역원이므로 (g⁻¹)⁻¹ = g<br>
        2. (g ∗ h) ∗ (h⁻¹ ∗ g⁻¹) = g ∗ (h ∗ h⁻¹) ∗ g⁻¹ = g ∗ ε ∗ g⁻¹ = ε<br>
        3. ε ∗ ε = ε이므로 ε⁻¹ = ε □
      `
    },
    corollary: {
      undergraduate: `
        역원의 유일성 덕분에 g⁻¹ 표기가 모호하지 않습니다.<br>
        또한 그룹에서는 방정식 a • x = b와 y • a = b가 항상 유일해를 가집니다.
      `,
      graduate: `
        <strong>따름정리</strong>: 그룹에서는 소거 법칙이 성립한다.<br>
        즉, g ∗ h₁ = g ∗ h₂ ⇒ h₁ = h₂ (left cancellation)<br>
        h₁ ∗ g = h₂ ∗ g ⇒ h₁ = h₂ (right cancellation)
      `
    }
  },

  {
    type: 'definition',
    id: 'subgroup-definition',
    title: '부분군',
    content: {
      undergraduate: `
        그룹 G의 부분집합 H가 부분군이려면<br>
        H 자체가 그룹 연산에 대해 그룹이 되어야 합니다.<br><br>
        
        조건:<br>
        • e ∈ H (항등원 포함)<br>
        • a, b ∈ H ⇒ a • b ∈ H (연산에 닫혀있음)<br>
        • a ∈ H ⇒ a⁻¹ ∈ H (역원에 닫혀있음)
      `,
      graduate: `
        <strong>정의 5.3</strong><br>
        그룹 𝒢 = (G, ∗, ε)의 부분집합 H ⊆ G가 <em>부분군</em>(subgroup)이라는 것은<br>
        H가 G의 연산에 대해 그룹을 이룬다는 뜻이다.<br><br>
        
        기호: H ≤ G 또는 H < G (proper subgroup)<br><br>
        
        부분군 판정법: H ≠ ∅이고<br>
        ∀a,b ∈ H, a ∗ b⁻¹ ∈ H ⇔ H ≤ G
      `
    },
    formula: {
      undergraduate: 'H ≤ G: H는 G의 부분군',
      graduate: 'H ≤ G ⇔ (H ≠ ∅ ∧ ∀a,b ∈ H, a ∗ b⁻¹ ∈ H)'
    },
    conditions: {
      undergraduate: [
        'H는 비어있지 않음',
        '연산에 대해 닫혀있음: ∀a,b ∈ H, a • b ∈ H',
        '역원에 대해 닫혀있음: ∀a ∈ H, a⁻¹ ∈ H',
        '항등원을 포함: e ∈ H'
      ],
      graduate: [
        'Non-empty: H ≠ ∅',
        'One-step subgroup test: ∀a,b ∈ H, a ∗ b⁻¹ ∈ H',
        'Lagrange theorem: |H| divides |G| (finite case)',
        'Normal subgroup: gHg⁻¹ = H ∀g ∈ G (if H ◁ G)'
      ]
    }
  },

  {
    type: 'theorem',
    id: 'lagrange-theorem',
    title: '라그랑주 정리',
    statement: {
      undergraduate: `
        유한 그룹 G의 부분군 H에 대해<br>
        H의 크기는 항상 G의 크기를 나눕니다.<br><br>
        
        즉, |H| | |G| (|H|는 |G|의 약수)
      `,
      graduate: `
        <strong>정리 5.4</strong> (라그랑주 정리)<br>
        유한 그룹 G와 그 부분군 H ≤ G에 대해<br>
        |H| · [G : H] = |G|<br><br>
        
        여기서 [G : H] = |G/H|는 H의 지수(index)이다.<br>
        특히, |H| | |G|이다.
      `
    },
    proof: {
      undergraduate: `
        그룹 G를 H의 coset들로 분할하면:<br>
        • G = H ∪ g₁H ∪ g₂H ∪ ... ∪ gₖH<br>
        • 각 coset의 크기는 |H|와 같음<br>
        • coset들은 서로소<br><br>
        
        따라서 |G| = (coset 개수) × |H|이므로 |H| | |G|
      `,
      graduate: `
        <strong>증명</strong>:<br>
        G 위에서 관계 ~ 를 g ~ h ⇔ gh⁻¹ ∈ H로 정의하자.<br>
        이는 동치관계이고, 동치류는 left coset gH이다.<br><br>
        
        각 coset gH의 크기는 |H|이다 (∵ 좌곱셈은 전사함수)<br>
        G는 이들 coset들의 분할이므로:<br>
        |G| = [G : H] · |H| □<br><br>
        
        <strong>따름정리</strong>: 소수 p에 대해 |G| = p이면 G는 순환군이다.
      `
    },
    corollary: {
      undergraduate: `
        원소의 위수(order)도 그룹의 크기를 나눕니다.<br>
        즉, g의 위수는 |G|의 약수입니다.
      `,
      graduate: `
        <strong>따름정리</strong>: g ∈ G의 위수 ord(g)는 |G|를 나눈다.<br>
        특히, g^|G| = ε이다 (페르마의 소정리의 일반화).
      `
    }
  },

  {
    type: 'definition',
    id: 'cyclic-group-definition',
    title: '순환군',
    content: {
      undergraduate: `
        순환군은 하나의 원소로 생성되는 그룹입니다.<br>
        즉, 어떤 g ∈ G에 대해<br>
        G = {gⁿ : n ∈ ℤ} = ⟨g⟩<br><br>
        
        g를 생성원(generator)이라고 합니다.
      `,
      graduate: `
        <strong>정의 5.5</strong><br>
        그룹 G가 <em>순환군</em>(cyclic group)이라는 것은<br>
        어떤 원소 g ∈ G가 존재하여 G = ⟨g⟩인 것이다.<br><br>
        
        여기서 ⟨g⟩ = {gⁿ : n ∈ ℤ}는 g에 의해 생성되는 부분군이다.<br><br>
        
        순환군의 분류:<br>
        • 무한 순환군: ℤ와 동형<br>
        • 유한 순환군: ℤ/nℤ와 동형
      `
    },
    formula: {
      undergraduate: 'G = ⟨g⟩ = {gⁿ : n ∈ ℤ}',
      graduate: '⟨g⟩ = {gⁿ : n ∈ ℤ} ≅ ℤ or ℤ/nℤ'
    },
    conditions: {
      undergraduate: [
        '하나의 원소 g로 전체 그룹을 생성 가능',
        'G의 모든 원소는 g의 거듭제곱 형태',
        '순환군은 항상 아벨군(교환법칙 성립)',
        '유한 순환군의 크기가 n이면 ℤₙ과 동형'
      ],
      graduate: [
        'Fundamental theorem: 모든 순환군은 ℤ 또는 ℤ/nℤ와 동형',
        'Subgroups: 순환군의 부분군은 모두 순환군',
        'Generators: |G| = n일 때 φ(n)개의 생성원 존재',
        'Classification: 같은 크기의 순환군들은 서로 동형'
      ]
    }
  },

  {
    type: 'prog-definition',
    id: 'group-prog-def',
    title: '그룹 - 프로그래밍적 정의',
    content: `
      프로그래밍에서 그룹은 <strong>모든 연산이 가역인 구조</strong>입니다.<br><br>
      
      역원 덕분에:<br>
      • 모든 변환을 되돌릴 수 있음<br>
      • 방정식이 항상 유일해를 가짐<br>
      • 암호학에서 핵심 역할<br>
      • 대칭성과 변환의 수학적 모델<br><br>
      
      <strong>프로그래밍적 핵심:</strong><br>
      • 가역 연산의 추상화<br>
      • 상태 변환과 되돌리기 시스템<br>
      • 암호화/복호화 쌍<br>
      • 게임에서의 움직임과 취소
    `,
    interface: `interface Group<T> {
  operation: (a: T, b: T) => T;
  identity: T;
  inverse: (a: T) => T;
}`
  },

  {
    type: 'code-example',
    id: 'basic-groups',
    title: '기본 그룹 구현',
    code: `interface Group<T> {
  operation: (a: T, b: T) => T;
  identity: T;
  inverse: (a: T) => T;
}

// 정수 덧셈 그룹 (Z, +, 0)
const integerAdditionGroup: Group<number> = {
  operation: (a, b) => a + b,
  identity: 0,
  inverse: (a) => -a  // 모든 정수의 덧셈 역원
};

// 0이 아닌 유리수 곱셈 그룹 (Q*, ×, 1)
const rationalMultiplicationGroup: Group<number> = {
  operation: (a, b) => a * b,
  identity: 1,
  inverse: (a) => 1/a  // 모든 0이 아닌 수의 곱셈 역원
};

// 순환군 Z_4 = {0, 1, 2, 3}
type Z4 = 0 | 1 | 2 | 3;

const cyclicGroup4: Group<Z4> = {
  operation: (a, b) => ((a + b) % 4) as Z4,
  identity: 0,
  inverse: (a) => {
    const inverses: Record<Z4, Z4> = {0: 0, 1: 3, 2: 2, 3: 1};
    return inverses[a];
  }
};

// 테스트
console.log("정수 덧셈:", integerAdditionGroup.operation(5, -5)); // 0
console.log("5의 덧셈 역원:", integerAdditionGroup.inverse(5)); // -5

console.log("유리수 곱셈:", rationalMultiplicationGroup.operation(2, 0.5)); // 1
console.log("2의 곱셈 역원:", rationalMultiplicationGroup.inverse(2)); // 0.5

console.log("Z4에서 3 + 2:", cyclicGroup4.operation(3, 2)); // 1
console.log("Z4에서 3의 역원:", cyclicGroup4.inverse(3)); // 1`,
    language: 'typescript',
    output: `정수 덧셈: 0
5의 덧셈 역원: -5
유리수 곱셈: 1
2의 곱셈 역원: 0.5
Z4에서 3 + 2: 1
Z4에서 3의 역원: 1`
  },

  {
    type: 'code-example',
    id: 'group-properties-verification',
    title: '그룹 성질 검증',
    code: `// 그룹 성질을 검증하는 함수들
function hasInverses<T>(group: Group<T>, elements: T[]): boolean {
  return elements.every(element => {
    const inv = group.inverse(element);
    const product1 = group.operation(element, inv);
    const product2 = group.operation(inv, element);
    return product1 === group.identity && product2 === group.identity;
  });
}

function satisfiesCancellation<T>(
  group: Group<T>, 
  a: T, b: T, c: T
): { left: boolean; right: boolean } {
  // 좌소거: ab = ac => b = c
  const leftCancel = 
    group.operation(a, b) === group.operation(a, c) 
    ? b === c : true;
  
  // 우소거: ba = ca => b = c  
  const rightCancel = 
    group.operation(b, a) === group.operation(c, a)
    ? b === c : true;
    
  return { left: leftCancel, right: rightCancel };
}

// 정수 덧셈 그룹 테스트
const testElements = [-2, -1, 0, 1, 2];
console.log("정수 덧셈 그룹의 역원 존재:", 
  hasInverses(integerAdditionGroup, testElements)
); // true

// 순환군 Z4 테스트  
const z4Elements: Z4[] = [0, 1, 2, 3];
console.log("Z4의 역원 존재:", 
  hasInverses(cyclicGroup4, z4Elements)
); // true

// 소거 법칙 테스트
const cancellation = satisfiesCancellation(
  integerAdditionGroup, 5, 3, 7
);
console.log("소거 법칙 성립:", cancellation); // {left: true, right: true}

// 그룹에서는 방정식 ax = b의 해가 유일
function solveEquation<T>(
  group: Group<T>, 
  a: T, 
  b: T
): T {
  // ax = b => x = a^(-1)b
  return group.operation(group.inverse(a), b);
}

const solution = solveEquation(integerAdditionGroup, 5, 12);
console.log("5 + x = 12의 해:", solution); // 7
console.log("검증:", 
  integerAdditionGroup.operation(5, solution)
); // 12`,
    language: 'typescript',
    output: `정수 덧셈 그룹의 역원 존재: true
Z4의 역원 존재: true
소거 법칙 성립: { left: true, right: true }
5 + x = 12의 해: 7
검증: 12`
  },

  {
    type: 'code-example',
    id: 'symmetric-group-example',
    title: '대칭군: 순열 그룹',
    code: `// 3개 원소의 순열을 나타내는 대칭군 S3
type Permutation = [number, number, number];

// 순열을 함수 합성으로 구현
function compose(p1: Permutation, p2: Permutation): Permutation {
  return [p2[p1[0]], p2[p1[1]], p2[p1[2]]];
}

// 순열의 역원 계산
function inversePermutation(p: Permutation): Permutation {
  const result: [number, number, number] = [0, 0, 0];
  p.forEach((value, index) => {
    result[value] = index;
  });
  return result;
}

// 대칭군 S3 구현
const symmetricGroup3: Group<Permutation> = {
  operation: compose,
  identity: [0, 1, 2], // 항등순열
  inverse: inversePermutation
};

// S3의 모든 원소들
const s3Elements: Permutation[] = [
  [0, 1, 2], // 항등원
  [0, 2, 1], // (1 2) 전치
  [1, 0, 2], // (0 1) 전치  
  [1, 2, 0], // (0 1 2) 순환
  [2, 0, 1], // (0 2 1) 순환
  [2, 1, 0]  // (0 2)(1) 전치
];

// 순열 합성 테스트
const perm1: Permutation = [1, 0, 2]; // (0 1)
const perm2: Permutation = [0, 2, 1]; // (1 2)
const composition = symmetricGroup3.operation(perm1, perm2);

console.log("순열 (0 1):", perm1);
console.log("순열 (1 2):", perm2);
console.log("합성 (0 1)(1 2):", composition); // [2, 0, 1] = (0 2 1)

// 역원 계산
const inverse = symmetricGroup3.inverse(perm1);
console.log("(0 1)의 역원:", inverse); // [1, 0, 2] = (0 1) 자기 자신

// 순열이 가역임을 확인
const identity = symmetricGroup3.operation(perm1, inverse);
console.log("순열과 역원의 곱:", identity); // [0, 1, 2] = 항등원

console.log("\\n대칭군 S3의 크기:", s3Elements.length); // 6 = 3!`,
    language: 'typescript',
    output: `순열 (0 1): [1, 0, 2]
순열 (1 2): [0, 2, 1]  
합성 (0 1)(1 2): [2, 0, 1]
(0 1)의 역원: [1, 0, 2]
순열과 역원의 곱: [0, 1, 2]

대칭군 S3의 크기: 6`
  },

  {
    type: 'important',
    id: 'group-vs-monoid',
    content: `
      <strong>모노이드 vs 그룹:</strong><br><br>
      
      <strong>모노이드의 한계:</strong><br>
      • 모든 원소가 역원을 가지지 않음<br>
      • 방정식 ax = b가 항상 해를 가지지 않음<br><br>
      
      <strong>그룹의 장점:</strong><br>
      • 모든 연산이 가역<br>
      • 방정식이 항상 유일해를 가짐<br>
      • 대칭성과 변환을 완벽히 모델링
    `
  },

  {
    type: 'code-example',
    id: 'cryptography-group-example',
    title: '암호학에서의 그룹: 단순한 시저 암호',
    code: `// 알파벳을 숫자로 매핑하는 시저 암호 그룹
// Z26 = {0, 1, 2, ..., 25}에서의 덧셈 그룹

type Z26 = number; // 0-25 범위

const caesarCipher: Group<Z26> = {
  operation: (a, b) => (a + b) % 26,
  identity: 0,
  inverse: (a) => (26 - a) % 26
};

// 문자를 숫자로, 숫자를 문자로 변환
function charToNum(char: string): Z26 {
  return char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
}

function numToChar(num: Z26): string {
  return String.fromCharCode(num + 'A'.charCodeAt(0));
}

// 시저 암호 암호화 (키 k만큼 이동)
function encrypt(message: string, key: Z26): string {
  return message.toUpperCase().split('').map(char => {
    if (char >= 'A' && char <= 'Z') {
      const num = charToNum(char);
      const encrypted = caesarCipher.operation(num, key);
      return numToChar(encrypted);
    }
    return char; // 공백이나 특수문자는 그대로
  }).join('');
}

// 시저 암호 복호화 (역원을 이용)
function decrypt(ciphertext: string, key: Z26): string {
  const inverseKey = caesarCipher.inverse(key);
  return encrypt(ciphertext, inverseKey); // 역원을 키로 사용
}

// 테스트
const plaintext = "HELLO WORLD";
const secretKey = 3;

console.log("원문:", plaintext);
console.log("키:", secretKey);

const encrypted = encrypt(plaintext, secretKey);
console.log("암호문:", encrypted);

const decrypted = decrypt(encrypted, secretKey);
console.log("복호문:", decrypted);

// 그룹의 성질 확인
console.log("\\n그룹 성질 검증:");
console.log("키 3의 역원:", caesarCipher.inverse(3)); // 23
console.log("3 + 23 mod 26:", caesarCipher.operation(3, 23)); // 0 (항등원)
console.log("암호화-복호화 결과:", decrypted === plaintext); // true`,
    language: 'typescript',
    output: `원문: HELLO WORLD
키: 3
암호문: KHOOR ZRUOG
복호문: HELLO WORLD

그룹 성질 검증:
키 3의 역원: 23
3 + 23 mod 26: 0
암호화-복호화 결과: true`
  }
];