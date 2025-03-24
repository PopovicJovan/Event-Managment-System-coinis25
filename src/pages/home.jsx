import React, { useState, useEffect } from 'react';
import { useParties } from "../hooks/use-parties";
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HomePage = () => {
  const { parties, isLoading } = useParties();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Get latest events for the news feed
  const latestParties = [...parties]
    .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
    .slice(0, 5);

  // Update visible slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Auto-slide every 3 seconds
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, parties.length - visibleSlides) : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => {
      if (parties.length <= visibleSlides) return 0;
      return prevIndex >= parties.length - visibleSlides ? 0 : prevIndex + 1;
    });
  };

  // Format date string to a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (isLoading) return <div className="flex justify-center items-center h-screen text-white">Loading events...</div>;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-black text-white">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">Event Management System</h1>
        <p className="text-xl text-center text-purple-400">Discover amazing events happening worldwide</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Slider Section */}
        <div className="w-full lg:w-3/4 relative">
          <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
          
          {parties.length > 0 ? (
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlideIndex * (100 / visibleSlides)}%)` }}
                >
                  {parties.map((party) => (
                    <div key={party.id} className={`flex-shrink-0 px-2`} style={{ width: `${100 / visibleSlides}%` }}>
                      <div 
                        className="h-96 rounded-lg overflow-hidden flex flex-col justify-between p-4 relative"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${party.urlImageFull})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="text-center">
                          <p className="text-purple-300 font-medium">{party.nameOrganizer}</p>
                        </div>
                        
                        <div className="text-center">
                          <h3 className="text-xl font-bold mb-2">{party.nameParty}</h3>
                          <p className="text-gray-300 mb-4">{party.nameCountry}, {party.nameTown}</p>
                          <p className="text-sm mb-4">{formatDate(party.dateStart)}</p>
                        </div>
                        
                        <div className="text-center">
                          <Link to={''}>
                            <button className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-full transition duration-300">
                              Learn More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {parties.length > visibleSlides && (
                <>
                  <button 
                    onClick={handlePrevSlide} 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button 
                    onClick={handleNextSlide} 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              
              <div className="flex justify-center mt-4">
                {parties.slice(0, Math.min(parties.length, Math.ceil(parties.length / visibleSlides))).map((_, index) => (
                  <div 
                    key={index} 
                    className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                      index === Math.floor(currentSlideIndex / visibleSlides) ? 'bg-purple-600' : 'bg-gray-600'
                    }`}
                    onClick={() => setCurrentSlideIndex(index * visibleSlides)}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <p>No events available at the moment.</p>
            </div>
          )}
        </div>
        
        {/* News Feed Section */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-2xl font-bold mb-6">Latest Events</h2>
          
          {latestParties.length > 0 ? (
            <div className="space-y-4">
              {latestParties.map((party) => (
                <Link to={`/party/${party.id}`} key={party.id}>
                  <div className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition duration-300">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={party.urlImageSmall || party.urlImageMedium} 
                        alt={party.nameParty} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg truncate">{party.nameParty}</h3>
                      <p className="text-purple-400 text-sm">{party.nameOrganizer}</p>
                      <p className="text-gray-400 text-sm">{party.nameCountry}, {party.nameTown}</p>
                      <p className="text-gray-400 text-xs mt-2">{formatDate(party.dateStart)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <p>No recent events available.</p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Featured Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {parties
            .sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart))
            .filter(party => new Date(party.dateStart) > new Date())
            .slice(0, 3)
            .map((party) => (
              <div key={party.id} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={party.urlImageMedium} 
                    alt={party.nameParty} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{party.nameParty}</h3>
                  <p className="text-purple-400">{party.nameOrganizer}</p>
                  <p className="text-gray-400">{formatDate(party.dateStart)}</p>
                  <p className="text-gray-400 mb-4">{party.nameCountry}, {party.nameTown}</p>
                  <Link to={`/party/${party.id}`}>
                    <button className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-full transition duration-300 w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

