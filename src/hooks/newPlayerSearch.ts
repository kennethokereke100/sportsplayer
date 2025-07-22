import { useState } from 'react';

export interface Player {
  idPlayer: string;
  strPlayer: string;
  strSport: string;
  strPosition: string;
  strTeam: string;
  strThumb: string;
  strStatus?: string;
  stats?: Record<string, string | number>[]; 
}

export const usePlayerSearch = () => {
  const [results, setResults] = useState<Player[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPlayer = async (query: string, exactMatch: boolean = false) => {
    setLoading(true);
    setError(null);
    console.log('Searching for player:', query);

    try {
      const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${query}`);
      const data = await response.json();

      if (data?.player) {
        let players: Player[] = data.player;

        if (exactMatch) {
          players = players.filter(
            (p) => p.strPlayer.toLowerCase() === query.toLowerCase()
          );
        }

        console.log('Search results:', players);
        setResults(players);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, searchPlayer };
};
