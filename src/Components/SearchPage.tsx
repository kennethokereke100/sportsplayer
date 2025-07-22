import React, { useState } from 'react';
import { usePlayerSearch } from '../hooks/newPlayerSearch';
import PlayerResults from './PlayerResults';
import '../index.css';

const SearchPage: React.FC = () => {
  const [input, setInput] = useState('');
  const { results, loading, error, searchPlayer } = usePlayerSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      searchPlayer(input.trim());
    }
  };

  return (
    <>
      <style>
        {`
          * {
            font-family: 'Roboto', sans-serif !important;
            box-sizing: border-box;
          }

          .search-page-container {
            background-color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 80px;
          }

          .search-title {
            font-size: 36px;
            color: #1f2937;
            margin-bottom: 32px;
            text-align: center;
            font-weight: 400;
          }

          .search-container {
            width: 100%;
            max-width: 600px;
            background-color: white;
            border-radius: 9999px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                        0 4px 6px -2px rgba(0, 0, 0, 0.05);
            display: flex;
            align-items: center;
            padding: 24px 32px;
          }

          .search-input {
            width: 100%;
            background: transparent;
            color: #374151;
            font-size: 18px;
            outline: none;
            border: none;
            padding: 0;
          }

          .search-input::placeholder {
            color: #6b7280;
          }

          .search-icon {
            margin-right: 16px;
            font-size: 20px;
          }

          .send-button {
            margin-left: 16px;
            color: #4b5563;
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 4px;
            border-radius: 50%;
            transition: all 0.2s;
          }

          .send-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .send-button:hover:enabled {
            color: #1f2937;
            background-color: #f3f4f6;
          }

          .send-icon {
            font-size: 20px;
          }

          .loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 32px;
            width: 100%;
          }

          .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @media (max-width: 640px) {
            .search-container {
              padding: 16px 20px;
            }

            .search-title {
              font-size: 28px;
            }
          }
        `}
      </style>

      <div className="search-page-container">
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full px-4">
          <h1 className="search-title">Who are you looking up?</h1>
          <div className="search-container relative w-full">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder="Search any player's name…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              aria-label="Search input"
            />
            <button
              type="submit"
              className="send-button"
              aria-label="Submit search"
              disabled={!input.trim()}
            >
              <span className="send-icon">➤</span>
            </button>
          </div>
        </form>

        {/* Loader */}
        {loading && (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        )}

        {/* Player Results */}
        <PlayerResults
          results={
            input.trim()
              ? results?.filter(
                  (p) =>
                    p.strPlayer?.toLowerCase() === input.trim().toLowerCase()
                ) ?? []
              : []
          }
          loading={false} // We are handling loader directly here
          error={error}
        />

        {/* No results message */}
        {input.trim() &&
          !loading &&
          !error &&
          results &&
          results.filter(
            (p) =>
              p.strPlayer?.toLowerCase() === input.trim().toLowerCase()
          ).length === 0 && (
            <p className="mt-6 text-gray-500">No results found.</p>
          )}
      </div>
    </>
  );
};

export default SearchPage;
