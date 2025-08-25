// 대수적 구조를 위한 타입 정의

export type BinaryOperation<T> = (a: T, b: T) => T;

export interface Magma<T> {
  operation: BinaryOperation<T>;
}

export interface Semigroup<T> extends Magma<T> {}

export interface Monoid<T> extends Semigroup<T> {
  identity: T;
}

export interface Group<T> extends Monoid<T> {
  inverse: (a: T) => T;
}

export interface AbelianGroup<T> extends Group<T> {}

export interface Ring<T> {
  addition: AbelianGroup<T>;
  multiplication: Monoid<T>;
}

export interface CommutativeRing<T> extends Ring<T> {}

export interface Field<T> extends CommutativeRing<T> {
  multiplicativeInverse: (a: T) => T;
  isZero: (a: T) => boolean;
}

// 강의 관련 타입
export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface CodeExample {
  id: string;
  title: string;
  code: string;
  language: string;
  runnable: boolean;
  output?: string;
}

export interface Note {
  id: string;
  type: 'definition' | 'theorem' | 'example' | 'warning' | 'tip';
  title: string;
  content: string;
  math?: string;
}

export interface Exercise {
  id: string;
  question: string;
  hints: string[];
  solution: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
}