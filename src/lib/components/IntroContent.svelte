<div class="space-y-8">
  <div class="text-center mb-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">강의 소개</h1>
    <p class="text-lg text-gray-600">대수적 구조 전체 개요</p>
  </div>

  <div class="prose prose-lg max-w-none">
    <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
      <h2 class="text-xl font-semibold text-blue-900 mb-4">🎯 학습 목표</h2>
      <p class="text-blue-800">
        이 강의에서는 대수적 구조를 TypeScript로 구현하며 이해합니다.<br>
        수학적 개념을 프로그래밍으로 표현하는 방법을 배웁니다.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">📚 학부생 수준</h3>
        <ul class="text-gray-700 space-y-2">
          <li>• 직관적인 설명</li>
          <li>• 실제 예시 중심</li>
          <li>• 프로그래밍 활용법</li>
        </ul>
      </div>
      
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">🎓 대학원 수준</h3>
        <ul class="text-gray-700 space-y-2">
          <li>• 엄밀한 수학적 정의</li>
          <li>• 정리와 증명</li>
          <li>• 고급 응용 예시</li>
        </ul>
      </div>
    </div>

    <div class="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
      <h3 class="text-lg font-semibold text-amber-900 mb-4">🗺️ 학습 로드맵</h3>
      <div class="space-y-3">
        <div class="flex items-center space-x-3">
          <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
          <span class="text-amber-800"><strong>집합과 연산</strong> - 기초 개념</span>
        </div>
        <div class="flex items-center space-x-3">
          <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
          <span class="text-amber-800"><strong>마그마 → 세미그룹 → 모노이드</strong> - 점진적 구조 확장</span>
        </div>
        <div class="flex items-center space-x-3">
          <span class="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
          <span class="text-amber-800"><strong>그룹 → 아벨 그룹</strong> - 역원과 교환법칙</span>
        </div>
        <div class="flex items-center space-x-3">
          <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
          <span class="text-amber-800"><strong>링 → 필드</strong> - 두 연산의 조화</span>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">💻 TypeScript로 수학하기</h3>
      <p class="text-gray-700 mb-4">
        각 대수적 구조를 TypeScript 인터페이스로 정의하고,
        실제 예시들을 구현해보며 이해를 깊게 합니다.
      </p>
      <div class="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
        <div class="text-blue-400">interface</div> <span class="text-yellow-300">Magma</span>&lt;<span class="text-cyan-300">T</span>&gt; {<br>
        &nbsp;&nbsp;<span class="text-purple-300">operation</span>: (<span class="text-orange-300">a</span>: <span class="text-cyan-300">T</span>, <span class="text-orange-300">b</span>: <span class="text-cyan-300">T</span>) =&gt; <span class="text-cyan-300">T</span>;<br>
        }
      </div>
    </div>
  </div>
</div>