const faqData = [
  { q: "Are you available for work/ commisions?", a: "Always." },
  { q: "Are you single?", a: "Yes." },
  { q: "Why are you so handsome?", pic: "/mog.jpg", a: "." }
];

export const SectionFAQ = ({ isDarkMode }) => {
  const cardClass = isDarkMode ? "bg-[#1e293b] border-gray-700" : "bg-white border-gray-300";
  const summaryHover = isDarkMode ? "hover:bg-slate-800 text-gray-200" : "hover:bg-gray-50 text-gray-800";
  const contentBg = isDarkMode ? "bg-slate-900/50 border-gray-700 text-gray-300" : "bg-gray-50/50 border-gray-100 text-gray-600";

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <details key={index} className={`border rounded-xl overflow-hidden shadow-sm transition-colors duration-300 ${cardClass}`}>
          <summary className={`cursor-pointer px-5 py-4 font-bold uppercase tracking-tight transition-colors ${summaryHover}`}>
            {item.q}
          </summary>
          <div className={`px-5 py-4 text-sm border-t transition-colors ${contentBg}`}>
            <p className="mb-3">{item.a}</p>

            {item.pic && (
              <img 
                src={item.pic} 
                alt={item.a} 
                className={`w-full max-w-md h-auto rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}
              />
            )}        
          </div>
        </details>
      ))}
    </div>
  );
};