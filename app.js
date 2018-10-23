var app = new Vue({
  el: '#app',
  data: {
    firstName: "Léa",
    lastName: "Sanchez",
    description: "Je suis journaliste et développeuse éditoriale en apprentissage dans la rubrique \"Décodeurs\" du journal Le Monde.",
    photo: "https://pbs.twimg.com/profile_images/1015612275166760960/ymt-zlWL_400x400.jpg",
    twitter: "lea__sanchez",
    github: "lcarmensanchez",
    mail: "lea.sanchez@sciencespo.fr",
    experiences: [{
      dateBegin: "Juillet 2018",
      dateEnd: "Aujourd'hui",
      name: "Le Monde",
      logo: 'http://komidi.re/wp-content/uploads/2015/10/logo-le-monde.png',
      title: "Développeuse éditoriale et journaliste",
      description: "Développement d'outils pour l'équipe des Décodeurs et rédaction d'articles"
    }, {
      dateBegin: "Juin 2018",
      dateEnd: false,
      logo: "https://www.gsrl-cnrs.fr/wp-content/uploads/2018/06/logo-AFP.jpg",
      name: "Agence France Presse",
      title: "Journaliste au service infographie et innovation",
      description: "Aide à la réalisation d’infographies fixes et interactives. Constitution de bases de données."
    },
    {
      dateBegin: "Mai 2018",
      dateEnd: false,
      name: "L'Equipe",
      logo:"https://upload.wikimedia.org/wikipedia/commons/4/41/Photo-le-logo-de-l-equipe.jpg",
      title: "Journaliste et développeuse",
      description: "Membre de l’équipe lauréate du prix L'Equipe Explore. Concours récompensant la production d’un reportage multimédia reprenant le cadre des « Explore » du journal. Coréalisation de la narration visuelle du projet et développement web"
    },
    {
      dateBegin: "Avril 2018",
      dateEnd: false,
      name: "L'Express",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dc/L%27Express_-_2016.svg/1280px-L%27Express_-_2016.svg.png",
      title: "Journaliste immobilier",
      description: "Supplément immobilier consacré à Lyon : enquête, rédaction et élaboration d’un synopsis photo"
    },
    {
      dateBegin: "Octobre 2017",
      dateEnd: false,
      name: "Le Monde",
      logo: 'http://komidi.re/wp-content/uploads/2015/10/logo-le-monde.png',
      title: "Journaliste société",
      description: "Reportages sur des sujets variés : immigration, citoyenneté..."
    },
    {
      dateBegin: "Août 2017",
      dateEnd: false,
      name: "Socialter",
      logo: "https://clarissebriot.files.wordpress.com/2013/11/socialter-logo-ok.png?w=547",
      title: "Journaliste",
      description: "Articles d'actualité et reportages"
    },
    {
      dateBegin: "Juin 2017",
      dateEnd: false,
      name: "Le Parisien",
      logo:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Le_Parisien_-_logo_2016.png",
      title: "Journaliste localière",
      description: "Reportages pour l’édition de Paris, rédaction de la page loisirs, voix express"
    },
    {
      dateBegin: "Janvier 2017",
      dateEnd: false,
      name: "Toute La Culture",
      logo: "https://pbs.twimg.com/profile_images/748161340481638400/qbD2lKQ-_400x400.jpg",
      title: "Journaliste",
      description: " Rédaction d’articles (actualité, politique culturelle...) et de critiques, community management</"
    },
    {
      dateBegin: "Juillet 2015",
      dateEnd: "Août 2015",
      name: "Le Courrier de l'Eure",
      logo: "https://static.actu.fr/marque/logo/le-courrier-de-l-eure_w1024.png",
      title: "Journaliste localière",
      description: "Reportages, interview, secrétariat de rédaction, mise en page et mise en ligne des contenus"
    },
    {
      dateBegin: "Juin 2015",
      dateEnd: false,
      name: "Paris-Normandie",
      logo: "https://www.offremedia.com/sites/default/files/vignette/article/nl1558-logo-paris-normandie-v2.png",
      title: "Journaliste localière",
      description: "Rédaction de brèves et d'articles sur l'actualité rouennaise (économie, culture…)"
    }
  ],
    formations: [{
      dateBegin: "2016",
      dateEnd: "2019",
      name: "Master journalisme",
      logo: "https://media.glassdoor.com/sqll/965540/sciences-po-paris-squarelogo-1469102195854.png",
      university: "Ecole de journalisme de Sciences Po"
    },
    {
      dateBegin: "2017",
      dateEnd: "2018",
      name: "Formation en code (algorithmie et développement web)",
      logo: "https://www.usine-digitale.fr/mediatheque/4/6/0/000643064.png",
      university: "Ecole 42"
    },
    {
      dateBegin: "2016",
      dateEnd: "2013",
      name: "Bachelor du collège universitaire",
      logo: "https://media.glassdoor.com/sqll/965540/sciences-po-paris-squarelogo-1469102195854.png",
      university: "Sciences Po Paris"
    }],
    languages: ["Anglais", "Espagnol"],
    skills: ["Photoshop", "Photographie", "Adobe Premiere", "Python (Django, scrapping...)", "C", "Node JS", "VueJS", "D3js", "SCSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})