import React from "react";
import BlurFade from "./BlurFade";
import "./App.css";

const Navbar = () => (
  <header className="navbar">
    <div className="logo">TravelBot</div>
    <div className="menu-icon" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav>
      <ul id="menu">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Comment ça marche</a></li>
        <li><a href="#">Avantages</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Commencer</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero">
    <video autoPlay muted loop>
      <source src="travelbotdinervideo_longformat.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>
    <div className="content">
      <h1>TravelBot - L'IA au service des agences de voyage</h1>
      <h2>Nos chatbots IA vous aident à développer vos ventes, et à réduire le temps que vous passez sur des tâches rébarbatives</h2>
      <a href="https://forms.gle/XTRECo2LNaKMdkFs6" className="btn" target="_blank" rel="noopener noreferrer">Tester GRATUITEMENT la solution</a>
    </div>
  </section>
);

const Step = ({ imgSrc, title, description }) => (
  <BlurFade>
    <div className="step">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </BlurFade>
);

const Steps = () => (
  <section className="container">
    <h1>Comment ça marche</h1>
    <div className="steps-wrapper">
      <Step
        imgSrc="photo1tb.jpg"
        title="Nous personnalisons votre chatbot"
        description="En fonction des voyages que vous proposez et des critères de choix que vous définissez."
      />
      <Step
        imgSrc="photo3TB.jpg"
        title="Nous intégrons votre chatbot sur votre site web"
        description="Nos chatbots sont conçus pour s'intégrer rapidement dans votre écosystème."
      />
      <Step
        imgSrc="photo2TB.jpg"
        title="Vous recevez des prospects qualifiés"
        description="Vos clients se connectent sur votre site, répondent aux questions et reçoivent une recommandation personnalisée en échange de leur mail."
      />
    </div>
    <button className="cta-button">Tester GRATUITEMENT la solution</button>
  </section>
);

const TextSection = ({ imgSrc, title, description, reverse }) => (
  <div className={`text-container ${reverse ? "reverse" : ""}`}>
    <img src={imgSrc} alt={title} />
    <div className="text">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const TextSections = () => (
  <section className="bandeau bandeau-3">
    <TextSection
      imgSrc="pexels-yankrukov-8867435.jpg"
      title="Service Client 24/7"
      description="Nos chatbots sont disponibles 24 heures sur 24, 7 jours sur 7, pour répondre aux questions de vos clients, les aider à réserver leurs voyages, et résoudre les problèmes en temps réel."
    />
    <TextSection
      imgSrc="pexels-shvets-2563681.jpg"
      title="Personnalisation Avancée"
      description="Chaque interaction est personnalisée grâce à notre technologie IA, qui apprend et s'adapte aux préférences de vos clients, offrant ainsi une expérience unique et sur mesure."
      reverse
    />
    <TextSection
      imgSrc="pexels-olly-826349.jpg"
      title="Gain de Temps et d'Argent"
      description="Automatisez les tâches répétitives et libérez du temps pour vos employés. Réduisez les coûts opérationnels tout en améliorant l'efficacité de votre service client."
    />
    <TextSection
      imgSrc="pexels-karolina-grabowska-4195403.jpg"
      title="Intégration Facile"
      description="TravelBot s'intègre facilement à vos systèmes existants, sans interruption de service. Nous proposons une configuration rapide et une formation complète pour que vous soyez opérationnel en un rien de temps."
      reverse
    />
  </section>
);

const FaqItem = ({ question, answer }) => (
  <div className="faq-item">
    <div className="faq-question" onClick={toggleFaq}>
      {question}
    </div>
    <div className="faq-answer">{answer}</div>
  </div>
);

const Faq = () => (
  <section className="faq-container bandeau bandeau-4">
    <h2>FAQ</h2>
    <FaqItem
      question="Qu'est-ce que TravelBot ?"
      answer="TravelBot est un chatbot IA conçu spécifiquement pour les agences de voyage. Il fournit une assistance client 24/7, aide à la gestion des réservations, répond aux questions fréquentes et améliore l'expérience utilisateur globale."
    />
    <FaqItem
      question="Comment TravelBot peut-il améliorer mon agence de voyage ?"
      answer="TravelBot automatise les tâches répétitives, fournit des réponses instantanées aux questions des clients, gère les réservations et les modifications d'itinéraires, et offre une assistance multilingue. Cela réduit la charge de travail de votre équipe et améliore la satisfaction des clients."
    />
    <FaqItem
      question="Est-ce que TravelBot fonctionne 24/7 ?"
      answer="Oui, TravelBot est disponible 24 heures sur 24 et 7 jours sur 7, offrant une assistance continue à vos clients, même en dehors des heures d'ouverture."
    />
    <FaqItem
      question="TravelBot peut-il gérer les réservations et les annulations ?"
      answer="Absolument. TravelBot peut aider vos clients à faire des réservations, des annulations et des modifications d'itinéraires de manière fluide et automatisée."
    />
    <FaqItem
      question="Comment TravelBot s'intègre-t-il à mon site web et à mes systèmes existants ?"
      answer="TravelBot est conçu pour une intégration facile et rapide. Nous fournissons une documentation complète et un support technique pour vous aider à intégrer TravelBot à votre site web et à vos systèmes existants sans besoin de compétences techniques avancées."
    />
    <FaqItem
      question="Est-ce que TravelBot nécessite une formation spéciale pour mon équipe ?"
      answer="Non, TravelBot est intuitif et facile à utiliser. Nous fournissons également des ressources de formation et un support pour vous aider à tirer le meilleur parti de notre solution."
    />
    <FaqItem
      question="Quels sont les coûts associés à l'utilisation de TravelBot ?"
      answer="Les coûts varient en fonction de vos besoins spécifiques et de la taille de votre agence. Contactez-nous pour une consultation gratuite et un devis personnalisé."
    />
    <FaqItem
      question="Que faire si j'ai besoin d'aide avec TravelBot ?"
      answer="Notre équipe de support est disponible pour vous aider avec toutes vos questions et préoccupations. Vous pouvez nous contacter par email, téléphone ou via notre site web."
    />
    <FaqItem
      question="Comment puis-je commencer à utiliser TravelBot ?"
      answer="C'est simple ! Contactez-nous pour une démo gratuite ou pour en savoir plus sur nos offres. Nous serons ravis de vous accompagner dans la mise en place de TravelBot pour votre agence de voyage."
    />
    <FaqItem
      question="TravelBot peut-il personnaliser ses réponses en fonction de mes spécificités ?"
      answer="Oui, TravelBot peut être entraîné sur les données spécifiques de votre agence pour personnaliser ses réponses. En utilisant les informations de vos clients et les données internes de votre agence, TravelBot offre des réponses adaptées et précises, améliorant ainsi l'expérience utilisateur et répondant aux besoins spécifiques de chaque client."
    />
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 TravelBot. Tous droits réservés. <a href="#">Politique de confidentialité</a> | <a href="#">Conditions d'utilisation</a></p>
  </footer>
);

const toggleMenu = () => {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
};

const toggleFaq = (e) => {
  const question = e.target;
  question.classList.toggle('active');
  const answer = question.nextElementSibling;
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
};

const App = () => (
  <div>
    <Navbar />
    <main>
      <Hero />
      <Steps />
      <TextSections />
      <Faq />
    </main>
    <Footer />
    <script type="text/javascript">
      {(function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '6694f41c29af6471d22e2102' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production'
            });
          }
          v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })(document, 'script')}
    </script>
  </div>
);

export default App;
