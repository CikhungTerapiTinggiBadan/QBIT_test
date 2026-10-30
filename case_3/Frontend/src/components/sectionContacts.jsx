const socialMedia = [
  { name: "Gmail", url: "mailto:ziadan2960ft.2023@student.uny.ac.id", icon: "https://img.icons8.com/ios-glyphs/60/000000/new-post.png" },
  { name: "Github", url: "https://github.com/CikhungTerapiTinggiBadan", icon: "https://img.icons8.com/ios-glyphs/60/000000/github.png" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ziadanrs", icon: "https://img.icons8.com/ios-glyphs/60/000000/linkedin.png" },
  { name: "Instagram", url: "https://www.instagram.com/ZiadanRS", icon: "https://img.icons8.com/ios-glyphs/60/000000/instagram-new.png" },
];

export const SectionContact = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-wrap justify-center gap-6">
        {socialMedia.map((item, index) => (
          <a 
            key={index} 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
          >
            <div className={`flex h-27 w-27 md:h-30 md:w-30 items-center justify-center rounded-full shadow-md transition-all duration-300 group-hover:shadow-lg
              ${isDarkMode ? 'bg-[#1e293b] border border-gray-600' : 'bg-white'}`}>
              
              <img 
                src={item.icon} 
                alt={item.name} 
                className={`h-17 w-17 md:h-20 md:w-20 transition-all duration-300 ${isDarkMode ? 'invert' : ''}`} 
              />
            </div>
          </a>
        ))}
      </div>

      <div className={`text-center border-t-2 mt-10 transition-colors duration-300 
        ${isDarkMode ? 'border-gray-600' : 'border-black'}`}>
        <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-6 transition-colors duration-300 
          ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>
          - Clicking Will Redirect you to Another Site -
        </p>
      </div>
    </div>
  );
}
