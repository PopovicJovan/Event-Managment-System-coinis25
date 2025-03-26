
import { useParties } from "../hooks/use-parties";
import { Slider } from "../components/slider.jsx";
import { NewsFeed } from "../components/news-feed.jsx";
import { UpcomingEvents } from "../components/upcoming-events.jsx";
import { TopEvents } from "../components/top-events.jsx";
import { SpinLoader } from "../components/spin-loader.jsx";
import './home.css';


export const HomePage = () => {
  const { parties, isLoading } = useParties();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-bgColor text-white">
        <SpinLoader />
      </div>
    );
  }
  

  return (
    <div className="cont-padding mx-auto min-h-screen text-white overflow-hidden"
    style={{ backgroundColor: "var(--bgColor)" }}>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl text-purple-400 font-bold text-center mb-4">
          Event Management System
        </h1>
        <p className="text-xl text-center text-white-400">
          Discover amazing events happening worldwide
        </p>
      </header>

      {/* Slider & NewsFeed Section */}
      <div className="flex flex-col lg:flex-row gap-8 ">
        <Slider parties={parties} />
        <NewsFeed parties={parties} />
      </div>
      {/* Top Events Section */}
      <TopEvents events={parties} />
      {/* Upcoming Events Section */}
      <UpcomingEvents parties={parties} />
    </div>
  );
};
