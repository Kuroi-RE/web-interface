import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./Utility/Wrapper";
import Layout from "./components/Layout";
import Docs from "./pages/developer/Dev";
import GetQuotes from "./pages/tools/Anime/GetQuotes";
import Tiktok from "./pages/tools/Downloader/Tiktok";
import Instagram from "./pages/tools/Downloader/Instagram";
import About from "./pages/About";
import QrCode from "./pages/tools/General/QrCode";
import Error from "./pages/Error";
import PasswordGenerator from "./pages/tools/General/PasswordGenerator";
import PostalCode from "./pages/tools/General/PostalCode";
import ScanQr from "./pages/tools/General/ScanQr";

import Loader from "./Utility/Loader";

import React, { Suspense } from "react";
import CekResi from "./pages/tools/General/CekResi";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<Loader height={1000} />}>
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
              <Route path="/cek-resi" element={<CekResi />} />
              {/* GENERAL */}
              {/* NOT FOUND PATH HANDLER */}
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
