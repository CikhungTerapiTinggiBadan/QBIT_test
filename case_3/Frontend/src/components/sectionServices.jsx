export const SectionServices = ({ isDarkMode }) => {
  const textColorTitle = isDarkMode ? "text-white" : "text-gray-900";
  const textColorBody = isDarkMode ? "text-gray-300" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-[#1e293b] border-gray-700" : "bg-white border-gray-300";
  const hoverBg = isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-50";
  const contentBg = isDarkMode ? "bg-slate-900/50 border-gray-700" : "bg-gray-50/50 border-gray-100";
  const arrowColor = isDarkMode ? "text-white" : "text-black";

  const serviceCategories = [
    {
      categoryTitle: "Services i offer",
      items: [
        { 
          title: "Custom Guns", 
          desc: "What do you want? RPGs? Minigun? Flamethrower? Railgun? a Nuclear Launcher??? I can do anything. Even your mom.", 
          pic: "/w1.svg" 
        },
        { 
          title: "Erase Serial Number", 
          desc: "I can do this. On the house", 
          pic: "/w2.svg"
        },
        {
          title: "Re-Calibration", 
          desc: "You will hit a fly 10 kilometers away after i'm done with it.", 
          pic: "/i1.svg"
        },
        {
          title: "Blow Stuff up", 
          desc: "BOOOOOOOOOOOOOOMMMMM.", 
          pic: "/i2.svg"
        },
        {
          title: "Beat Up Someone", 
          desc: "Just for fun.", 
          pic: "/g1.svg"
        },
        {
          title: "Doing WEb Development", 
          desc: "This is the only true thing.", 
          pic: "/g2.svg"
        }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      
      {serviceCategories.map((category, catIndex) => (
        <div key={catIndex} className="w-full">
          
          <h3 className={`text-xl md:text-2xl text-center md:text-start font-black uppercase mb-6 transition-colors duration-300 ${textColorTitle}`}>
            {category.categoryTitle}
            <div className="h-1 w-24 bg-orange-500 mt-2 mx-auto md:mx-0 rounded-full"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((item, itemIndex) => (
              <details key={itemIndex} className={`group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border ${cardBg}`}>
                
                <summary className={`list-none flex items-center cursor-pointer px-5 py-4 font-bold uppercase tracking-tight transition-colors ${textColorTitle} ${hoverBg}`}>            
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-200 group-open:rotate-90 flex-shrink-0 ${arrowColor}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>

                  <span className="flex-1 text-center pr-5 text-lg">
                    {item.title}
                  </span>
                </summary>
                
                <div className={`relative w-full max-w-[250px] aspect-square overflow-hidden group items-center justify-center mx-auto mt-2 rounded-lg transition-colors`}>
                  <img src={item.pic} alt={item.title} className="w-full h-full object-cover"/>
                </div>
                
                <div className={`px-6 py-4 text-sm mt-4 leading-relaxed text-center border-t transition-colors ${textColorBody} ${contentBg}`}>
                  {item.desc}
                </div>

              </details>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
};