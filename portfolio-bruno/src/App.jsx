import React from 'react';
// Importando os ícones do FontAwesome através do react-icons
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen">
      {/* Menu de Navegação */}
      <nav className="fixed w-full bg-darkBg/95 border-b border-cardBg py-4 px-8 flex justify-between items-center z-50">
        <div className="text-accentHover font-bold text-xl tracking-wider">Bruno.dev</div>
        <ul className="hidden md:flex gap-8 text-textPrimary">
          <li><a href="#home" className="hover:text-accentHover transition-colors">Home</a></li>
          <li><a href="#sobre" className="hover:text-accentHover transition-colors">Sobre</a></li>
          <li><a href="#habilidades" className="hover:text-accentHover transition-colors">Habilidades</a></li>
          <li><a href="#projetos" className="hover:text-accentHover transition-colors">Projetos</a></li>
        </ul>
      </nav>

      {/* Seção Home */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <h1 className="text-5xl md:text-6xl text-textPrimary font-bold mb-4">
          Olá, sou <span className="text-accentHover">Bruno Nogueira</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-textSecondary">
          Back-End Developer e Analista de Sistemas
        </h2>
        <p className="max-w-2xl text-lg mb-8">
          Estudante de Análise e Desenvolvimento de Sistemas, cursando o 4º semestre da faculdade.
        </p>
        
        {/* Nova Área de Botões com Ícones e Download */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* O atributo 'download' avisa o navegador para baixar o arquivo em vez de abrir */}
          <a 
            href="/curriculo-bruno.pdf" 
            download="Curriculo_Bruno_Nogueira.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-accentHover text-darkBg rounded hover:bg-accent transition-all font-bold"
          >
            <FaDownload /> Baixar Currículo
          </a>
          
          <a 
            href="https://www.linkedin.com/in/brunonogueiraalves/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-accentHover text-accentHover rounded hover:bg-accentHover hover:text-darkBg transition-all font-bold"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          
          <a 
            href="https://github.com/BrunoAlves20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-accentHover text-accentHover rounded hover:bg-accentHover hover:text-darkBg transition-all font-bold"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="min-h-[70vh] flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl font-bold text-textPrimary mb-8 border-b-4 border-accentHover pb-2">Sobre Mim</h2>
        <p className="max-w-3xl text-center text-lg leading-relaxed">
          Com as tardes livres após a faculdade, tenho focado intensamente em estudar desenvolvimento de software e aplicar meus conhecimentos em projetos práticos para o meu GitHub. Meu foco principal está no ecossistema de backend, explorando arquiteturas robustas e tecnologias em nuvem. Paralelamente, invisto na fluência no idioma inglês para expandir minhas possibilidades no mercado de tecnologia e atuar em equipes globais.
        </p>
      </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className="min-h-[70vh] flex flex-col justify-center items-center px-4 bg-cardBg/30">
        <h2 className="text-3xl font-bold text-textPrimary mb-12 border-b-4 border-accentHover pb-2">Minhas Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {['Java', 'Python', 'Linux', 'AWS Cloud Foundations', 'AWS Cloud Developing', 'Generative AI & Machine Learning', 'SQL / Banco de Dados', 'Cobol'].map((skill) => (
            <div key={skill} className="bg-cardBg border border-gray-700 text-accentHover px-6 py-3 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(102,252,241,0.2)] transition-all cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="min-h-[80vh] flex flex-col justify-center items-center px-4 py-20">
        <h2 className="text-3xl font-bold text-textPrimary mb-12 border-b-4 border-accentHover pb-2">Projetos em Destaque</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          <div className="bg-cardBg p-8 rounded-xl border border-gray-700 hover:border-accentHover hover:-translate-y-2 transition-all flex flex-col">
            <h3 className="text-2xl text-textPrimary font-bold mb-4">API de Serviços Financeiros</h3>
            <p className="text-textSecondary mb-6 flex-grow">
              Desenvolvimento de uma API RESTful focada em processamento seguro de transações. Arquitetura pensada para simular regras de negócio complexas, utilizando padrões de projeto e banco de dados relacional.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-accent/20 text-accentHover px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-accent/20 text-accentHover px-3 py-1 rounded-full text-sm">Spring Boot</span>
              <span className="bg-accent/20 text-accentHover px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            </div>
            <a href="#" className="flex items-center justify-center gap-2 border border-accentHover text-accentHover py-2 rounded font-bold hover:bg-accentHover hover:text-darkBg transition-colors">
              <FaGithub /> Ver Repositório
            </a>
          </div>

          <div className="bg-cardBg p-8 rounded-xl border border-gray-700 hover:border-accentHover hover:-translate-y-2 transition-all flex flex-col">
            <h3 className="text-2xl text-textPrimary font-bold mb-4">Microsserviço de Análise de Dados</h3>
            <p className="text-textSecondary mb-6 flex-grow">
              Aplicação voltada para extração e manipulação de grandes volumes de dados. O sistema foi preparado para rodar em ambientes Linux e pensado para futura integração com serviços de nuvem da AWS.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-accent/20 text-accentHover px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-accent/20 text-accentHover px-3 py-1 rounded-full text-sm">Linux</span>
              <span className="bg-accent/20 text-accentHover px-3 py-1 rounded-full text-sm">AWS</span>
            </div>
            <a href="#" className="flex items-center justify-center gap-2 border border-accentHover text-accentHover py-2 rounded font-bold hover:bg-accentHover hover:text-darkBg transition-colors">
              <FaGithub /> Ver Repositório
            </a>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="min-h-[80vh] flex flex-col justify-center items-center px-4 py-20">
        <h2 className="text-2xl font-bold text-textPrimary mb-12 text-center">Vamos construir algo incrível juntos.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Coluna Esquerda: Formulário */}
          <div className="bg-cardBg p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl text-textPrimary font-bold mb-6">Compartilhe sua visão</h3>
            <form className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input type="text" placeholder="Nome" className="w-full bg-darkBg border border-gray-700 rounded-md p-3 text-textPrimary focus:outline-none focus:border-accentHover transition-colors" />
                <input type="text" placeholder="Nicho" className="w-full bg-darkBg border border-gray-700 rounded-md p-3 text-textPrimary focus:outline-none focus:border-accentHover transition-colors" />
              </div>
              <input type="email" placeholder="E-mail" className="w-full bg-darkBg border border-gray-700 rounded-md p-3 text-textPrimary focus:outline-none focus:border-accentHover transition-colors" />
              <select className="w-full bg-darkBg border border-gray-700 rounded-md p-3 text-textSecondary focus:outline-none focus:border-accentHover transition-colors appearance-none">
                <option value="" disabled selected>Selecione o orçamento</option>
                <option value="baixo">R$ 1.000 - R$ 5.000</option>
                <option value="medio">R$ 5.000 - R$ 10.000</option>
                <option value="alto">Acima de R$ 10.000</option>
              </select>
              <textarea placeholder="Sobre o seu projeto (opcional)" rows="4" className="w-full bg-darkBg border border-gray-700 rounded-md p-3 text-textPrimary focus:outline-none focus:border-accentHover transition-colors resize-none"></textarea>
              <button type="button" className="self-start mt-2 px-6 py-2 bg-[#4b5563] text-white rounded-md hover:bg-[#374151] transition-colors font-medium border border-gray-500">
                Enviar
              </button>
            </form>
          </div>

          {/* Coluna Direita: Contato Rápido e QR Code */}
          <div className="bg-cardBg p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
            <h3 className="text-xl text-textPrimary font-bold mb-6">Contato rápido? Escaneie meu código QR!</h3>
            
            {/* Imagem do QR Code gerada via API pública - Aponta para o seu email */}
            <div className="bg-white p-3 rounded-lg mb-8 w-48 h-48 flex items-center justify-center">
               <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mailto:seuemail@gmail.com" 
                  alt="QR Code Contato" 
                  className="w-full h-full" 
               />
            </div>

            <div className="w-full bg-darkBg border border-gray-700 rounded-lg p-4 text-left">
              <p className="text-textPrimary font-bold mb-4 flex items-center gap-2 text-sm md:text-base">
                <FaEnvelope className="text-pink-400" /> Envie-me um e-mail diretamente:
                <span className="font-normal text-textSecondary ml-1 break-all">seuemail@gmail.com</span>
              </p>
              <div className="flex gap-3">
                <a href="mailto:seuemail@gmail.com" className="px-5 py-2 bg-[#4b5563] border border-gray-500 text-white rounded-md hover:bg-[#374151] transition-colors text-sm font-medium">
                  Enviar e-mail
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('seuemail@gmail.com');
                    alert('E-mail copiado com sucesso!');
                  }}
                  className="px-5 py-2 bg-[#4b5563] border border-gray-500 text-white rounded-md hover:bg-[#374151] transition-colors text-sm font-medium"
                >
                   Cópia
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center p-6 bg-cardBg border-t border-gray-800 text-textSecondary">
        <p>&copy; 2026 Bruno Nogueira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;