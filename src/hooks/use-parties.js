import { useEffect, useState } from "react";
import { partiesService } from "../services/parties-service";

export const useParties = () => {
  const [parties, setParties] = useState([]);
  const [filteredParties, setFilteredParties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const data = await partiesService.getParties();
        setParties(data.partylist);
        setFilteredParties(data.partylist); // Inicijalno postavljanje
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchParties();
  }, []);

  const applyFilter = () => {
    const filtered = parties.filter((party) =>
      party.nameParty.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredParties(filtered);
    setIsFiltered(true);
  };
  const deleteFilter = () => {
    setIsFiltered(false);
    setFilteredParties(parties);
    setSearchTerm("");
  };

  return {
    filteredParties,
    isLoading,
    setSearchTerm,
    applyFilter,
    searchTerm,
    deleteFilter,
    isFiltered,
  };
};
