import { useParties } from "../hooks/use-parties";
import { Slider } from "../components/slider.jsx";
import { NewsFeed } from "../components/newsFeed.jsx";
import { UpcomingEvents } from "../components/upcomingEvents.jsx";
import { TopEvents } from "../components/topEvents.jsx";


export const HomePage = () => {
  const { parties, isLoading } = useParties();

  if (isLoading)
    return <div className="flex justify-center items-center h-screen text-white">Loading events...</div>;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-black text-white">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl text-purple-400 font-bold text-center mb-4">Event Management System</h1>
        <p className="text-xl text-center text-white-400">Discover amazing events happening worldwide</p>
      </header>

      {/* Slider & NewsFeed Section */}
      <div className="flex flex-col lg:flex-row gap-8">
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
