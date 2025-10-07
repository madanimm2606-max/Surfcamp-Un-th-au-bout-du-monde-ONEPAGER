const translations = {
  de: {
    "hero-title": "Surf & Sahara – Dein Traumurlaub in Mirleft",
    "hero-sub": "Erlebe Wellen, Wüste und Wunder – alles in einem Trip.",
    "hero-btn": "Jetzt entdecken",
    "pkg-title": "Unsere Pakete",
    "pkg1-title": "Surf Camp",
    "pkg1-desc": "Surfe die besten Wellen Marokkos und entspanne dich am Meer.",
    "pkg2-title": "Surf + Wüstentrip",
    "pkg2-desc": "Kombiniere das Surf-Erlebnis mit einer unvergesslichen Wüstenexpedition.",
    "act-title": "Aktivitäten",
    "act-desc": "Yoga am Strand, lokale Küche, Märkte und Abenteuer im Atlasgebirge.",
    "gal-title": "Galerie",
    "contact-title": "Jetzt anfragen",
    "contact-desc": "Buche jetzt dein Surf & Sahara Erlebnis oder stelle deine Fragen über das Formular unten.",
    "map-title": "Unsere Location"
  },
  en: {
    "hero-title": "Surf & Sahara – Your dream vacation in Mirleft",
    "hero-sub": "Experience waves, desert and wonders – all in one trip.",
    "hero-btn": "Discover now",
    "pkg-title": "Our Packages",
    "pkg1-title": "Surf Camp",
    "pkg1-desc": "Surf Morocco’s best waves and relax by the sea.",
    "pkg2-title": "Surf + Desert Trip",
    "pkg2-desc": "Combine surfing with an unforgettable desert adventure.",
    "act-title": "Activities",
    "act-desc": "Beach yoga, local cuisine, markets, and Atlas mountain trips.",
    "gal-title": "Gallery",
    "contact-title": "Get in touch",
    "contact-desc": "Book your Surf & Sahara experience or send us your questions below.",
    "map-title": "Our Location"
  },
  fr: {
    "hero-title": "Surf & Sahara – Vos vacances de rêve à Mirleft",
    "hero-sub": "Vagues, désert et merveilles – tout dans un seul voyage.",
    "hero-btn": "Découvrir",
    "pkg-title": "Nos forfaits",
    "pkg1-title": "Camp de surf",
    "pkg1-desc": "Surfez sur les meilleures vagues du Maroc et détendez-vous au bord de la mer.",
    "pkg2-title": "Surf + Excursion dans le désert",
    "pkg2-desc": "Combinez surf et aventure inoubliable dans le désert.",
    "act-title": "Activités",
    "act-desc": "Yoga sur la plage, cuisine locale, marchés et montagnes de l’Atlas.",
    "gal-title": "Galerie",
    "contact-title": "Contactez-nous",
    "contact-desc": "Réservez votre expérience Surf & Sahara ou posez vos questions ci-dessous.",
    "map-title": "Notre emplacement"
  }
};

const switcher = document.getElementById("langSwitcher");
switcher.addEventListener("change", () => {
  const lang = switcher.value;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.dataset.lang;
    el.textContent = translations[lang][key];
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
