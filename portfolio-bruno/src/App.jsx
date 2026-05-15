import React from 'react';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaCode, FaServer, FaCloud } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-darkBg min-h-screen text-offWhite font-sans selection:bg-brandOrange/30">
      
      {/* Menu de Navegação - Estilo Vidro */}
      <nav className="fixed w-full bg-black/60 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center z-50">
        <div className="text-brandOrange font-bold text-xl tracking-tighter italic">BRUNO.DEV</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-lightGray">
          <li><a href="#home" className="hover:text-brandOrange transition-colors">Home</a></li>
          <li><a href="#sobre" className="hover:text-brandOrange transition-colors">Sobre</a></li>
          <li><a href="#habilidades" className="hover:text-brandOrange transition-colors">Habilidades</a></li>
          <li><a href="#projetos" className="hover:text-brandOrange transition-colors">Projetos</a></li>
          <li><a href="#contato" className="hover:text-brandOrange transition-colors">Contato</a></li>
        </ul>
      </nav>

      {/* Seção Home - Focada no Visual Glassmorphism (Sem os botões sociais) */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Esferas de luz de fundo */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brandOrange/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brandRed/10 rounded-full filter blur-[120px]"></div>

        <div className="relative z-10 bg-darkGray/20 backdrop-blur-2xl border border-white/10 p-12 md:p-20 rounded-[40px] shadow-2xl max-w-4xl w-full">
          <span className="text-brandOrange font-semibold tracking-[0.3em] uppercase text-xs mb-6 block">
            Analista de Sistemas & Back-end
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            Olá, sou <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-brandRed">
              Bruno Nogueira
            </span>
          </h1>
          <p className="text-lightGray text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Domino a lógica do Back-end para entregar sistemas que não apenas atendem requisitos, mas superam expectativas de performance e segurança.
          </p>
        </div>
      </section>

      {/* Seção Sobre - Minimalista com Botões de Ação */}
      <section id="sobre" className="py-32 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-brandOrange"></span> Sobre Mim
        </h2>
        <p className="max-w-3xl text-center text-xl text-lightGray leading-relaxed font-light mb-12">
          Desenvolvedor Back-end Júnior com base em Python, Java e Cloud, especializado em automação, integração de APIs e engenharia de dados.
          Busco elevar meu nível técnico rumo ao FullStack através de metodologias ágeis e aprendizado contínuo.
          Além do código, mantenho foco constante na criação de sistemas eficientes e no aprimoramento do inglês para solucionar desafios complexos e conexões globais.
        </p>

        {/* Nova Área de Botões com Ícones e Download adaptada para o novo Design */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Botão de Download com o Degradê Laranja/Vermelho */}
          <a 
            href="/curriculo-bruno.pdf" 
            download="Curriculo_Bruno_Nogueira.pdf"
            className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-brandOrange to-brandRed text-offWhite rounded-full hover:opacity-90 transition-opacity font-bold shadow-lg"
          >
            <FaDownload /> Baixar Currículo
          </a>
          
          {/* Botões do LinkedIn e GitHub com efeito Glass/Borda suave */}
          <a 
            href="https://www.linkedin.com/in/brunonogueiraalves/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 border border-white/20 text-offWhite rounded-full hover:bg-white/10 hover:border-brandOrange transition-all font-bold"
          >
            <FaLinkedin className="text-xl text-brandOrange" /> LinkedIn
          </a>
          
          <a 
            href="https://github.com/BrunoAlves20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 border border-white/20 text-offWhite rounded-full hover:bg-white/10 hover:border-brandOrange transition-all font-bold"
          >
            <FaGithub className="text-xl text-brandOrange" /> GitHub
          </a>
        </div>
      </section>

      {/* Seção Habilidades - Tags com Degradê */}
      <section id="habilidades" className="py-32 px-4 bg-gradient-to-b from-darkBg to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Stack Tecnológica</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Java', 'Python', 'Linux', 'AWS', 'SQL', 'Generative AI', 'GCP'].map((skill) => (
              <div key={skill} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brandOrange to-brandRed rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-darkBg border border-white/10 px-8 py-4 rounded-xl text-offWhite font-medium">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Projetos - Cards Estilo Vidro */}
      <section id="projetos" className="py-32 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 text-center">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: 'API Financeira', tech: ['Java', 'Spring', 'AWS'], icon: <FaServer /> },
            { title: 'Análise de Dados', tech: ['Python', 'Linux', 'SQL'], icon: <FaCode /> }
          ].map((proj) => (
            <div key={proj.title} className="bg-white/5 border border-white/10 p-10 rounded-[30px] hover:border-brandOrange/50 transition-all group">
              <div className="text-brandOrange text-4xl mb-6 group-hover:scale-110 transition-transform">
                {proj.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
              <p className="text-lightGray mb-8 font-light">Arquitetura de alta performance focada em escalabilidade e segurança de dados.</p>
              <div className="flex gap-3 mb-8">
                {proj.tech.map(t => <span key={t} className="text-xs font-bold uppercase tracking-widest text-brandRed">{t}</span>)}
              </div>
              <a href="#" className="flex items-center gap-2 text-offWhite font-bold group-hover:text-brandOrange transition-colors">
                <FaGithub /> EXPLORAR CÓDIGO
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Contato - Referência da Imagem */}
      <section id="contato" className="py-32 px-4 flex flex-col items-center bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
          <div className="bg-darkGray/20 border border-white/5 p-10 rounded-[30px]">
            <h3 className="text-2xl font-bold mb-8">Compartilhe sua visão</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-brandOrange outline-none transition-colors" />
              <input type="email" placeholder="E-mail" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-brandOrange outline-none transition-colors" />
              <textarea placeholder="Sobre o projeto" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl h-32 focus:border-brandOrange outline-none transition-colors"></textarea>
              <button className="w-full bg-gradient-to-r from-brandOrange to-brandRed py-4 rounded-xl font-bold uppercase tracking-widest">Enviar Mensagem</button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-10 border border-white/5 rounded-[30px] bg-darkGray/10">
            <h3 className="text-xl font-bold mb-8">Contato Rápido</h3>
            <div className="bg-white p-4 rounded-2xl mb-8">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mailto:seuemail@gmail.com" alt="QR" />
            </div>
            <p className="text-lightGray mb-2 italic">Escaneie ou copie:</p>
            <button 
              onClick={() => {navigator.clipboard.writeText('seuemail@gmail.com'); alert('Copiado!')}}
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all font-medium"
            >
              nogueirabruno459@gmail.com
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-midGray border-t border-white/5 text-xs tracking-widest uppercase">
        © 2026 Bruno Nogueira — Built for Performance
      </footer>
    </div>
  );
}

export default App;