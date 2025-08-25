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

// 강의노트 atoms 타입 정의
export type LectureAtom = 
  | DefinitionAtom
  | TheoremAtom
  | MathDefinitionAtom
  | ProgDefinitionAtom  
  | CodeExampleAtom
  | SummaryAtom
  | ImportantAtom;

export interface MathDefinitionAtom {
  type: 'math-definition';
  id: string;
  title: string;
  content: string;
  formula?: string;
}

export interface ProgDefinitionAtom {
  type: 'prog-definition';
  id: string;
  title: string;
  content: string;
  interface?: string;
}

export interface CodeExampleAtom {
  type: 'code-example';
  id: string;
  title: string;
  code: string;
  language: string;
  output?: string;
}


export interface SummaryAtom {
  type: 'summary';
  id: string;
  title: string;
  points: string[];
  bgColor?: string;
}

export interface DefinitionAtom {
  type: 'definition';
  id: string;
  title: string;
  content: {
    undergraduate: string;
    graduate: string;
  };
  formula: {
    undergraduate: string;
    graduate: string;
  };
  conditions: {
    undergraduate: string[];
    graduate: string[];
  };
}

export interface TheoremAtom {
  type: 'theorem';
  id: string;
  title: string;
  statement: {
    undergraduate: string;
    graduate: string;
  };
  proof?: {
    undergraduate: string;
    graduate: string;
  };
  corollary?: {
    undergraduate: string;
    graduate: string;
  };
}

export interface ImportantAtom {
  type: 'important';
  id: string;
  content: string;
}