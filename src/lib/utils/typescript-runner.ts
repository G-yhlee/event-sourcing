// TypeScript 코드를 JavaScript로 변환하는 유틸리티

export function stripTypeScript(code: string): string {
  let result = code;
  
  // 1. 인터페이스 정의 제거 (중첩 구조 고려)
  result = result.replace(/interface\s+\w+[^{]*\{[^}]*(?:\{[^}]*\}[^}]*)*\}/g, '');
  
  // 2. 타입 별칭 제거
  result = result.replace(/type\s+\w+\s*=\s*[^;]+;/g, '');
  
  // 3. 함수 매개변수의 타입 어노테이션 제거
  result = result.replace(/\(\s*(\w+):\s*[^,)]+/g, '($1');
  result = result.replace(/,\s*(\w+):\s*[^,)]+/g, ', $1');
  
  // 4. 변수 선언의 타입 어노테이션 제거
  result = result.replace(/(const|let|var)\s+(\w+):\s*[^=]+=/g, '$1 $2 =');
  
  // 5. 함수 반환 타입 제거
  result = result.replace(/\):\s*[^{]+\s*=>/g, ') =>');
  result = result.replace(/\):\s*[^{]+\s*\{/g, ') {');
  
  // 6. 제네릭 제거
  result = result.replace(/<[^>]*>/g, '');
  
  // 7. as 키워드 제거
  result = result.replace(/\s+as\s+\w+/g, '');
  
  // 8. 옵셔널 체이닝과 null assertion 제거 (? !)
  result = result.replace(/\?\./g, '.');
  result = result.replace(/!/g, '');
  
  // 9. 빈 줄과 주석 정리
  result = result.replace(/\/\/.*$/gm, ''); // 한줄 주석 제거
  result = result.replace(/\/\*[\s\S]*?\*\//g, ''); // 블록 주석 제거
  result = result.replace(/\n\s*\n+/g, '\n'); // 빈 줄 정리
  
  return result.trim();
}

export function validateAndPrepareCode(code: string): { 
  jsCode: string; 
  hasConsoleLog: boolean; 
  warnings: string[] 
} {
  const warnings: string[] = [];
  const hasConsoleLog = code.includes('console.log');
  
  // 위험한 코드 패턴 검사
  const dangerousPatterns = [
    /while\s*\(\s*true\s*\)/g, // 무한 루프
    /for\s*\(\s*;\s*;\s*\)/g,  // 무한 루프
    /eval\s*\(/g,              // eval 사용
    /Function\s*\(/g,          // Function 생성자
    /setTimeout|setInterval/g,  // 타이머 함수
  ];
  
  dangerousPatterns.forEach((pattern, index) => {
    if (pattern.test(code)) {
      const warningMessages = [
        '무한 while 루프가 감지되었습니다.',
        '무한 for 루프가 감지되었습니다.',
        'eval() 사용이 감지되었습니다.',
        'Function 생성자 사용이 감지되었습니다.',
        '타이머 함수 사용이 감지되었습니다.'
      ];
      warnings.push(warningMessages[index]);
    }
  });
  
  const jsCode = stripTypeScript(code);
  
  return { jsCode, hasConsoleLog, warnings };
}