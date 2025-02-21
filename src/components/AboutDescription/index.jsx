import "./css/index.css";
import ideiaIcon from "../../assets/images/lampada.png";
import fogueteIcon from "../../assets/images/foguete.png";
import pcIcon from "../../assets/images/computador.png";

export default function AboutDescription() {
  return (
    <main className="about__description px-3">
      <div className="about___itens text-blue-dark my-3" style={{ fontWeight: 600 }}>
        <p className="img-text">
          
          <img src={pcIcon} alt="computador" loading="lazy"  /> 
          Desde 2019 Programando no Front-end          
        </p>
        <p className="img-text">          
          <img
            src={fogueteIcon}
            alt="computador"
            loading="lazy"
            
          />
          Criador de conteúdo sobre programação
        </p>
        <p className="img-text">
          <img
            src={ideiaIcon}
            alt="computador"
            loading="lazy"
            
          />
          Transformando Ideias em Experiências Digitais
        </p>
      </div>
    
      <p
        style={{ textAlign: "justify" }}
        className="text-blue-dark textos"
      >
        Apaixonado por tecnologia e desenvolvimento web, tenho mais de 5 anos de
        sólida trajetória no front-end, onde transformo ideias em interfaces
        intuitivas e impactantes. Com profundo domínio em HTML, CSS e
        JavaScript, ampliei minhas habilidades com frameworks como Vue.js,
        React.js e Node.js, criando soluções robustas e escaláveis para diversos
        tipos de projetos.
      </p>

      <p
        style={{ textAlign: "justify" }}
        className="text-blue-dark textos"
      >
        Além de atuar em diversas empresas e projetos, também tenho experiência
        como freelancer, o que me proporcionou flexibilidade para adaptar-me a
        diferentes tecnologias e contextos. A criação de conteúdo sobre
        programação é uma das minhas formas de compartilhar conhecimento e
        contribuir para a comunidade de desenvolvedores.
      </p>

      <p
        style={{ textAlign: "justify" }}
        className="text-blue-dark textos"
      >
        Trabalho com metodologias ágeis como Scrum e Kanban para otimizar a
        organização e a produtividade, sempre focado em entregar valor real.
        Minha experiência me permite colaborar eficientemente com equipes
        multifuncionais, garantindo entregas de qualidade que melhoram a
        experiência do usuário.
      </p>
    </main>
  );
}
