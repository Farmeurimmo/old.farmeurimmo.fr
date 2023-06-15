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
import Dev from "./pages/dev/Dev";
import As from "./pages/as/As";
import Projets from "./pages/projets/Projets";

export default function App() {
    return (
        <BrowserRouter>
            <Head title="Chargement..." icon="logo.jpg"/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dev" element={<Dev/>}/>
                <Route path="/as" element={<As/>}/>
                <Route path="/projets" element={<Projets/>}/>
                <Route path="/avis" element={<NotAvailable/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
