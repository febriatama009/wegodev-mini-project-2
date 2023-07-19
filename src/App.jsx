import { useState, useEffect } from "react";
import axios from "axios";
import {
  Navbar,
  SearchBar,
  EmojisContainer,
  Emojis,
  Empty,
  Loading,
} from "./components/index";

const App = () => {
  //state
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //fetch api
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28`
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //handle search emoji
  const handleSearchEmoji = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="bg-slate-600 overflow-y-auto h-screen">
      <Navbar />
      <SearchBar onChange={handleSearchEmoji} value={searchText} />
      <EmojisContainer>
        {loading && <Loading />}
        {error && <Empty text="Something Wrong Happends!" />}
        {/* {filterEmoji.length > 0 ? ( // Render filtered emojis if available
          <Emojis emojisData={filteredEmojis} />
        ) : (
          emojisData.length > 0 && <Emojis emojisData={emojisData} />
        )} */}
        {emojisData.length > 0 && (
          <Emojis emojisData={emojisData} searchText={searchText} />
        )}
      </EmojisContainer>
    </div>
  );
};

export default App;
