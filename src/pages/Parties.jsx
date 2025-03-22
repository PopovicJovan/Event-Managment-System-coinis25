import { Card } from "../components/Card";
import { useParties } from "../hooks/useParties";

export const Parties = () => {
  const { parties } = useParties();

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parties.map((party) => (
          <Card
            key={party.id}
            title={party.nameParty}
            organizer={party.nameOrganizer}
            image={party.urlImageFull}
            dateStart={party.dateStart}
            dateEnd={party.dateEnd}
          />
        ))}
      </div>
    </div>
  );
};
