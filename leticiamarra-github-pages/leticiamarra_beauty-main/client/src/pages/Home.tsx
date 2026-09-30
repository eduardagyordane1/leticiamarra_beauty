import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Droplets,
  Leaf,
  Hand,
  Palette,
  Heart,
  MessageCircle,
  MapPin,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import profileImage from "../img/WhatsApp Image 2026-07-14 at 10.09.11.jpeg";
import video1 from "../img/snapinsta-1786110555215.mp4";
import video2 from "../img/snapinsta-1786110585047.mp4";
import video3 from "../img/snapinsta-1786110507352.mp4";
import hidraglossInfo from "../img/hidragloss-info.png";
import poster1 from "../img/video-poster-1.jpg";
import poster2 from "../img/video-poster-2.jpg";
import poster3 from "../img/video-poster-3.jpg";
import "./home.css";

const whatsapp = (service = "") =>
  `https://wa.me/5534996886145?text=${encodeURIComponent(service ? `Olá! Gostaria de saber mais sobre ${service} e consultar os horários disponíveis.` : "Olá! Gostaria de conhecer os procedimentos do Instituto Marra e agendar um horário.")}`;
const services = [
  {
    title: "Hidragloss",
    category: "Lábios",
    icon: Droplets,
    description:
      "Um cuidado especial para lábios hidratados, macios e com aparência renovada.",
    highlight: true,
  },
  {
    title: "Maquiagem",
    category: "Rosto",
    icon: Palette,
    description:
      "Sua beleza em destaque, com uma produção pensada para cada ocasião.",
  },
  {
    title: "Design de Sobrancelhas",
    category: "Rosto",
    icon: Leaf,
    description: "Detalhes que valorizam seus traços e harmonizam o seu olhar.",
  },
  {
    title: "Limpeza de Pele",
    category: "Rosto",
    icon: Sparkles,
    description: "A atenção e o cuidado específico que a sua pele merece.",
  },
  {
    title: "Massagens Relaxantes",
    category: "Corpo",
    icon: Hand,
    description:
      "Uma pausa na rotina para relaxar e se reconectar com seu bem-estar.",
  },
  {
    title: "Massagens Estéticas",
    category: "Corpo",
    icon: Heart,
    description: "Cuidados corporais personalizados para o seu momento.",
  },
  {
    title: "Esfoliação Corporal",
    category: "Corpo",
    icon: Sparkles,
    description: "Um ritual de cuidado para uma pele com toque mais suave.",
  },
];
const videos = [video1, video2, video3];
const posters = [poster1, poster2, poster3];
const questions = [
  [
    "Como faço para agendar?",
    "Fale com a gente pelo WhatsApp, escolha o procedimento e consulte os horários disponíveis. O agendamento é confirmado diretamente com o Instituto.",
  ],
  [
    "Quanto tempo dura o Hidragloss?",
    "Segundo o protocolo apresentado pelo Instituto, a sessão leva de 30 a 40 minutos. A duração informada do efeito é de 2 a 3 meses, podendo variar de pessoa para pessoa.",
  ],
  [
    "O Hidragloss precisa de manutenção?",
    "O protocolo divulgado prevê até 3 sessões, com intervalos de 15 dias. A quantidade e a manutenção devem ser definidas na avaliação individual.",
  ],
  [
    "Há contraindicações para o Hidragloss?",
    "O material do Instituto informa restrições para gestantes, lactantes, pessoas com herpes ativa, feridas abertas nos lábios ou em uso de Roacutan (isotretinoína). Informe essas condições antes de agendar e confirme a indicação em uma avaliação profissional.",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [currentVideo, setCurrentVideo] = useState(0);
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [goal, setGoal] = useState("");
  useEffect(() => {
    if (selectedService && !dialogRef.current?.open)
      dialogRef.current?.showModal();
  }, [selectedService]);
  useEffect(() => {
    if (!selectedService) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selectedService]);
  const closeService = () => {
    dialogRef.current?.close();
    setSelectedService(null);
  };
  const goals = [
    {
      label: "Cuidar dos lábios",
      category: "Lábios",
      copy: "Conheça o Hidragloss e tire suas dúvidas sobre o cuidado labial.",
    },
    {
      label: "Valorizar meu rosto",
      category: "Rosto",
      copy: "Explore maquiagem, design de sobrancelhas e limpeza de pele.",
    },
    {
      label: "Ter uma pausa para mim",
      category: "Corpo",
      copy: "Descubra nossos cuidados corporais e massagens.",
    },
  ];
  return (
    <div className="marra-site" id="inicio">
      <a className="skip-link" href="#principal">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="wrap nav-inner">
          <a
            href="#inicio"
            className="brand"
            aria-label="Instituto Marra, início"
          >
            <span className="brand-mark">
              m<span>✦</span>
            </span>
            <span>
              INSTITUTO MARRA<small>BELEZA & CUIDADO</small>
            </span>
          </a>
          <nav
            className={menuOpen ? "main-nav is-open" : "main-nav"}
            aria-label="Menu principal"
            id="main-menu"
          >
            {[
              ["Procedimentos", "servicos"],
              ["Hidragloss", "hidragloss"],
              ["Sobre nós", "sobre"],
              ["Contato", "contato"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="button small header-cta"
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar horário <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="principal">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> SEU MOMENTO DE CUIDADO
            </p>
            <h1>
              Sua beleza.
              <br />
              Sua essência.
              <br />
              <em>Nosso cuidado.</em>
            </h1>
            <p className="intro">
              Beleza vai além da aparência. Aqui, cada detalhe é pensado para
              você se sentir bem, confiante e ainda mais você.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero meu momento <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#servicos">
                Explorar procedimentos <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span className="mini-spark">✧</span>
              <span>
                Atendimento personalizado
                <br />
                <strong>Um cuidado que começa em você.</strong>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src={profileImage}
                alt="Letícia Marra, esteticista e cosmetóloga"
                fetchPriority="high"
              />
            </div>
            <span className="orbit-label">BELEZA QUE ACOLHE</span>
            <a href="#hidragloss" className="new-card">
              <span className="new-icon">
                <Droplets />
              </span>
              <span>
                <small>NOVO POR AQUI</small>
                <strong>Hidragloss Lips</strong>
                <span>Conheça o cuidado labial</span>
              </span>
              <ArrowUpRight size={20} />
            </a>
            <span className="visual-star" aria-hidden="true">
              ✧
            </span>
          </div>
        </section>
        <div className="values-band">
          <div className="wrap">
            <span>Cuidado nos detalhes</span>
            <span aria-hidden="true">✦</span>
            <span>Beleza com naturalidade</span>
            <span aria-hidden="true">✦</span>
            <span>Tempo para você</span>
          </div>
        </div>
        <section className="discovery wrap" aria-labelledby="discovery-title">
          <div>
            <p className="eyebrow">UM CUIDADO DO SEU JEITO</p>
            <h2 id="discovery-title">
              O que você deseja <em>hoje?</em>
            </h2>
          </div>
          <div
            className="discovery-options"
            role="group"
            aria-label="Escolha seu momento"
          >
            {goals.map(item => (
              <button
                key={item.label}
                aria-pressed={goal === item.label}
                onClick={() => {
                  setGoal(item.label);
                  setCategory(item.category);
                }}
              >
                {item.label}
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <div className="discovery-answer" aria-live="polite">
            {goal ? (
              <>
                <p>{goals.find(item => item.label === goal)?.copy}</p>
                <a href="#servicos" className="text-link">
                  Ver opções selecionadas <ArrowRight size={17} />
                </a>
              </>
            ) : (
              <p>Escolha uma opção para explorar os procedimentos.</p>
            )}
          </div>
        </section>
        <section className="section wrap" id="servicos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CUIDADO EM CADA DETALHE</p>
              <h2>
                Nossos serviços.
                <br />
                <em>Seu momento de beleza.</em>
              </h2>
            </div>
            <p>
              Do rosto ao corpo, descubra o cuidado
              <br className="desktop-break" /> que combina com você.
            </p>
          </div>
          <div
            className="filters"
            role="group"
            aria-label="Filtrar procedimentos"
          >
            {["Todos", "Rosto", "Corpo", "Lábios"].map(item => (
              <button
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="sr-only" role="status">
            {
              services.filter(
                s => category === "Todos" || s.category === category
              ).length
            }{" "}
            procedimentos disponíveis
          </p>
          <div className="services-grid">
            {services
              .filter(s => category === "Todos" || s.category === category)
              .map((service, i) => (
                <article
                  key={service.title}
                  className={`service-card ${service.highlight ? "featured" : ""}`}
                  style={{ animationDelay: `${i * 45}ms` }}
                >
                  <div className="service-top">
                    <service.icon size={26} strokeWidth={1.4} />
                    <span>
                      {service.highlight
                        ? "NOVIDADE"
                        : service.category.toUpperCase()}
                    </span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    className="service-details-button"
                    onClick={() => setSelectedService(service)}
                    aria-label={`Ver detalhes de ${service.title}`}
                  >
                    Ver detalhes <ArrowUpRight size={19} />
                  </button>
                </article>
              ))}
          </div>
        </section>
        <section className="hydra-section" id="hidragloss">
          <div className="wrap hydra-grid">
            <div className="hydra-art">
              <div className="hydra-ring">
                <Droplets size={70} strokeWidth={0.8} />
                <span>Hidragloss</span>
                <em>lips</em>
                <small>UM TOQUE DE CUIDADO</small>
              </div>
              <span className="art-spark" aria-hidden="true">
                ✧
              </span>
              <span className="art-caption">
                Mais maciez. Mais cuidado. Mais você.
              </span>
            </div>
            <div className="hydra-copy">
              <p className="eyebrow">NOVO RITUAL DE BELEZA</p>
              <h2>
                Um carinho a mais
                <br />
                <em>para os seus lábios.</em>
              </h2>
              <p>
                Conheça o Hidragloss: um procedimento de hidratação labial para
                cuidar do ressecamento e deixar os lábios com aparência mais
                saudável e renovada.
              </p>
              <div className="hydra-facts">
                <div>
                  <strong>30–40 min</strong>
                  <span>por sessão</span>
                </div>
                <div>
                  <strong>Até 3 sessões</strong>
                  <span>intervalos de 15 dias</span>
                </div>
                <div>
                  <strong>2–3 meses</strong>
                  <span>duração informada*</span>
                </div>
              </div>
              <p className="fine-print">
                *Informações do protocolo divulgado pelo Instituto. Resultados,
                indicação e manutenção variam conforme avaliação individual.
              </p>
              <a
                className="button"
                href={whatsapp("Hidragloss")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero conhecer o Hidragloss <ArrowUpRight size={18} />
              </a>
              <details className="care-details">
                <summary>Cuidados e contraindicações</summary>
                <p>
                  Conforme o material do Instituto, o procedimento não é
                  indicado para gestantes, lactantes, pessoas com herpes ativa,
                  feridas abertas ou em uso de Roacutan (isotretinoína).
                  Confirme sua elegibilidade em uma avaliação profissional.
                </p>
                <a
                  href={hidraglossInfo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver material original do procedimento ↗
                </a>
              </details>
            </div>
          </div>
        </section>
        <section className="section wrap about-grid" id="sobre">
          <div className="video-panel">
            <video
              key={currentVideo}
              src={videos[currentVideo]}
              poster={posters[currentVideo]}
              controls
              playsInline
              preload="metadata"
              aria-label={`Vídeo do Instituto Marra ${currentVideo + 1}`}
            />
            <div className="video-controls">
              <span>UM OLHAR SOBRE O NOSSO CUIDADO</span>
              <div>
                <button
                  aria-label="Vídeo anterior"
                  onClick={() =>
                    setCurrentVideo(
                      (currentVideo + videos.length - 1) % videos.length
                    )
                  }
                >
                  <ChevronLeft size={19} />
                </button>
                <span aria-live="polite">
                  {currentVideo + 1} / {videos.length}
                </span>
                <button
                  aria-label="Próximo vídeo"
                  onClick={() =>
                    setCurrentVideo((currentVideo + 1) % videos.length)
                  }
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">BEM-VINDA AO INSTITUTO MARRA</p>
            <h2>
              Mais que beleza.
              <br />
              <em>É sobre se sentir bem.</em>
            </h2>
            <p>
              Com Letícia Marra, esteticista e cosmetóloga, cada atendimento é
              uma oportunidade de valorizar a sua essência.
            </p>
            <p>
              Nosso cuidado é pensado em cada detalhe, com atenção às suas
              necessidades e ao que faz você se sentir confiante, cuidada e
              acolhida.
            </p>
            <a
              className="text-link"
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vamos conversar? <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className="faq-section">
          <div className="wrap faq-grid">
            <div>
              <p className="eyebrow">PODEMOS TE AJUDAR?</p>
              <h2>
                Antes do seu
                <br />
                <em>momento de cuidado.</em>
              </h2>
            </div>
            <div className="faq-list">
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="section wrap contact-section" id="contato">
          <p className="eyebrow">RESERVE UM TEMPO PARA VOCÊ</p>
          <h2>
            Seu próximo momento
            <br />
            de cuidado <em>começa aqui.</em>
          </h2>
          <a
            className="button"
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Agendar pelo WhatsApp{" "}
            <ArrowUpRight size={18} />
          </a>
          <div className="contact-links">
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              <span>
                <small>FALE COM A GENTE</small>(34) 99688-6145
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a
              href="https://maps.google.com/?q=-18.41599360940535,-46.417261761298754"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin />
              <span>
                <small>VENHA NOS VISITAR</small>Presidente Olegário, MG
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a
              href="https://instagram.com/leticiamarra_maquiagens"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              <span>
                <small>ACOMPANHE NO INSTAGRAM</small>@leticiamarra_maquiagens
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>
      <dialog
        ref={dialogRef}
        className="service-modal"
        aria-labelledby="service-dialog-title"
        aria-describedby="service-dialog-description"
        onClose={() => setSelectedService(null)}
        onClick={event => {
          if (event.target === event.currentTarget) closeService();
        }}
      >
        {selectedService && (
          <div className="modal-inner">
            <button
              className="modal-close"
              onClick={closeService}
              aria-label="Fechar detalhes"
              autoFocus
            >
              <X size={21} />
            </button>
            <p className="eyebrow">
              {selectedService.category.toUpperCase()} · INSTITUTO MARRA
            </p>
            <selectedService.icon
              className="modal-icon"
              size={40}
              strokeWidth={1.3}
            />
            <h2 id="service-dialog-title">{selectedService.title}</h2>
            <p id="service-dialog-description">{selectedService.description}</p>
            {selectedService.highlight ? (
              <>
                <div className="modal-facts">
                  <span>
                    <strong>30–40 min</strong> por sessão
                  </span>
                  <span>
                    <strong>Até 3 sessões</strong> intervalos de 15 dias
                  </span>
                  <span>
                    <strong>2–3 meses</strong> duração informada
                  </span>
                </div>
                <p className="modal-note">
                  Informações do protocolo divulgado pelo Instituto. Indicação,
                  resultados e manutenção dependem de avaliação individual.
                </p>
                <details className="care-details">
                  <summary>Consultar contraindicações</summary>
                  <p>
                    O material do Instituto informa restrições para gestantes,
                    lactantes, pessoas com herpes ativa, feridas abertas nos
                    lábios ou em uso de Roacutan (isotretinoína). Confirme a
                    indicação com a profissional antes de agendar.
                  </p>
                </details>
              </>
            ) : (
              <div className="modal-reassurance">
                <Sparkles size={20} />
                <p>
                  Converse com a gente sobre suas preferências, valores e
                  horários disponíveis. Vamos ajudar você a conhecer esse
                  cuidado.
                </p>
              </div>
            )}
            <a
              className="button"
              href={whatsapp(selectedService.title)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar pelo WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        )}
      </dialog>
      <footer className="site-footer wrap">
        <span>© {new Date().getFullYear()} Instituto Marra</span>
        <span>Beleza que respeita a sua essência.</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
      <a
        className="floating-chat"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </div>
  );
}
