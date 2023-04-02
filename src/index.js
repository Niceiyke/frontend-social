import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="container mx-auto">
          <App />
        </div>
        <ReactQueryDevtools/>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

