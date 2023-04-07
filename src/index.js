import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/accueil/App';
import Header from './pages/common/Header';
import Footer from "./pages/common/Footer";
import NotFound from "./pages/notfound/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotAvailable from "./pages/common/NotAvailable";
import Head from "react-document-configuration";

export default function App() {
    return (
        <BrowserRouter>
            <Head title="Chargement..." icon="logo.jpg"/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dev" element={<NotAvailable/>}/>
                <Route path="/as" element={<NotAvailable/>}/>
                <Route path="/contact" element={<NotAvailable/>}/>
                <Route path="/projets" element={<NotAvailable/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
