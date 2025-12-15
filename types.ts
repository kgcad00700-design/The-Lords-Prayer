
export const PRAYER_THEMES = {
  grace: '하나님의 은혜, 예수 그리스도의 십자가의 은혜와 구원 감사, 성령님의 예배 임재',
  confession: '한 주간의 어려움, 죄의 고백과 용서 간구',
  nation: '국가의 안위',
  church: '교회의 필요',
  special: '질병 등 하나님의 특별 은혜 간구',
  preacher: '설교자가 성령님으로 충만하여 제대로 설교하도록 간구',
};

export type PrayerThemeKey = keyof typeof PRAYER_THEMES;

export interface MainPrayerSettings {
  churchName: string;
  preacherName: string;
  preacherTitle: string;
  worshipType: string;
  customWorshipType?: string;
  themes: Record<PrayerThemeKey, boolean>;
  prayerDuration: number;
  prayerTone: 'traditional' | 'modern';
  specificRequest: string; // 호환성을 위해 타입 유지 (UI에서는 사용 안 함)
  prayerStandard: string; // 호환성을 위해 타입 유지 (UI에서는 사용 안 함)
  detailedThemes: string[]; // 6가지 주제별 사용자 입력 내용
}

export interface FuneralPrayerSettings {
  funeralHome: string;
  targetName: string;
  funeralWorshipType: string;
  prayerDuration: number;
  prayerStandard: string;
  specificRequest: string;
}

export interface CondolenceMessage {
  forDeceased: string;
  forFamily: string;
  bibleVerse: string;
}

// FIX: Export Page type for Navigation component to resolve missing export error.
export type Page = '대표설정' | '장례설정' | '대표기도' | '장례기도' | '성경구절찾기';
