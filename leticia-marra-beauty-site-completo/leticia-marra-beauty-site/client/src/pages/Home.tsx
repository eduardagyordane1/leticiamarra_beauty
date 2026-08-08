import { Button } from "@/components/ui/button";
import { Phone, MapPin, Instagram, ChevronLeft, ChevronRight, Sparkles, Scissors, Palette, Hand, Leaf } from "lucide-react";
import { useState } from "react";
import profileImage from "../img/WhatsApp Image 2026-07-14 at 10.09.11.jpeg";
import featuretteVideo1 from "../img/snapinsta-1786110555215.mp4";
import featuretteVideo2 from "../img/snapinsta-1786110585047.mp4";
import featuretteVideo3 from "../img/snapinsta-1786110507352.mp4";

/**
 * Instituto Marra - Redesigned with Bootstrap Carousel Style
 * Luxury beauty salon with rose, gold and purple palette
 * Design Philosophy: Modern carousel layout with elegant typography
 */

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  cta: string;
  videoUrl: string;
}

const services: Service[] = [
  {
    id: "facial",
    title: "Maquiagem",
    description: "Oferecemos maquiagem para realçar a sua beleza em qualquer ocasião!",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: "body",
    title: "Design de Sobrancelhas",
    description: "Cuidando e harmonizando o seu olhar",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    id: "massage",
    title: "Massagens Relaxantes",
    description: "Relaxamento e bem-estar total",
    icon: <Hand className="w-8 h-8" />,
  },
  {
    id: "skincare",
    title: "Massagens Estéticas",
    description: "Ajudando você a estar bem consigo mesma",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: "makeup",
    title: "Esfoliação Corporal",
    description: "Promovendo uma renovação celular em sua pele",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: "eyebrows",
    title: "Limpeza de Pele",
    description: "Promovendo o cuidado específico que sua pele merece",
    icon: <Scissors className="w-8 h-8" />,
  },
];

const carouselSlides: CarouselSlide[] = [
  {
    id: "slide1",
    title: "Instituto Marra",
    description: "Aqui nós acreditamos que beleza vai muito além de aparência!",
    videoUrl: "/workspaces/leticiamarra_beauty/leticia-marra-beauty-site-completo/leticia-marra-beauty-site/client/src/img/snapinsta-1786110585047.mp4",
    cta: "Agende seu horário",
    ctaHref: "https://wa.me/5534996886145",
  },
  {
    id: "slide2",
    title: "Cuidados Especializados para te atender",
    description: "Nossos cuidados são pensados em cada detalhe para que além de tudo você se sinta bem consigo mesma",
    videoUrl: "/workspaces/leticiamarra_beauty/leticia-marra-beauty-site-completo/leticia-marra-beauty-site/client/src/img/snapinsta-1786110507352.mp4",
    cta: "Conheça mais",
  },
  {
    id: "slide3",
    title: "Nossa prioridade é você!",
    description: "Atendimento personalizado a cada detalhe para que você se sinta bem",
    videoUrl: "/workspaces/leticiamarra_beauty/leticia-marra-beauty-site-completo/leticia-marra-beauty-site/client/src/img/snapinsta-1786110555215.mp4",
    cta: "Fale conosco",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5534996886145"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-white"
        title="Enviar mensagem no WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.226l-.341.194-3.52-.92.939 3.426.203.323a9.79 9.79 0 001.191 4.753c.26.365.823 1.171 2.486 2.077 1.654.913 3.065.885 3.589.87.846-.03 2.552-.434 3.995-2.366 1.444-1.933 1.776-3.6 1.959-4.261.081-.358.308-1.172.308-2.228 0-.975-.279-1.9-.823-2.746a9.897 9.897 0 00-2.838-2.622 9.885 9.885 0 00-4.663-1.228z"/>
        </svg>
      </a>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">Instituto Marra</h1>
            <p className="text-xs text-muted-foreground">Beleza e Cuidado</p>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#servicos" className="text-sm font-medium text-foreground hover:text-primary transition">Serviços</a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <section className="relative w-full h-96 md:h-screen overflow-hidden bg-gradient-to-b from-secondary to-background">
        <div className="relative w-full h-full">
          {/* Carousel Slides */}
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full flex items-center justify-between px-4 md:px-12">
                {/* Left Content */}
                <div className="flex-1 max-w-2xl">
                  <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{backgroundColor: '#ebc7e7'}}
                  >
                    <a
                      href={slide.ctaHref ?? "#contato"}
                      target={slide.ctaHref ? "_blank" : undefined}
                      rel={slide.ctaHref ? "noopener noreferrer" : undefined}
                    >
                      {slide.cta}
                    </a>
                  </Button>
                </div>

                {/* Right Image */}
                <div className="hidden lg:flex flex-1 items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
                    <img
                      src={profileImage}
                      alt="Instituto Marra"
                      className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 shadow-lg" style={{backgroundColor: '#d5a4d6'}}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 shadow-lg" style={{backgroundColor: '#d5a4d6'}}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-primary/40 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - 3 Columns */}
      <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary to-primary/40 mx-auto rounded-full"></div>
          </div>

          {/* Services Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
                <a href="#contato" className="inline-block mt-6 text-primary font-semibold hover:underline">
                  Ver detalhes »
                </a>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(3, 6).map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
                <a href="#contato" className="inline-block mt-6 text-primary font-semibold hover:underline">
                  Ver detalhes »
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-primary/30 to-transparent h-px"></div>

      {/* Featurette Section 1 */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Beleza que Realça Sua Essência
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Atendimento pensado a cada detalhe para que você se sinta bem!
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-full"
              >
                Agendar Horário
              </Button>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>
                <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl overflow-hidden flex items-center justify-center">
                  <video
                    src={featuretteVideo1}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-primary/30 to-transparent h-px"></div>

      {/* Featurette Section 2 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:flex justify-center order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>
                <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center">
                  <video
                    src={featuretteVideo2}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Profissionalismo e Excelência
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                No Instituto Marra nós pensamos em cada detalhe para que você estaja em dia com sua autoestima. 
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-full"
              >
                Conhecer Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-primary/30 to-transparent h-px"></div>

      {/* Featurette Section 3 */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Seu Bem-estar é Nossa Missão
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Acreditamos que a beleza vai além da aparência. É sobre se sentir confiante, cuidada e valorizada em cada momento.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-full"
              >
                Agendar Agora
              </Button>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>
                <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center">
                  <video
                    src={featuretteVideo3}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary to-primary/40 mx-auto rounded-full"></div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5534996886145"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 rounded-2xl border border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-2">
                WhatsApp
              </span>
              <span className="text-foreground font-bold text-lg group-hover:text-primary transition-colors duration-300">
                (34) 99688-6145
              </span>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=-18.41599360940535,-46.417261761298754"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 rounded-2xl border border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-2">
                Localização
              </span>
              <span className="text-foreground font-bold text-lg text-center group-hover:text-primary transition-colors duration-300">
                Presidente Olegário, MG
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/leticiamarra_maquiagens"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 rounded-2xl border border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-2">
                Instagram
              </span>
              <span className="text-foreground font-bold text-lg text-center group-hover:text-primary transition-colors duration-300">
                @leticiamarra_maquiagens
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2026 Instituto Marra. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Realçando sua beleza única em todos os momentos.            pnpm build
            pnpm preview
            pnpm start
          </p>
          <div className="mt-6 pt-6 border-t border-border">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition">
              Voltar ao Topo ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
