import { useEffect, useState } from "react";
import { partiesService } from "../services/partiesService";

export const useParties = () => {
  const [parties, setParties] = useState([]);
  useEffect(() => {
    const fetchParties = async () => {
      try {
        const data = await partiesService.getParties();
        setParties(data.partylist);
      } catch (err) {
        console.error(err);
      }
    };
    fetchParties();
  }, []);

  return { parties };
};
