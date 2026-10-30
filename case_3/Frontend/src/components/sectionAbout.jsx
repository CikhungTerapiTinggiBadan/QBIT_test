import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SectionAbout = ({ isDarkMode }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: '/000.jpg' },
    { src: '/001.jpg' },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  
  const containerClass = isDarkMode ? "bg-[#1e293b] border-gray-200" : "bg-white border-black";
  const textTitleClass = isDarkMode ? "text-white" : "text-black";
  const textBodyClass = isDarkMode ? "text-gray-300" : "text-gray-800";
  const borderClass = isDarkMode ? "border-gray-400" : "border-gray-800";

  return (
    <div className='space-y-8'>

      <div className="flex grid grid-cols-1 gap-8">
        
        <div className={`border-4 p-3 shadow-lg flex flex-col items-center justify-center transition-colors duration-300 ${containerClass}`}>
          
          <div className={`relative rounded-2xl w-56 h-56 md:w-110 md:h-100 border-2 overflow-hidden group transition-colors duration-300
            ${isDarkMode ? 'bg-slate-800 border-gray-400' : 'bg-gray-100 border-gray-800'}`}>
            <img 
              src={images[currentImage].src} 
              alt={`Evidence ${currentImage + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          <div className="w-56 md:w-74 flex items-center justify-between mt-4 px-1">
            
            <button 
              onClick={prevImage}
              className={`border-2 border-transparent p-1 transition-all rounded
                ${isDarkMode 
                  ? 'text-white hover:text-red-400 hover:bg-slate-700 hover:border-gray-200' 
                  : 'text-black hover:text-red-700 hover:bg-gray-100 hover:border-black'}`}
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>

            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-widest text-gray-500">Picture NO.</p>
              <p className={`text-lg font-black transition-colors duration-300 ${textTitleClass}`}>
                {currentImage + 1} <span className="text-gray-400">/</span> {images.length}
              </p>
            </div>

            <button 
              onClick={nextImage}
              className={`border-2 border-transparent p-1 transition-all rounded
                ${isDarkMode 
                  ? 'text-white hover:text-red-400 hover:bg-slate-700 hover:border-gray-200' 
                  : 'text-black hover:text-red-700 hover:bg-gray-100 hover:border-black'}`}
              aria-label="Next Image"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>

        </div>
      </div>

      <div className={`border-2 p-4 transition-colors duration-300 ${isDarkMode ? 'border-gray-400 bg-[#1e293b]' : 'border-gray-800 bg-white'}`}>
        <h3 className={`text-sm text-center md:text-start font-black uppercase ${textTitleClass}`}>About
          <hr className={`border-2 mb-3 ${borderClass}`}/>
        </h3>
        <p className={`text-sm font-bold text-center leading-relaxed ${textBodyClass}`}>
          Mamat Gunshop is a highly establish establishment that opened since circa 1880 BC. Started in Ngawi Providence by our founder Mamat Alkatiri
          in 2023, Mamat Gunshop have sells, donate, and supply many sides (sometimes both) during many armed conflict. Except Israel, we have moral
          and standards.
          
          <br/><br/>
          
          Come to Mamat Gunshop right now and buy something. 
        </p>
      </div>

      <div className={`border-2 p-4 transition-colors duration-300 ${isDarkMode ? 'border-gray-400 bg-[#1e293b]' : 'border-gray-800 bg-white'}`}>
        <h3 className={`text-sm text-center md:text-start font-black uppercase ${textTitleClass}`}>Known Conflict Involvement
        <hr className={`border-2 mb-3 ${borderClass}`}/>
        </h3>
          <ul className={`text-sm font-bold space-y-2 ${textBodyClass}`}>
            <li>• Battle of Ngawi</li>
            <li>• Battle of Ngawi II</li>
            <li>• Siege of Anton Capital</li>
            <li>• Jomok Rebellion</li>
            <li>• Suki Assassination</li>
          </ul>
      </div>

      <p className={`text-[10px] text-center font-bold uppercase tracking-[0.2em] ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
         Do Not Distribute Exept for Hiring Purposes
      </p>
      
    </div>
  );
};