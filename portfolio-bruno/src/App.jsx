import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando as páginas da pasta src/pages/
import Home from './pages/Home';
import Projetos from './pages/Projetos';

function App() {
  return (
    <Router>
      <Routes>
        {/* Quando a URL for "/", renderiza o componente Home */}
        <Route path="/" element={<Home />} />
        
        {/* Quando a URL for "/todos-os-projetos", renderiza a página da API */}
        <Route path="/todos-os-projetos" element={<Projetos />} />
      </Routes>
    </Router>
  );
}

export default App;