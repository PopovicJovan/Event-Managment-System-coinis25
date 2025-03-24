import { useParties } from "../hooks/use-parties";
import { Slider } from "../components/slider.jsx";
import { NewsFeed } from "../components/newsFeed.jsx";
import { UpcomingEvents } from "../components/upcomingEvents.jsx";

export const HomePage = () => {
  const { parties, isLoading } = useParties();

  if (isLoading) return <div className="flex justify-center items-center h-screen text-white">Loading events...</div>;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-black text-white">
      <header className="mb-12">
      <h1 className="text-4xl font-bold text-center mb-4">Event Management System</h1>
      <p className="text-xl text-center text-purple-400">Discover amazing events happening worldwide</p>
      </header>
      <div className="flex flex-col lg:flex-row gap-8">
        <Slider parties={parties} />
        <NewsFeed parties={parties} />
      </div>
      <UpcomingEvents parties={parties} />
    </div>
  );
};
