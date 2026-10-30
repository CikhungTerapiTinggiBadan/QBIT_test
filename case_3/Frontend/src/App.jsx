import { Info, HelpCircle, Mail, Briefcase, Bomb, Map } from 'lucide-react'; 
import { useState, useEffect, useRef } from 'react';
import { Modal } from './components/modal';
import { SectionAbout } from './components/sectionAbout';
import SectionWork from './components/sectionWork';
import { SectionFAQ } from './components/sectionFAQ';
import { SectionServices } from './components/sectionServices'; 
import { SectionContact } from './components/sectionContacts';
import { SectionLocation } from './components/sectionLocation';
import { Howl } from 'howler';
import { FireworksBackground } from './components/fireworks';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUnmute, setIsUnmute] = useState(true);
  const [mounted, setMounted] = useState(false);
  const sound1Ref = useRef(null);

  useEffect(() => {
    setMounted(true);
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    sound1Ref.current = new Howl({
      src: ['/gunfire.mp3'], 
      loop: true,
      volume: 0.05,
    });
  }, []);

  useEffect(() => {
    const s1 = sound1Ref.current;
    if (!s1) return;
    if (isUnmute) {
        if(!s1.playing()) s1.play();
    } else {
      s1.stop();
    }
  }, [isUnmute]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleUnmute = () => {
    setIsUnmute(!isUnmute);
  };

  const navs = [
    { id: 'about', icon: Info, label: 'About Us', component: <SectionAbout isDarkMode={isDarkMode} /> },
    { id: 'Catalog', icon: Bomb, label: 'Catalog', component: <SectionWork isDarkMode={isDarkMode} />, size: 'max-w-5xl' },
    { id: 'services', icon: Briefcase, label: 'Services', component: <SectionServices isDarkMode={isDarkMode} /> }, 
    { id: 'contact', icon: Mail, label: 'Contact Us', component: <SectionContact isDarkMode={isDarkMode} /> },
    { id: 'faq', icon: HelpCircle, label: 'Frequently Asked Questions', component: <SectionFAQ isDarkMode={isDarkMode} />, size: 'max-w-md' },
    {id: `Location`, icon: Map, label: `Our Location`, component: <SectionLocation isDarkMode={isDarkMode}/> }
  ];

  const currentNav = navs.find(n => n.id === activeModal);

  if (!mounted) return null;

  return (
    <div className={`h-[100dvh] md:min-h-screen flex flex-col transition-colors duration-500 
    ${isDarkMode ? 'bg-[#0f172a] text-white' : 'bg-[#c2e6f5] text-black'}`}>
      <div className="md:absolute z-30 animate-fade-in-down">
        <button 
          onClick={toggleUnmute}
          className="group relative w-16 h-16 transition-transform active:scale-95 focus:outline-none"
          title={isUnmute ? "Mute" : "Unmute"}
        >
          <div className={`transition-all duration-700 ${isUnmute ? 'rotate-359' : 'rotate-0'}`}>
            <img 
               src={
                 isDarkMode
                   ? (isUnmute ? "/unmt_drk.svg" : "/mt_drk.svg") 
                   : (isUnmute ? "/unmt_lght.svg" : "/mt_lght.svg") 
               }
               alt="Toggle Sound" 
               className={`w-full h-full object-contain drop-shadow-lg filter transition-all duration-300 
                 ${isUnmute ? 'brightness-110' : 'grayscale brightness-75'} 
               `}
            />
          </div>
        </button>

        <button 
          onClick={toggleTheme}
          className="group relative w-16 h-16 transition-transform active:scale-95 focus:outline-none"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div className={`transition-all duration-700 ${isDarkMode ? 'rotate-359' : 'rotate-0'}`}>
            <img 
               src={isDarkMode ? "/moon.svg" : "/matahari.png"} 
               alt="Toggle Theme" 
               className={`w-full h-full object-contain drop-shadow-lg filter ${isDarkMode ? 'brightness-75 contrast-125' : 'brightness-110'}`}
            />
          </div>
        </button>
      </div>
      
      <div className={`h-[100dvh] md:min-h-screen flex flex-col md:items-center md:justify-center md:p-4 px-4 overflow-hidden md:overflow-auto transition-colors duration-500 
      ${isDarkMode ? 'bg-[#0f172a] text-white' : 'bg-[#c2e6f5] text-black'}`}>  
        
      <div 
          className="absolute bottom-0 left-0 w-full h-full z-20 bg-cover bg-no-repeat transition-all duration-500 ease-in-out"
          style={{ 
            backgroundImage: `url('${isDarkMode ? '/night.webp' : '/day.webp'}')` 
          }}
      >
      </div>
      
        <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden z-10">
          <FireworksBackground 
            population={5} 
            color={['#a20303', '#ff7b00', '#aa7d0c', '#8d0707']}
            fireworkSpeed={{ min: 1, max: 100 }} 
            particleSpeed={{ min: 0, max: 0 }}
            particleSize={{ min: 1, max: 1 }} 
            className="absolute inset-0" 
          />
        </div>

        <main className={`rounded-3xl shadow-2xl max-w-2xl w-full z-35 overflow-hidden transition-all duration-300 hover:scale-[1.02] md:mb-15
          ${isDarkMode ? 'bg-[#1e293b] shadow-black/50' : 'bg-white shadow-xl'}`}>

          <div className="pb-4 md:px-8 md:py-16 text-center">
            <h1 className={`block md:hidden text-lg font-light mt-6 md:mt-10 transition-colors duration-300
              ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              Welcome to
            </h1>

            <p className={`font-gun hidden md:block text-7xl font-black transition-all duration-300 
              ${isDarkMode ? 'text-white' : 'text-[#a71b21]'}`}>
              Mamat Gun Shop
            </p>

            <p className={`font-gun block md:hidden text-2xl font-black transition-all duration-300 
              ${isDarkMode ? 'text-white' : 'text-[#a71b21]'}`}>
              MamatGunShop <span className='text-xl'>'s Website</span>
            </p>

            <br/>
            <p className={`hidden md:block text-xl mb-8 md:mb-12 italic mt-2 transition-colors duration-300
              ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>
              Best Gun Shop in West Seturan
            </p>
            
            <p className={`block md:hidden text-sm mb-8 transition-colors duration-300
              ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
              best experienced on desktop.
            </p>

            <nav className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-7 md:px-4 justify-items-center">
              {navs.map((item) => (
                <button key={item.id} onClick={() => setActiveModal(item.id)} className="group flex flex-col items-center justify-start w-full">
                  
                  <div className={`w-19 h-19 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-1 md:mb-2 group-hover:-translate-y-1 transition-all duration-300
                    ${isDarkMode 
                      ? 'bg-slate-700 group-hover:bg-slate-600' 
                      : 'md:bg-gray-50 bg-orange-100 group-hover:bg-gray-100'}`}>
                    
                    <item.icon className={`w-12 h-12 md:w-9 md:h-9 transition-all duration-300
                      ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`} />
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 md:mb-1 transition-colors duration-300
                    ${isDarkMode ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-500'}`}>
                    {item.id}
                  </span>

                </button>
              ))}
            </nav>
          </div>
        </main>

        {currentNav && (
          <Modal 
            title={currentNav.label} 
            onClose={() => setActiveModal(null)} 
            maxWidth={currentNav.size}
            isDarkMode={isDarkMode}
          >
            {currentNav.component}
          </Modal>
        )}

        <footer className="hidden md:block absolute bottom-6 w-full text-center z-30 px-4">
          <div className={`inline-block px-4 py-2 rounded-full backdrop-blur-md transition-colors duration-300
            ${isDarkMode ? 'bg-black/50 text-white border border-white/10' : 'bg-white/70 text-black'}`}>
            <p className="text-[10px] md:text-xs uppercase tracking-widest">© 2026 Ziadan Rizqitta Suryantoro</p>
          </div>
        </footer>
      </div> 
    </div>
  );
}