import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Utility/Wrapper";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Docs from "./pages/Dev/docs";
import GetQuotes from "./pages/tools/Anime/GetQuotes";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            {/* Anime Route */}
            <Route path="/get-quotes" element={<GetQuotes />} />
            {/* Anime Route */}
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
