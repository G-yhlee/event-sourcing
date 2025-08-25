import type { LectureAtom } from '$lib/types/algebra';

export const ringAtoms: LectureAtom[] = [
	{
		type: 'definition',
		id: 'ring-definition',
		title: '환 (Ring)',
		content: {
			undergraduate: `
        환은 두 개의 이항 연산을 가지는 대수적 구조입니다.<br>
        집합 R에 덧셈(+)과 곱셈(×) 연산이 정의되어:<br><br>
        
        • (R, +)는 아벨군 (교환법칙 성립하는 그룹)<br>
        • (R, ×)는 모노이드<br>
        • 분배법칙이 성립: a × (b + c) = (a × b) + (a × c)
      `,
			graduate: `
        <strong>정의 6.1</strong><br>
        <em>환</em>(ring)은 집합 R과 두 이항 연산 +, · 에 대한 구조 (R, +, ·)로서<br>
        다음을 만족한다:<br><br>
        
        1. (R, +)는 아벨군이다<br>
        2. (R, ·)는 결합법칙을 만족한다<br>
        3. 분배법칙: ∀a,b,c ∈ R<br>
           a · (b + c) = a · b + a · c (좌분배)<br>
           (b + c) · a = b · a + c · a (우분배)<br><br>
        
        단위원 1 ∈ R이 존재하면 <em>단위환</em>(unital ring)이라 한다.
      `
		},
		formula: {
			undergraduate: '(R, +, ×) with (R, +): 아벨군, 분배법칙 성립',
			graduate: '(R, +, ·) with a·(b+c) = a·b + a·c, (b+c)·a = b·a + c·a'
		},
		conditions: {
			undergraduate: [
				'R은 비어있지 않은 집합',
				'(R, +)는 아벨군: 결합법칙, 교환법칙, 항등원 0, 역원 -a',
				'곱셈 ×는 결합법칙을 만족',
				'좌분배법칙: a × (b + c) = (a × b) + (a × c)',
				'우분배법칙: (b + c) × a = (b × a) + (c × a)'
			],
			graduate: [
				'Additive group: (R, +, 0) is an abelian group',
				'Multiplicative semigroup: (R, ·) is associative',
				'Distributivity: · distributes over + from both sides',
				'Zero element: 0 · a = a · 0 = 0 ∀a ∈ R',
				'Unity (optional): ∃1 ∈ R s.t. 1 · a = a · 1 = a'
			]
		}
	},

	{
		type: 'theorem',
		id: 'ring-basic-properties',
		title: '환의 기본 성질',
		statement: {
			undergraduate: `
        환에서 다음이 성립합니다:<br><br>
        
        • 0 × a = a × 0 = 0 (영원소의 성질)<br>
        • (-a) × b = -(a × b) = a × (-b)<br>
        • (-a) × (-b) = a × b
      `,
			graduate: `
        <strong>정리 6.2</strong> (환의 기본 성질)<br>
        환 (R, +, ·)에서 다음이 성립한다:<br><br>
        
        1. ∀a ∈ R, 0 · a = a · 0 = 0<br>
        2. ∀a,b ∈ R, (-a) · b = -(a · b) = a · (-b)<br>
        3. ∀a,b ∈ R, (-a) · (-b) = a · b<br>
        4. ∀a,b ∈ R, a · (b - c) = a · b - a · c
      `
		},
		proof: {
			undergraduate: `
        0 × a = 0을 보이자:<br>
        • 0 × a = (0 + 0) × a (0의 성질)<br>
        • (0 + 0) × a = 0 × a + 0 × a (분배법칙)<br>
        • 0 × a = 0 × a + 0 × a<br>
        • 0 = 0 × a (양변에서 0 × a를 빼면)<br><br>
        
        다른 성질들도 비슷하게 분배법칙을 이용해 증명할 수 있습니다.
      `,
			graduate: `
        <strong>증명</strong>:<br>
        <em>Part 1</em>: 0 · a = 0<br>
        0 · a = (0 + 0) · a = 0 · a + 0 · a<br>
        따라서 0 = 0 · a (덧셈의 소거법칙)<br><br>
        
        <em>Part 2</em>: (-a) · b = -(a · b)<br>
        a · b + (-a) · b = (a + (-a)) · b = 0 · b = 0<br>
        따라서 (-a) · b = -(a · b)<br><br>
        
        <em>Part 3</em>: (-a) · (-b) = a · b<br>
        (-a) · (-b) = -(a · (-b)) = -(-(a · b)) = a · b □
      `
		},
		corollary: {
			undergraduate: `
        이 성질들로 인해 환에서 일반적인 대수 계산 규칙들이 성립합니다.<br>
        특히 (a - b)(c - d) = ac - ad - bc + bd 같은 전개가 가능합니다.
      `,
			graduate: `
        <strong>따름정리</strong>: 환에서 다항식 전개 규칙이 성립한다.<br>
        특히 (a + b)² = a² + 2ab + b² (교환환에서)
      `
		}
	},

	{
		type: 'definition',
		id: 'integral-domain-definition',
		title: '정역 (Integral Domain)',
		content: {
			undergraduate: `
        정역은 영인자가 없는 교환환입니다.<br><br>
        
        조건:<br>
        • R은 단위환 (곱셈의 항등원 1 존재)<br>
        • R은 교환환 (a × b = b × a)<br>
        • 영인자가 없음: a × b = 0 ⇒ a = 0 또는 b = 0
      `,
			graduate: `
        <strong>정의 6.3</strong><br>
        단위 교환환 R이 <em>정역</em>(integral domain)이라는 것은<br>
        R이 영인자(zero divisor)를 갖지 않는다는 뜻이다:<br><br>
        
        ∀a,b ∈ R, a · b = 0 ⇒ a = 0 ∨ b = 0<br><br>
        
        동등한 조건:<br>
        • 소거법칙 성립: ab = ac ∧ a ≠ 0 ⇒ b = c<br>
        • R \\ {0}는 곱셈에 대해 닫혀있음
      `
		},
		formula: {
			undergraduate: '교환환 + 영인자 없음 + 단위원 존재',
			graduate: 'Commutative unital ring with ab = 0 ⇒ a = 0 ∨ b = 0'
		},
		conditions: {
			undergraduate: [
				'R은 단위환 (곱셈의 항등원 1 존재)',
				'R은 교환환 (a × b = b × a)',
				'영원소가 아님: 0 ≠ 1',
				'영인자 없음: a × b = 0 ⇒ a = 0 또는 b = 0'
			],
			graduate: [
				'Unity: ∃1 ∈ R s.t. 1a = a1 = a ∀a ∈ R',
				'Commutativity: ab = ba ∀a,b ∈ R',
				'Non-trivial: 0 ≠ 1',
				'No zero divisors: ab = 0 ⇒ a = 0 ∨ b = 0',
				'Cancellation: ab = ac ∧ a ≠ 0 ⇒ b = c'
			]
		}
	},

	{
		type: 'definition',
		id: 'field-preview-definition',
		title: '체 (Field) - 미리보기',
		content: {
			undergraduate: `
        체는 모든 0이 아닌 원소가 곱셈 역원을 가지는 정역입니다.<br><br>
        
        즉, (R, +, ×)가 체라면:<br>
        • R은 정역<br>
        • 0이 아닌 모든 a ∈ R에 대해 a⁻¹이 존재: a × a⁻¹ = 1
      `,
			graduate: `
        <strong>정의 6.4</strong> (체 - 미리보기)<br>
        정역 F가 <em>체</em>(field)라는 것은<br>
        F의 모든 0이 아닌 원소가 곱셈 역원을 갖는다는 뜻이다:<br><br>
        
        ∀a ∈ F, a ≠ 0 ⇒ ∃a⁻¹ ∈ F s.t. a · a⁻¹ = 1<br><br>
        
        즉, (F \\ {0}, ·, 1)은 아벨군이다.<br>
        체는 가장 "완전한" 대수적 구조이다.
      `
		},
		formula: {
			undergraduate: '정역 + 모든 원소가 곱셈 역원을 가짐',
			graduate: '(F, +, ·) with (F \\ {0}, ·, 1) abelian group'
		},
		conditions: {
			undergraduate: [
				'F는 정역',
				'0이 아닌 모든 원소 a에 대해 a⁻¹ 존재',
				'나눗셈이 (0으로 나누기 제외) 항상 가능',
				'일차방정식 ax = b (a ≠ 0)가 항상 유일해 x = a⁻¹b를 가짐'
			],
			graduate: [
				'Integral domain structure',
				'Multiplicative inverse: ∀a ≠ 0, ∃a⁻¹ s.t. aa⁻¹ = 1',
				'Division algorithm (except by 0)',
				'Every linear equation has unique solution'
			]
		}
	},

	{
		type: 'prog-definition',
		id: 'ring-prog-def',
		title: '환 - 프로그래밍적 정의',
		content: `
      프로그래밍에서 환은 <strong>덧셈과 곱셈이 모두 정의된 구조</strong>입니다.<br><br>
      
      두 연산의 상호작용:<br>
      • 덧셈은 "조합/합성"을 나타냄<br>
      • 곱셈은 "스케일링/반복"을 나타냄<br>
      • 분배법칙으로 두 연산이 조화롭게 연결<br><br>
      
      <strong>프로그래밍적 활용:</strong><br>
      • 다항식과 행렬 연산<br>
      • 모듈러 산술 (암호학)<br>
      • 불린 대수 (논리 연산)<br>
      • 벡터 공간과 선형대수
    `,
		interface: `interface Ring<T> {
  add: (a: T, b: T) => T;
  multiply: (a: T, b: T) => T;
  zero: T;
  one?: T;  // 단위환인 경우
  negate: (a: T) => T;
}`
	},

	{
		type: 'code-example',
		id: 'basic-rings',
		title: '기본 환 구현',
		code: `interface Ring<T> {
  add: (a: T, b: T) => T;
  multiply: (a: T, b: T) => T;
  zero: T;
  one?: T;
  negate: (a: T) => T;
}

// 정수환 Z
const integerRing: Ring<number> = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
  zero: 0,
  one: 1,
  negate: (a) => -a
};

// 모듈러 환 Z/nZ (Z_n)
function createModularRing(n: number): Ring<number> {
  return {
    add: (a, b) => (a + b) % n,
    multiply: (a, b) => (a * b) % n,
    zero: 0,
    one: 1,
    negate: (a) => (n - a) % n
  };
}

const z5Ring = createModularRing(5); // Z/5Z

// 불린 환 (Boolean ring)
const booleanRing: Ring<boolean> = {
  add: (a, b) => a !== b,  // XOR 연산
  multiply: (a, b) => a && b,  // AND 연산
  zero: false,
  one: true,
  negate: (a) => a  // 불린환에서 -a = a (특성 2)
};

// 분배법칙 검증 함수
function verifyDistributivity<T>(
  ring: Ring<T>, 
  a: T, b: T, c: T
): boolean {
  // a * (b + c) = (a * b) + (a * c)
  const left = ring.multiply(a, ring.add(b, c));
  const right = ring.add(
    ring.multiply(a, b), 
    ring.multiply(a, c)
  );
  return left === right;
}

// 테스트
console.log("정수환에서 2 + 3:", integerRing.add(2, 3)); // 5
console.log("정수환에서 2 × 3:", integerRing.multiply(2, 3)); // 6

console.log("Z5에서 3 + 4:", z5Ring.add(3, 4)); // 2
console.log("Z5에서 3 × 4:", z5Ring.multiply(3, 4)); // 2

console.log("불린환에서 true + false:", 
  booleanRing.add(true, false)
); // true (XOR)
console.log("불린환에서 true × false:", 
  booleanRing.multiply(true, false)
); // false (AND)

// 분배법칙 검증
const distributive = verifyDistributivity(
  integerRing, 2, 3, 4
);
console.log("정수환 분배법칙 성립:", distributive); // true`,
		language: 'typescript',
		output: `정수환에서 2 + 3: 5
정수환에서 2 × 3: 6
Z5에서 3 + 4: 2
Z5에서 3 × 4: 2
불린환에서 true + false: true
불린환에서 true × false: false
정수환 분배법칙 성립: true`
	},

	{
		type: 'code-example',
		id: 'polynomial-ring',
		title: '다항식환 구현',
		code: `// 간단한 다항식 표현 (계수 배열)
// [a₀, a₁, a₂, ...] = a₀ + a₁x + a₂x² + ...
type Polynomial = number[];

// 다항식을 정규화 (최고차항의 0 제거)
function normalize(poly: Polynomial): Polynomial {
  while (poly.length > 1 && poly[poly.length - 1] === 0) {
    poly.pop();
  }
  return poly.length === 0 ? [0] : poly;
}

// 다항식 덧셈
function addPolynomials(p1: Polynomial, p2: Polynomial): Polynomial {
  const maxLen = Math.max(p1.length, p2.length);
  const result: Polynomial = [];
  
  for (let i = 0; i < maxLen; i++) {
    const coeff1 = i < p1.length ? p1[i] : 0;
    const coeff2 = i < p2.length ? p2[i] : 0;
    result[i] = coeff1 + coeff2;
  }
  
  return normalize(result);
}

// 다항식 곱셈
function multiplyPolynomials(p1: Polynomial, p2: Polynomial): Polynomial {
  if (p1.length === 1 && p1[0] === 0) return [0];
  if (p2.length === 1 && p2[0] === 0) return [0];
  
  const result: Polynomial = new Array(p1.length + p2.length - 1).fill(0);
  
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] += p1[i] * p2[j];
    }
  }
  
  return normalize(result);
}

// 다항식환 R[x] (실계수 다항식)
const polynomialRing: Ring<Polynomial> = {
  add: addPolynomials,
  multiply: multiplyPolynomials,
  zero: [0],
  one: [1],
  negate: (poly) => poly.map(coeff => -coeff)
};

// 다항식을 문자열로 표현
function polyToString(poly: Polynomial): string {
  if (poly.length === 1) return poly[0].toString();
  
  const terms = poly.map((coeff, power) => {
    if (coeff === 0) return '';
    if (power === 0) return coeff.toString();
    if (power === 1) return coeff === 1 ? 'x' : "";
    return coeff === 1 ? "" : "";
  }).filter(term => term !== '');
  
  return terms.reverse().join(' + ').replace(/\\+ -/g, '- ');
}

// 테스트
const p1: Polynomial = [1, 2, 1]; // 1 + 2x + x²
const p2: Polynomial = [1, 1];    // 1 + x

console.log("p1(x) =", polyToString(p1)); // 1 + 2x + x²
console.log("p2(x) =", polyToString(p2)); // 1 + x

const sum = polynomialRing.add(p1, p2);
console.log("p1 + p2 =", polyToString(sum)); // 2 + 3x + x²

const product = polynomialRing.multiply(p1, p2);
console.log("p1 × p2 =", polyToString(product)); // 1 + 3x + 3x² + x³

// 분배법칙 검증: p1 × (p2 + [1]) = p1 × p2 + p1 × [1]
const p3: Polynomial = [1]; // 상수항 1
const sum23 = polynomialRing.add(p2, p3);
const leftSide = polynomialRing.multiply(p1, sum23);
const rightSide = polynomialRing.add(
  polynomialRing.multiply(p1, p2),
  polynomialRing.multiply(p1, p3)
);

console.log("분배법칙 검증:");
console.log("좌변:", polyToString(leftSide));
console.log("우변:", polyToString(rightSide));
console.log("분배법칙 성립:", 
  JSON.stringify(leftSide) === JSON.stringify(rightSide)
);`,
		language: 'typescript',
		output: `p1(x) = x^2 + 2x + 1
p2(x) = x + 1
p1 + p2 = x^2 + 3x + 2
p1 × p2 = x^3 + 3x^2 + 3x + 1
분배법칙 검증:
좌변: x^3 + 3x^2 + 3x + 1
우변: x^3 + 3x^2 + 3x + 1
분배법칙 성립: true`
	},

	{
		type: 'code-example',
		id: 'matrix-ring-example',
		title: '행렬환 구현',
		code: `// 2x2 행렬 타입
type Matrix2x2 = [[number, number], [number, number]];

// 행렬 덧셈
function addMatrices(A: Matrix2x2, B: Matrix2x2): Matrix2x2 {
  return [
    [A[0][0] + B[0][0], A[0][1] + B[0][1]],
    [A[1][0] + B[1][0], A[1][1] + B[1][1]]
  ];
}

// 행렬 곱셈
function multiplyMatrices(A: Matrix2x2, B: Matrix2x2): Matrix2x2 {
  return [
    [
      A[0][0] * B[0][0] + A[0][1] * B[1][0],
      A[0][0] * B[0][1] + A[0][1] * B[1][1]
    ],
    [
      A[1][0] * B[0][0] + A[1][1] * B[1][0],
      A[1][0] * B[0][1] + A[1][1] * B[1][1]
    ]
  ];
}

// 행렬의 음수
function negateMatrix(A: Matrix2x2): Matrix2x2 {
  return [
    [-A[0][0], -A[0][1]],
    [-A[1][0], -A[1][1]]
  ];
}

// 2×2 행렬환 M₂(ℝ)
const matrix2x2Ring: Ring<Matrix2x2> = {
  add: addMatrices,
  multiply: multiplyMatrices,
  zero: [[0, 0], [0, 0]],
  one: [[1, 0], [0, 1]], // 단위행렬
  negate: negateMatrix
};

// 행렬을 문자열로 표현
function matrixToString(M: Matrix2x2): string {
  return '[[' + M[0][0] + ', ' + M[0][1] + '], [' + M[1][0] + ', ' + M[1][1] + ']]';
}

// 테스트
const A: Matrix2x2 = [[1, 2], [3, 4]];
const B: Matrix2x2 = [[2, 0], [1, 2]];

console.log("행렬 A:", matrixToString(A));
console.log("행렬 B:", matrixToString(B));

const sumAB = matrix2x2Ring.add(A, B);
console.log("A + B:", matrixToString(sumAB));

const productAB = matrix2x2Ring.multiply(A, B);
console.log("A × B:", matrixToString(productAB));

const productBA = matrix2x2Ring.multiply(B, A);
console.log("B × A:", matrixToString(productBA));

// 행렬환은 교환법칙이 성립하지 않음을 확인
const isCommutative = JSON.stringify(productAB) === JSON.stringify(productBA);
console.log("교환법칙 성립?", isCommutative); // false

// 영인자 존재 확인 (행렬환은 정역이 아님)
const C: Matrix2x2 = [[1, 0], [0, 0]];
const D: Matrix2x2 = [[0, 0], [0, 1]];
const productCD = matrix2x2Ring.multiply(C, D);

console.log("\\n영인자 예시:");
console.log("C:", matrixToString(C));
console.log("D:", matrixToString(D));
console.log("C × D:", matrixToString(productCD)); // 영행렬
console.log("C ≠ 0이고 D ≠ 0이지만 C × D = 0"); // 영인자 존재`,
		language: 'typescript',
		output: `행렬 A: [[1, 2], [3, 4]]
행렬 B: [[2, 0], [1, 2]]
A + B: [[3, 2], [4, 6]]
A × B: [[4, 4], [10, 8]]
B × A: [[2, 4], [7, 10]]
교환법칙 성립? false

영인자 예시:
C: [[1, 0], [0, 0]]
D: [[0, 0], [0, 1]]
C × D: [[0, 0], [0, 0]]
C ≠ 0이고 D ≠ 0이지만 C × D = 0`
	},

	{
		type: 'important',
		id: 'ring-hierarchy',
		content: `
      <strong>환의 계층구조:</strong><br><br>
      
      <strong>환 → 정역 → 체</strong><br><br>
      
      • <strong>환</strong>: 덧셈(아벨군) + 곱셈(결합법칙) + 분배법칙<br>
      • <strong>정역</strong>: 환 + 교환법칙 + 영인자 없음<br>
      • <strong>체</strong>: 정역 + 모든 원소가 곱셈 역원을 가짐<br><br>
      
      각 단계에서 더 많은 성질을 얻지만, 예시는 줄어듭니다.
    `
	},

	{
		type: 'code-example',
		id: 'cryptography-ring-example',
		title: '암호학에서의 환: RSA의 기초',
		code: `// RSA 암호의 기초가 되는 Z_n에서의 연산
// 실제로는 매우 큰 수를 사용하지만, 여기서는 작은 수로 시연

function createZnRing(n: number) {
  return {
    add: (a: number, b: number) => (a + b) % n,
    multiply: (a: number, b: number) => (a * b) % n,
    zero: 0,
    one: 1,
    negate: (a: number) => (n - a) % n
  };
}

// 확장 유클리드 호제법으로 모듈러 역원 구하기
function extendedGCD(a: number, b: number): [number, number, number] {
  if (a === 0) return [b, 0, 1];
  
  const [gcd, x1, y1] = extendedGCD(b % a, a);
  const x = y1 - Math.floor(b / a) * x1;
  const y = x1;
  
  return [gcd, x, y];
}

function modularInverse(a: number, n: number): number | null {
  const [gcd, x, _] = extendedGCD(a, n);
  if (gcd !== 1) return null; // 역원이 존재하지 않음
  return ((x % n) + n) % n;
}

// 간단한 RSA 예시 (p=3, q=11, n=33)
const p = 3, q = 11;
const n = p * q; // 33
const phi = (p - 1) * (q - 1); // φ(33) = 2 × 10 = 20

// Z_33 환
const z33 = createZnRing(n);

// RSA 키 생성
const e = 3; // 공개 지수 (gcd(3, 20) = 1)
const d = modularInverse(e, phi)!; // 개인 지수

console.log("RSA 매개변수:");
console.log("n (modulus):", n);
console.log("φ(n):", phi);
console.log("e (public exponent):", e);
console.log("d (private exponent):", d);

// 모듈러 거듭제곱
function modularPow(base: number, exp: number, mod: number): number {
  let result = 1;
  base = base % mod;
  
  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod;
    }
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  
  return result;
}

// RSA 암호화/복호화 시뮬레이션
const message = 5; // 평문 (0 < m < n)

console.log("\\n암호화/복호화:");
console.log("원문:", message);

// 암호화: c = m^e mod n
const ciphertext = modularPow(message, e, n);
console.log("암호문:", ciphertext);

// 복호화: m = c^d mod n  
const decrypted = modularPow(ciphertext, d, n);
console.log("복호문:", decrypted);

console.log("암복호화 성공:", message === decrypted);

// RSA의 수학적 기초: (m^e)^d ≡ m (mod n)
console.log("\\n수학적 검증:");
console.log("");
console.log("Euler의 정리에 의해 성립");`,
		language: 'typescript',
		output: `RSA 매개변수:
n (modulus): 33
φ(n): 20
e (public exponent): 3
d (private exponent): 7
      
암호화/복호화:
원문: 5
암호문: 26
복호문: 5
암복호화 성공: true

수학적 검증:
(5^3)^7 mod 33 = 5
Euler의 정리에 의해 성립`
	}
];
