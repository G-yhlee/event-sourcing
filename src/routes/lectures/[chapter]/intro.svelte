<script lang="ts">
  const structures = [
    {
      id: 'introduction',
      title: '집합과 연산',
      summary: '대수적 구조의 기초'
    },
    {
      id: 'magma',
      title: '마그마',
      summary: '집합 + 닫혀있는 이항 연산'
    },
    {
      id: 'semigroup', 
      title: '세미그룹',
      summary: '마그마 + 결합법칙'
    },
    {
      id: 'monoid',
      title: '모노이드', 
      summary: '세미그룹 + 항등원'
    },
    {
      id: 'group',
      title: '그룹',
      summary: '모노이드 + 역원'
    },
    {
      id: 'abelian-group',
      title: '아벨 그룹',
      summary: '그룹 + 교환법칙'
    },
    {
      id: 'ring',
      title: '링',
      summary: '두 개의 연산을 가진 구조'
    },
    {
      id: 'field',
      title: '필드',
      summary: '나눗셈이 가능한 링'
    }
  ];
</script>

<section>
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      Abstract Algebra with TypeScript
    </h1>
    <p class="text-gray-600">
      추상 대수학 개념을 타입스크립트로 이해하기
    </p>
  </div>

  <div class="space-y-3">
    {#each structures as structure, index}
      <a 
        href="/lectures/{structure.id}"
        class="block p-4 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors"
      >
        <div class="flex items-center justify-between">
          <div>
            <span class="text-gray-500 text-sm font-mono">{index + 1}.</span>
            <span class="font-medium text-gray-900 ml-2">{structure.title}</span>
          </div>
          <div class="text-sm text-gray-600">
            {structure.summary}
          </div>
        </div>
      </a>
    {/each}
  </div>

  <div class="mt-8 pt-6 border-t border-gray-200">
    <p class="text-sm text-gray-500">
      각 구조는 이전 구조에 하나의 규칙을 추가한 형태입니다.
    </p>
  </div>
</section>