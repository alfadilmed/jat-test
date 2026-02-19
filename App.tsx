
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import SidebarDots from './components/SidebarDots';
import Hero from './sections/Hero';
import LeGroupe from './sections/LeGroupe';
import Ecosystem from './sections/Ecosystem';
import PoleDetail from './sections/PoleDetail';
import Trajectory from './sections/Trajectory';
import Governance from './sections/Governance';
import Careers from './sections/Careers';
import Contact from './sections/Contact';
import AssistantModal from './components/AssistantModal';
import LoadingScreen from './components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

const POLES_DATA = [
  { 
    id: 'pole-aero', 
    name: 'Pôle 1 : Aéroportuaire', 
    role: 'Fournir des systèmes de navigation et de sécurité de pointe pour renforcer le positionnement du Maroc comme hub aéronautique africain.', 
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=2070', 
    details: {
      strategicRole: "Assurer l'autonomie sécuritaire et technologique des infrastructures aéroportuaires et de la navigation aérienne, en réponse à des budgets étatiques croissants.",
      entity: "GSTI GROUP",
      activities: [
        { label: "Navigation Aérienne", desc: "Fourniture et installation de systèmes VOR, DME, balisage lumineux." },
        { label: "Sécurité & Défense", desc: "Systèmes de sûreté, contrôle d'accès biométrique, protection périmétrique, maintenance de drones militaires." },
        { label: "Gestion du Trafic", desc: "Solutions de gestion du trafic aérien, communications sécurisées, ingénierie et conseil IT pour l'aviation." }
      ],
      synergies: [
        { name: "Pôle Technologie", desc: "Intégration des solutions de cybersécurité et des systèmes de communication critiques." },
        { name: "Pôle Logistique", desc: "Contribution à la performance des hubs logistiques aéroportuaires." }
      ]
    }
  },
  { 
    id: 'pole-tech', 
    name: 'Pôle 2 : Technologie', 
    role: 'Le cœur numérique de la holding, garant de la souveraineté digitale et catalyseur de la transformation pour tous les pôles.', 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
    details: {
      strategicRole: "Maîtriser l'ensemble de la chaîne de valeur technologique, de l'ingénierie des systèmes critiques à la maintenance, pour protéger les infrastructures et accélérer la transformation digitale.",
      entity: "GSTI, CYSERVI, OMNI ETUDES, etc.",
      hideSideImage: true,
      activities: [
        { label: "Ingénierie & Intégration", desc: "Sûreté des sites sensibles, infrastructures réseaux (5G), technologies portuaires, systèmes énergétiques hybrides (Lithium, Hydrogène)." },
        { label: "Conseil & Formation", desc: "Bureaux d'études techniques, contrôle de conformité, certification et formation (OMNI ETUDES, POLY CONTRÔLE, 6SS)." },
        { label: "Cybersécurité & IT", desc: "Cyberdéfense, développement d'ERP et d'applications, solutions IA & IoT (CYSERVI)." },
        { label: "Distribution", desc: "Distribution de matériel IT et de sécurité au Maroc et en Afrique (LIGNE FITNESS, METRO SOLUTION)." },
        { label: "Maintenance", desc: "Maintenance multi-techniques (électronique, informatique, industrielle) pour tous les secteurs critiques (GSTI SARL)." }
      ],
      synergies: [
        { name: "Souveraineté Digitale", desc: "Garant de l'indépendologique du groupe et catalyseur de performance pour tous les pôles." }
      ]
    }
  },
  { 
    id: 'pole-indus', 
    name: 'Pôle 3 : Industrie', 
    role: 'Développer un appareil productif moderne et accompagner les investisseurs pour faire du Maroc un hub industriel de premier plan.', 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'pillars',
      pillars: [
        {
          title: "FABRICATION MODERNE",
          icon: "robotic-arm",
          content: [
            { text: "Développement d'unités industrielles basées sur l'automatisation, la robotique et l'IA." },
            { label: "Secteurs Cibles", text: "Énergie (microcentrales solaires, bornes VE), Analyse de données, Drones/Robots, Agro-industrie, Techniques de l'eau, Mobilité." },
            { label: "Exemples", text: "Assemblage d'ascenseurs, fabrication de composants électroniques." }
          ]
        },
        {
          title: "SERVICES & INTÉGRATION INDUSTRIELLE",
          icon: "gears",
          content: [
            { text: "Déploiement de solutions Industrie 4.0 : PLC, SCADA, maintenance prédictive." },
            { text: "Cybersécurité industrielle et intégration de systèmes automatisés et robotisés." },
            { text: "Conseil en optimisation énergétique et performance industrielle." }
          ]
        },
        {
          title: "ACCOMPAGNEMENT DES INVESTISSEURS",
          icon: "investors",
          content: [
            { text: "Services \"One-Stop-Shop\" pour les investisseurs internationaux." },
            { text: "Assistance pour l'implantation d'usines clés en main (juridique, financier, logistique, RH)." },
            { text: "Mise en relation et facilitation auprès des institutions (CRI, AMDIE)." }
          ]
        }
      ]
    }
  },
  { 
    id: 'pole-immo', 
    name: 'Pôle 4 : Immobilier', 
    role: 'Développer des projets immobiliers intégrés et des parcs industriels clé en main pour soutenir la croissance économique au Maroc et en Afrique', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000', 
    details: {
      layoutType: 'rows',
      rows: [
        {
          title: "PROMOTION & DÉVELOPPEMENT (GATI)",
          icon: "crane",
          columns: [
            { label: "Activités", text: "Promotion immobilière, réalisation de lotissements, construction de gros œuvres." },
            { label: "Projets", text: "Développement de projets résidentiels, tertiaires, touristiques et industriels (parcs, zones logistiques)." },
            { label: "Services", text: "Études de faisabilité, conception architecturale, aménagement foncier et viabilisation." }
          ]
        },
        {
          title: "AMÉNAGEMENT & FINITIONS (ALUTRADIV)",
          icon: "interior",
          columns: [
            { label: "Activités", text: "Travaux de second œuvre, aménagement intérieur/extérieur, décoration." },
            { label: "Expertises", text: "Menuiserie aluminium/métal, chaudronnerie, charpente métallique, étanchéité, isolation acoustique." },
            { label: "Marchés", text: "Bâtiments industriels, commerciaux et résidentiels." }
          ]
        }
      ]
    }
  },
  { 
    id: 'pole-tour', 
    name: 'Pôle 5 : Tourisme', 
    role: "Concevoir et développer des projets touristiques et hôteliers intégrés, en tirant parti de l'attractivité du Maroc et du continent africain.", 
    image: 'https://images.unsplash.com/photo-1544124499-589022de4479?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'split-detail',
      hideSideImage: true,
      strategicRole: "Contribuer au développement du secteur touristique au Maroc et en Afrique par la création de projets d'hospitalité et de loisirs de nouvelle génération.",
      activities: [
        { label: "Développement Hôtelier", desc: "Développement de projets hôteliers, appart-hôtels et complexes de loisirs." },
        { label: "Gestion de Projets", desc: "Conception et gestion de projets clés en main." },
        { label: "Aménagement", desc: "Aménagement de sites et de zones touristiques." },
        { label: "Exemple Innovant", desc: "Développement de suites flottantes pour un tourisme de luxe ; services de jets privés pour une clientèle VIP (Projet Jetfly)." }
      ],
      synergies: [
        { name: "Pôle Immobilier", desc: "Construction et aménagement des infrastructures.", icon: 'building' },
        { name: "Pôle Technologie", desc: "Intégration de solutions 'Smart Hotel' et de sécurité.", icon: 'chip' }
      ]
    }
  },
  { 
    id: 'pole-sante', 
    name: 'Pôle 6 : Santé', 
    role: 'Développer des infrastructures médicales modernes et intégrer des solutions technologiques pour améliorer l\'offre de soins au Maroc et en Afrique.', 
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'pillars',
      pillars: [
        {
          title: "INFRASTRUCTURES & ÉQUIPEMENTS",
          icon: "hospital",
          content: [
            { text: "Développement de projets de cliniques et d'hôpitaux privés (modèle hybride : oncologie, maternité)." },
            { text: "Aménagement de bâtiments en cliniques." },
            { text: "Fourniture d'équipements médicaux, paramédicaux et hospitaliers." },
            { text: "Ambition de devenir un fournisseur africain agréé." }
          ]
        },
        {
          title: "INNOVATION & TECHNOLOGIE",
          icon: "brain-tech",
          content: [
            { text: "Développement de plateformes de télémédecine et de dossiers médicaux électroniques (DME)." },
            { text: "Intégration de l'IoT médical pour le suivi des patients." },
            { text: "Utilisation de l'IA pour l'aide au diagnostic et de la VR/AR pour la formation des professionnels." }
          ]
        }
      ]
    }
  },
  { 
    id: 'pole-edu', 
    name: 'Pôle 7 : Éducation & RH', 
    role: 'Formation d\'Élite', 
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'pillars',
      pillars: [
        {
          title: "FORMATION TECHNIQUE & ACADÉMIQUE",
          icon: "education",
          content: [
            { text: "Création d'organismes de formation polyvalents. Domaines : Énergie, Agrotech, Sûreté, Mobilité, IA, Robotique." },
            { text: "Développement de plateformes d'e-learning et de contenus en VR/AR." }
          ]
        },
        {
          title: "GESTION DES TALENTS (OSAM)",
          icon: "talents",
          content: [
            { text: "Recrutement et sélection des experts et cadres pour la holding." },
            { text: "Gestion de la formation interne et suivi administratif et juridique des collaborateurs." }
          ]
        },
        {
          title: "GESTION DE LA SOUS-TRAITANCE (GRH ZK)",
          icon: "outsourcing",
          content: [
            { text: "Sélection, qualification et suivi des entreprises sous-traitantes pour les projets du groupe." }
          ]
        }
      ]
    }
  },
  { 
    id: 'pole-agri', 
    name: 'Pôle 8 : Agriculture', 
    role: 'AgriTech de Précision', 
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'pillars',
      strategicRole: "Contribuer à la souveraineté alimentaire et au développement agricole en modernisant les pratiques et en améliorant les rendements grâce à l'innovation.",
      synergies: [
        { name: "Pôle Technologie", desc: "Fourniture des capteurs, drones et plateformes logicielles.", icon: 'chip' },
        { name: "Pôle Industrie", desc: "Conception des unités de transformation agro-industrielle.", icon: 'gears' }
      ],
      pillars: [
        {
          title: "Foncier",
          icon: "landscape",
          content: [
            { text: "Acquisition et mise à niveau de terrains agricoles au Maroc et en Afrique." }
          ]
        },
        {
          title: "AgriTech",
          icon: "drone",
          content: [
            { text: "Déploiement de solutions IoT (serres connectées), de drones pour la pulvérisation, et de plateformes d'IA pour la gestion optimisée des cultures." }
          ]
        },
        {
          title: "Industrie Agricole",
          icon: "factory-solar",
          content: [
            { text: "Construction d'usines de transformation modernes, intégrant automatisation et robotique." }
          ]
        }
      ]
    }
  },
  { 
    id: 'pole-log', 
    name: 'Pôle 9 : Logistique', 
    role: 'Développer des plateformes logistiques modernes et des solutions de transport intégrées au Maroc et en Afrique, pour faire du Royaume la porte d\'entrée et le principal hub logistique africain.', 
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'split-detail',
      hideSideImage: true,
      strategicRole: 'Capitaliser sur la position géographique du Maroc (Tanger Med) pour offrir des services logistiques de classe mondiale, du transport à l\'entreposage intelligent.',
      activities: [
        { label: "Infrastructures", desc: "Développement de plateformes logistiques modernes, entrepôts automatisés à grande hauteur, et zones industrielles connectées." },
        { label: "Services", desc: "Transport terrestre et portuaire, logistique contractuelle (3PL/4PL), transit, gestion de stocks, co-packing, solutions e-commerce." },
        { label: "Technologie", desc: "Déploiement de \"Smart Ports\", entreposage IoT, et plateformes basées on l'IA pour optimiser les flux (TMS)." }
      ],
      synergies: [
        { name: "Smart Port", desc: "Optimisation des flux portuaires.", icon: 'port' },
        { name: "Entrepôt Automatisé", desc: "Haute performance logistique.", icon: 'warehouse' },
        { name: "Transport Autonome", desc: "Mobilité du futur.", icon: 'truck' }
      ]
    }
  },
  { 
    id: 'pole-fin', 
    name: 'Pôle 10 : Finance', 
    role: 'Structurer le financement des projets de la holding, accompagner les investisseurs et développer des solutions FinTech innovantes.', 
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'pillars',
      pillars: [
        {
          title: "FINANCEMENT & ACCOMPAGNEMENT",
          icon: "handshake-doc",
          content: [
            { text: "Mobilisation des sources de financement (publiques, privées, bancaires) pour les projets du groupe et les investisseurs externes." },
            { text: "Accès aux programmes de soutien (IMTIAZ, TATWIR, INTELAKA) et aux garanties (Tamwilcom)." },
            { text: "Mise en relation avec un réseau de fonds d’investissement (VC, PE) au Maroc et à l’international." }
          ]
        },
        {
          title: "INNOVATION FINTECH",
          icon: "fintech-app",
          content: [
            { text: "Développement de solutions de paiement numérique (e-wallets, QR code)." },
            { text: "Création de plateformes de microcrédit et de crowdfunding." },
            { text: "Exploration de la tokenisation d'actifs et des solutions RegTech (lutte contre la fraude)." }
          ]
        }
      ]
    }
  },
  { 
    id: 'pole-ener', 
    name: 'Pôle 11 : Stockage Stratégique & Énergétique', 
    role: 'Développer une plateforme premium de stockage et de ravitaillement, renforçant la sécurité énergétique et le positionnement géostratégique du Maroc et de l\'Afrique.', 
    image: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'split-detail',
      hideSideImage: true,
      strategicRole: "Créer des réservoirs stratégiques et des services portuaires pour servir de plateforme de ravitaillement pour l'Europe et l'Afrique.",
      activities: [
        { label: "NADOR (Hub Méditerranéen)", desc: "Servir les flottes commerciales et celles des partenaires stratégiques internationaux en Méditerranée." },
        { label: "DAKHLA (Hub Atlantique)", desc: "Servir les provinces du Sud, les navires longeant la côte africaine et créer un \"triangle logistique\" Afrique-Dakhla-Europe." },
        { label: "INFRASTRUCTURES", desc: "Construction de réservoirs double paroi de grande capacité. Mise en place de bases de servitude maritime et de stations multi-énergies." }
      ],
      synergies: [
        { name: "Souveraineté Énergétique", desc: "Sécurisation des stocks stratégiques nationaux.", icon: 'oil-tank' },
        { name: "Connectivity Hub", desc: "Interconnexion entre les bassins Méditerranéen et Atlantique.", icon: 'map-pin' }
      ]
    }
  },
  { 
    id: 'pole-synergy', 
    name: 'La Puissance des Synergies, Un Ecosystème Intégré', 
    role: 'Notre force réside dans notre capacité à faire collaborer nos pôles pour créer des offres uniques, optimiser les ressources et multiplier la valeur.', 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070', 
    details: {
      layoutType: 'pillars',
      strategicRole: "Notre force réside dans notre capacité à faire collaborer nos pôles pour créer des offres uniques, optimiser les ressources et multiplier la valeur.",
      pillars: [
        {
          title: "LOGIQUE DE MUTUALISATION",
          icon: "synergy-nodes",
          content: [
            { label: "Expertise & Talents", text: "Partage des compétences (ingénierie, finance, RH) via les Pôles Technologie et Éducation." },
            { label: "Force Commerciale", text: "Approche coordonnée des grands comptes et des projets gouvernementaux." },
            { label: "Plateforme Technologique", text: "Solutions du Pôle Technologie (Cybersécurité, IA, IoT) déployées à l'échelle du groupe." }
          ]
        },
        {
          title: "EXEMPLES DE SYNERGIES STRATÉGIQUES",
          icon: "strategy-map",
          content: [
            { label: "Parc Industriel 4.0", text: "Le pôle Immobilier développe un parc, le pôle Industrie l'occupe, le pôle Technologie l'équipe en solutions connectées et le pôle Logistique en optimise les flux." },
            { label: "Hub Aéroportuaire Sécurisé", text: "Le pôle Aéroportuaire intègre les systèmes de navigation et de cybersécurité du pôle Technologie, avec une maintenance assurée par ses entités spécialisées." },
            { label: "Projet Agro-industriel Intégré", text: "Le pôle Agriculture utilise les solutions d'irrigation intelligente et les drones du pôle Technologie, tandis que le pôle Industrie construit l'usine de transformation." }
          ]
        }
      ]
    }
  },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const activeSectionRef = useRef(0);

  const baseSections = [
    { id: 'hero', label: 'Accueil' },
    { id: 'legroupe', label: 'Le groupe' },
    { id: 'ecosystem', label: 'Écosystème' },
  ];

  const poleSections = POLES_DATA.map(p => ({ id: p.id, label: p.name }));

  const endSections = [
    { id: 'trajectory', label: 'Stratégie & Croissance' },
    { id: 'governance', label: 'Gouvernance' },
    { id: 'careers', label: 'Carrières' },
    { id: 'contact', label: 'Contact' },
  ];

  const allSections = [...baseSections, ...poleSections, ...endSections];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPos = containerRef.current.scrollLeft;
      const width = containerRef.current.clientWidth || window.innerWidth;
      const index = Math.round(scrollPos / width);
      
      if (index !== activeSectionRef.current) {
        setTransitioning(true);
        activeSectionRef.current = index;
        setActiveSection(index);
        setTimeout(() => setTransitioning(false), 800);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        containerRef.current.scrollBy({
          left: e.deltaY * 1.5,
          behavior: 'auto'
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth || window.innerWidth;
    containerRef.current.scrollTo({
      left: index * width,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative overflow-hidden selection:bg-gold/30 bg-[#F8F9FA]">
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <Navbar 
        scrollToSection={scrollToSection} 
        activeSection={activeSection} 
        onOpenAssistant={() => setIsAssistantOpen(true)} 
        sectionCount={allSections.length}
      />
      <SidebarDots sections={allSections} activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <div className={`fixed inset-0 z-[60] bg-navy/20 pointer-events-none transition-opacity duration-1000 ${transitioning ? 'opacity-100' : 'opacity-0'}`} />

      <div ref={containerRef} className="snap-container">
        <section id="hero" className="snap-section"><Hero /></section>
        <section id="legroupe" className="snap-section"><LeGroupe isActive={activeSection === 1} /></section>
        <section id="ecosystem" className="snap-section"><Ecosystem scrollToSection={scrollToSection} /></section>
        
        {POLES_DATA.map((pole, idx) => (
          <section key={pole.id} id={pole.id} className="snap-section">
            <PoleDetail 
              title={pole.name}
              subtitle={pole.role}
              image={pole.image}
              details={pole.details as any}
              isEven={idx % 2 === 0}
            />
          </section>
        ))}

        <section id="trajectory" className="snap-section"><Trajectory /></section>
        <section id="governance" className="snap-section"><Governance /></section>
        <section id="careers" className="snap-section"><Careers /></section>
        <section id="contact" className="snap-section"><Contact /></section>
      </div>

      <AssistantModal isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </div>
  );
};

export default App;
