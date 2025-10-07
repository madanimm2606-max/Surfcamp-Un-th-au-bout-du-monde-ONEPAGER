// Übersetzungen für DE / EN / FR
const translations = {
  de: {
    hero_title: "Surf & Sahara — Ocean. Sand. Sterne.",
    hero_sub: "Authentisches Surf-Camp in Mirleft. Wähle 7 Tage Surf oder 10 Tage Surf + Sahara.",
    hero_cta: "Angebote ansehen",
    hero_cta2: "Jetzt reservieren",
    hero_trust: "Kleine Gruppen • Zertifizierte Lehrkräfte • Nachhaltig",
    offers_title: "Unsere Formeln — Wähle deine Reise",
    // usw. (kannst du hier erweitern)
  },
  en: {
    hero_title: "Surf & Sahara — Ocean. Sand. Stars.",
    hero_sub: "Authentic surf camp in Mirleft. Choose 7 days Surf or 10 days Surf + Sahara.",
    hero_cta: "See offers",
    hero_cta2: "Book now",
    hero_trust: "Small groups • Certified coaches • Sustainable",
    offers_title: "Our packages — choose your trip",
  },
  fr: {
    hero_title: "Surf & Sahara — Océan. Sable. Étoiles.",
    hero_sub: "Camp de surf authentique à Mirleft. Choisissez 7 jours Surf ou 10 jours Surf + Sahara.",
    hero_cta: "Voir les offres",
    hero_cta2: "Réserver maintenant",
    hero_trust: "Petits groupes • Instructeurs certifiés • Durable",
    offers_title: "Nos formules — Choisissez votre voyage",
  }
};

// Sprache setzen
function setLang(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // HTML-Attribut setzen (wichtig für SEO)
  document.documentElement.lang = lang;

  // Buttons im Header markieren
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.classList.toggle("active", b.id === `lang-${lang}`);
  });
}

// Nach dem Laden der Seite starten
document.addEventListener("DOMContentLoaded", () => {
  // Sprache automatisch nach Browser
  const browserLang = navigator.language.slice(0, 2);
  const supported = ["de", "en", "fr"];
  const defaultLang = supported.includes(browserLang) ? browserLang : "de";

  setLang(defaultLang);

  // Sprachen-Umschalter aktivieren
  document.getElementById("lang-de").addEventListener("click", () => setLang("de"));
  document.getElementById("lang-en").addEventListener("click", () => setLang("en"));
  document.getElementById("lang-fr").addEventListener("click", () => setLang("fr"));

  // Jahr im Footer automatisch setzen
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
