import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import Header from './Header';
import NotFound from "./pages/notfound/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
