import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import data from "./data.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew data={data.crew} />} />
          <Route
            path="technology"
            element={<Technology data={data.technology} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
