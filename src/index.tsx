import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient} contextSharing>
    <BrowserRouter>
      <React.StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </React.StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
