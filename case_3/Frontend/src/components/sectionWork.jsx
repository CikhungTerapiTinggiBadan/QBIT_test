import { useState, useEffect } from 'react';
import { X, ExternalLink, ImageIcon } from 'lucide-react';

export default function SectionWork({ isDarkMode }) {
  const [gunData, setGunData] = useState([]);
  const [knieveData, setKnieveData] = useState([]);
  const [bombData, setBombData] = useState([]); 
  
  const [activeTab, setActiveTab] = useState("Guns");
  const categories = ["Guns", "Knieves", "Bombs"];

  const [selectedItem, setSelectedItem] = useState(null);

  const fixDriveUrl = (url) => {
    if (!url) return "";
    if (url.includes("drive.google.com")) {
      const match = url.match(/\/d\/([^\/\?]+)/) || url.match(/id=([^&]+)/);
      if (match && match[1]) {
        return `https://lh3.googleusercontent.com/d/${match[1]}`;
      }
    }
    return url;
  };

  const processData = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    return Object.keys(data).map(key => data[key]);
  };

  useEffect(() => {
    const fetchWorksData = async () => {
      try {
        const [gunRes, knieveRes, bombRes] = await Promise.all([
          fetch('/api/works/Guns'),
          fetch('/api/works/Knieves'),
          fetch('/api/works/Bombs') // Diperbaiki dari 'Bombst'
        ]);

        if (gunRes.ok) setGunData(processData(await gunRes.json()));
        if (knieveRes.ok) setKnieveData(processData(await knieveRes.json()));
        if (bombRes.ok) setBombData(processData(await bombRes.json()));
      } catch (error) {
        console.error("Gagal mengambil data dari server:", error);
      }
    };

    fetchWorksData();
  }, []);

  const currentData = {
    "Guns": gunData,
    "Knieves": knieveData,
    "Bombs": bombData
  };

  const mainBg = isDarkMode ? "bg-[#1e293b]" : "bg-gray-50";
  const folderBodyBg = isDarkMode ? "bg-[#0f172a]" : "bg-yellow-400";  
  const activeTabClass = isDarkMode 
    ? "bg-[#0f172a] text-white shadow-none" 
    : "bg-yellow-400 text-gray-900 shadow-none";
  const inactiveTabClass = isDarkMode
    ? "bg-slate-700 text-gray-400 hover:bg-slate-600 shadow-inner"
    : "bg-orange-400 text-white hover:bg-orange-300 shadow-inner";
  const textColorTitle = isDarkMode ? "text-white" : "text-gray-900";
  const textColorDesc = isDarkMode ? "text-gray-300" : "text-gray-700";

  const activeList = currentData[activeTab] || [];

  return (
    <>
      <div className={`${mainBg} flex justify-center transition-colors duration-300 w-full`}>
        <div className="w-full max-w-5xl">
          
          <div className="flex items-end space-x-1">
            <div className="flex flex-col md:flex-row w-full md:w-auto md:space-x-1">
              {categories.map((category) => {
                const isActive = activeTab === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`
                      relative px-8 py-3 rounded-t-2xl ml-5 md:ml-0 font-bold text-lg transition-all duration-300 md:w-auto cursor-pointer
                      ${isActive 
                        ? `${activeTabClass} z-10 translate-y-1 h-14 order-last md:order-none` 
                        : `${inactiveTabClass} z-0 h-12 mb-1 md:mb-0 order-1 md:order-none` 
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={`${folderBodyBg} rounded-b-3xl rounded-tr-none md:rounded-tr-3xl rounded-tl-3xl md:rounded-tl-none p-6 md:p-10 shadow-xl min-h-[500px] relative z-20 transition-colors duration-300`}>
            
            {activeList.length === 0 ? (
              <div className={`text-center py-20 ${textColorTitle}`}>
                sorry we're 
                <p className={`text-5xl font-bold pt-5 ${textColorTitle}`}>OUT OF STOCK !</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeList.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedItem(item)}
                    className={`rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white'
                    }`}
                  >
                    <div>
                      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3 bg-gray-200">
                        {item.img ? (
                          <img
                            src={fixDriveUrl(item.img)}
                            alt={item.title || "Item preview"}
                            className="w-full h-full object-cover"
                            loading="lazy" 
                            decoding="async"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-1">
                            <ImageIcon size={32} />
                            <span className="text-xs">Tidak Ada Gambar</span>
                          </div>
                        )}
                      </div>

                      <h3 className={`font-bold text-lg leading-snug mb-2 line-clamp-1 ${textColorTitle}`}>
                        {item.title}
                      </h3>

                      <p className={`text-xs sm:text-sm line-clamp-2 mb-4 ${textColorDesc}`}>
                        {item.desc}
                      </p>
                    </div>

                    {item.link && (
                      <div className="pt-2 border-t border-gray-200/20 flex justify-end">
                        <span className="text-xs font-bold text-orange-500 hover:underline flex items-center gap-1">
                          Details <ExternalLink size={12} />
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className={`rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden max-h-[90vh] flex flex-col p-6 relative ${
              isDarkMode ? 'bg-[#1e293b] text-white border border-slate-700' : 'bg-white text-black'
            }`}
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-center mb-4 border-b pb-3 border-gray-500/20">
              <h2 className="text-xl font-bold line-clamp-1">{selectedItem.title}</h2>
              <button 
                onClick={() => setSelectedItem(null)}
                className="hover:text-red-400 transition-colors rounded-lg hover:bg-white/10 cursor-pointer p-1"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="w-full h-64 rounded-xl overflow-hidden relative bg-gray-100 mb-4">
              <img 
                src={fixDriveUrl(selectedItem.img)} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <p className={`text-sm leading-relaxed mb-6 overflow-y-auto max-h-36 ${textColorDesc}`}>
              {selectedItem.desc}
            </p>

            <div className="flex justify-between items-center pt-2">
              {selectedItem.link ? (
                <a 
                  href={selectedItem.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  Buy NOW <ExternalLink size={14} />
                </a>
              ) : <div />}

              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gray-500 text-white hover:bg-gray-600 transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}