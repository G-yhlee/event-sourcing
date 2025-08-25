# 대수적 구조를 타입스크립트로 이해하기

이 문서는 추상 대수학의 기본 개념들을 타입스크립트의 타입 시스템을 통해 설명합니다. 프로그래머가 이미 익숙한 타입 시스템의 개념을 활용하여 수학적 구조를 이해할 수 있도록 도와드립니다.

## 목차
1. [기본 개념: 집합과 이항 연산](#기본-개념-집합과-이항-연산)
2. [마그마 (Magma)](#마그마-magma)
3. [세미그룹 (Semigroup)](#세미그룹-semigroup)
4. [모노이드 (Monoid)](#모노이드-monoid)
5. [그룹 (Group)](#그룹-group)
6. [아벨 그룹 (Abelian Group)](#아벨-그룹-abelian-group)
7. [링 (Ring)](#링-ring)
8. [필드 (Field)](#필드-field)

## 기본 개념: 집합과 이항 연산

대수적 구조는 **집합**과 그 집합 위에서 정의된 **연산**으로 이루어집니다.

### 타입스크립트로 표현하기

```typescript
// 집합은 타입으로 표현할 수 있습니다
type MySet = number;  // 숫자 집합
type StringSet = string;  // 문자열 집합

// 이항 연산은 두 개의 같은 타입을 받아 같은 타입을 반환하는 함수입니다
type BinaryOperation<T> = (a: T, b: T) => T;

// 예시: 숫자 덧셈
const addition: BinaryOperation<number> = (a, b) => a + b;

// 예시: 문자열 연결
const concatenation: BinaryOperation<string> = (a, b) => a + b;
```

## 마그마 (Magma)

**마그마**는 가장 기본적인 대수적 구조입니다. 집합과 그 위에서 정의된 하나의 이항 연산으로 이루어집니다.

### 수학적 정의
- 집합 S
- 이항 연산 •: S × S → S (닫혀있음)

### 타입스크립트로 표현하기

```typescript
interface Magma<T> {
  // 타입 T가 우리의 집합입니다
  operation: BinaryOperation<T>;
}

// 예시 1: 숫자 뺄셈 마그마
const subtractionMagma: Magma<number> = {
  operation: (a, b) => a - b
};

// 예시 2: 문자열에서 첫 글자를 선택하는 마그마
const firstCharMagma: Magma<string> = {
  operation: (a, b) => a.charAt(0) || b.charAt(0)
};

// 마그마는 특별한 규칙이 없습니다!
// 연산 결과가 같은 타입이기만 하면 됩니다.
```

### 실제 사용 예시

```typescript
// 마그마를 사용하는 함수
function useMagma<T>(magma: Magma<T>, a: T, b: T): T {
  return magma.operation(a, b);
}

console.log(useMagma(subtractionMagma, 10, 3)); // 7
console.log(useMagma(firstCharMagma, "hello", "world")); // "h"
```

### 핵심 포인트
- 마그마는 **아무런 규칙이 없습니다**
- 단지 "닫혀있다"는 것만 보장합니다 (연산 결과가 같은 집합에 속함)
- 타입스크립트에서는 함수의 반환 타입이 입력 타입과 같음을 의미합니다

## 세미그룹 (Semigroup)

**세미그룹**은 마그마에 **결합 법칙(associativity)**을 추가한 구조입니다.

### 수학적 정의
- 집합 S
- 이항 연산 •: S × S → S
- 결합 법칙: (a • b) • c = a • (b • c)

### 타입스크립트로 표현하기

```typescript
interface Semigroup<T> extends Magma<T> {
  // 세미그룹은 마그마이면서 결합 법칙을 만족합니다
  // 타입 시스템으로는 결합 법칙을 강제할 수 없지만,
  // 문서화와 테스트로 보장합니다
}

// 결합 법칙을 테스트하는 함수
function isAssociative<T>(
  op: BinaryOperation<T>,
  a: T,
  b: T,
  c: T
): boolean {
  const leftFirst = op(op(a, b), c);
  const rightFirst = op(a, op(b, c));
  return leftFirst === rightFirst;
}

// 예시 1: 숫자 덧셈 세미그룹
const additionSemigroup: Semigroup<number> = {
  operation: (a, b) => a + b
};

// 덧셈은 결합 법칙을 만족합니다
// (2 + 3) + 4 = 5 + 4 = 9
// 2 + (3 + 4) = 2 + 7 = 9

// 예시 2: 문자열 연결 세미그룹
const stringConcatSemigroup: Semigroup<string> = {
  operation: (a, b) => a + b
};

// 문자열 연결도 결합 법칙을 만족합니다
// ("a" + "b") + "c" = "ab" + "c" = "abc"
// "a" + ("b" + "c") = "a" + "bc" = "abc"

// 예시 3: 최댓값 세미그룹
const maxSemigroup: Semigroup<number> = {
  operation: Math.max
};

// Math.max도 결합 법칙을 만족합니다
// max(max(2, 3), 4) = max(3, 4) = 4
// max(2, max(3, 4)) = max(2, 4) = 4
```

### 반례: 세미그룹이 아닌 마그마

```typescript
// 뺄셈은 세미그룹이 아닙니다!
const subtractionMagma: Magma<number> = {
  operation: (a, b) => a - b
};

// 결합 법칙을 만족하지 않습니다:
// (5 - 3) - 2 = 2 - 2 = 0
// 5 - (3 - 2) = 5 - 1 = 4
// 0 ≠ 4
```

### 실제 활용: 리듀스 연산

```typescript
// 세미그룹의 가장 중요한 활용은 리듀스 연산입니다
function reduce<T>(semigroup: Semigroup<T>, values: T[]): T | undefined {
  if (values.length === 0) return undefined;
  
  return values.reduce((acc, val) => semigroup.operation(acc, val));
}

// 결합 법칙 덕분에 어떤 순서로 연산해도 결과가 같습니다
const numbers = [1, 2, 3, 4];
console.log(reduce(additionSemigroup, numbers)); // 10

// 병렬 처리도 가능합니다!
// [1, 2, 3, 4]를 [1, 2]와 [3, 4]로 나누어 계산해도 됩니다
// (1 + 2) + (3 + 4) = 3 + 7 = 10
```

## 모노이드 (Monoid)

**모노이드**는 세미그룹에 **항등원(identity element)**을 추가한 구조입니다.

### 수학적 정의
- 집합 S
- 이항 연산 •: S × S → S
- 결합 법칙: (a • b) • c = a • (b • c)
- 항등원 e: e • a = a • e = a

### 타입스크립트로 표현하기

```typescript
interface Monoid<T> extends Semigroup<T> {
  identity: T;  // 항등원
}

// 항등원 법칙을 테스트하는 함수
function isIdentity<T>(
  op: BinaryOperation<T>,
  identity: T,
  value: T
): boolean {
  return op(identity, value) === value && op(value, identity) === value;
}

// 예시 1: 덧셈 모노이드
const additionMonoid: Monoid<number> = {
  operation: (a, b) => a + b,
  identity: 0  // 0 + n = n + 0 = n
};

// 예시 2: 곱셈 모노이드
const multiplicationMonoid: Monoid<number> = {
  operation: (a, b) => a * b,
  identity: 1  // 1 * n = n * 1 = n
};

// 예시 3: 문자열 연결 모노이드
const stringMonoid: Monoid<string> = {
  operation: (a, b) => a + b,
  identity: ""  // "" + s = s + "" = s
};

// 예시 4: 불린 AND 모노이드
const andMonoid: Monoid<boolean> = {
  operation: (a, b) => a && b,
  identity: true  // true && b = b && true = b
};

// 예시 5: 배열 연결 모노이드
function arrayMonoid<T>(): Monoid<T[]> {
  return {
    operation: (a, b) => [...a, ...b],
    identity: []  // [] + arr = arr + [] = arr
  };
}
```

### 모노이드의 강력한 활용

```typescript
// 빈 배열도 처리할 수 있습니다!
function fold<T>(monoid: Monoid<T>, values: T[]): T {
  if (values.length === 0) return monoid.identity;
  
  return values.reduce(
    (acc, val) => monoid.operation(acc, val),
    monoid.identity
  );
}

// 빈 배열의 합은 0
console.log(fold(additionMonoid, [])); // 0

// 빈 배열의 곱은 1
console.log(fold(multiplicationMonoid, [])); // 1

// 빈 배열의 문자열 연결은 빈 문자열
console.log(fold(stringMonoid, [])); // ""
```

### 모노이드 합성

```typescript
// 여러 모노이드를 합성할 수 있습니다
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

// 예시: (숫자 합, 문자열 연결) 모노이드
const sumAndConcatMonoid = pairMonoid(additionMonoid, stringMonoid);

const result = fold(sumAndConcatMonoid, [
  { first: 1, second: "a" },
  { first: 2, second: "b" },
  { first: 3, second: "c" }
]);

console.log(result); // { first: 6, second: "abc" }
```

### 실제 활용 예시: 설정 병합

```typescript
interface Config {
  port?: number;
  host?: string;
  debug?: boolean;
}

// 설정 병합 모노이드
const configMonoid: Monoid<Config> = {
  operation: (a, b) => ({ ...a, ...b }),
  identity: {}
};

const configs: Config[] = [
  { port: 3000 },
  { host: "localhost" },
  { debug: true }
];

const finalConfig = fold(configMonoid, configs);
console.log(finalConfig); // { port: 3000, host: "localhost", debug: true }
```

### 핵심 포인트
- **세미그룹**: 결합 법칙을 만족하는 연산 (순서 상관없이 계산 가능)
- **모노이드**: 세미그룹 + 항등원 (빈 값 처리 가능)
- 모노이드는 함수형 프로그래밍에서 매우 중요한 개념입니다
- `reduce`, `fold` 같은 연산의 수학적 기반이 됩니다

---

## 그룹 (Group)

**그룹**은 모노이드에 모든 원소가 **역원(inverse element)**을 가지도록 확장한 구조입니다.

### 수학적 정의
- 집합 S
- 이항 연산 •: S × S → S
- 결합 법칙: (a • b) • c = a • (b • c)
- 항등원 e: e • a = a • e = a
- 역원: 모든 a에 대해 a • a⁻¹ = a⁻¹ • a = e

### 타입스크립트로 표현하기

```typescript
interface Group<T> extends Monoid<T> {
  inverse: (a: T) => T;  // 역원을 구하는 함수
}

// 역원 법칙을 테스트하는 함수
function hasInverse<T>(
  group: Group<T>,
  value: T
): boolean {
  const inv = group.inverse(value);
  return (
    group.operation(value, inv) === group.identity &&
    group.operation(inv, value) === group.identity
  );
}

// 예시 1: 정수 덧셈 그룹
const integerAdditionGroup: Group<number> = {
  operation: (a, b) => a + b,
  identity: 0,
  inverse: (a) => -a  // 덧셈의 역원은 음수
};

// 검증: 5 + (-5) = 0, (-5) + 5 = 0

// 예시 2: 0이 아닌 유리수의 곱셈 그룹
const nonZeroRationalMultiplicationGroup: Group<number> = {
  operation: (a, b) => a * b,
  identity: 1,
  inverse: (a) => 1 / a  // 곱셈의 역원은 역수
};

// 검증: 5 * (1/5) = 1, (1/5) * 5 = 1

// 예시 3: 모듈로 연산 그룹
function modularAdditionGroup(n: number): Group<number> {
  return {
    operation: (a, b) => (a + b) % n,
    identity: 0,
    inverse: (a) => (n - a) % n
  };
}

const mod5Group = modularAdditionGroup(5);
// 3 + 2 = 0 (mod 5)
// 3의 역원은 2입니다
```

### 실제 활용: 되돌리기(Undo) 시스템

```typescript
// 변환을 나타내는 타입
interface Transform {
  translateX: number;
  translateY: number;
}

// 2D 변환 그룹
const transformGroup: Group<Transform> = {
  operation: (a, b) => ({
    translateX: a.translateX + b.translateX,
    translateY: a.translateY + b.translateY
  }),
  identity: { translateX: 0, translateY: 0 },
  inverse: (a) => ({
    translateX: -a.translateX,
    translateY: -a.translateY
  })
};

// 되돌리기 가능한 연산
class UndoableTransform {
  private history: Transform[] = [];
  private current: Transform = transformGroup.identity;

  apply(transform: Transform): void {
    this.current = transformGroup.operation(this.current, transform);
    this.history.push(transform);
  }

  undo(): void {
    if (this.history.length === 0) return;
    
    const lastTransform = this.history.pop()!;
    const inverse = transformGroup.inverse(lastTransform);
    this.current = transformGroup.operation(this.current, inverse);
  }

  getPosition(): Transform {
    return this.current;
  }
}

// 사용 예시
const position = new UndoableTransform();
position.apply({ translateX: 10, translateY: 0 });
position.apply({ translateX: 0, translateY: 5 });
console.log(position.getPosition()); // { translateX: 10, translateY: 5 }

position.undo();
console.log(position.getPosition()); // { translateX: 10, translateY: 0 }
```

### 반례: 그룹이 아닌 모노이드

```typescript
// 자연수 덧셈은 모노이드이지만 그룹이 아닙니다
const naturalAdditionMonoid: Monoid<number> = {
  operation: (a, b) => a + b,
  identity: 0
  // inverse를 정의할 수 없습니다! 
  // 2의 역원은 -2이지만 -2는 자연수가 아닙니다
};

// 문자열 연결도 그룹이 아닙니다
const stringConcatMonoid: Monoid<string> = {
  operation: (a, b) => a + b,
  identity: ""
  // "hello"의 역원이 무엇일까요? 정의할 수 없습니다!
};
```

## 아벨 그룹 (Abelian Group)

**아벨 그룹**(또는 **가환 그룹**)은 **교환 법칙**을 만족하는 그룹입니다.

### 수학적 정의
- 그룹의 모든 조건 +
- 교환 법칙: a • b = b • a

### 타입스크립트로 표현하기

```typescript
interface AbelianGroup<T> extends Group<T> {
  // 교환 법칙은 타입으로 표현할 수 없으므로
  // 문서화와 테스트로 보장합니다
}

// 교환 법칙을 테스트하는 함수
function isCommutative<T>(
  op: BinaryOperation<T>,
  a: T,
  b: T
): boolean {
  return op(a, b) === op(b, a);
}

// 예시 1: 정수 덧셈 아벨 그룹
const integerAdditionAbelianGroup: AbelianGroup<number> = {
  operation: (a, b) => a + b,
  identity: 0,
  inverse: (a) => -a
};
// 3 + 5 = 5 + 3 = 8

// 예시 2: 복소수 덧셈 아벨 그룹
interface Complex {
  real: number;
  imaginary: number;
}

const complexAdditionGroup: AbelianGroup<Complex> = {
  operation: (a, b) => ({
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary
  }),
  identity: { real: 0, imaginary: 0 },
  inverse: (a) => ({
    real: -a.real,
    imaginary: -a.imaginary
  })
};

// 예시 3: 벡터 덧셈 아벨 그룹
type Vector2D = [number, number];

const vector2DAdditionGroup: AbelianGroup<Vector2D> = {
  operation: ([ax, ay], [bx, by]) => [ax + bx, ay + by],
  identity: [0, 0],
  inverse: ([x, y]) => [-x, -y]
};
```

### 반례: 아벨 그룹이 아닌 그룹

```typescript
// 행렬 곱셈 그룹 (2x2 가역 행렬)
interface Matrix2x2 {
  a: number; b: number;
  c: number; d: number;
}

// 행렬 곱셈은 교환 법칙을 만족하지 않습니다!
const matrix1: Matrix2x2 = { a: 1, b: 2, c: 3, d: 4 };
const matrix2: Matrix2x2 = { a: 0, b: 1, c: 1, d: 0 };

// matrix1 * matrix2 ≠ matrix2 * matrix1

// 문자열 치환 그룹도 교환 법칙을 만족하지 않습니다
type StringTransform = (s: string) => string;

const replaceAB: StringTransform = (s) => s.replace(/a/g, 'b');
const replaceBC: StringTransform = (s) => s.replace(/b/g, 'c');

// replaceAB(replaceBC("abc")) = "bcc"
// replaceBC(replaceAB("abc")) = "ccc"
// 결과가 다릅니다!
```

### 실제 활용: 암호화

```typescript
// 간단한 시저 암호 (Caesar cipher)
function caesarCipherGroup(alphabetSize: number): AbelianGroup<number> {
  return {
    operation: (a, b) => (a + b) % alphabetSize,
    identity: 0,
    inverse: (a) => (alphabetSize - a) % alphabetSize
  };
}

const cipher = caesarCipherGroup(26);

// 암호화
function encrypt(text: string, key: number): string {
  return text.split('').map(char => {
    const code = char.charCodeAt(0) - 65; // A = 0
    const encrypted = cipher.operation(code, key);
    return String.fromCharCode(encrypted + 65);
  }).join('');
}

// 복호화 (역원 사용)
function decrypt(text: string, key: number): string {
  const inverseKey = cipher.inverse(key);
  return encrypt(text, inverseKey);
}

const message = "HELLO";
const key = 3;
const encrypted = encrypt(message, key); // "KHOOR"
const decrypted = decrypt(encrypted, key); // "HELLO"
```

### 핵심 포인트
- **그룹**: 모노이드 + 역원 (모든 연산을 되돌릴 수 있음)
- **아벨 그룹**: 그룹 + 교환 법칙 (연산 순서가 상관없음)
- 그룹은 대칭성과 변환을 다루는 수학의 핵심입니다
- 암호화, 물리학, 컴퓨터 그래픽스 등에서 광범위하게 사용됩니다

---

## 링 (Ring)

**링**은 두 개의 이항 연산(보통 덧셈과 곱셈)을 가진 대수적 구조입니다.

### 수학적 정의
- 집합 R
- 덧셈 +: R × R → R (아벨 그룹을 이룸)
- 곱셈 ×: R × R → R (모노이드를 이룸)
- 분배 법칙: a × (b + c) = (a × b) + (a × c), (a + b) × c = (a × c) + (b × c)

### 타입스크립트로 표현하기

```typescript
interface Ring<T> {
  // 덧셈은 아벨 그룹
  addition: AbelianGroup<T>;
  
  // 곱셈은 모노이드
  multiplication: Monoid<T>;
  
  // 타입 시스템으로는 분배 법칙을 강제할 수 없습니다
}

// 분배 법칙을 테스트하는 함수
function isDistributive<T>(
  ring: Ring<T>,
  a: T,
  b: T,
  c: T
): boolean {
  const add = ring.addition.operation;
  const mul = ring.multiplication.operation;
  
  // a × (b + c) = (a × b) + (a × c)
  const leftDistributive = 
    mul(a, add(b, c)) === add(mul(a, b), mul(a, c));
    
  // (a + b) × c = (a × c) + (b × c)
  const rightDistributive = 
    mul(add(a, b), c) === add(mul(a, c), mul(b, c));
    
  return leftDistributive && rightDistributive;
}

// 예시 1: 정수 링
const integerRing: Ring<number> = {
  addition: {
    operation: (a, b) => a + b,
    identity: 0,
    inverse: (a) => -a
  },
  multiplication: {
    operation: (a, b) => a * b,
    identity: 1
  }
};

// 예시 2: 2x2 행렬 링
interface Matrix2x2 {
  a: number; b: number;
  c: number; d: number;
}

const matrix2x2Ring: Ring<Matrix2x2> = {
  addition: {
    operation: (m1, m2) => ({
      a: m1.a + m2.a, b: m1.b + m2.b,
      c: m1.c + m2.c, d: m1.d + m2.d
    }),
    identity: { a: 0, b: 0, c: 0, d: 0 },
    inverse: (m) => ({
      a: -m.a, b: -m.b,
      c: -m.c, d: -m.d
    })
  },
  multiplication: {
    operation: (m1, m2) => ({
      a: m1.a * m2.a + m1.b * m2.c,
      b: m1.a * m2.b + m1.b * m2.d,
      c: m1.c * m2.a + m1.d * m2.c,
      d: m1.c * m2.b + m1.d * m2.d
    }),
    identity: { a: 1, b: 0, c: 0, d: 1 }
  }
};

// 예시 3: 다항식 링
interface Polynomial {
  coefficients: number[];  // [a0, a1, a2, ...] = a0 + a1x + a2x^2 + ...
}

function addPolynomials(p1: Polynomial, p2: Polynomial): Polynomial {
  const maxLength = Math.max(p1.coefficients.length, p2.coefficients.length);
  const result: number[] = [];
  
  for (let i = 0; i < maxLength; i++) {
    const c1 = p1.coefficients[i] || 0;
    const c2 = p2.coefficients[i] || 0;
    result.push(c1 + c2);
  }
  
  return { coefficients: result };
}

function multiplyPolynomials(p1: Polynomial, p2: Polynomial): Polynomial {
  const result: number[] = new Array(
    p1.coefficients.length + p2.coefficients.length - 1
  ).fill(0);
  
  for (let i = 0; i < p1.coefficients.length; i++) {
    for (let j = 0; j < p2.coefficients.length; j++) {
      result[i + j] += p1.coefficients[i] * p2.coefficients[j];
    }
  }
  
  return { coefficients: result };
}
```

### 실제 활용: 다항식 계산

```typescript
class PolynomialCalculator {
  private ring: Ring<Polynomial> = {
    addition: {
      operation: addPolynomials,
      identity: { coefficients: [0] },
      inverse: (p) => ({
        coefficients: p.coefficients.map(c => -c)
      })
    },
    multiplication: {
      operation: multiplyPolynomials,
      identity: { coefficients: [1] }
    }
  };
  
  // (x + 1)^2 = x^2 + 2x + 1
  expand(p: Polynomial, n: number): Polynomial {
    let result = this.ring.multiplication.identity;
    for (let i = 0; i < n; i++) {
      result = this.ring.multiplication.operation(result, p);
    }
    return result;
  }
  
  evaluate(p: Polynomial, x: number): number {
    return p.coefficients.reduce(
      (sum, coef, i) => sum + coef * Math.pow(x, i),
      0
    );
  }
}

// 사용 예시
const calc = new PolynomialCalculator();
const xPlus1: Polynomial = { coefficients: [1, 1] }; // 1 + x
const squared = calc.expand(xPlus1, 2); // x^2 + 2x + 1
console.log(calc.evaluate(squared, 3)); // 16
```

### 특별한 링들

```typescript
// 가환 링 (Commutative Ring): 곱셈이 교환 법칙을 만족
interface CommutativeRing<T> extends Ring<T> {
  // a × b = b × a
}

// 나눗셈 링 (Division Ring): 0이 아닌 모든 원소가 곱셈 역원을 가짐
interface DivisionRing<T> extends Ring<T> {
  multiplicativeInverse: (a: T) => T | undefined;
}

// 불 링 (Boolean Ring)
const booleanRing: Ring<boolean> = {
  addition: {
    operation: (a, b) => a !== b,  // XOR
    identity: false,
    inverse: (a) => a  // XOR에서 자기 자신이 역원
  },
  multiplication: {
    operation: (a, b) => a && b,  // AND
    identity: true
  }
};
```

## 필드 (Field)

**필드**는 가환 링이면서 0이 아닌 모든 원소가 곱셈 역원을 가지는 구조입니다. 즉, 덧셈과 곱셈 모두에서 "나눗셈"이 가능합니다.

### 수학적 정의
- 집합 F
- 덧셈 +: F × F → F (아벨 그룹)
- 곱셈 ×: F × F → F (0을 제외한 원소들이 아벨 그룹)
- 분배 법칙

### 타입스크립트로 표현하기

```typescript
interface Field<T> extends CommutativeRing<T> {
  // 0이 아닌 원소의 곱셈 역원
  multiplicativeInverse: (a: T) => T;
  
  // 0인지 확인하는 함수 (0으로 나누기 방지)
  isZero: (a: T) => boolean;
}

// 예시 1: 유리수 필드
const rationalField: Field<number> = {
  addition: {
    operation: (a, b) => a + b,
    identity: 0,
    inverse: (a) => -a
  },
  multiplication: {
    operation: (a, b) => a * b,
    identity: 1
  },
  multiplicativeInverse: (a) => {
    if (a === 0) throw new Error("0의 역원은 정의되지 않음");
    return 1 / a;
  },
  isZero: (a) => a === 0
};

// 예시 2: 복소수 필드
interface Complex {
  real: number;
  imaginary: number;
}

const complexField: Field<Complex> = {
  addition: {
    operation: (a, b) => ({
      real: a.real + b.real,
      imaginary: a.imaginary + b.imaginary
    }),
    identity: { real: 0, imaginary: 0 },
    inverse: (a) => ({
      real: -a.real,
      imaginary: -a.imaginary
    })
  },
  multiplication: {
    operation: (a, b) => ({
      real: a.real * b.real - a.imaginary * b.imaginary,
      imaginary: a.real * b.imaginary + a.imaginary * b.real
    }),
    identity: { real: 1, imaginary: 0 }
  },
  multiplicativeInverse: (a) => {
    const denominator = a.real * a.real + a.imaginary * a.imaginary;
    if (denominator === 0) throw new Error("0의 역원은 정의되지 않음");
    return {
      real: a.real / denominator,
      imaginary: -a.imaginary / denominator
    };
  },
  isZero: (a) => a.real === 0 && a.imaginary === 0
};

// 예시 3: 유한 필드 (Finite Field) - GF(p)
function finiteField(p: number): Field<number> {
  // p는 소수여야 합니다
  return {
    addition: {
      operation: (a, b) => (a + b) % p,
      identity: 0,
      inverse: (a) => (p - a) % p
    },
    multiplication: {
      operation: (a, b) => (a * b) % p,
      identity: 1
    },
    multiplicativeInverse: (a) => {
      if (a === 0) throw new Error("0의 역원은 정의되지 않음");
      // 페르마의 소정리: a^(p-1) ≡ 1 (mod p)
      // 따라서 a^(-1) ≡ a^(p-2) (mod p)
      return modPow(a, p - 2, p);
    },
    isZero: (a) => a === 0
  };
}

function modPow(base: number, exp: number, mod: number): number {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}
```

### 실제 활용: 선형 방정식 해결

```typescript
// 필드에서의 선형 방정식 ax + b = c 해결
function solveLinearEquation<T>(
  field: Field<T>,
  a: T,
  b: T,
  c: T
): T {
  // ax + b = c
  // ax = c - b
  // x = (c - b) / a
  
  const cMinusB = field.addition.operation(
    c,
    field.addition.inverse(b)
  );
  
  if (field.isZero(a)) {
    throw new Error("a는 0이 될 수 없습니다");
  }
  
  return field.multiplication.operation(
    cMinusB,
    field.multiplicativeInverse(a)
  );
}

// 유리수에서 2x + 3 = 7 해결
const x = solveLinearEquation(rationalField, 2, 3, 7);
console.log(x); // 2

// GF(7)에서 3x + 2 = 5 해결
const gf7 = finiteField(7);
const xMod7 = solveLinearEquation(gf7, 3, 2, 5);
console.log(xMod7); // 1 (3 * 1 + 2 ≡ 5 (mod 7))
```

### 필드의 활용: 오류 정정 코드

```typescript
// 간단한 Reed-Solomon 오류 정정 (GF(256) 사용)
class ErrorCorrection {
  private field: Field<number>;
  
  constructor() {
    // 실제로는 GF(2^8)을 사용하지만, 여기서는 간단히 구현
    this.field = finiteField(257); // 257은 소수
  }
  
  // 데이터에 패리티 추가
  addParity(data: number[], parityCount: number): number[] {
    const result = [...data];
    for (let i = 0; i < parityCount; i++) {
      // 간단한 패리티 계산 (실제로는 더 복잡)
      const parity = data.reduce(
        (sum, val) => this.field.addition.operation(sum, val),
        this.field.addition.identity
      );
      result.push(parity);
    }
    return result;
  }
}
```

### 핵심 포인트
- **링**: 두 개의 연산(덧셈, 곱셈)을 가진 구조
- **필드**: 나눗셈이 가능한 링 (0 제외)
- 링은 다항식, 행렬 등의 수학적 객체를 다룹니다
- 필드는 선형대수, 암호학, 오류 정정 코드 등에서 핵심적입니다

## 요약

| 구조 | 연산 | 규칙 | TypeScript 예시 |
|------|------|------|-----------------|
| **마그마** | 1개 | 닫혀있음 | 문자열 첫 글자 선택 |
| **세미그룹** | 1개 | 결합 법칙 | 문자열 연결, Math.max |
| **모노이드** | 1개 | 결합 법칙 + 항등원 | 숫자 덧셈(0), 배열 연결([]) |
| **그룹** | 1개 | 모노이드 + 역원 | 정수 덧셈, 모듈로 연산 |
| **아벨 그룹** | 1개 | 그룹 + 교환 법칙 | 벡터 덧셈, 복소수 덧셈 |
| **링** | 2개 | 덧셈(아벨 그룹) + 곱셈(모노이드) + 분배 법칙 | 정수, 다항식, 행렬 |
| **필드** | 2개 | 가환 링 + 곱셈 역원 | 유리수, 실수, 복소수, GF(p) |

이러한 대수적 구조들은 프로그래밍에서 타입 클래스, 추상화, 그리고 수학적으로 건전한 API 설계의 기초가 됩니다.