import React from "react";
import CardList from "./CardList";

const Home: React.FC = () => {
  const [input, setInput] = React.useState<string>("Spiderman");
  const [search, setSearch] = React.useState<string>("Spiderman");

  const handleSearch = () => {
    setSearch(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontSize: "2rem",
          margin: "1rem 0",
          color: "#333",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        KNV Movie Show
      </h3>
      <div className="search">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <CardList search={search} />
    </>
  );
};

export default Home;
