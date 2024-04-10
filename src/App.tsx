import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Data from "./data.json";
import PlanetList from "./components/PlanetList";

interface Planet {
  id: number;
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planetImg: string;
    internal: string;
    geology: string;
  };
}

export const MyContext = createContext<{
  data: Planet[] | null;
  setData: React.Dispatch<React.SetStateAction<Planet[] | null>>;
}>({ data: null, setData: () => null });

function App() {
  const [data, setData] = useState<Planet[] | null>(Data);

  return (
    <>
      <MyContext.Provider value={{ data, setData }}>
        <Header />
        <PlanetList />
      </MyContext.Provider>
    </>
  );
}

export default App;
