import { useState, createContext, Dispatch, SetStateAction } from "react";
import "./App.css";
import Header from "./components/Header";
import Data from "./data.json";
import PlanetList from "./components/PlanetList";
import PlanetInfo from "./components/PlanetInfo";

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
  setData: Dispatch<SetStateAction<Planet[] | null>>;
}>({ data: null, setData: () => null });

function App() {
  const [data, setData] = useState<Planet[] | null>(Data);

  const [planetClicked, setPlanetClicked] = useState<boolean | number>(false);

  return (
    <>
      <MyContext.Provider value={{ data, setData }}>
        <Header
          planetClicked={planetClicked}
          setPlanetClicked={setPlanetClicked}
        />
        {/* <PlanetList setPlanetClicked={setPlanetClicked} /> */}
        <PlanetInfo />
      </MyContext.Provider>
    </>
  );
}

export default App;
