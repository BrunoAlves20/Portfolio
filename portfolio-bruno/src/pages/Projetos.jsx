import React, { useState, useEffect } from 'react';
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Projetos() {
  const [repositorios, setRepositorios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Consumindo a API pública do seu GitHub
    fetch('https://api.github.com/users/BrunoAlves20/repos?per_page=100')
      .then(response => response.json())
      .then(data => {
        // REGRA DO TECH LEAD: Filtra apenas os repositórios que contêm a tag 'portfolio' nos tópicos
        const filtrados = data.filter(repo => repo.topics && repo.topics.includes('portfolio'));
        setRepositorios(filtrados);
        setCarregando(false);
      })
      .catch(error => {
        console.error("Erro ao buscar projetos do GitHub:", error);
        setCarregando(false);
      });
  }, []);

  return (
    <div className="bg-darkBg min-h-screen text-offWhite font-sans p-8 md:p-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Botão para voltar para a Home */}
        <Link to="/" className="inline-flex items-center gap-2 text-brandOrange hover:text-brandRed font-bold mb-12 transition-colors">
          <FaArrowLeft /> Voltar para o Início
        </Link>

        <h1 className="text-4xl md:text-5xl font-black mb-4">Repositório Completo</h1>
        <p className="text-lightGray mb-16 font-light">Projetos autorais e contribuições selecionadas via API do GitHub.</p>

        {carregando ? (
          <div className="text-center text-xl text-brandOrange animate-pulse">Carregando seus códigos...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repositorios.map(repo => (
              <div key={repo.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-brandOrange/40 transition-all group">
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:text-brandOrange transition-colors">{repo.name}</h3>
                  <p className="text-lightGray text-sm font-light mb-6 line-clamp-3">
                    {repo.description || "Projeto backend sem descrição definida no GitHub ainda."}
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  {/* Renderiza as tags/tópicos do repositório */}
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.filter(t => t !== 'portfolio').map(topic => (
                      <span key={topic} className="text-[10px] font-bold uppercase bg-brandRed/10 text-brandRed px-2.5 py-0.5 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-bold text-offWhite hover:text-brandOrange transition-colors w-max"
                  >
                    <FaGithub /> Acessar Código <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projetos;