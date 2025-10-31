import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { fundraisersCharityData } from './FundraisersData';

const MSFundraiserCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const cardWidth = 380; 
  const visibleCards = 1;
  const maxScroll = cardWidth * (fundraisersCharityData.length - visibleCards);

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setScrollPosition(Math.max(0, scrollPosition - cardWidth));
    } else {
      setScrollPosition(Math.min(maxScroll, scrollPosition + cardWidth));
    }
  };

  return (
    <div className="w-[92%] mx-auto p-4">
    <h1 className="text-2xl font-bold mb-3">Charity fundraisers</h1>
        <p className="text-gray-600 mb-6">Fundraisers for charities you may care about. Donations may be tax-deductible.</p>
      <div className="relative">
        {scrollPosition > 0 && (
          <button 
            onClick={() => handleScroll('left')}
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-xl hover:bg-gray-100 transition-all"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}
        
        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <div 
            className="flex transition-transform duration-300 gap-6"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {fundraisersCharityData.map((fundraiser) => (
              <div key={fundraiser.id} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-40 bg-blue-900 rounded-t-lg overflow-hidden">
                  <img 
                    src={fundraiser.imageUrl} 
                    alt="MS Walk"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-white text-sm font-bold tracking-widest mb-1">WALK MS</div>
                    <div className="text-white text-2xl font-bold whitespace-pre-line">{fundraiser.tagline}</div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{fundraiser.title}</h3>
                  <p className="text-gray-600 mb-3">
                    Fundraiser for {fundraiser.organization}
                    {fundraiser.organizer && ` by ${fundraiser.organizer}`}
                  </p>
                  
                  <p className="font-bold text-lg mb-1">
                    {fundraiser.raised} of {fundraiser.goal} raised
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4">{fundraiser.donors}</p>
                  
                  <button className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition-colors">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {scrollPosition < maxScroll && (
          <button 
            onClick={() => handleScroll('right')}
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-xl hover:bg-gray-100 transition-all"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MSFundraiserCards;