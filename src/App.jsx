import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Utility/Wrapper";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Docs from "./pages/Dev/docs";
import GetQuotes from "./pages/tools/Anime/GetQuotes";
import Tiktok from "./pages/tools/Downloader/Tiktok";
import Instagram from "./pages/tools/Downloader/Instagram";
import About from "./pages/About";
import QrCode from "./pages/tools/General/QrCode";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Docs />} />
            {/* Anime Route */}
            <Route path="/get-quotes" element={<GetQuotes />} />
            {/* Anime Route */}
            {/* DOWNLOADER */}
            <Route path="/tiktok-downloader" element={<Tiktok />} />
            <Route path="/instagram-downloader" element={<Instagram />} />
            {/* DOWNLOADER */}
            {/* GENERAL */}
            <Route path="/qrcode-maker" element={<QrCode />} />
            {/* GENERAL */}
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
