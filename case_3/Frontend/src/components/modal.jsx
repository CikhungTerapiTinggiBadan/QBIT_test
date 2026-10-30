export const Modal = ({ title, onClose, children, maxWidth = "max-w-screen md:max-w-3xl", isDarkMode }) => (
  <div className="fixed inset-0 flex items-center justify-center p-0 md:p-4 z-50 bg-black/60 backdrop-blur-sm transition-opacity">
    
    <div className={`rounded-none md:rounded-3xl shadow-2xl ${maxWidth} w-full mx-auto overflow-hidden animate-in zoom-in duration-200 h-full md:h-auto md:max-h-[90vh] flex flex-col transition-colors duration-300
      ${isDarkMode ? 'bg-[#1e293b]' : 'bg-white'}`}>
      
      <div className={`px-6 py-3 text-sm font-medium flex justify-end items-center flex-none transition-colors duration-300
        ${isDarkMode ? 'text-gray-200' : 'text-white'}`}>
      </div>

      <div className={`p-8 flex-1 overflow-y-auto custom-scrollbar transition-colors duration-300
        ${isDarkMode ? 'bg-[#1e293b] text-gray-200' : 'bg-gray-50 text-black'}`}>
        
        {children}
        
        <div className="mt-8 text-center">
          <button 
            onClick={onClose} 
            className={`px-6 py-2 font-bold rounded-md transition-all
              ${isDarkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-700' 
              }`}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  </div>
);