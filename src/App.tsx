import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Check, 
  Menu, 
  X, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Star,
  Users,
  Compass,
  MessageSquare,
  HelpCircle,
  Sparkles,
  Heart
} from 'lucide-react';

// Define the services data matching requirements exactly in Austrian German
interface Service {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "individual",
    emoji: "👤",
    title: "Einzeltherapie",
    description: "Wir bieten einen geschützten und absolut vertraulichen Rahmen, um persönliche Krisen zu bewältigen, Stress abzubauen und traumatische Erfahrungen zu heilen. Unser maßgeschneiderter Behandlungsansatz unterstützt Sie dabei, praktische Strategien zu erarbeiten, die Ihr Selbsterleben und Ihre langfristige emotionale Stabilität kräftigen."
  },
  {
    id: "teen",
    emoji: "🌱",
    title: "Therapie für Jugendliche",
    description: "Das Erwachsenwerden in der heutigen Zeit bringt sowohl für Jugendliche als auch für ihre Bezugspersonen komplexe Herausforderungen mit zich. Wir bieten empathische Begleitung, um junge Menschen in ihrer Identitätsfindung zu stärken, ihr Selbstwertgefühl aufzubauen und schulischen oder sozialen Druck zu bewältigen."
  },
  {
    id: "family",
    emoji: "🏡",
    title: "Familientherapie",
    description: "Wir arbeiten eng mit Familien zusammen, um familiäre Beziehungen zu klären, bestehende Konflikte konstruktiv zu lösen und die interne Kommunikation nachhaltig zu verbessern. Unsere gemeinsamen Einheiten sind darauf ausgerichet, gegenseitige Wertschätzung en Respekt zu fördern."
  },
  {
    id: "trauma",
    emoji: "💫",
    title: "Trauma- & PTBS-Therapie",
    description: "Ein traumatische Erlebnis kann dazu führen, dass Sie sich im Alltag erstarrt, entfremdet oder in permanenter Alarmbereitschaft befinden. Wir arbeiten mit klinisch erprobten, traumaspezifischen Interventionsmethoden, um Ihnen zu helfen, belastende Erinnerungen sicher zu integrieren und Ihre Selbstbestimmung zurückzuerlangen."
  },
  {
    id: "anxiety",
    emoji: "🌊",
    title: "Therapie bei Ängsten & Depression",
    description: "Anhaltende Sorgen, Panikattacken oder tiefe Niedergeschlagenheit schränken die Lebensqualität massiv ein. Wir vermitteln Ihnen wissenschaftlich fundierte Methoden und Verhaltensstrategien, um dysfunktionale Gedankenkreisläufe zu durchbrechen und wieder neuen Antrieb sowie Lebensfreude zu spüren."
  },
  {
    id: "grief",
    emoji: "🕊️",
    title: "Trauer- & Verlustbegleitung",
    description: "Trauer ist ein zutiefst individueller Weg, der weder einen festen Zeitplan noch starre Regeln kennt. Wir bieten Ihnen einen einfühlsamen und haltgebenden Raum, um Abschied zu nehmen, komplexe Emotionen zu verarbeiten und nach einem maßgeblichen Verlust Schritt für Schritt Orientierung zu finden."
  }
];

// Define therapeutic approaches data in Austrian German
interface Approach {
  title: string;
  subtitle: string;
  description: string;
}

const approaches: Approach[] = [
  {
    title: "Kognitive Verhaltenstherapie (KVT)",
    subtitle: "Zielorientiert und klinisch-empirisch validiert",
    description: "Eine strukturierte, wissenschaftlich fundierte Behandlungsmethode, die den Fokus auf den Zusammenhang zwischen Kognitionen, Emotionen und Verhaltensweisen legt. Wir unterstützen Sie aktiv dabei, hinderliche Denkmuster aufzudecken und durch positive Handlungsalternativen zur Bewältigung des Alltags zu ersetzen."
  },
  {
    title: "Achtsamkeitsbasierte Psychotherapie",
    subtitle: "Präsenz im Hier und Jetzt und emotionale Stärkung",
    description: "Durch die Verbindung klassischer verhaltenstherapeutischer Ansätze mit Achtsamkeitsübungen lernen Sie, Gedanken und intensive Gefühle wertfrei wahrzunehmen. Diese Praxis reduziert nachweislich vegetativen Stress, reguliert emotionale Spitzen und fördert die psychische Gesamtwiderstandskraft."
  },
  {
    title: "Akzeptanz- und Commitmenttherapie (ACT)",
    subtitle: "Wertegeleitetes Handeln und persönliches Wachstum",
    description: "Ein moderner psychotherapeutischer Ansatz, der Sie darin bestärkt, unangenehme innere Erlebnisse anzunehmen, statt sie kraftraubend zu bekämpfen. Wir begleiten Sie dabei, Ihre persönlichen Grundwerte klar zu definieren und konkrete Schritte für ein erfülltes, engagiertes Leben zu setzen."
  }
];

// Define FAQs data in Austrian German (with local references like Wahlpsychologe/Wahlarzt-System and ÖGK/Krankenkassa)
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Woher weiß ich, ob eine psychologische Therapie für mich sinnvoll ist?",
    answer: "Eine Psychotherapie oder psychologische Beratung ist dann ratsam, wenn Sie vor überwältigenden Lebensveränderungen stehen, Beziehungskonflikte Sie belasten, Sie unter chronischem Stress leiden oder klinische Symptome zeigen. Wenn Sie das Gefühl haben, allein nicht mehr weiterzukommen, bietet unsere Praxis einen professionell begleiteten Rahmen, um neue Perspektiven und wirksame Bewältigungskompetenzen zu entwickeln."
  },
  {
    question: "Bieten Sie auch Online-Therapie (Videosprechstunden) an?",
    answer: "Ja, wir bieten durchgehend verschlüsselte und datenschutzkonforme Online-Einheiten an. Unsere Plattform erfüllt höchste Sicherheitsstandards im Gesundheitsbereich und garantiert Ihnen dieselbe Qualität und Diskretion wie eine Behandlung direkt in unseren Praxisräumlichkeiten – ganz flexibel von Ihrem bevorzugten Aufenthaltsort aus."
  },
  {
    question: "Wie lange dauert ein therapeutischer Prozess üblicherweise?",
    answer: "Die Behandlungsdauer orientiert sich ganz an Ihrem persönlichen Bedarf und Ihren individuellen Zielen. Einige Anliegen lassen sich gut im Rahmen einer lösungsorientierten Kurzzeittherapie (ca. 8 bis 12 Einheiten) bearbeiten. Bei tiefer sitzenden Mustern oder Traumatisierungen ist meist ein längerfristiger, prozessbegleitender Weg sinnvoll. Wir reflektieren den aktuellen Stand regelmäßig gemeinsam."
  },
  {
    question: "Wie funktioniert die Kostenerstattung mit der Krankenkassa/Sozialversicherung?",
    answer: "Wir führen eine reine Privat- und Wahlpraxis. Dies garantiert Ihnen maximale Flexibilität, absolute Diskretion (keine automatische Weitergabe von Diagnosen an die Sozialversicherungsträger) en zeitnahe Termine. Sie erhalten nach Ablauf der Einheiten einen detaillierten Honorarbeleg, den Sie bei Ihrem zuständigen Krankenversicherungsträger (z.B. ÖGK, SVS, BVAEB) zur teilweisen Refundierung einreichen können. Bitte informieren Sie sich vorab über die genauen Zuschüsse."
  },
  {
    question: "Wie läuft das erste Erstgespräch beziehungsweise die Anamnese ab?",
    answer: "Im Rahmen unseres Erstgesprächs widmen wir uns der Abklärung Ihres Anliegens, erheben Ihre persönliche Lebensgeschichte und stecken erste therapeutische Ziele ab. Es dient dem gegenseitigen Kennenlernen, um herauszufinden, ob die Chemie zwischen uns stimmt en um das für Sie am besten geeignete Behandlungskonzept zu skizzieren."
  }
];

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Accordion active index state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Contact form submission state
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const toggleFaq = (index: number) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      // Clear form
      setContactData({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-text font-sans relative overflow-x-hidden luxury-noise selection:bg-brand-gold/30 selection:text-white">
      
      {/* Top Disclaimer Banner */}
      <div className="sticky top-0 z-[100] w-full bg-amber-100 text-amber-950 font-semibold px-4 py-2.5 border-b border-amber-200 shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-center transition-all duration-300">
        <span>TEST-WEBSITE FÜR PSYCHOLOGINNEN UND PSYCHOLOGEN</span>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-[38px] z-50 w-full bg-brand-black/90 backdrop-blur-md border-b border-brand-border/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold text-[10px] tracking-tighter uppercase font-serif group-hover:scale-105 duration-300 shadow-gold-glow">
              Ψ
            </div>
            <span className="font-serif font-semibold text-lg lg:text-xl tracking-tight text-white group-hover:text-brand-gold transition-colors duration-300 flex items-center gap-2">
              <span>Test-Website <span className="text-brand-gold font-normal lg:font-light">für Psychologen</span></span>
              <span className="flex items-center gap-1.5 ml-1 select-none">
                <img src="https://flagcdn.com/w40/at.png" alt="Austria Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
              </span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Über uns</a>
            <a href="#services" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Leistungen</a>
            <a href="#approach" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Therapieansatz</a>
            <a href="#faq" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">FAQ</a>
            <a href="#contact" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs text-brand-gold hover:underline underline-offset-4 font-semibold">Kontakt</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-brand-gold p-1 focus:outline-none transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[70px] left-0 w-full bg-brand-charcoal border-b border-brand-border py-8 px-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Über uns
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Leistungen
            </a>
            <a 
              href="#approach" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Therapieansatz
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-gold font-semibold uppercase tracking-widest text-sm transition-colors"
            >
              Kontakt
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-44 flex items-center justify-center border-b border-brand-border/40 overflow-hidden bg-brand-black">
        
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/xtTB6YrY/Whats-App-Image-2026-05-19-at-20-54-18.jpg" 
            alt="Praxisatmosphäre Österreich" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75 filter brightness-95 contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-brand-black/60" />
        </div>

        {/* Subtle decorative gold light flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 border border-brand-gold/30 px-3.5 py-1.5 mb-8 bg-brand-charcoal/50 backdrop-blur-sm">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span className="text-brand-gold uppercase tracking-widest text-[9.5px] font-semibold font-mono">Wissenschaftlich fundierte, leitlinienkonforme Behandlung</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-[1.12]">
            Sie haben es verdient, sich besser zu fühlen — <span className="italic font-normal text-brand-gold block mt-2 sm:inline sm:mt-0">und das ist erreichbar.</span>
          </h1>
          
          <p className="font-sans text-brand-text/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mb-12">
            Einfühlsame, wissenschaftlich gestützte Psychotherapie für Erwachsene, Jugendliche und Paare. Begleitet von qualifizierten klinischen Fachkräften.
          </p>

          <div className="flex justify-center w-full max-w-xs">
            <a 
              href="#about"
              className="w-full px-8 py-4 bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 gold-glow-button border border-white flex items-center justify-center gap-2 cursor-pointer shadow-gold-glow"
            >
              Mehr erfahren <ArrowRight size={14} />
            </a>
          </div>

          {/* Quick validation markers below hero */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-xs font-mono text-brand-muted border-t border-brand-border/40 pt-8 w-full">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-brand-gold" /> Eingetragene klinische Psychologinnen & Psychotherapeuten
            </span>
            <span className="flex items-center gap-1.5">
              <LockIcon size={14} /> Verschlüsselte, absolut vertrauliche Plattformen
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-gold" /> Flexible Termingestaltung & Einheiten
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Visual Brand Statement */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative mb-6 group overflow-hidden border border-brand-border p-2 bg-brand-charcoal shadow-2xl">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/90 border border-brand-gold/30 px-3 py-1 text-[9px] uppercase font-mono tracking-widest font-semibold text-brand-gold">
                  Unsere Professionelle Praxis
                </div>
                <img 
                  src="https://i.ibb.co/B2Dkrq1k/Whats-App-Image-2026-05-19-at-20-37-56.jpg" 
                  alt="Therapieeinheit in Wien" 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-80 object-cover filter brightness-90 contrast-105 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>

              <div className="relative mb-8 group overflow-hidden border border-brand-border p-2 bg-brand-charcoal shadow-2xl">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/90 border border-brand-gold/30 px-3 py-1 text-[9px] uppercase font-mono tracking-widest font-semibold text-brand-gold">
                  Therapieraum und Praxisruhe
                </div>
                <img 
                  src="https://i.ibb.co/6cLZLN0f/Whats-App-Image-2026-05-19-at-20-36-08.jpg" 
                  alt="Geschützte Atmosphäre in unserer Wahlpraxis" 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-80 object-cover filter brightness-90 contrast-105 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>

              <div className="w-12 h-px bg-brand-gold mb-6" />
              <span className="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-3">Unsere Kernkompetenz</span>
              <h2 className="font-serif text-3xl md:text-4.5xl leading-tight text-white mb-6 font-semibold">
                Moderne Psychotherapie neu gedacht — individuell, patientenzentriert und exzellent begleitet.
              </h2>
              <p className="text-brand-muted text-base font-light leading-relaxed mb-8">
                Wir verstehen eine professionelle und wertfreie psychologische Begleitung als grundlegendes Fundament für mentale Gesundheit. Frei von bürokratischen Hürden und eng angelehnt an wissenschaftlichen Erkenntnissen, erarbeiten wir mit Ihnen nachhaltige Lösungswege für Ihre seelische Stabilität.
              </p>
              
              <div className="bg-brand-charcoal/80 p-6 border border-brand-border/80 flex items-start gap-4 shadow-xl">
                <span className="text-2xl text-brand-gold pt-1">💡</span>
                <div>
                  <h4 className="font-serif text-white font-medium mb-1">Unser Qualitätsversprechen</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Wir arbeiten ausschließlich mit evidenzbasierten Therapieverfahren, die genau auf Ihre biopsychosozialen Bedürfnisse abgestimmt sind.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key details */}
            <div className="lg:col-span-7 bg-brand-charcoal p-8 md:p-12 border border-brand-border shadow-2xl relative">
              
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand-black border border-brand-border px-4 py-1.5 text-brand-gold text-[10px] uppercase font-mono tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block animate-pulse"></span>
                Praxis-Information
              </div>

              <span className="text-xs text-brand-gold font-mono tracking-widest uppercase block mb-2">Über unsere psychologische Praxis</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-6">
                Willkommen auf der „Test-Website für Psychologen“
              </h3>
              
              <p className="text-brand-text/90 text-base md:text-lg leading-relaxed font-light mb-8">
                Wir sind ein engagiertes Team aus eingetragenen klinischen Psychologinnen/Psychologen und therapeutischen Fachkräften in Österreich. Wir begleiten Sie mit wissenschaftlicher Präzision, fachlicher Leitlinienorientierung und tiefem Verständnis durch schwierige Lebensphasen. Unser Ziel ist es, Ihnen zu helfen, Ihre eigene Resilienz zu reaktivieren und handlungsorientierte Perspektiven zu formen.
              </p>

              <hr className="border-brand-border mb-8" />

              {/* Robust Key Metrics Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">15+ Jahre</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">Zusammengefasste Praxiserfahrung</div>
                </div>

                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">5.000+</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">Erfolgreiche Einheiten</div>
                </div>

                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">Österreich</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">Wahlpraxis-Zulassung</div>
                </div>
                
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 border-b border-brand-border bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-mono block mb-3 font-semibold">Schwerpunkte & Behandlungsspektrum</span>
            <h2 className="font-serif text-3xl md:text-4.5xl text-white mb-6 font-semibold">
              Klinische Schwerpunkte auf wissenschaftlicher Grundlage
            </h2>
            <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
              Jedes psychische Thema benötigt eine differenzierte Abklärung. Wir bieten strukturierte, leitlinienkonforme Behandlungskonzepte für Ihre konkreten Herausforderungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-brand-charcoal p-8 border border-brand-border gold-glow-card relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-black border border-brand-border/80 flex items-center justify-center text-3xl mb-8 group-hover:border-brand-gold/60 transition-colors duration-300">
                    {service.emoji}
                  </div>
                  
                  <h3 className="font-serif text-lg md:text-xl text-white font-medium mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <a 
                  href="#contact"
                  className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-brand-gold group-hover:underline underline-offset-4 font-semibold text-left w-fit cursor-pointer animate-pulse"
                >
                  Termin anfragen <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Therapeutic Approach Section */}
      <section id="approach" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Description */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="w-12 h-px bg-brand-gold mb-6" />
              <span className="text-brand-gold uppercase tracking-widest text-xs font-mono block mb-3 font-semibold">Unser Behandlungsansatz</span>
              <h2 className="font-serif text-3xl md:text-4.5xl text-white leading-tight mb-6 font-semibold">
                Integrierter Methodenkoffer für passgenaue Hilfe.
              </h2>
              <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed mb-8">
                Wir glauben nicht an unpersönliche Einheitskonzepte. Im Sinne einer ganzheitlichen, integrativen Psychotherapie kombinieren wir verschiedene bewährte Behandlungselemente, um optimal auf Ihre individuelle Dynamik einzugehen.
              </p>
              
              <div className="flex flex-col gap-4 border-t border-brand-border pt-8 font-serif italic text-brand-gold text-sm">
                <span>„Empirische Forschung ist unser Fundament, bedingungslose Wertschätzung und Empathie unser Weg.“</span>
              </div>
            </div>

            {/* Right Column: Method Details */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {approaches.map((appr, idx) => (
                <div 
                  key={idx}
                  className="bg-brand-charcoal hover:bg-brand-charcoal/80 p-8 md:p-10 border border-brand-border hover:border-brand-gold/40 transition-all duration-300 relative group"
                >
                  <div className="absolute top-8 right-8 font-serif text-5xl md:text-6xl text-brand-border group-hover:text-brand-gold/10 font-bold select-none transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  
                  <span className="text-brand-gold font-mono text-[10px] uppercase tracking-widest font-semibold block mb-2">
                    {appr.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-4">
                    {appr.title}
                  </h3>
                  
                  <p className="text-brand-text/90 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                    {appr.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-mono block mb-3 font-semibold">Häufige Fragen</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 font-semibold">
              Klinisch-organisatorische Antworten
            </h2>
            <p className="text-brand-muted text-sm md:text-base font-light max-w-xl mx-auto">
              Hier finden Sie detaillierte Antworten zu Terminfrequenzen, dem Ablauf der Refundierung durch Österreichs Krankenkassen sowie zum Erstgespräch.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`border border-brand-border transition-all duration-300 ${isOpen ? 'bg-brand-charcoal border-brand-gold/30 shadow-gold-glow' : 'bg-brand-charcoal/40 hover:bg-brand-charcoal/80'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 font-serif text-base md:text-lg text-white font-medium hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-brand-gold flex-shrink-0 transition-transform duration-300">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {/* Pure JS/CSS accordion simulation */}
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: isOpen ? '400px' : '0px',
                      opacity: isOpen ? '1' : '0'
                    }}
                  >
                    <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-brand-text/80 leading-relaxed font-light border-t border-brand-border/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 border-b border-brand-border bg-brand-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-xs font-mono block mb-3 font-semibold">Erstkontakt & Terminvereinbarung</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-6">
              Gemeinsam den ersten Schritt setzen.
            </h2>
            <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed">
              Nehmen Sie unverbindlich Kontakt per E-Mail oder Telefon auf. Wir sichten alle eingegangenen Anfragen mit höchster Diskretion innerhalb von 24 Stunden an Werktagen.
            </p>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Praxis-Adresse</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Parkring 12, Suite 200,<br />1010 Wien (Demo-Adresse)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Telefonnummer</h4>
                  <p className="text-xs text-brand-muted mt-1">
                    +43 (0) 1 555-1234
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">E-Mail-Adresse</h4>
                  <p className="text-xs text-brand-muted mt-1 hover:text-brand-gold transition-colors">
                    office@testwebsite4psychologists.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Praxiszeiten</h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Montag – Freitag, 9:00 – 18:00 Uhr
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 p-5 border-l-2 border-brand-gold/60 bg-brand-charcoal/20 text-[11px] text-brand-muted tracking-wide leading-relaxed font-mono text-center mx-auto max-w-xl">
            Sämtliche Kommunikation über diesen digitalen Kanal unterliegt strengsten berufsrechtlichen Verschwiegenheitspflichten (Schweigepflicht gemäß Psychotherapiegesetz) und den geltenden DSGVO-Standards.
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brand-black py-12 md:py-20 border-t border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-lg tracking-wider text-white uppercase mb-2 flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <span>Ψ TEST-WEBSITE <span className="text-brand-gold font-light font-serif">FÜR PSYCHOLOGEN</span></span>
              <span className="flex items-center gap-1.5 ml-1 select-none">
                <img src="https://flagcdn.com/w40/at.png" alt="Austria Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
              </span>
            </div>
            <p className="text-[11px] text-brand-muted max-w-sm leading-relaxed mx-auto md:mx-0 font-light">
              Dies ist eine Demonstrations-Website, die ausschließlich zu Veranschaulichungszwecken erstellt wurde. Sämtliche angebotenen Leistungen, geschäftlichen Daten und Anschriften sind fiktiv.
            </p>
          </div>

          {/* Repeat Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-widest font-medium text-brand-muted">
            <a href="#about" className="hover:text-white transition-colors">Über uns</a>
            <a href="#services" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#approach" className="hover:text-white transition-colors">Therapieansatz</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors text-brand-gold">Kontakt</a>
          </div>

        </div>

        {/* Real Bottom License bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-brand-border/40 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11.5px] text-brand-muted font-light">
            © 2025 Test-Website für Psychologen — Reine Demo-Website. Alle Angaben sind frei erfunden.
          </p>
          <p className="text-[11.5px] text-brand-muted/80 flex items-center gap-1 font-mono">
            Inspiriert von anspruchsvollen klinischen Behandlungsstandards <Heart size={10} className="text-brand-gold inline" /> Patientenzentrierte Begleitung
          </p>
        </div>
      </footer>

    </div>
  );
}

// Custom lock icon to preserve look
function LockIcon({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-brand-gold"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
