import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client'
import Restaurant from "./views/Restaurant.jsx";



const root =createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Restaurant" element={<Restaurant />} />
    </Routes>
  </BrowserRouter>
)
