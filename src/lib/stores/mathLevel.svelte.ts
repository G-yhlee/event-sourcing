import { browser } from '$app/environment';

export type MathLevel = 'undergraduate' | 'graduate';

// 기본값은 대학 수준
const defaultLevel: MathLevel = 'undergraduate';

// 로컬 스토리지에서 값 가져오기
function getStoredLevel(): MathLevel {
	if (browser) {
		const stored = localStorage.getItem('math-level');
		return (stored as MathLevel) || defaultLevel;
	}
	return defaultLevel;
}

// Svelte 5 runes로 수학 레벨 상태 관리
class MathLevelState {
	private _level = $state<MathLevel>(getStoredLevel());

	get level() {
		return this._level;
	}

	set level(newLevel: MathLevel) {
		this._level = newLevel;
		// 로컬 스토리지에 저장
		if (browser) {
			localStorage.setItem('math-level', newLevel);
		}
	}

	toggle() {
		this.level = this._level === 'undergraduate' ? 'graduate' : 'undergraduate';
	}
}

// 전역 상태 인스턴스
export const mathLevelState = new MathLevelState();
