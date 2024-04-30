import { useState, createContext, Dispatch, SetStateAction } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Update import
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
    <BrowserRouter>
      <MyContext.Provider value={{ data, setData }}>
        <Header
          planetClicked={planetClicked}
          setPlanetClicked={setPlanetClicked}
        />

        <Routes>
          {window.innerWidth < 768 ? (
            <Route
              path="/"
              element={<PlanetList setPlanetClicked={setPlanetClicked} />}
            />
          ) : (
            <Route path="/" element={<PlanetInfo filter="OVERVIEW" />} />
          )}

          <Route
            path="/:planet/overview"
            element={<PlanetInfo filter="OVERVIEW" />}
          />
          <Route
            path="/:planet/structure"
            element={<PlanetInfo filter="STRUCTURE" />}
          />
          <Route
            path="/:planet/surface"
            element={<PlanetInfo filter="SURFACE" />}
          />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
