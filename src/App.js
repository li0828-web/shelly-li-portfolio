import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/developer-setup" element={<DeveloperSetup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <BasicInfo />
      <Work />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </>
  );
}

export default App;
