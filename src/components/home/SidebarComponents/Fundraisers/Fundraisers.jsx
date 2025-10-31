import { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CharityFundraisers from './CharityFundraisers';
import { fundraisersData } from './FundraisersData';

const Fundraisers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);
  const clickCountRef = useRef(0);

  const cardWidth = 100;
  const visibleCards = 5;
  const maxScroll = cardWidth * (fundraisersData.length - visibleCards);

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setScrollPosition(Math.max(0, scrollPosition - cardWidth));
    } else {
      setScrollPosition(Math.min(maxScroll, scrollPosition + cardWidth));
    }
    updateArrowVisibility();
  };

  const handleScrollContainerScroll = () => {
    updateArrowVisibility();
  };

  const updateArrowVisibility = () => {
    setShowLeftArrow(scrollPosition > 0);
    setShowRightArrow(scrollPosition < maxScroll);
  };

  const handleTripleClick = () => {
    clickCountRef.current += 1;
    setTimeout(() => {
      if (clickCountRef.current >= 3) {
        setScrollPosition(maxScroll);
      }
      clickCountRef.current = 0;
    }, 300);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-3">Browse categories</h1>
        <p className="text-gray-600 mb-6">Find a cause by browsing top categories</p>
        
        <div className="relative">
          {showLeftArrow && (
            <button 
              onClick={() => handleScroll('left')}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:bg-gray-100 transition-all"
              style={{ width: '50px', height: '50px' }}
              onDoubleClick={handleTripleClick}
            >
              <FiChevronLeft className="w-6 h-6 text-gray-700 mx-auto" />
            </button>
          )}
          
          <div 
            className="overflow-x-auto pb-2 hide-scrollbar"
            ref={scrollContainerRef}
            onScroll={handleScrollContainerScroll}
          >
            <div 
              className="flex transition-transform duration-300 gap-5"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {fundraisersData.map((fundraiser, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-36 h-44 bg-white rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer shadow-md hover:shadow-lg hover:bg-gray-300 transition-all"
                  onDoubleClick={handleTripleClick}
                >
                  <div className="w-20 h-20 mb-3 rounded-full overflow-hidden shadow-sm">
                    <img 
                      src={fundraiser.imageUrl} 
                      alt={fundraiser.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/80?text=Image";
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-center px-1">{fundraiser.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {showRightArrow && (
            <button 
              onClick={() => handleScroll('right')}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:bg-gray-100 transition-all"
              style={{ width: '50px', height: '50px' }}
              onDoubleClick={handleTripleClick}
            >
              <FiChevronRight className="w-6 h-6 text-gray-700 mx-auto" />
            </button>
          )}
        </div>
      </div>
      <hr className='hr my-2' />
      <CharityFundraisers/>
    </>
  );
};

export default Fundraisers;