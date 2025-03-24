import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Modal } from "./modal"; // Adjust path if needed

export const Slider = ({ parties }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [selectedParty, setSelectedParty] = useState(null); // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => handleNextSlide(), 3000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? Math.max(0, parties.length - visibleSlides) : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev >= parties.length - visibleSlides ? 0 : prev + 1
    );
  };

  const openModal = (party) => {
    setSelectedParty(party);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedParty(null);
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full lg:w-3/4 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-purple-400 text-center">
        Featured Events
      </h2>

      {parties && parties.length > 0 ? (
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlideIndex * (100 / visibleSlides)
                }%)`,
              }}
            >
              {parties.map((party) => (
                <div
                  key={party.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleSlides}%` }}
                >
                  <div
                    className="h-96 rounded-lg overflow-hidden flex flex-col justify-center items-center text-center p-4 relative"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${party.urlImageFull})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      color: "white",
                    }}
                  >
                    <h4 className="text-lg font-medium">
                      {party.nameOrganizer}
                    </h4>
                    <h3 className="text-2xl font-bold my-2">
                      {party.nameParty}
                    </h3>
                    <p className="text-sm">
                      {party.nameCountry}, {party.nameTown}
                    </p>
                    <button
                      onClick={() => openModal(party)}
                      className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-full transition duration-300 mt-4 cursor-pointer"
                    >
                      Learn More
                    </button>
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
        </div>
      ) : (
        <div className="bg-gray-900 rounded-lg p-8 text-center text-white">
          No events available.
        </div>
      )}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} party={selectedParty} />
    </div>
  );
};
