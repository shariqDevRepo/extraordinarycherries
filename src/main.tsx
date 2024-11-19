import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Buffer } from "buffer";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.tsx";
import { config } from "./wagmi.ts";

import "./index.css";
import ScrollToSection from "./sections/ScrollToSection.tsx";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer theme="colored" position="bottom-right" />

        <BrowserRouter>
        <ScrollToSection />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
