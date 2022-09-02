import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from "react-query";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({defaultOptions: {queries: {retry: 3}}})

root.render(
  <React.StrictMode>
     <QueryClientProvider contextSharing={true} client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);