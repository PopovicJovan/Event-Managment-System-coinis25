import { useEffect, useState } from "react";
import { partiesService } from "../services/parties-service";

export const useParties = () => {
  const [parties, setParties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const data = await partiesService.getParties();
        setParties(data.partylist);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchParties();
  }, []);

  return { parties, isLoading };
};
