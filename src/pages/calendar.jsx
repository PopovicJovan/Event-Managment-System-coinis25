// import { useMemo } from "react";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
// import enUS from "date-fns/locale/en-US"; // ← fixed import
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { useParties } from "../hooks/use-parties";

// const locales = {
//   "en-US": enUS,
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// export const CalendarPage = () => {
//   const { parties, isLoading } = useParties();

//   const events = useMemo(() => {
//     return parties.map((party) => ({
//       title: party.nameParty,
//       start: new Date(party.dateStart),
//       end: new Date(party.dateEnd),
//       resource: party,
//     }));
//   }, [parties]);

//   return (
//     <div className="min-h-screen bg-black text-white p-6">
//       <h1 className="text-3xl font-bold text-center text-purple-400 mb-8">
//         Event Calendar
//       </h1>

//       {isLoading ? (
//         <p className="text-center text-white">Loading events...</p>
//       ) : (
//         <div className="bg-white rounded-lg p-4">
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 600 }}
//             className="text-black"
//             popup
//           />
//         </div>
//       )}
//     </div>
//   );
// };
