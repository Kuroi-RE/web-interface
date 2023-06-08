import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Utility/Wrapper";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Docs from "./pages/Dev/Docs";
import GetQuotes from "./pages/tools/Anime/GetQuotes";
import Tiktok from "./pages/tools/Downloader/Tiktok";
import Instagram from "./pages/tools/Downloader/Instagram";
import About from "./pages/About";
import QrCode from "./pages/tools/General/QrCode";
import Error from "./pages/Error";
import PasswordGenerator from "./pages/tools/General/PasswordGenerator";
import PostalCode from "./pages/tools/General/PostalCode";
import ScanQr from "./pages/tools/General/ScanQr";

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
            <Route path="/qrcode-scan" element={<ScanQr />} />
            <Route path="/password-maker" element={<PasswordGenerator />} />
            <Route path="/postal-code" element={<PostalCode />} />
            {/* GENERAL */}
            {/* NOT FOUND PATH HANDLER */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
