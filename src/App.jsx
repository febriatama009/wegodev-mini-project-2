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

  return (
    <div className="bg-slate-600 h-fit">
      <Navbar />
      <SearchBar />
      <EmojisContainer>
        {loading && <Loading />}
        {error && <Empty text="Something Wrong Happends!" />}
        {emojisData.length > 0 && <Emojis emojisData={emojisData} />}
      </EmojisContainer>
    </div>
  );
};

export default App;
