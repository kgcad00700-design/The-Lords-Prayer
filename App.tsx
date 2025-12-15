
import React, { useState } from 'react';
import Header from './components/Header';
import MainPrayerSettings from './pages/MainPrayerSettings';
import FuneralPrayerSettings from './pages/FuneralPrayerSettings';
import MainPrayerGenerator from './pages/MainPrayerGenerator';
import FuneralPrayerGenerator from './pages/FuneralPrayerGenerator';
import BibleVerseFinder from './pages/BibleVerseFinder';
import BottomNav from './components/BottomNav';

// Types for HomePage
type CardView = 'main-settings' | 'funeral-settings' | 'main-prayer' | 'funeral-prayer' | 'bible-finder';
interface HomePageProps {
  setView: (view: CardView) => void;
}

// HomePage Component
const HomePage: React.FC<HomePageProps> = ({ setView }) => {
    const cardData = [
    {
      view: 'main-settings' as CardView,
      title: '대표기도 설정',
      description: '주일 예배 대표기도에 포함될 주제와 정보를 설정합니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      view: 'funeral-settings' as CardView,
      title: '장례기도 설정',
      description: '장례 예배 기도에 필요한 고인과 유가족 정보를 입력합니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      view: 'main-prayer' as CardView,
      title: '대표기도 생성',
      description: '설정된 내용을 바탕으로 AI가 대표 기도문을 생성합니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      view: 'funeral-prayer' as CardView,
      title: '장례기도 생성',
      description: '입력된 정보로 마음을 위로하는 장례 기도문을 생성합니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      view: 'bible-finder' as CardView,
      title: '마음: 조의 메시지',
      description: '마음을 담아 조의를 표하는 메시지를 작성합니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">하늘기도</h2>
        <p className="text-center text-gray-500 mb-8">무엇을 도와드릴까요?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cardData.map((card) => (
                <div
                    key={card.view}
                    onClick={() => setView(card.view)}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center text-center"
                >
                    {card.icon}
                    <h3 className="text-lg font-semibold text-gray-700">{card.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{card.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};


// Main App Component
export type View = 'home' | CardView;

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const renderView = () => {
    switch (view) {
      case 'main-settings':
        return <MainPrayerSettings onNavigate={setView} />;
      case 'funeral-settings':
        return <FuneralPrayerSettings onNavigate={setView} />;
      case 'main-prayer':
        return <MainPrayerGenerator onNavigate={setView} />;
      case 'funeral-prayer':
        return <FuneralPrayerGenerator onNavigate={setView} />;
      case 'bible-finder':
        return <BibleVerseFinder />;
      case 'home':
      default:
        return <HomePage setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header onHomeClick={() => setView('home')} />
      <main className="max-w-4xl mx-auto px-4 pt-20 sm:pt-24 pb-24 md:pb-8">
        {view !== 'home' && (
          <button
            onClick={() => setView('home')}
            className="mb-6 flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            홈으로 돌아가기
          </button>
        )}
        {renderView()}
         <footer className="text-center pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 하늘기도. All rights reserved.</p>
        </footer>
      </main>
      <BottomNav currentView={view} setView={setView} />
    </div>
  );
};

export default App;