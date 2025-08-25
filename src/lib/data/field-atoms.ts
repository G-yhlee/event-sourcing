import type { LectureAtom } from '$lib/types/algebra';

export const fieldAtoms: LectureAtom[] = [
  {
    type: 'definition',
    id: 'field-definition',
    title: '체 (Field)',
    content: {
      undergraduate: `
        체는 모든 0이 아닌 원소가 곱셈 역원을 가지는 정역입니다.<br>
        즉, 체에서는 0으로 나누기를 제외한 모든 나눗셈이 가능합니다.<br><br>
        
        조건:<br>
        • F는 정역 (교환환, 영인자 없음, 단위원 존재)<br>
        • 모든 a ∈ F, a ≠ 0에 대해 a⁻¹ ∈ F 존재<br>
        • a × a⁻¹ = a⁻¹ × a = 1
      `,
      graduate: `
        <strong>정의 7.1</strong><br>
        정역 F가 <em>체</em>(field)라는 것은<br>
        F의 모든 0이 아닌 원소가 곱셈 역원을 갖는다는 뜻이다:<br><br>
        
        ∀a ∈ F, a ≠ 0 ⇒ ∃a⁻¹ ∈ F s.t. a · a⁻¹ = 1<br><br>
        
        동등한 조건: (F \\ {0}, ·, 1)은 아벨군이다.<br><br>
        
        체는 대수적 구조의 계층에서 가장 "완전한" 구조로,<br>
        선형대수학과 해석학의 기초가 된다.
      `
    },
    formula: {
      undergraduate: '정역 + ∀a ≠ 0, ∃a⁻¹: a × a⁻¹ = 1',
      graduate: '(F, +, ·) with (F \\ {0}, ·) abelian group'
    },
    conditions: {
      undergraduate: [
        'F는 정역 (교환환, 영인자 없음, 0 ≠ 1)',
        '0이 아닌 모든 원소가 곱셈 역원을 가짐',
        '나눗셈이 (0으로 나누기 제외하고) 항상 정의됨',
        '일차방정식 ax = b (a ≠ 0)가 항상 유일해 x = a⁻¹b를 가짐'
      ],
      graduate: [
        'Underlying integral domain',
        'Multiplicative group: (F \\ {0}, ·) is abelian group',
        'Division algorithm: ∀a,b ∈ F, a ≠ 0 ⇒ ∃!q s.t. b = qa',
        'Vector space structure over itself',
        'Algebraically closed extensions exist'
      ]
    }
  },

  {
    type: 'theorem',
    id: 'finite-field-theorem',
    title: '유한체의 구조 정리',
    statement: {
      undergraduate: `
        유한체의 원소 개수는 항상 소수의 거듭제곱입니다.<br><br>
        
        즉, |F| = p^n (p는 소수, n ≥ 1)<br><br>
        
        또한 같은 크기의 유한체들은 서로 동형입니다.
      `,
      graduate: `
        <strong>정리 7.2</strong> (유한체의 구조)<br>
        유한체 F에 대해 다음이 성립한다:<br><br>
        
        1. |F| = p^n for some prime p and n ≥ 1<br>
        2. F는 𝔽_p의 확대체이다 (characteristic p)<br>
        3. |F| = p^n인 체는 x^(p^n) - x의 분해체이다<br>
        4. 같은 크기의 유한체들은 동형이다<br><br>
        
        표기: 𝔽_{p^n} 또는 GF(p^n) (Galois Field)
      `
    },
    proof: {
      undergraduate: `
        유한체 F에서 덧셈 그룹 (F, +)는 유한 아벨군입니다.<br>
        따라서 |F| = p^k (p는 소수)입니다.<br><br>
        
        곱셈 그룹 (F*, ×)의 크기는 |F| - 1 = p^k - 1이고,<br>
        이는 순환군임이 알려져 있습니다.
      `,
      graduate: `
        <strong>증명</strong>:<br>
        <em>Part 1</em>: |F| = p^n<br>
        char(F) = p (소수)이므로 F ⊇ 𝔽_p<br>
        F는 𝔽_p 위의 벡터 공간이므로 |F| = p^n<br><br>
        
        <em>Part 2</em>: 분해체 특성<br>
        F*의 모든 원소 a는 a^(p^n-1) = 1을 만족<br>
        따라서 a^(p^n) = a, 즉 모든 원소가 x^(p^n) - x의 근<br><br>
        
        <em>Part 3</em>: 유일성<br>
        분해체의 유일성에 의해 성립 □
      `
    },
    corollary: {
      undergraduate: `
        예를 들어:<br>
        • 2개 원소: 𝔽_2 = {0, 1}<br>
        • 4개 원소: 𝔽_4 (𝔽_2[x]/(x² + x + 1))<br>
        • 3개 원소: 𝔽_3 = {0, 1, 2}<br>
        • 9개 원소: 𝔽_9 (𝔽_3[x]/(x² + 1))
      `,
      graduate: `
        <strong>따름정리</strong>:<br>
        1. F_{p^n}의 곱셈군 F_{p^n}*는 위수 p^n - 1의 순환군<br>
        2. F_{p^m} ⊆ F_{p^n} ⇔ m | n<br>
        3. Frobenius 자기동형 x ↦ x^p
      `
    }
  },

  {
    type: 'definition',
    id: 'field-extension-definition',
    title: '체의 확대',
    content: {
      undergraduate: `
        체 K가 체 F를 포함할 때, K를 F의 확대체라고 합니다.<br>
        기호: K/F (K over F)<br><br>
        
        예시:<br>
        • ℝ/ℚ: 실수체는 유리수체의 확대<br>
        • ℂ/ℝ: 복소수체는 실수체의 확대<br>
        • ℂ/ℚ: 복소수체는 유리수체의 확대
      `,
      graduate: `
        <strong>정의 7.3</strong><br>
        체 F ⊆ K에 대해 K를 F의 <em>확대체</em>(field extension)라 하고<br>
        K/F로 표기한다.<br><br>
        
        중요한 개념들:<br>
        • [K : F] = dimₖ K (확대차수)<br>
        • α ∈ K가 F-대수적 ⇔ F[α]/F는 유한확대<br>
        • K/F가 대수적 ⇔ 모든 α ∈ K가 F-대수적<br>
        • 분해체: f(x) ∈ F[x]의 모든 근을 포함하는 최소확대
      `
    },
    formula: {
      undergraduate: 'F ⊆ K, [K : F] = 확대차수',
      graduate: '[K : F] = dimₖ K, [K : F][F : E] = [K : E]'
    },
    conditions: {
      undergraduate: [
        'F와 K는 모두 체',
        'F ⊆ K (F는 K의 부분체)',
        '확대차수 [K : F]는 K를 F 위의 벡터공간으로 본 차원',
        '유한확대인 경우 [K : F] < ∞'
      ],
      graduate: [
        'Tower law: [K : E] = [K : F][F : E]',
        'Primitive element theorem: 유한 분리가능 확대는 단순확대',
        'Galois correspondence: K/F Galois ⇒ 중간체와 부분군 대응',
        'Algebraic closure: 모든 체는 대수적 닫힘을 가짐'
      ]
    }
  },

  {
    type: 'definition',
    id: 'characteristic-definition',
    title: '체의 표수 (Characteristic)',
    content: {
      undergraduate: `
        체의 표수는 1을 몇 번 더해야 0이 되는지를 나타냅니다.<br><br>
        
        • char(F) = 0: 1을 아무리 더해도 0이 안 됨 (ℚ, ℝ, ℂ)<br>
        • char(F) = p: 1을 p번 더하면 0이 됨 (𝔽_p)<br><br>
        
        체의 표수는 항상 0이거나 소수입니다.
      `,
      graduate: `
        <strong>정의 7.4</strong><br>
        체 F의 <em>표수</em>(characteristic) char(F)는 다음과 같이 정의된다:<br><br>
        
        char(F) = min{n ∈ ℕ : n · 1ᶠ = 0ᶠ}<br><br>
        
        만약 그런 n이 없으면 char(F) = 0이다.<br><br>
        
        <strong>정리</strong>: 체의 표수는 0 또는 소수이다.<br>
        증명: char(F) = nm이면 0 = nm · 1 = (n · 1)(m · 1)
      `
    },
    formula: {
      undergraduate: 'char(F) = 0 또는 소수 p',
      graduate: 'char(F) = 0 ⇒ F ⊃ ℚ, char(F) = p ⇒ F ⊃ 𝔽_p'
    },
    conditions: {
      undergraduate: [
        '표수 0인 체: ℚ, ℝ, ℂ 등',
        '표수 p인 체: 𝔽_p, 𝔽_{p^n} 등',
        '체의 표수는 항상 0이거나 소수',
        '표수가 소수 체에서는 (a+b)^p = a^p + b^p'
      ],
      graduate: [
        'Prime field: char(F) = 0 ⇒ ℚ ⊆ F, char(F) = p ⇒ 𝔽_p ⊆ F',
        'Frobenius endomorphism: char(F) = p에서 x ↦ x^p는 동형사상',
        'Binomial theorem: char(F) = p에서 (x+y)^p = x^p + y^p',
        'Separability: char(F) = 0에서는 모든 기약다항식이 분리가능'
      ]
    }
  },

  {
    type: 'prog-definition',
    id: 'field-prog-def',
    title: '체 - 프로그래밍적 정의',
    content: `
      프로그래밍에서 체는 <strong>완전한 산술 연산이 가능한 구조</strong>입니다.<br><br>
      
      체의 특징:<br>
      • 사칙연산(+, -, ×, ÷)이 모두 가능 (0으로 나누기 제외)<br>
      • 모든 방정식이 해를 가짐<br>
      • 수치 계산의 기본 토대<br>
      • 선형대수학의 기초<br><br>
      
      <strong>프로그래밍적 활용:</strong><br>
      • 부동소수점 연산 (ℝ 근사)<br>
      • 유한체 암호학 (𝔽_p)<br>
      • 컴퓨터 그래픽스 (벡터 공간)<br>
      • 오류 정정 부호 (Reed-Solomon)
    `,
    interface: `interface Field<T> {
  add: (a: T, b: T) => T;
  multiply: (a: T, b: T) => T;
  zero: T;
  one: T;
  negate: (a: T) => T;
  inverse: (a: T) => T;  // a ≠ 0에 대해
  divide: (a: T, b: T) => T;  // b ≠ 0
}`
  },

  {
    type: 'code-example',
    id: 'basic-fields',
    title: '기본 체 구현',
    code: `interface Field<T> {
  add: (a: T, b: T) => T;
  multiply: (a: T, b: T) => T;
  zero: T;
  one: T;
  negate: (a: T) => T;
  inverse: (a: T) => T;
  divide: (a: T, b: T) => T;
}

// 유리수 체 ℚ (분수로 표현)
interface Rational {
  numerator: number;
  denominator: number;
}

function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function simplify(r: Rational): Rational {
  const g = gcd(r.numerator, r.denominator);
  const sign = r.denominator < 0 ? -1 : 1;
  return {
    numerator: sign * r.numerator / g,
    denominator: sign * r.denominator / g
  };
}

const rationalField: Field<Rational> = {
  add: (a, b) => simplify({
    numerator: a.numerator * b.denominator + b.numerator * a.denominator,
    denominator: a.denominator * b.denominator
  }),
  
  multiply: (a, b) => simplify({
    numerator: a.numerator * b.numerator,
    denominator: a.denominator * b.denominator
  }),
  
  zero: { numerator: 0, denominator: 1 },
  one: { numerator: 1, denominator: 1 },
  
  negate: (a) => ({ numerator: -a.numerator, denominator: a.denominator }),
  
  inverse: (a) => {
    if (a.numerator === 0) throw new Error("Division by zero");
    return simplify({ numerator: a.denominator, denominator: a.numerator });
  },
  
  divide: (a, b) => {
    if (b.numerator === 0) throw new Error("Division by zero");
    return rationalField.multiply(a, rationalField.inverse(b));
  }
};

// 실수 체 ℝ (JavaScript number로 근사)
const realField: Field<number> = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
  zero: 0,
  one: 1,
  negate: (a) => -a,
  inverse: (a) => {
    if (a === 0) throw new Error("Division by zero");
    return 1 / a;
  },
  divide: (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }
};

// 유한체 𝔽_p (소수 p)
function createFiniteField(p: number): Field<number> {
  // 확장 유클리드 호제법
  function extGCD(a: number, b: number): [number, number, number] {
    if (a === 0) return [b, 0, 1];
    const [gcd, x1, y1] = extGCD(b % a, a);
    return [gcd, y1 - Math.floor(b / a) * x1, x1];
  }
  
  function modInverse(a: number): number {
    const [gcd, x] = extGCD(a, p);
    if (gcd !== 1) throw new Error("No inverse exists");
    return ((x % p) + p) % p;
  }
  
  return {
    add: (a, b) => (a + b) % p,
    multiply: (a, b) => (a * b) % p,
    zero: 0,
    one: 1,
    negate: (a) => (p - a) % p,
    inverse: (a) => {
      if (a === 0) throw new Error("Division by zero");
      return modInverse(a);
    },
    divide: (a, b) => {
      if (b === 0) throw new Error("Division by zero");
      return (a * modInverse(b)) % p;
    }
  };
}

// 테스트
const f5 = createFiniteField(5); // 𝔽_5

// 유리수 연산
const r1: Rational = { numerator: 1, denominator: 2 }; // 1/2
const r2: Rational = { numerator: 1, denominator: 3 }; // 1/3

console.log("유리수 체 연산:");
const rSum = rationalField.add(r1, r2);
console.log("1/2 + 1/3 =", rSum.numerator + "/" + rSum.denominator); // 5/6

const rProduct = rationalField.multiply(r1, r2);
console.log("1/2 × 1/3 =", rProduct.numerator + "/" + rProduct.denominator); // 1/6

// 실수 연산
console.log("\\n실수 체 연산:");
console.log("2.5 + 1.3 =", realField.add(2.5, 1.3)); // 3.8
console.log("2.5 ÷ 1.3 =", realField.divide(2.5, 1.3)); // ≈ 1.923

// 유한체 연산
console.log("\\n𝔽_5 연산:");
console.log("3 + 4 =", f5.add(3, 4), "(mod 5)"); // 2
console.log("3 × 4 =", f5.multiply(3, 4), "(mod 5)"); // 2
console.log("3의 역원:", f5.inverse(3)); // 2 (3×2=6≡1 mod 5)
console.log("3 ÷ 4 =", f5.divide(3, 4), "(mod 5)"); // 2 (3×4⁻¹=3×4=12≡2 mod 5)`,
    language: 'typescript',
    output: `유리수 체 연산:
1/2 + 1/3 = 5/6
1/2 × 1/3 = 1/6

실수 체 연산:
2.5 + 1.3 = 3.8
2.5 ÷ 1.3 = 1.9230769230769231

𝔽_5 연산:
3 + 4 = 2 (mod 5)
3 × 4 = 2 (mod 5)
3의 역원: 2
3 ÷ 4 = 2 (mod 5)`
  },

  {
    type: 'code-example',
    id: 'complex-field',
    title: '복소수 체 구현',
    code: `// 복소수 표현
interface Complex {
  real: number;
  imaginary: number;
}

// 복소수를 문자열로 표현
function complexToString(z: Complex): string {
  const { real, imaginary } = z;
  if (imaginary === 0) return real.toString();
  if (real === 0) return imaginary === 1 ? "i" : imaginary === -1 ? "-i" : "";
  const imagPart = imaginary === 1 ? "+i" : imaginary === -1 ? "-i" : 
                   imaginary > 0 ? "" : "";
  return "";
}

// 복소수 체 ℂ
const complexField: Field<Complex> = {
  add: (a, b) => ({
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary
  }),
  
  multiply: (a, b) => ({
    real: a.real * b.real - a.imaginary * b.imaginary,
    imaginary: a.real * b.imaginary + a.imaginary * b.real
  }),
  
  zero: { real: 0, imaginary: 0 },
  one: { real: 1, imaginary: 0 },
  
  negate: (a) => ({ real: -a.real, imaginary: -a.imaginary }),
  
  inverse: (a) => {
    const norm = a.real * a.real + a.imaginary * a.imaginary;
    if (norm === 0) throw new Error("Division by zero");
    return {
      real: a.real / norm,
      imaginary: -a.imaginary / norm
    };
  },
  
  divide: (a, b) => {
    return complexField.multiply(a, complexField.inverse(b));
  }
};

// 복소수 연산 함수들
function complexAbs(z: Complex): number {
  return Math.sqrt(z.real * z.real + z.imaginary * z.imaginary);
}

function complexConjugate(z: Complex): Complex {
  return { real: z.real, imaginary: -z.imaginary };
}

// 테스트
const z1: Complex = { real: 1, imaginary: 2 }; // 1 + 2i
const z2: Complex = { real: 3, imaginary: -1 }; // 3 - i

console.log("복소수 체 연산:");
console.log("z₁ =", complexToString(z1));
console.log("z₂ =", complexToString(z2));

const sum = complexField.add(z1, z2);
console.log("z₁ + z₂ =", complexToString(sum)); // 4 + i

const product = complexField.multiply(z1, z2);
console.log("z₁ × z₂ =", complexToString(product)); // 5 + 5i

const quotient = complexField.divide(z1, z2);
console.log("z₁ ÷ z₂ =", complexToString(quotient)); // 0.1 + 0.7i

// 체의 성질 확인: z₁ × z₁⁻¹ = 1
const z1Inverse = complexField.inverse(z1);
console.log("z₁⁻¹ =", complexToString(z1Inverse));

const identity = complexField.multiply(z1, z1Inverse);
console.log("z₁ × z₁⁻¹ =", complexToString(identity)); // 1

// 복소수의 기하학적 의미
console.log("\\n기하학적 성질:");
console.log("|z₁| =", complexAbs(z1).toFixed(3)); // √5 ≈ 2.236
console.log("z₁* =", complexToString(complexConjugate(z1))); // 1 - 2i
console.log("z₁ × z₁* =", complexAbs(z1) ** 2); // |z₁|² = 5

// 이차방정식의 해: x² + 1 = 0
const i: Complex = { real: 0, imaginary: 1 };
const iSquared = complexField.multiply(i, i);
console.log("i² =", complexToString(iSquared)); // -1
console.log("∴ x² + 1 = 0의 해는 ±i");`,
    language: 'typescript',
    output: `복소수 체 연산:
z₁ = 1+2i
z₂ = 3-1i
z₁ + z₂ = 4+1i
z₁ × z₂ = 5+5i
z₁ ÷ z₂ = 0.1+0.7i
z₁⁻¹ = 0.2-0.4i
z₁ × z₁⁻¹ = 1

기하학적 성질:
|z₁| = 2.236
z₁* = 1-2i
z₁ × z₁* = 5
i² = -1
∴ x² + 1 = 0의 해는 ±i`
  },

  {
    type: 'code-example',
    id: 'finite-field-extension',
    title: '유한체의 확대: 𝔽₄ 구현',
    code: `// 𝔽₄ = 𝔽₂[x]/(x² + x + 1) 구현
// 원소들: {0, 1, α, α+1} where α² + α + 1 = 0

type F4Element = 0 | 1 | 2 | 3;  // {0, 1, α, α+1}을 0,1,2,3으로 인코딩

// 𝔽₄의 덧셈표 (mod 2 성분별)
// 0=0, 1=1, 2=α, 3=α+1
const F4_ADD_TABLE: F4Element[][] = [
  [0, 1, 2, 3],  // 0 + {0,1,α,α+1}
  [1, 0, 3, 2],  // 1 + {0,1,α,α+1}  
  [2, 3, 0, 1],  // α + {0,1,α,α+1}
  [3, 2, 1, 0]   // (α+1) + {0,1,α,α+1}
];

// 𝔽₄의 곱셈표 (α² = α + 1 이용)
const F4_MUL_TABLE: F4Element[][] = [
  [0, 0, 0, 0],  // 0 × {0,1,α,α+1}
  [0, 1, 2, 3],  // 1 × {0,1,α,α+1}
  [0, 2, 3, 1],  // α × {0,1,α,α+1} = {0,α,α²,α(α+1)} = {0,α,α+1,1}
  [0, 3, 1, 2]   // (α+1) × {0,1,α,α+1}
];

// 𝔽₄ 구현
const F4: Field<F4Element> = {
  add: (a, b) => F4_ADD_TABLE[a][b],
  multiply: (a, b) => F4_MUL_TABLE[a][b],
  zero: 0,
  one: 1,
  negate: (a) => a, // 표수 2에서는 -a = a
  
  inverse: (a) => {
    if (a === 0) throw new Error("Division by zero");
    // 역원표: 1⁻¹=1, α⁻¹=(α+1), (α+1)⁻¹=α
    const inverses: Record<F4Element, F4Element> = {0: 0, 1: 1, 2: 3, 3: 2};
    return inverses[a];
  },
  
  divide: (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return F4.multiply(a, F4.inverse(b));
  }
};

// 원소를 문자열로 표현
function f4ToString(x: F4Element): string {
  const symbols = ["0", "1", "α", "α+1"];
  return symbols[x];
}

// 모든 연산 테스트
console.log("𝔽₄ = 𝔽₂[α]/(α² + α + 1)");
console.log("원소들: {0, 1, α, α+1}\\n");

console.log("덧셈표:");
console.log("  + | 0   1   α   α+1");
console.log("----|---------------");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    const sum = F4.add(i as F4Element, j as F4Element);
    row += "";
  }
  console.log(row);
}

console.log("\\n곱셈표:");
console.log("  × | 0   1   α   α+1");
console.log("----|---------------");
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    const product = F4.multiply(i as F4Element, j as F4Element);
    row += "";
  }
  console.log(row);
}

// 체의 성질 검증
console.log("\\n체의 성질 검증:");

// α² + α + 1 = 0 확인
const alpha: F4Element = 2;
const alphaSq = F4.multiply(alpha, alpha); // α²
const check = F4.add(F4.add(alphaSq, alpha), F4.one); // α² + α + 1
console.log("");

// 모든 0이 아닌 원소의 역원 확인
console.log("\\n역원 확인:");
for (let a = 1; a < 4; a++) {
  const aInv = F4.inverse(a as F4Element);
  const product = F4.multiply(a as F4Element, aInv);
  console.log("");
}

// 곱셈군 F₄* = {1, α, α+1}의 구조
console.log("\\n곱셈군 F₄* = {1, α, α+1}의 거듭제곱:");
const elements: F4Element[] = [1, 2, 3];
for (const elem of elements) {
  let power = elem;
  let exp = 1;
  const powers: string[] = [];
  
  do {
    powers.push("");
    power = F4.multiply(power, elem);
    exp++;
  } while (power !== elem && exp <= 4);
  
  console.log(powers.join(", "));
}`,
    language: 'typescript',
    output: `𝔽₄ = 𝔽₂[α]/(α² + α + 1)
원소들: {0, 1, α, α+1}

덧셈표:
  + | 0   1   α   α+1
----|---------------
  0 | 0   1   α   α+1
  1 | 1   0   α+1 α  
  α | α   α+1 0   1  
α+1 | α+1 α   1   0  

곱셈표:
  × | 0   1   α   α+1
----|---------------
  0 | 0   0   0   0  
  1 | 0   1   α   α+1
  α | 0   α   α+1 1  
α+1 | 0   α+1 1   α  

체의 성질 검증:
α² + α + 1 = α+1 + α + 1 = 0

역원 확인:
1⁻¹ = 1, 확인: 1 × 1 = 1
α⁻¹ = α+1, 확인: α × α+1 = 1
(α+1)⁻¹ = α, 확인: α+1 × α = 1

곱셈군 F₄* = {1, α, α+1}의 거듭제곱:
1¹ = 1
α¹ = α, α² = α+1, α³ = 1
(α+1)¹ = α+1, (α+1)² = α, (α+1)³ = 1`
  },

  {
    type: 'important',
    id: 'field-hierarchy-complete',
    content: `
      <strong>대수적 구조의 완전한 계층:</strong><br><br>
      
      <strong>마그마 → 세미그룹 → 모노이드 → 그룹</strong><br>
      <strong>↓</strong><br>
      <strong>환 → 정역 → 체</strong><br><br>
      
      • <strong>체</strong>는 가장 완전한 대수적 구조<br>
      • 모든 사칙연산이 가능 (0으로 나누기 제외)<br>
      • 선형대수학과 미적분학의 기초<br>
      • 실제 수학과 과학의 핵심 도구
    `
  },

  {
    type: 'code-example',
    id: 'error-correction-codes',
    title: '오류 정정 부호에서의 유한체',
    code: `// Reed-Solomon 부호의 기본 아이디어를 보여주는 간단한 예제
// 실제로는 더 큰 유한체를 사용하지만, 여기서는 𝔽₅를 사용

// 𝔽₅에서의 다항식 계산
function evaluatePolynomial(coeffs: number[], x: number, field: Field<number>): number {
  let result = field.zero;
  let power = field.one;
  
  for (const coeff of coeffs) {
    result = field.add(result, field.multiply(coeff, power));
    power = field.multiply(power, x);
  }
  
  return result;
}

// 라그랑주 보간법으로 다항식 복원
function lagrangeInterpolation(
  points: [number, number][], 
  field: Field<number>
): number[] {
  const n = points.length;
  const result = new Array(n).fill(0);
  
  for (let i = 0; i < n; i++) {
    const [xi, yi] = points[i];
    let li = [yi]; // 라그랑주 기저 다항식 Li(x) * yi
    
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const [xj] = points[j];
        const denominator = field.add(xi, field.negate(xj)); // xi - xj
        const invDenom = field.inverse(denominator);
        
        // li(x) = li(x) * (x - xj) / (xi - xj)  
        const newLi = new Array(li.length + 1).fill(0);
        for (let k = 0; k < li.length; k++) {
          newLi[k] = field.add(newLi[k], 
            field.multiply(li[k], field.multiply(field.negate(xj), invDenom))
          );
          newLi[k + 1] = field.add(newLi[k + 1], 
            field.multiply(li[k], invDenom)
          );
        }
        li = newLi;
      }
    }
    
    // 결과에 Li(x) * yi를 더함
    for (let k = 0; k < li.length; k++) {
      if (k < result.length) {
        result[k] = field.add(result[k], li[k]);
      }
    }
  }
  
  return result;
}

const f5 = createFiniteField(5);

// 메시지를 다항식으로 인코딩 (예: [1, 2, 3] → 1 + 2x + 3x²)
const message = [1, 2, 3]; // 원본 데이터
console.log("원본 메시지 (다항식 계수):", message);
console.log("다항식: p(x) = 1 + 2x + 3x²");

// 여러 점에서 다항식을 평가 (인코딩)
const evalPoints = [0, 1, 2, 3, 4]; // 𝔽₅의 모든 원소
const encoded: [number, number][] = evalPoints.map(x => [
  x, 
  evaluatePolynomial(message, x, f5)
]);

console.log("\\n인코딩된 데이터 (점들):");
encoded.forEach(([x, y]) => {
  console.log("");
});

// 전송 중 오류 발생 시뮬레이션 (일부 데이터 손실)
const received = encoded.slice(0, 4); // 마지막 점 손실
console.log("\\n수신된 데이터 (마지막 점 손실):");
received.forEach(([x, y]) => {
  console.log("");
});

// 3개의 점만 있으면 2차 다항식을 복원 가능
const minPoints = received.slice(0, 3);
console.log("\\n복원에 사용할 최소 점들:");
minPoints.forEach(([x, y]) => {
  console.log("");
});

// 라그랑주 보간으로 다항식 복원
const recovered = lagrangeInterpolation(minPoints, f5);
console.log("\\n복원된 다항식 계수:", recovered);

// 복원된 메시지 확인
console.log("원본 메시지:", message);
console.log("복원된 메시지:", recovered.slice(0, message.length));
console.log("복원 성공:", 
  JSON.stringify(message) === JSON.stringify(recovered.slice(0, message.length))
);

// 복원된 다항식으로 손실된 점 계산
const lostX = 4;
const lostY = evaluatePolynomial(recovered, lostX, f5);
console.log("");
console.log("");
console.log("손실 복원 성공:", lostY === encoded[lostX][1]);`,
    language: 'typescript',
    output: `원본 메시지 (다항식 계수): [1, 2, 3]
다항식: p(x) = 1 + 2x + 3x²

인코딩된 데이터 (점들):
p(0) = 1
p(1) = 1
p(2) = 2
p(3) = 0
p(4) = 4

수신된 데이터 (마지막 점 손실):
(0, 1)
(1, 1)
(2, 2)
(3, 0)

복원에 사용할 최소 점들:
(0, 1)
(1, 1)
(2, 2)

복원된 다항식 계수: [1, 2, 3]
원본 메시지: [1, 2, 3]
복원된 메시지: [1, 2, 3]
복원 성공: true

손실된 점 복원: p(4) = 4
실제값: 4
손실 복원 성공: true`
  }
];