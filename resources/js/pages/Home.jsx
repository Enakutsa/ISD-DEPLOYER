import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const navigate = useNavigate();
  
  const heroSlides = [
    { src: "/images/home/hero-1.jpg", alt: "Ingénierie et innovation ISD AFRIK" },
    { src: "/images/home/hero-2.jpg", alt: "Solutions sur mesure pour entreprises" },
    { src: "/images/home/hero-3.jpg", alt: "Formation et accompagnement" },
    { src: "/images/home/hero-5.jpg", alt: "Nos produits" },
    { src: "/images/home/hero-6.jpg", alt: "Nos produits" },
    { src: "/images/home/hero-7.jpg", alt: "Nos produits" },
    { src: "/images/home/hero-8.jpg", alt: "Nos produits" },
    { src: "/images/home/hero-9.jpg", alt: "Nos produits" },
    { src: "/images/home/hero-10.jpg", alt: "Nos produits" },

  ];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const whyUs = [
    { img: "/images/why/expertise.jpg", title: "Expertise et savoir-faire", link: "/expertise" },
    { img: "/images/why/solution.jpg", title: "Solutions sur mesure", link: "/solutions" },
    { img: "/images/why/services.jpg", title: "Large gamme de services", link: "/services" },
    { img: "/images/why/presence.jpg", title: "Présence régionale et réactivité", link: "/presence" },
    { img: "/images/why/formation.jpg", title: "Engagement envers la formation", link: "/formations" },
    { img: "/images/why/fiabilite.jpg", title: "Fiabilité et qualité", link: "/fiabilite" },
  ];

  const offers = [
    { 
      title: "Pack Digital Starter", 
      desc: "Site vitrine + hébergement 1 an", 
      price: "99 000 FCFA",
      icon: "🌐",
      img: "/images/offers/offre1.jpg" 
    },
    { 
      title: "Pack Gestion PME", 
      desc: "ERP + formation utilisateurs", 
      price: "249 000 FCFA",
      icon: "📊",
      img: "/images/offers/offre2.jpg" 
    },
    { 
      title: "Pack Formation Express", 
      desc: "Modules certifiants en 2 semaines", 
      price: "149 000 FCFA",
      icon: "🎓",
      img: "/images/offers/offre3.jpg" 
    },
  ];

  const promotions = [
    { title: "Promo Fin d'année", desc: "Réduction -20% sur nos solutions ERP", icon: "🎉", badge: "-20%" },
    { title: "Offre spéciale étudiants", desc: "Formations à moitié prix", icon: "📚", badge: "-50%" },
    { title: "Bonus partenaires", desc: "1 mois gratuit de support technique", icon: "🤝", badge: "GRATUIT" },
  ];

  // ✅ CORRIGÉ : Secteurs avec liens vers pages existantes
  const sectors = [
    { title: "Ingénierie informatique et industrielle", desc: "Développement, architecture système et automatisation", icon: "💻", link: "/ingenierie" },
    { title: "Solutions de gestion d'entreprise", desc: "ERP, CRM, BI et workflows adaptés à votre activité", icon: "📊", link: "/solutions" },
    { title: "Formation professionnelle", desc: "Programmes certifiants et accompagnement personnalisé", icon: "🎓", link: "/formations" },
    { title: "Communication et publicité", desc: "Solutions de communication et systèmes TPE", icon: "📡", link: "/services/communication" },
    { title: "Fourniture de drone et formation en pilotage de drones", desc: "Équipements professionnels et formation complète", icon: "🚁", link: "/services/drones" },
    { title: "Developpement d application", desc: "Sites web, applications mobiles et solutions cloud", icon: "🚀", link: "/projets" },
    { title: "Fourniture de TPE", desc: "sécuriser les transactions et faciliter la gestion des encaissements", icon: "🧠", link: "/services" },
    
    { title: "BTP & Industrie", desc: "Solutions pour le secteur du bâtiment et de l'industrie", icon: "🏗️", link: "/services/btp" },
  ];

  const collaborators = [
    { img: "/images/collaborateur/col1.jpg", name: "DEV 1 " },
    { img: "/images/collaborateur/col2.jpg", name: "DEV 2" },
    { img: "/images/collab-3.png", name: "Entreprise C" },
    { img: "/images/collab-4.png", name: "Entreprise D" },
    { img: "/images/collab-5.png", name: "Entreprise E" },
    { img: "/images/collab-6.png", name: "Entreprise F" },
  ];

  const testimonials = [
  { 
    name: "Plateforme Industrielle d’Adétikopé (PIA)", 
    role: "Direction Générale", 
    text: "Nous avons choisi ISD AFRIK pour accompagner notre développement industriel. Leur expertise digitale nous a permis de fluidifier nos processus et de renforcer notre compétitivité.", 
    rating: 5, 
    avatar: "/images/avis/pia.jpg",
    company: "PIA"
  },
  { 
    name: "CANAL+", 
    role: "Direction Technique", 
    text: "ISD AFRIK est un partenaire fiable qui comprend nos enjeux. Grâce à leurs solutions, nous avons amélioré l’expérience de nos abonnés et optimisé nos opérations internes.", 
    rating: 5, 
    avatar: "/images/avis/canal.jpg",
    company: "CANAL+"
  },
  { 
    name: "Hôtel Sarakawa", 
    role: "Direction Hôtelière", 
    text: "Avec ISD AFRIK, nous avons modernisé notre gestion et renforcé la satisfaction de nos clients. Leur accompagnement est un vrai atout pour l’hôtellerie.", 
    rating: 4, 
    avatar: "/images/avis/sarakawa.jpg",
    company: "Hôtel Sarakawa"
  },
  { 
    name: "ASKY Airlines", 
    role: "Direction des Opérations", 
    text: "ISD AFRIK nous aide à digitaliser nos processus et à offrir un meilleur service à nos passagers. Leur expertise est un levier stratégique pour notre croissance panafricaine.", 
    rating: 5, 
    avatar: "/images/avis/asky.jpg",
    company: "ASKY"
  },
  { 
    name: "ORYX Energies", 
    role: "Direction Commerciale", 
    text: "Nous faisons confiance à ISD AFRIK pour la gestion de nos données et la digitalisation de nos services. Leur professionnalisme nous accompagne dans notre expansion.", 
    rating: 5, 
    avatar: "/images/avis/oryx.jpg",
    company: "ORYX Energies"
  },
  { 
    name: "SUNU Bank", 
    role: "Direction Générale", 
    text: "ISD AFRIK est un partenaire stratégique qui nous apporte des solutions fiables et sécurisées. Leur expertise renforce notre efficacité et la confiance de nos clients.", 
    rating: 5, 
    avatar: "/images/avis/sunu.jpg",
    company: "SUNU Bank"
  }
];

  const partners = [
    { img: "/images/partenaire/pat1.jpg", name: "vvavesoft" },
    { img: "/images/partenaire/pat2.jpg", name: "asterbox" },
    { img: "/images/partenaire/pat3.jpg", name: "gynod" },
    { img: "/images/partenaire/pat4.jpg", name: "dip afrique" },
    { img: "/images/partenaire/pat5.jpg", name: "dylog" },
    { img: "/images/partenaire/pat6.jpg", name: "lacsoft" },
    { img: "/images/partenaire/pat7.jpg", name: "orchestra" },
    { img: "/images/partenaire/pat8.jpg", name: "sage" },
    { img: "/images/partenaire/pat9.jpg", name: "sensoft" },
    { img: "/images/partenaire/pat10.jpg", name: "show box" },
    
  ];

  // ✅ CORRIGÉ : Produits phares redirigent tous vers /solutions (page produits)
  const featuredProducts = [
    { title: "Solutions de gestion d'entreprise", price: "Sur mesure", img: "/images/prod-gestion.jpg", category: "Logiciels", link: "/solutions" },
    { title: "Formation professionnelle", price: "Certifications", img: "/images/prod-formation.jpg", category: "Formation", link: "/formations" },
    { title: "Ingénierie informatique et industrielle", price: "Expertise IT", img: "/images/prod-ingenierie.jpg", category: "Ingénierie", link: "/ingenierie" },
    { title: "Fourniture et formation en pilotage de drones", price: "Drone Pro", img: "/images/prod-drones.jpg", category: "Drone", link: "/services/drones" },
  ];

  const stats = [
    { number: "500+", label: "Clients satisfaits" },
    { number: "1000+", label: "Projets livrés" },
    { number: "50+", label: "Experts qualifiés" },
    { number: "15+", label: "Ans d'expérience" },
  ];

  // ✅ NOUVEAU : État pour gérer le formulaire d'avis
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: "",
    role: "",
    company: "",
    text: "",
    rating: 5
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // TODO: Envoyer l'avis au backend
    console.log("Nouvel avis:", reviewData);
    alert("Merci pour votre avis ! Il sera publié après validation.");
    setShowReviewForm(false);
    setReviewData({ name: "", role: "", company: "", text: "", rating: 5 });
  };

  return (
    <div className="home">
      {/* Hero avec slides */}
      <section className="hero">
        {heroSlides.map((s, i) => (
          <img 
            key={i} 
            src={s.src} 
            alt={s.alt} 
            className={`hero-slide ${i === slideIndex ? "active" : ""}`} 
          />
        ))}
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="animate-fade-in">L'excellence au service de votre transformation digitale</h1>
          <p className="animate-fade-in-delay">Ingénierie, solutions sur mesure, formation et projets innovants pour accélérer votre croissance.</p>
          <div className="hero-buttons animate-fade-in-delay-2">
            <a href="#offers" className="btn-primary">
              <span>Nos Offres</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#products" className="btn-secondary">
              <span>Voir nos produits</span>
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
        <div className="hero-indicators">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`indicator ${i === slideIndex ? "active" : ""}`}
              onClick={() => setSlideIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="why-visual">
        <div className="section-header">
          <h2>Pourquoi choisir ISD AFRIK ?</h2>
          <p>Des solutions innovantes adaptées à vos besoins</p>
        </div>
        <div className="grid">
          {whyUs.map((item, idx) => (
            <div key={idx} className="card hover-lift" onClick={() => navigate(item.link)}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <div className="card-overlay" />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <span className="card-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nos Offres */}
      <section id="offers" className="offers">
        <div className="section-header">
          <h2>Nos Offres</h2>
          <p>Des packs adaptés à tous les besoins</p>
        </div>
        <div className="cards">
          {offers.map((o, idx) => (
            <div key={idx} className="card offer-card">
              <div className="card-image">
                <img src={o.img} alt={o.title} />
              </div>
              <div className="icon-badge">{o.icon}</div>
              <div className="card-body">
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <div className="price-tag">{o.price}</div>
                <button className="btn-primary" onClick={() => navigate('/contact')}>
                  Je profite
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section id="promotions" className="promotions">
        <div className="section-header">
          <h2>Promotions en cours</h2>
          <p>Profitez de nos offres exceptionnelles</p>
        </div>
        <div className="cards">
          {promotions.map((p, idx) => (
            <div key={idx} className="card promo-card">
              <div className="promo-badge">{p.badge}</div>
              <div className="icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Voir détails
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section id="sectors" className="sectors">
        <div className="section-header">
          <h2>Nos secteurs d'activités</h2>
          <p>Une expertise diversifiée pour tous vos projets</p>
        </div>
        <div className="sectors-grid">
          {sectors.map((s, idx) => (
            <div key={idx} className="card sector-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <button className="link" onClick={() => navigate(s.link)}>
                En savoir plus <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ CORRIGÉ : Produits phares - tous redirigent vers leurs pages respectives */}
      <section id="products" className="products">
        <div className="section-header">
          <h2>🌟 Produits phares du Groupe ISD Afrik</h2>
          <p>Nos solutions majeures pour votre développement</p>
        </div>
        <div className="cards">
          {featuredProducts.map((p, i) => (
            <div key={i} className="card product-card">
              <div className="product-badge">{p.category}</div>
              <div className="card-image">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <div className="price">{p.price}</div>
                <div className="actions">
                  <button className="btn-primary" onClick={() => navigate(p.link)}>
                    <i className="fas fa-info-circle"></i> En savoir plus
                  </button>
                  <button className="btn-secondary" onClick={() => navigate(p.link)}>
                    <i className="fas fa-arrow-right"></i> Découvrir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Devenir vendeur */}
      <section className="seller">
        <img src="/images/vendeur/vendeur.jpg" alt="Devenir vendeur" className="seller-bg" />
        <div className="seller-overlay" />
        <div className="seller-content">
         
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Devenir vendeur
          </button>
        </div>
      </section>

      {/* Formations */}
<section id="formations" className="formations">
  <div className="section-header">
    <h2>Formations professionnelles</h2>
    <p>Développez vos compétences avec nos experts</p>
  </div>
  <div className="formations-horizontal">
    <div className="card formation-card">
      <img src="/images/formations/etudiants.jpg" alt="Étudiants" className="formation-img" />
      <div className="formation-icon"></div>
      <h3>Étudiants</h3>
      <p>Parcours pratiques, projets guidés, mise en situation pour accélérer votre employabilité...</p>
      <ul className="formation-list">
        <li><i className="fas fa-check"></i> Projets réels</li>
        <li><i className="fas fa-check"></i> Mentorat individuel</li>
        <li><i className="fas fa-check"></i> Certification reconnue</li>
      </ul>
      <button className="btn-primary" onClick={() => navigate('/formations/etudiant')}>
        En savoir plus
      </button>
    </div>

    <div className="card formation-card">
      <img src="/images/formations/particuliers.jpg" alt="Particuliers" className="formation-img" />
      <div className="formation-icon"></div>
      <h3>Particuliers</h3>
      <p>Modules flexibles, accompagnement personnalisé, certification et suivi pour booster votre carrière...</p>
      <ul className="formation-list">
        <li><i className="fas fa-check"></i> Horaires flexibles</li>
        <li><i className="fas fa-check"></i> Suivi personnalisé</li>
        <li><i className="fas fa-check"></i> Mise en pratique</li>
      </ul>
      <button className="btn-primary" onClick={() => navigate('/formations/particulier')}>
        En savoir plus
      </button>
    </div>

    <div className="card formation-card">
      <img src="/images/formations/entreprises.jpg" alt="Entreprises" className="formation-img" />
      <div className="formation-icon"></div>
      <h3>Entreprises</h3>
      <p>Solutions sur mesure pour la montée en compétences de vos équipes...</p>
      <ul className="formation-list">
        <li><i className="fas fa-check"></i> Formation sur site</li>
        <li><i className="fas fa-check"></i> Programmes adaptés</li>
        <li><i className="fas fa-check"></i> Suivi post-formation</li>
      </ul>
      <button className="btn-primary" onClick={() => navigate('/formations/entreprise')}>
        En savoir plus
      </button>
    </div>
  </div>
</section>

      {/* ✅ MODIFIÉ : Avis clients avec bouton pour laisser un avis */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Ce que disent nos clients</h2>
          <p>Ils nous font confiance et témoignent</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card-new">
              <div className="testimonial-header">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p className="testimonial-role">{t.role}</p>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <i key={idx} className={`fas fa-star ${idx < t.rating ? 'filled' : ''}`}></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text-new">"{t.text}"</p>
              <div className="testimonial-company">{t.company}</div>
            </div>
          ))}
        </div>

        {/* ✅ NOUVEAU : Bouton pour laisser un avis */}
        <div className="add-review-section">
          <button className="btn-primary" onClick={() => setShowReviewForm(!showReviewForm)}>
            <i className="fas fa-pen"></i> Laisser un avis
          </button>

          {/* Formulaire d'avis */}
          {showReviewForm && (
            <form className="review-form" onSubmit={handleReviewSubmit}>
              <h3>Partagez votre expérience</h3>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Votre nom *"
                  required
                  value={reviewData.name}
                  onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Votre fonction *"
                  required
                  value={reviewData.role}
                  onChange={(e) => setReviewData({...reviewData, role: e.target.value})}
                />
              </div>
              <input
                type="text"
                placeholder="Votre entreprise"
                value={reviewData.company}
                onChange={(e) => setReviewData({...reviewData, company: e.target.value})}
              />
              <textarea
                placeholder="Votre avis *"
                required
                rows="5"
                value={reviewData.text}
                onChange={(e) => setReviewData({...reviewData, text: e.target.value})}
              />
              <div className="rating-select">
                <label>Note :</label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fas fa-star ${star <= reviewData.rating ? 'filled' : ''}`}
                    onClick={() => setReviewData({...reviewData, rating: star})}
                  />
                ))}
              </div>
              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowReviewForm(false)}>
                  Annuler
                </button>
                <button type="submit" className="btn-primary">
                  <i className="fas fa-paper-plane"></i> Envoyer
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Collaborateurs */}
      <section className="collaborators">
        <div className="section-header">
          <h2>Nos collaborateurs prestigieux</h2>
          <p>Des partenariats de confiance avec les leaders du marché</p>
        </div>
        <div className="collaborators-grid">
          {collaborators.map((collab, i) => (
            <div key={i} className="collaborator-card">
              <img src={collab.img} alt={collab.name} />
              <div className="collaborator-overlay">
                <span>{collab.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ MODIFIÉ : Partenaires en horizontal (scroll infini) */}
      <section className="partners">
        <div className="section-header">
          <h2>Nos partenaires technologiques</h2>
          <p>Nous travaillons avec les meilleures solutions du marché</p>
        </div>
        <div className="partners-horizontal">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="partner-item">
                <img src={partner.img} alt={partner.name} />
                <h4>{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final">
        <div className="cta-content">
          <h2>Prêt à transformer votre entreprise ?</h2>
          <p>Contactez-nous dès aujourd'hui pour discuter de votre projet</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              <i className="fas fa-phone"></i> Nous contacter
            </button>
            <button className="btn-secondary" onClick={() => navigate('/contact')}>
              <i className="fas fa-file-alt"></i> Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}