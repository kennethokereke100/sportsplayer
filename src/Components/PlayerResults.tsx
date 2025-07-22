import React from 'react';
import type { Player } from '../hooks/newPlayerSearch';

interface PlayerResultsProps {
  results: Player[] | null;
  loading: boolean;
  error: string | null;
}

const PlayerResults: React.FC<PlayerResultsProps> = ({ results, loading, error }) => {
  return (
    <div
      className="mt-6 w-full px-2 sm:px-4 md:px-6 lg:px-8"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <style>
        {`
          .player-card {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 1.25rem;
            gap: 1rem;
            border-radius: 1rem;
            background-color: white;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
            width: 100%;
          }

          .player-thumb {
            width: 96px;
            height: 96px;
            border-radius: 9999px;
            object-fit: cover;
            background-color: #f3f4f6;
          }

          .player-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 1rem;
            flex: 1;
          }

          .player-info-title {
            font-size: 22px;
            font-weight: 700;
            color: #111418;
            margin-bottom: 4px;
          }

          .player-info-sub {
            color: #60758a;
            font-size: 16px;
            line-height: 1.4;
            word-break: break-word;
          }

          @media (max-width: 640px) {
            .player-card {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .player-info {
              padding-left: 0;
              padding-top: 0.75rem;
              padding-bottom: 0.25rem;
              align-items: center;
            }
          }
        `}
      </style>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {results && results.length > 0 && (
        <div className="flex justify-center">
          <ul className="w-full" style={{padding:'34px'}}>
            {results.map((player) => (
              <li key={player.idPlayer} className="player-card">
                {player.strThumb && (
                  <img
                    src={player.strThumb}
                    alt={player.strPlayer}
                    className="player-thumb"
                  />
                )}
                <div className="player-info">
                  <p className="player-info-title">
                    {player.strStatus === 'Retired' ? 'Retired' : 'Active'}
                  </p>
                  <p className="player-info-sub">{player.strPlayer}</p>
                  <p className="player-info-sub">
                    {player.strSport} {player.strPosition ? `/ ${player.strPosition}` : ''}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlayerResults;
