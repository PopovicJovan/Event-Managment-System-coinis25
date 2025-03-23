import { useState } from "react";
import { CardComponent } from "../components/card";
import { useParties } from "../hooks/use-parties";
import Pagination from "@mui/material/Pagination";

export const PartiesPage = () => {
  const { parties } = useParties();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedParties = parties.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedParties.map((party) => (
          <CardComponent
            key={party.id}
            title={party.nameParty}
            organizer={party.nameOrganizer}
            image={party.urlImageFull}
            dateStart={party.dateStart}
            dateEnd={party.dateEnd}
          />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Pagination
          count={Math.ceil(parties.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="secondary"
        />
      </div>
    </div>
  );
};
