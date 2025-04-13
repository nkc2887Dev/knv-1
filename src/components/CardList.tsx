import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Movie } from "../@types/common";
import { config } from "../config/processEnv";

const { API_URL, API_KEY, IMDB_ID } = config;

const CardList: React.FC<{ search: string }> = ({ search }) => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!search.trim()) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_URL}?i=${IMDB_ID}&apikey=${API_KEY}&s=${search}`
        );
        const result = await response.json();
        if (result?.Search) {
          setData(result.Search);
        } else {
          setData([]);
          setError("No results found.");
        }
      } catch (err) {
        setError("Something went wrong. Please try again.");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [search]);

  return (
<div className="container">
  {loading && <p className="message loading">Loading...</p>}
  {!loading && error && <p className="message error">{error}</p>}
  {!loading && !error && data.length === 0 && (
    <p className="message">No movies to display.</p>
  )}
  {!loading &&
    !error &&
    data.map((item) => <Card key={item.imdbID} {...item} />)}
</div>

  );
};

export default CardList;
