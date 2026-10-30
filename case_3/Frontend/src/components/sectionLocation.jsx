export const SectionLocation = ({ isDarkMode }) => {
  const cardClass = isDarkMode ? "bg-[#1e293b] border-gray-700" : "bg-white border-gray-300";
  const summaryHover = isDarkMode ? "bg-slate-700 hover:bg-slate-600 text-white" : "bg-orange-500 hover:bg-orange-600 text-white";
  const contentBg = isDarkMode ? "bg-slate-900/50 border-gray-700 text-gray-300" : "bg-gray-50/50 border-gray-200 text-gray-600";

  return (
    <section className={`w-full max-w-4xl mx-auto ${contentBg} border mb-6 sm:mb-10 rounded-2xl p-5 transition-colors duration-300`}>      
      <div className={`w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden border-[4px] sm:border-[8px] ${cardClass}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3999.8156970431774!2d107.98017747499875!3d-7.174395392830469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b3907e03cb8d%3A0xa22abef1455dbde5!2sMamat%20GunShop%20(CABANG%20THE%20PANAS%20TIRIS)!5e1!3m2!1sid!2sid!4v1793356630910!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="text-center mt-5 sm:mt-6">
        <a
          href="https://maps.google.com/?q=-7.1743954,107.9801775"
          target="_blank"
          rel="noopener noreferrer"
          className={`${summaryHover} px-6 uppercase sm:px-8 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold inline-block transition-all w-full sm:w-auto shadow-md cursor-pointer`}
        >
          See on Google Maps
        </a>
      </div>

    </section>
  );
};