import { useState } from "react";
import { CardComponent } from "../components/Card";
import { useParties } from "../hooks/use-parties";
import Pagination from "@mui/material/Pagination";

export const PartiesPage = () => {
  const { parties, isLoading } = useParties(); 
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
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedParties.map((party) => (
              <CardComponent
                key={party.id}
                title={party.nameParty}
                organizer={party.nameOrganizer}
                image={party.urlImageFull}
                dateStart={party.dateStart}
                dateEnd={party.dateEnd}
                id={party.id}
              />
            ))}
          </div>
          <div className="flex justify-center my-6 text-white">
            <Pagination
              count={Math.ceil(parties.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              color="secondary"
            />
          </div>
        </>
      )}
    </div>
  );
};
