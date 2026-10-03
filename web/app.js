const PARIS_CHAPTERS = [
  {
    id: "preparation", number: "01", phase: "THUIS", title: "Het grote reisnieuws", subtitle: "De familie maakt plannen", icon: "🏠", scene: "family",
    nl: "Mama en papa hebben een verrassing: binnenkort reist het gezin naar Parijs. Zayd haalt de kaart en Razan zoekt hun kleine reisboek. Samen bekijken ze de route en het vertrekuur. Morgen begint hun Franse avontuur.",
    phrase: "Demain, nous partons à Paris !",
    images: ["/book-scenes/chapter-01.jpg"],
    imageAlts: ["Zayd en Razan luisteren thuis naar de verrassing over de reis naar Parijs"],
    hotspots: [[
      { fr: "le canapé", nl: "de zetel", x: 10, y: 60 },
      { fr: "le pull jaune", nl: "de gele trui", x: 25, y: 49 },
      { fr: "le tee-shirt jaune", nl: "het gele T-shirt", x: 67, y: 77 },
      { fr: "la plante", nl: "de plant", x: 96, y: 35 }
    ]],
    words: [["le voyage", "de reis"], ["demain", "morgen"], ["la famille", "het gezin"], ["Paris", "Parijs"]]
  },
  {
    id: "franse-woorden", number: "02", phase: "THUIS", title: "De eerste Franse woorden", subtitle: "Een spel met woordkaartjes", icon: "💬", scene: "cards",
    nl: "Zayd en Razan maken zelf woordkaartjes. Op de voorkant schrijven ze een Frans woord en op de achterkant de Nederlandse betekenis. Ze spreken elk woord rustig uit en helpen elkaar wanneer het nog moeilijk is.",
    phrase: "Bonjour ! Merci !",
    images: ["/book-scenes/chapter-02.jpg"],
    imageAlts: ["Zayd en Razan delen thuis een croissant en oefenen Franse woorden"],
    hotspots: [[
      { fr: "le croissant", nl: "de croissant", x: 49, y: 72 },
      { fr: "la plante", nl: "de plant", x: 50, y: 35 },
      { fr: "le tee-shirt jaune", nl: "het gele T-shirt", x: 18, y: 64 },
      { fr: "le tee-shirt rose", nl: "het roze T-shirt", x: 79, y: 59 }
    ]],
    words: [["bonjour", "goedendag"], ["merci", "dank je"], ["papa", "papa"], ["maman", "mama"]]
  },
  {
    id: "valise", number: "03", phase: "THUIS", title: "De pratende kleren", subtitle: "Wat mag mee in de koffer?", icon: "🧳", scene: "packing",
    nl: "In de slaapkamer lijkt elk kledingstuk iets te willen zeggen. De blauwe broek wil mee, de rode trui ook en de schoenen staan al bij de deur. Zayd en Razan noemen alles in het Frans terwijl ze de koffer vullen.",
    phrase: "Je suis un pantalon bleu !",
    images: ["/book-scenes/chapter-03.jpg"],
    imageAlts: ["Zayd en Razan ontdekken pratende kleding voor hun koffer"],
    hotspots: [[
      { fr: "un pantalon", nl: "een broek", x: 35, y: 67 },
      { fr: "une poche", nl: "een broekzak", x: 20, y: 51 },
      { fr: "un bouton", nl: "een knoop", x: 34, y: 40 },
      { fr: "un globe", nl: "een wereldbol", x: 28, y: 10 },
      { fr: "une commode", nl: "een ladekast", x: 17, y: 29 }
    ]],
    words: [["un pantalon", "een broek"], ["un pull", "een trui"], ["une veste", "een jas"], ["des chaussures", "schoenen"], ["un pyjama", "een pyjama"]]
  },
  {
    id: "taxi", number: "04", phase: "VERTREK", title: "Met de taxi naar het station", subtitle: "De reis begint echt", icon: "🚕", scene: "taxi",
    nl: "De koffers staan in de taxi en iedereen zit klaar. Razan kijkt door het raam naar de straten. Papa begroet de chauffeur en zegt waar ze naartoe willen. Zayd herhaalt de zin heel zachtjes.",
    phrase: "Bonjour, à la gare s’il vous plaît.",
    images: ["/book-scenes/chapter-04.jpg"],
    imageAlts: ["Zayd, Razan, mama en papa vertrekken samen met de taxi"],
    hotspots: [[
      { fr: "la fenêtre", nl: "het raam", x: 7, y: 16 },
      { fr: "la ceinture", nl: "de veiligheidsgordel", x: 84, y: 27 },
      { fr: "le siège", nl: "de zetel", x: 46, y: 65 },
      { fr: "la portière", nl: "het autoportier", x: 7, y: 91 }
    ]],
    words: [["le taxi", "de taxi"], ["le chauffeur", "de chauffeur"], ["la route", "de weg"], ["s’il vous plaît", "alstublieft"]]
  },
  {
    id: "gare", number: "05", phase: "ONDERWEG", title: "Op het perron", subtitle: "Vind de trein naar Parijs", icon: "🚉", scene: "station",
    nl: "In het station kijkt de familie naar het grote vertrekbord. De trein naar Parijs vertrekt van perron vier. Zayd bewaart de tickets en Razan volgt de pijlen. Ze zijn ruim op tijd.",
    phrase: "Le train part du quai quatre.",
    images: ["/book-scenes/chapter-05.jpg"],
    imageAlts: ["Het gezin zoekt op het station het juiste perron voor Parijs"],
    hotspots: [[
      { fr: "une veste bleue", nl: "een blauwe jas", x: 12, y: 32 },
      { fr: "un pull orange", nl: "een oranje trui", x: 66, y: 42 },
      { fr: "un tee-shirt jaune", nl: "een geel T-shirt", x: 30, y: 40 },
      { fr: "la foule", nl: "de menigte", x: 89, y: 22 }
    ]],
    words: [["la gare", "het station"], ["le quai", "het perron"], ["le billet", "het ticket"], ["le départ", "het vertrek"]]
  },
  {
    id: "train", number: "06", phase: "ONDERWEG", title: "In de trein", subtitle: "Frankrijk glijdt voorbij", icon: "🚆", scene: "train",
    nl: "De trein vertrekt rustig en rijdt daarna steeds sneller. Zayd zit bij het raam. Razan zet haar tas onder de stoel. Buiten zien ze velden en steden. De volgende grote halte is Parijs.",
    phrase: "Prochain arrêt : Paris !",
    images: ["/book-scenes/chapter-06.jpg"],
    imageAlts: ["Zayd en Razan zitten in de trein en zien de Eiffeltoren in de verte"],
    hotspots: [[
      { fr: "la fenêtre", nl: "het raam", x: 93, y: 76 },
      { fr: "la tour Eiffel", nl: "de Eiffeltoren", x: 84, y: 20 },
      { fr: "un tee-shirt rose", nl: "een roze T-shirt", x: 18, y: 63 },
      { fr: "une veste bleue", nl: "een blauwe jas", x: 58, y: 69 }
    ]],
    words: [["le train", "de trein"], ["la fenêtre", "het raam"], ["le siège", "de stoel"], ["le sac", "de tas"]]
  },
  {
    id: "arrivee", number: "07", phase: "PARIJS", title: "Bienvenue à Paris", subtitle: "Een sleutel voor de hotelkamer", icon: "🛎️", scene: "hotel",
    nl: "Na hun aankomst wandelt het gezin naar het hotel. Papa begroet de receptionist en vertelt dat ze een reservatie hebben. De receptionist geeft de sleutel. Hun kamer is op de tweede verdieping.",
    phrase: "Bonjour, nous avons une réservation.",
    images: ["/book-scenes/chapter-07.jpg"],
    imageAlts: ["Zayd en Razan ontdekken hun hotelkamer in Parijs"],
    hotspots: [[
      { fr: "le lit", nl: "het bed", x: 18, y: 76 },
      { fr: "l’oreiller", nl: "het kussen", x: 7, y: 54 },
      { fr: "la lampe", nl: "de lamp", x: 53, y: 33 },
      { fr: "la table de nuit", nl: "het nachtkastje", x: 56, y: 70 }
    ]],
    words: [["l’hôtel", "het hotel"], ["la réservation", "de reservatie"], ["la clé", "de sleutel"], ["la chambre", "de kamer"]]
  },
  {
    id: "eiffel", number: "08", phase: "PARIJS", title: "De Eiffeltoren", subtitle: "Van beneden naar boven", icon: "🗼", scene: "eiffel",
    nl: "De Eiffeltoren is nog groter dan op de foto’s. Beneden kijkt Zayd helemaal omhoog. Het gezin neemt de lift. Boven ontdekken ze de daken, de straten en de Seine als op een reusachtige kaart.",
    phrase: "En haut, la vue est magnifique !",
    images: ["/book-scenes/chapter-08a.jpg", "/book-scenes/chapter-08b.jpg"],
    imageAlts: ["De familie ziet de Eiffeltoren voor het eerst", "Het gezin bekijkt Parijs van bovenaf"],
    hotspots: [[
      { fr: "la tour Eiffel", nl: "de Eiffeltoren", x: 86, y: 23 },
      { fr: "une veste bleue", nl: "een blauwe jas", x: 15, y: 51 },
      { fr: "une veste orange", nl: "een oranje jas", x: 56, y: 51 },
      { fr: "une veste fleurie", nl: "een jas met bloemen", x: 79, y: 79 }
    ], [
      { fr: "la ville", nl: "de stad", x: 89, y: 11 },
      { fr: "la Seine", nl: "de Seine", x: 91, y: 23 },
      { fr: "le balcon", nl: "het balkon", x: 94, y: 62 },
      { fr: "une veste fleurie", nl: "een jas met bloemen", x: 79, y: 74 },
      { fr: "une veste bleue", nl: "een blauwe jas", x: 32, y: 74 }
    ]],
    words: [["en bas", "beneden"], ["l’ascenseur", "de lift"], ["en haut", "boven"], ["la vue", "het uitzicht"]]
  },
  {
    id: "tresors", number: "09", phase: "PARIJS", title: "Van het Louvre naar Montmartre", subtitle: "Kunst, straten en een portret", icon: "🎨", scene: "museum",
    nl: "In het Louvre zoeken Zayd en Razan een beroemd schilderij. Daarna wandelen ze door kleine straten naar Montmartre. Een kunstenaar tekent hun portret. Onderweg oefenen ze links en rechts in het Frans.",
    phrase: "À droite, puis tout droit !",
    images: ["/book-scenes/chapter-09a.jpg", "/book-scenes/chapter-09b.jpg"],
    imageAlts: ["Zayd en Razan ontdekken schilderijen in het Louvre", "Een kunstenaar in Montmartre toont het portret van Zayd en Razan"],
    hotspots: [[
      { fr: "la Joconde", nl: "de Mona Lisa", x: 83, y: 28 },
      { fr: "le cadre", nl: "de lijst", x: 94, y: 20 },
      { fr: "le mur", nl: "de muur", x: 72, y: 8 },
      { fr: "une veste fleurie", nl: "een jas met bloemen", x: 16, y: 65 }
    ], [
      { fr: "le portrait", nl: "het portret", x: 19, y: 42 },
      { fr: "le chevalet", nl: "de schildersezel", x: 8, y: 72 },
      { fr: "une toile", nl: "een schilderdoek", x: 38, y: 16 },
      { fr: "une veste fleurie", nl: "een jas met bloemen", x: 84, y: 63 }
    ]],
    words: [["le musée", "het museum"], ["le tableau", "het schilderij"], ["à droite", "rechts"], ["le portrait", "het portret"]]
  },
  {
    id: "passeport", number: "10", phase: "FINALE", title: "Mijn Parijs-paspoort", subtitle: "Herhaal, speel en verdien je stempel", icon: "★", scene: "passport",
    nl: "De reis zit vol herinneringen en nieuwe woorden. Voor de terugreis openen Zayd en Razan hun reispaspoort. Wie de laatste vragen oplost, verdient de Parijs-stempel en kan alle woorden opnieuw beluisteren.",
    phrase: "J’ai appris le français à Paris !",
    images: ["/book-scenes/chapter-10a.jpg", "/book-scenes/chapter-10b.jpg"],
    imageAlts: ["Zayd en Razan wandelen met hun ouders door Parijs", "Zayd en Razan nemen afscheid van Parijs en de Eiffeltoren"],
    hotspots: [[
      { fr: "un manteau", nl: "een mantel", x: 10, y: 31 },
      { fr: "une veste bleue", nl: "een blauwe jas", x: 34, y: 65 },
      { fr: "une veste fleurie", nl: "een jas met bloemen", x: 82, y: 62 },
      { fr: "un tee-shirt rose", nl: "een roze T-shirt", x: 77, y: 52 },
      { fr: "un escalier", nl: "een trap", x: 96, y: 55 }
    ], [
      { fr: "la nuit", nl: "de nacht", x: 84, y: 14 },
      { fr: "la tour Eiffel", nl: "de Eiffeltoren", x: 73, y: 44 },
      { fr: "la fenêtre", nl: "het raam", x: 18, y: 28 },
      { fr: "les lumières", nl: "de lichten", x: 79, y: 52 }
    ]],
    words: [["j’ai appris", "ik heb geleerd"], ["j’ai visité", "ik heb bezocht"], ["au revoir", "tot ziens"], ["bravo", "goed gedaan"]]
  }
];

const FULL_BOOK_CHAPTERS = [
  [
    { number: 1, paragraphs: ["Het was een gewone middag. Zayd en Razan speelden in de woonkamer. Mama kwam binnen met een grote glimlach op haar gezicht.", "‘Kinderen, we hebben een verrassing voor jullie!’ zei ze geheimzinnig."], french: [] },
    { number: 2, paragraphs: ["Papa kwam achter haar aan en knipoogde. ‘Jullie moeten goed luisteren,’ zei hij.", "Zayd sprong op. ‘Wat is het? Wat is het?’"], french: [] },
    { number: 3, paragraphs: ["Mama zei: ‘We gaan op vakantie.’", "Papa zei: ‘Naar... Parijs!’", "Zayd en Razan riepen samen: ‘Parijs?! Echt waar?!’"], french: [] },
    { number: 4, paragraphs: ["Zayd begon meteen te springen. ‘De Eiffeltoren! En croissants eten! En... en... alles in het Frans!’", "Razan glimlachte... maar haar ogen keken een beetje bezorgd."], french: [] },
    { number: 5, paragraphs: ["Mama vroeg: ‘Wat is er, Razan?’", "Razan zei zachtjes: ‘Ik spreek geen Frans...’", "Zayd legde zijn arm om haar schouder. ‘Maak je geen zorgen. Ik help je wel. We gaan samen Frans leren!’"], french: [] }
  ],
  [
    { number: 6, paragraphs: ["De volgende ochtend kwam Zayd naar Razan met een groot notitieboek.", "‘Kijk!’ zei hij. ‘Dit wordt ons Frans-leerboek!’", "Razan keek nieuwsgierig. ‘Gaan we al beginnen?’"], french: [] },
    { number: 7, paragraphs: ["Zayd schreef op het bord:", "Bonjour = Hallo\nMerci = Dank je\nComment ça va ? = Hoe gaat het?", "Hij keek naar Razan. ‘Zeg eens “Bonjour”!’", "‘Bonjour,’ zei Razan. Ze giechelde."], french: ["Bonjour", "Merci", "Comment ça va ?"] },
    { number: 8, paragraphs: ["‘En dit is ook belangrijk,’ zei Zayd. Hij schreef:", "Je m’appelle Razan = Ik heet Razan.", "Razan oefende. ‘Je m’appelle Razan.’", "Zayd klapte in zijn handen. ‘Très bien!’"], french: ["Je m’appelle Razan", "Très bien"] },
    { number: 9, paragraphs: ["Zayd maakte kaartjes. Op elk kaartje stond een Frans woord.", "Hij hield er één omhoog. ‘Wat betekent “merci”?’", "Razan riep: ‘Dank je!’ Ze speelden tot alle kaartjes op waren."], french: ["merci"] },
    { number: 10, paragraphs: ["Mama kwam binnen en hoorde hen oefenen. ‘Wat goed dat jullie al Frans oefenen,’ zei ze.", "Ze glimlachte. ‘Zeg eens: “Bonjour, mama.”’", "Razan en Zayd riepen samen: ‘Bonjour!’"], french: ["Bonjour, mama", "Bonjour"] },
    { number: 11, paragraphs: ["Zayd en Razan speelden winkeltje.", "Zayd zei: ‘Bonjour, ik ben de bakker.’", "Razan lachte: ‘Bonjour, ik wil een croissant!’", "Zayd gaf haar een speelgoedcroissant. ‘Merci!’ zei ze blij."], french: ["Bonjour", "Merci"] },
    { number: 12, paragraphs: ["Papa kwam binnen met de koffers. ‘Zijn jullie er klaar voor?’ vroeg hij.", "Razan riep: ‘Oui, papa!’", "Zayd fluisterde: ‘Zie je?! Je spreekt al Frans!’"], french: ["Oui, papa"] }
  ],
  [
    { number: 13, paragraphs: ["Mama zei: ‘Vandaag pakken we onze koffers.’", "Zayd riep: ‘Yes! Ik neem mijn lievelingstrui mee!’", "Razan keek naar haar roze rok. ‘Gaan jullie mee, kleren?’"], french: [] },
    { number: 14, paragraphs: ["De roze rok sprong omhoog. ‘Ik ben een roze rok!’ riep ze vrolijk. ‘En in het Frans heet ik: une jupe rose!’", "Razan giechelde. ‘Une jupe rose...’"], french: ["une jupe rose"] },
    { number: 15, paragraphs: ["Zayds jeans begon te praten. ‘Ik ben een blauwe broek. En in het Frans: un pantalon bleu!’", "Zayd knikte. ‘Pantalon bleu... klinkt cool!’"], french: ["un pantalon bleu", "Pantalon bleu"] },
    { number: 16, paragraphs: ["Een felgeel T-shirt riep: ‘Ik ben geel! Ik ben een T-shirt!’", "‘Un T-shirt jaune!’", "Razan zei: ‘Ik neem jou zeker mee!’"], french: ["Un T-shirt jaune"] },
    { number: 17, paragraphs: ["De jas zwaaide met zijn mouwen. ‘Moi? Je suis une veste rouge!’", "Zayd grinnikte. ‘Rode jas, rode kracht!’", "De schoenen riepen samen: ‘Nous sommes des chaussures marron!’"], french: ["Moi ? Je suis une veste rouge !", "Nous sommes des chaussures marron !"] },
    { number: 18, paragraphs: ["Een petje sprong uit de kast. ‘Je suis une casquette verte!’", "Een sjaal zei zachtjes: ‘En ik ben une écharpe violette.’", "Razan klapte. ‘Wat een modeshow!’"], french: ["Je suis une casquette verte !", "une écharpe violette"] },
    { number: 19, paragraphs: ["De koffer was bijna vol. Zayd telde de kledingstukken.", "‘Un, deux, trois, quatre... bijna klaar!’", "Mama riep: ‘Vergeet je pyjama niet!’"], french: ["Un, deux, trois, quatre"] },
    { number: 20, paragraphs: ["Papa hielp met het dichtdoen van de koffers. ‘Zijn jullie klaar?’", "Zayd en Razan riepen samen: ‘Oui, nos vêtements aussi!’", "De koffer trilde... en giechelde."], french: ["Oui, nos vêtements aussi !"] }
  ],
  [
    { number: 21, paragraphs: ["De familie stapte in een taxi. Razan keek naar buiten en zuchtte: ‘Ik voel vlinders in mijn buik...’", "Mama lachte: ‘We gaan op avontuur!’"], french: [] }
  ],
  [
    { number: 22, paragraphs: ["In het station was het druk. Mensen liepen heen en weer met koffers.", "Papa zei: ‘Kijk, het loket! In het Frans zeggen ze: le guichet.’", "Zayd knikte: ‘Daar kopen we ons billet!’", "‘Billet... dat klinkt chique!’ zei Razan."], french: ["le guichet", "billet"] },
    { number: 23, paragraphs: ["Zayd keek op het grote bord. ‘We vertrekken van spoor acht. In het Frans is dat... voie huit.’", "Razan oefende: ‘Voie huit... voie huit...’", "Ze herhaalde het met een glimlach."], french: ["voie huit"] },
    { number: 24, paragraphs: ["Op het perron wachtten ze rustig.", "Mama wees: ‘Voici la gare — dat is het station.’", "Zayd fluisterde: ‘La gare, le billet, le guichet... ik leer snel!’"], french: ["Voici la gare", "La gare, le billet, le guichet"] },
    { number: 25, paragraphs: ["‘Daar is de trein!’ riep Razan. De TGV kwam eraan met veel lawaai.", "Papa zei: ‘C’est notre train. Instappen!’", "Zayd zei zachtjes: ‘Parijs, we komen eraan...’"], french: ["C’est notre train"] }
  ],
  [
    { number: 26, paragraphs: ["De trein remde langzaam. Razan kneep in Zayds hand.", "‘Ik zie de Eiffeltoren!’ riep ze.", "Zayd drukte zijn neus tegen het glas. ‘Paris, nous voilà!’ zei hij stralend."], french: ["Paris, nous voilà !"] },
    { number: 27, paragraphs: ["De familie stapte in een taxi. Papa gaf het adres van het hotel.", "‘C’est loin, monsieur?’ vroeg Zayd.", "‘Non, jeune homme. Dix minutes,’ antwoordde de chauffeur glimlachend.", "Razan keek uit het raam. ‘Wat een grote stad!’"], french: ["C’est loin, monsieur ?", "Non, jeune homme. Dix minutes."] }
  ],
  [
    { number: 28, paragraphs: ["Papa sprak de receptioniste aan: ‘Bonjour, nous avons une réservation.’", "De dame antwoordde: ‘Voici votre clé, chambre 204.’", "Razan fluisterde naar Zayd: ‘Chambre betekent kamer, toch?’"], french: ["Bonjour, nous avons une réservation.", "Voici votre clé, chambre 204."] },
    { number: 29, paragraphs: ["De kamer is licht en mooi. ‘Deux lits!’ riep Zayd.", "Razan opende de badkamerdeur. ‘Un bain! Et des savons!’", "Zayd sprong op het bed. ‘C’est doux comme un nuage.’"], french: ["Deux lits !", "Un bain ! Et des savons !", "C’est doux comme un nuage."] }
  ],
  [
    { number: 30, paragraphs: ["En terwijl ze liepen, verscheen plotseling de Eiffeltoren.", "‘Wauw!’ zei Razan. ‘Ze is echt groot!’", "Papa zei: ‘Voici la Tour Eiffel.’", "Zayd stond met open mond. ‘La Tour Eiffel...’ herhaalde hij zachtjes."], french: ["Voici la Tour Eiffel.", "La Tour Eiffel"] },
    { number: 31, paragraphs: ["De familie neemt de lift. Boven strekt Parijs zich uit over de horizon.", "‘Je vois de petits bâtiments!’ zegt Razan.", "Zayd wijst naar de Seine: ‘Daar is de rivier!’", "Papa zegt: ‘Vous êtes tout en haut, les explorateurs.’"], french: ["Je vois de petits bâtiments !", "Vous êtes tout en haut, les explorateurs."] },
    { number: 32, paragraphs: ["Een zachte stem klonk: ‘Bonjour les enfants. Je suis la Tour Eiffel. Je suis en fer (ijzer) et j’ai plus de 130 ans. Je suis le symbole de Paris.’", "Razan fluisterde tegen Zayd: ‘Merci, madame la tour (de toren).’"], french: ["Bonjour les enfants.", "Je suis la Tour Eiffel.", "Je suis en fer et j’ai plus de 130 ans.", "Je suis le symbole de Paris.", "Merci, madame la tour."] },
    { number: 33, paragraphs: ["Zayd tekent de toren in zijn notitieboek. Razan schrijft: ‘La Tour Eiffel est grande et belle.’", "Papa neemt een foto: ‘Souriez!’", "‘Meteen op Instagram!’ zei Zayd.", "‘Ik ben trots op jullie,’ zei mama."], french: ["La Tour Eiffel est grande et belle.", "Souriez !"] }
  ],
  [
    { number: 34, paragraphs: ["Ze liepen naar een grote glazen piramide.", "‘C’est une pyramide!’ riep Zayd.", "Mama zei: ‘C’est le musée du Louvre.’", "‘Daar woont de Mona Lisa!’ zei papa."], french: ["C’est une pyramide !", "C’est le musée du Louvre."] },
    { number: 35, paragraphs: ["Ze liepen door zalen vol schilderijen.", "Razan keek naar een schilderij: ‘C’est un chevalier!’", "Zayd wees: ‘Daar is de Mona Lisa!’", "‘Elle sourit un peu,’ zei Razan.", "Zayd: ‘Of verbergt zij een geheim?’"], french: ["C’est un chevalier !", "Elle sourit un peu."] },
    { number: 36, paragraphs: ["Een lage stem klonk uit de muren: ‘Bienvenue au Louvre. Je garde des trésors d’art et d’histoire. Schilderijen, beeldhouwwerken... en de Mona Lisa.’", "Zayd zei: ‘U bent echt een museum vol magie.’"], french: ["Bienvenue au Louvre.", "Je garde des trésors d’art et d’histoire."] },
    { number: 37, paragraphs: ["Razan zuchtte: ‘C’était magnifique.’", "Zayd: ‘Mon préféré est le tableau du dragon.’", "Mama: ‘Chacun a son coup de cœur.’", "Papa: ‘Prêts pour l’aventure suivante?’", "‘Oui!’ antwoordden de kinderen."], french: ["C’était magnifique.", "Mon préféré est le tableau du dragon.", "Chacun a son coup de cœur.", "Prêts pour l’aventure suivante ?", "Oui !"] },
    { number: 38, paragraphs: ["De familie liep door de straten van Parijs. Zayd las een bord: ‘Rue de la Paix.’", "Razan keek naar de bloembalkons: ‘Wat een mooie gebouwen!’", "Papa wees op een kaart: ‘Hier zijn we.’", "Mama: ‘Leuke wandeling, hè?’", "‘Ja!’ riepen de kinderen."], french: ["Rue de la Paix"] },
    { number: 39, paragraphs: ["Een meneer liep met een krant. Papa vroeg beleefd: ‘Excusez-moi, où est Montmartre?’", "De man glimlachte: ‘À droite, puis tout droit.’", "Zayd herhaalde: ‘À droite, rechts... tout droit, rechtdoor...’"], french: ["Excusez-moi, où est Montmartre ?", "À droite, puis tout droit."] },
    { number: 40, paragraphs: ["Zayd las: ‘Station Anvers.’", "‘Anvers? Zoals de stad in België?’ lachte papa.", "‘Ja, maar hier is het een metro!’"], french: ["Station Anvers"] },
    { number: 41, paragraphs: ["‘Wat een trappen,’ zuchtte Zayd.", "‘Allez,’ zei mama. ‘We zijn bijna boven.’", "Razan klom energiek omhoog. Boven zagen ze de hele stad.", "‘Quelle vue!’ zei ze verwonderd."], french: ["Allez !", "Quelle vue !"] },
    { number: 42, paragraphs: ["Op het plein tekenen schilders onder parasols. Een schilderde een blauwe kat.", "‘C’est joli!’ zei Zayd.", "Een andere zei: ‘Voulez-vous un portrait?’", "De kinderen knikten."], french: ["C’est joli !", "Voulez-vous un portrait ?"] },
    { number: 43, paragraphs: ["De schilder zei: ‘Voici vos portraits.’", "Zayd: ‘C’est vraiment moi?’", "Razan lachte: ‘Je suis jolie en dessin!’"], french: ["Voici vos portraits.", "C’est vraiment moi ?", "Je suis jolie en dessin !"] },
    { number: 44, paragraphs: ["De schilder gaf hun de tekening.", "Zayd: ‘Merci monsieur.’", "Razan rolde het zachtjes op: ‘Souvenir de Montmartre.’", "De kinderen knikten."], french: ["Merci monsieur.", "Souvenir de Montmartre."] },
    { number: 45, paragraphs: ["Ze gingen een kleurrijke winkel binnen. Razan vond een miniatuur-Eiffeltoren.", "Zayd nam een pet met ‘Paris’. ‘Un souvenir pour ne pas oublier.’", "Papa gaf hun de spullen."], french: ["Un souvenir pour ne pas oublier."] }
  ],
  [
    { number: 46, paragraphs: ["’s Avonds, al wandelend, zei Razan: ‘Papa, ik spreek een beetje Frans nu.’", "Zayd: ‘Moi aussi!’", "Mama: ‘C’est formidable, mes enfants.’", "Iedereen glimlachte."], french: ["Moi aussi !", "C’est formidable, mes enfants."] },
    { number: 47, paragraphs: ["De trein verliet het station. Razan drukte haar gezichtje tegen het raam.", "‘Au revoir, Paris!’", "Zayd mompelde: ‘À bientôt...’", "De Eiffeltoren verdween langzaam achter hen."], french: ["Au revoir, Paris !", "À bientôt..."] }
  ]
];

PARIS_CHAPTERS.forEach((chapter, index) => { chapter.bookPages = FULL_BOOK_CHAPTERS[index]; });

const BOOK_VOCABULARY = [
  ["Bonjour", "Hallo"], ["Merci", "Dank je"], ["Ticket", "Ticket / Kaartje"], ["Gare", "Station"], ["Train", "Trein"],
  ["Voie", "Spoor"], ["Hôtel", "Hotel"], ["Chambre", "Kamer"], ["Lit", "Bed"], ["Tour Eiffel", "Eiffeltoren"],
  ["Musée", "Museum"], ["Rue", "Straat"], ["Tableau", "Schilderij"], ["Fer", "IJzer"], ["Bienvenue", "Welkom"],
  ["Taxi", "Taxi"], ["Vêtements", "Kleren"], ["Veste", "Jas"], ["Chaussure", "Schoen"], ["T-shirt", "T-shirt"], ["Écharpe", "Sjaal"]
];

const BOOK_MATCHING = [
  ["1", "Train", "G", "Trein"], ["2", "Ticket", "I", "Ticket"], ["3", "Voie", "F", "Spoor"], ["4", "Lit", "A", "Bed"],
  ["5", "Tour Eiffel", "C", "Eiffeltoren"], ["6", "Musée", "K", "Museum"], ["7", "Rue", "D", "Straat"],
  ["8", "Tableau", "B", "Schilderij"], ["9", "Fer", "E", "IJzer"], ["10", "Veste", "H", "Jas"], ["11", "T-shirt", "J", "T-shirt"]
];

const BOOK_KNOWLEDGE_QUIZ = [
  { q: "Waarvan is de Eiffeltoren gemaakt?", options: ["Steen", "IJzer", "Hout", "Glas"], answer: "IJzer" },
  { q: "Welk beroemd schilderij hangt in het Louvre?", options: ["De Mona Lisa", "Het Vrijheidsbeeld", "De Toren van Pisa", "De Kleine Prins"], answer: "De Mona Lisa" },
  { q: "Wat kun je doen in Montmartre?", options: ["Naar het strand gaan", "Het vliegtuig nemen", "Artiesten en schilders zien", "Naar de supermarkt gaan"], answer: "Artiesten en schilders zien" }
];

const FINAL_QUIZ = [
  { q: "Hoe zeg je ‘goedendag’ in het Frans?", options: ["Bonjour", "Merci", "Au revoir"], answer: "Bonjour" },
  { q: "Wat stop je in de koffer?", options: ["Un pull", "Un quai", "Un musée"], answer: "Un pull" },
  { q: "Waar wacht je op de trein?", options: ["Sur le quai", "Dans la chambre", "En haut"], answer: "Sur le quai" },
  { q: "Wat krijgt de familie in het hotel?", options: ["La clé", "Le tableau", "Le siège"], answer: "La clé" },
  { q: "Wat neemt de familie in de Eiffeltoren?", options: ["L’ascenseur", "Le taxi", "Le train"], answer: "L’ascenseur" },
  { q: "Wat bewonderen Zayd en Razan in het Louvre?", options: ["Un tableau", "Une route", "Une gare"], answer: "Un tableau" }
];

const EMPTY_PROGRESS = { mastered: [], bestScores: {}, xp: 0, completedChapters: [], storyActions: {}, parisQuiz: 0, parisStamp: false, language: "nl" };
let progress = loadProgress();
let state = { view: "home", chapter: nextChapterIndex(), chapterStage: "look", imageIndex: 0, activePictureWord: null, textPage: 0, message: "", audioNotice: "", matchSelection: null, quizIndex: 0, quizScore: 0, quizChoice: null, quizFinished: false, bookAnswers: {} };
let narrationRun = 0;
let availableVoices = [];

function loadProgress() {
  try { return { ...EMPTY_PROGRESS, ...JSON.parse(localStorage.getItem("zr-progress") || "{}") }; }
  catch { return { ...EMPTY_PROGRESS }; }
}
function saveProgress() { localStorage.setItem("zr-progress", JSON.stringify(progress)); }
function chapterKey(index) { return PARIS_CHAPTERS[index].id; }
function actionData(index) { return progress.storyActions[chapterKey(index)] || {}; }
function setAction(index, patch) { progress.storyActions[chapterKey(index)] = { ...actionData(index), ...patch }; saveProgress(); }
function nextChapterIndex() {
  for (let i = 0; i < PARIS_CHAPTERS.length; i += 1) if (!progress.completedChapters.includes(PARIS_CHAPTERS[i].id)) return i;
  return PARIS_CHAPTERS.length - 1;
}
function maxUnlocked() {
  const indexes = progress.completedChapters.map(id => PARIS_CHAPTERS.findIndex(chapter => chapter.id === id)).filter(index => index >= 0);
  return indexes.length ? Math.min(PARIS_CHAPTERS.length - 1, Math.max(...indexes) + 1) : 0;
}
function completedCount() { return progress.completedChapters.filter(id => PARIS_CHAPTERS.some(chapter => chapter.id === id)).length; }
function bookPercent() { return Math.round(completedCount() / PARIS_CHAPTERS.length * 100); }

function navigate(view) {
  stopNarration();
  state.view = view;
  state.message = "";
  if (view === "story") state.chapter = Math.min(state.chapter, maxUnlocked());
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function render() {
  document.querySelectorAll("nav [data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === state.view));
  const page = state.view === "home" ? homeView() : state.view === "story" ? storyView() : progressView();
  document.querySelector("#app").innerHTML = `${page}${state.audioNotice ? `<div class="audio-notice" role="alert"><span>🔊</span><div><strong>Franse stem niet beschikbaar</strong><small>${state.audioNotice}</small></div><button data-dismiss-audio aria-label="Melding sluiten">×</button></div>` : ""}`;
}

function homeView() {
  const percent = bookPercent();
  const next = PARIS_CHAPTERS[nextChapterIndex()];
  return `
    <section class="book-hero book-hero-v2">
      <div class="book-hero-copy">
        <span class="eyebrow">JOUW AVONTUUR BEGINT HIER</span>
        <h1>Op naar Parijs<br>met <em>Zayd &amp; Razan!</em></h1>
        <p class="book-lead">Pak je koffer en reis mee! Ontdek het verhaal, luister naar Franse woorden en speel onderweg.</p><div class="adventure-tags"><span>8–12 jaar</span><span>10 etappes</span><span>Nederlands → Frans</span></div>
        <div class="book-actions">
          <button class="primary child-primary" data-start-book>${percent ? `Ga verder met etappe ${next.number}` : "Start het avontuur"} <span>→</span></button>
        </div>
        <div class="home-progress-card"><span>⭐</span><div><strong>${percent}% van de reis klaar</strong><div class="book-progress-line" aria-label="${percent}% voltooid"><i style="width:${percent}%"></i></div><small>${completedCount()} van ${PARIS_CHAPTERS.length} etappes voltooid</small></div></div>
      </div>
      <div class="hero-illustration-card hero-book-collage" aria-label="Illustraties uit het boek Naar Parijs">
        <img class="hero-book-main" src="/book-scenes/chapter-08a.jpg" alt="Zayd en Razan bij de Eiffeltoren" />
        <img class="hero-book-page page-home" src="/book-scenes/chapter-01.jpg" alt="Het reisnieuws thuis" />
        <img class="hero-book-page page-taxi" src="/book-scenes/chapter-04.jpg" alt="Vertrek met de taxi" />
        <span class="paper-tape"></span>
        <div class="hero-stamp"><small>AVONTUUR 01</small><strong>PARIJS</strong></div>
      </div>
    </section>

    <section class="home-steps" aria-label="Zo werkt het avontuur">
      <article><span>👀</span><div><strong>1. Kijk</strong><small>Ontdek de foto.</small></div></article>
      <article><span>📖</span><div><strong>2. Lees</strong><small>Tik op Franse woorden.</small></div></article>
      <article><span>🎮</span><div><strong>3. Speel</strong><small>Verbind de juiste woorden.</small></div></article>
    </section>

    <section class="chapter-preview">
      <div class="section-heading child-section-heading"><div><span class="section-kicker">JOUW REISROUTE</span><h2>Van thuis naar de Eiffeltoren</h2></div><p>Begin bij de eerste open etappe. Nieuwe etappes komen vanzelf vrij.</p></div>
      <div class="chapter-preview-grid chapter-preview-grid-v2">${PARIS_CHAPTERS.map((chapter, index) => previewCard(chapter, index)).join("")}</div>
    </section>`;
}

function previewCard(chapter, index) {
  const completed = progress.completedChapters.includes(chapter.id);
  const unlocked = index <= maxUnlocked();
  return `<button class="preview-card ${completed ? "done" : ""} ${unlocked ? "" : "locked"} ${index === nextChapterIndex() ? "current" : ""}" data-chapter="${index}" ${unlocked ? "" : "disabled"}>
    <img class="preview-thumb" src="${chapter.images[0]}" alt="" loading="lazy" />
    <span class="preview-number">${chapter.number}</span><span class="preview-icon">${completed ? "✓" : unlocked ? chapter.icon : "🔒"}</span><small class="preview-phase">${chapter.phase}</small><strong>${chapter.title}</strong><small>${completed ? "Klaar" : unlocked ? "Te ontdekken" : "Vergrendeld"}</small>
  </button>`;
}

function storyView() {
  const chapter = PARIS_CHAPTERS[state.chapter];
  const completed = progress.completedChapters.includes(chapter.id);
  const ready = activityReady(state.chapter);
  const stage = state.chapterStage || "look";
  return `<section class="reader-shell child-reader-shell">
    <article class="reader-page child-reader-page">
      <header class="child-story-header">
        <button data-view="home" class="back-to-route">← Etappes</button>
        <div><span>ETAPPE ${chapter.number} VAN ${PARIS_CHAPTERS.length}</span><h1>${chapter.icon} ${chapter.title}</h1><div class="reader-track"><i style="width:${(state.chapter + 1) / PARIS_CHAPTERS.length * 100}%"></i></div></div>
        <strong>${Math.round((state.chapter + 1) / PARIS_CHAPTERS.length * 100)}%</strong>
      </header>
      <nav class="chapter-stage-nav" aria-label="Stappen van deze etappe">
        <button data-chapter-stage="look" class="${stage === "look" ? "active" : ""}"><span>👀</span><b>1. Kijk</b></button>
        <button data-chapter-stage="read" class="${stage === "read" ? "active" : ""}"><span>📖</span><b>2. Lees</b></button>
        <button data-chapter-stage="play" class="${stage === "play" ? "active" : ""}"><span>🎮</span><b>3. Speel</b></button>
      </nav>
      ${stage === "look" ? `${bookImageScene(chapter)}<div class="stage-next"><div><strong>Goed gekeken?</strong><small>Lees nu wat Zayd en Razan beleven.</small></div><button data-chapter-stage="read">Lees het verhaal →</button></div>` : ""}
      ${stage === "read" ? `<div class="story-copy child-story-copy"><p>${chapter.nl}</p><blockquote><span>Tik om te luisteren</span><button class="chapter-french-audio" data-page-french="${encodeURIComponent(chapter.phrase)}"><b>${chapter.phrase}</b><i aria-hidden="true">🔊</i></button></blockquote></div>${fullBookReader(chapter)}${state.chapter === PARIS_CHAPTERS.length - 1 ? bookAppendices() : ""}<div class="stage-next"><div><strong>Klaar met lezen?</strong><small>Verbind de Franse woorden met hun Nederlandse betekenis.</small></div><button data-chapter-stage="play">Naar het spel →</button></div>` : ""}
      ${stage === "play" ? `<div class="play-stage"><div class="page-activity matching-page-activity"><div class="activity-heading"><span class="activity-number">SPEL</span><div><h2>${activityTitle()}</h2><p>${activitySubtitle()}</p></div></div>${activityMarkup(state.chapter)}</div>${state.message ? `<div class="story-message ${/Goed|Fantastisch/.test(state.message) ? "success" : ""}">${state.message}</div>` : ""}<div class="reader-footer child-final-footer"><div><strong>${ready || completed ? "Etappe klaar!" : "Verbind alle woordparen."}</strong><small>Etappe ${state.chapter + 1} van ${PARIS_CHAPTERS.length}</small></div><button class="reader-next ${ready ? "ready" : ""}" data-continue ${ready || completed ? "" : "disabled"}>${state.chapter === PARIS_CHAPTERS.length - 1 ? (completed ? "Stempel behaald ✓" : "Voltooi de reis") : completed ? "Volgende etappe →" : "Klaar, ga verder →"}</button></div></div>` : ""}
      <div class="image-lightbox" data-lightbox aria-hidden="true" role="dialog" aria-modal="true" aria-label="Vergrote illustratie">
        <button class="lightbox-close" data-close-image aria-label="Sluiten">×</button>
        <img src="${chapter.images[state.imageIndex] || chapter.images[0]}" alt="${chapter.imageAlts[state.imageIndex] || chapter.imageAlts[0]}" />
        <p>${chapter.title} · illustratie uit het boek</p>
      </div>
    </article>
  </section>`;
}

function fullBookReader(chapter) {
  const pages = chapter.bookPages || [];
  const pageIndex = Math.min(state.textPage, Math.max(0, pages.length - 1));
  const page = pages[pageIndex];
  if (!page) return "";
  return `<section class="full-book-reader kid-book-reader" data-full-book-reader>
    <header class="kid-book-heading"><div><span>📖 BOEKPAGINA ${page.number}</span><strong>Lees rustig verder</strong></div><small>🔊 Tik op het rood: elk personage krijgt een eigen Franse stem.</small></header>
    <nav class="book-page-tabs" aria-label="Bladzijden van deze etappe">
      ${pages.map((item, index) => `<button data-book-page="${index}" class="${index === pageIndex ? "active" : ""}" aria-label="Open boekpagina ${item.number}">${item.number}</button>`).join("")}
    </nav>
    <article class="digital-book-page">
      <div class="digital-page-meta"><span>OP REIS MET ZAYD &amp; RAZAN</span><b>BOEKPAGINA ${page.number}</b></div>
      ${page.french.length ? `<div class="french-audio-hint"><span aria-hidden="true">🔊</span><p><strong>Franse uitspraak</strong>Tik in het verhaal op een Frans woord of een Franse zin.</p></div>` : ""}
      <div class="digital-page-text">${page.paragraphs.map((paragraph, paragraphIndex) => `<p>${renderBookParagraph(paragraph, page.french, page.paragraphs, paragraphIndex)}</p>`).join("")}</div>
      <div class="digital-page-number">${chapter.title} · ${pageIndex + 1}/${pages.length}</div>
    </article>
    <footer class="book-page-controls">
      <button data-book-prev ${pageIndex === 0 ? "disabled" : ""}>← Vorige bladzijde</button>
      <div aria-label="Voortgang door het volledige verhaal"><span style="width:${page.number / 47 * 100}%"></span></div>
      <button data-book-next ${pageIndex === pages.length - 1 ? "disabled" : ""}>Volgende bladzijde →</button>
    </footer>
  </section>`;
}

function bookAppendices() {
  return `<section class="book-appendices">
    <div class="appendix-heading"><span class="section-kicker">EXTRA BLADZIJDEN UIT HET BOEK</span><h2>Woordenlijst en oefeningen</h2><p>Ook de drie oefenbladzijden achteraan zijn volledig en overzichtelijk opgenomen.</p></div>
    <details open class="appendix-panel">
      <summary><span>01</span><div><strong>Woordenlijst</strong><small>21 woorden · klik om te luisteren</small></div><b>+</b></summary>
      <div class="complete-vocabulary">${BOOK_VOCABULARY.map(([fr, nl]) => `<button data-book-vocab="${encodeURIComponent(fr)}"><strong>${fr}</strong><small>${nl}</small><i>♪</i></button>`).join("")}</div>
    </details>
    <details class="appendix-panel">
      <summary><span>02</span><div><strong>Verbind het juiste woord</strong><small>11 Franse woorden met hun Nederlandse betekenis</small></div><b>+</b></summary>
      <div class="matching-sheet"><div class="matching-head"><span>Français</span><span>Antwoord</span><span>Nederlands</span></div>${BOOK_MATCHING.map(([number, fr, letter, nl]) => `<div><span><b>${number}</b>${fr}</span><i>→</i><span><b>${letter}</b>${nl}</span></div>`).join("")}</div>
    </details>
    <details class="appendix-panel">
      <summary><span>03</span><div><strong>Quiz uit het boek</strong><small>3 vragen · kies meteen je antwoord</small></div><b>+</b></summary>
      <div class="original-book-quiz">${BOOK_KNOWLEDGE_QUIZ.map((question, qIndex) => {
        const selected = state.bookAnswers[qIndex];
        return `<article><span>VRAAG ${qIndex + 1}</span><h3>${question.q}</h3><div>${question.options.map(option => `<button data-book-question="${qIndex}" data-book-option="${encodeURIComponent(option)}" class="${selected ? (option === question.answer ? "correct" : option === selected ? "wrong" : "") : ""}" ${selected ? "disabled" : ""}>${option}</button>`).join("")}</div>${selected ? `<p class="book-answer-feedback">${selected === question.answer ? "✓ Goed gedaan!" : `Het juiste antwoord is: ${question.answer}.`}</p>` : ""}</article>`;
      }).join("")}</div>
    </details>
  </section>`;
}

function railItem(chapter, index) {
  const completed = progress.completedChapters.includes(chapter.id), unlocked = index <= maxUnlocked();
  return `<button data-chapter="${index}" class="${state.chapter === index ? "active" : ""} ${completed ? "done" : ""}" ${unlocked ? "" : "disabled"}><span>${completed ? "✓" : unlocked ? chapter.number : "·"}</span><div><strong>${chapter.title}</strong><small>${unlocked ? chapter.subtitle : "Nog te ontgrendelen"}</small></div></button>`;
}

function bookImageScene(chapter) {
  const imageIndex = Math.min(state.imageIndex, chapter.images.length - 1);
  const hotspots = (chapter.hotspots?.[imageIndex] || []).slice(0, 3);
  const pictureWordsByImage = actionData(state.chapter).pictureWordsV3 || {};
  const pictureWords = (pictureWordsByImage[String(imageIndex)] || []).filter(index => Number(index) < hotspots.length);
  const activeWordIndex = Number.isInteger(state.activePictureWord) ? state.activePictureWord : null;
  const activeWord = activeWordIndex === null ? null : hotspots[activeWordIndex];
  const sceneComplete = hotspots.length > 0 && pictureWords.length === hotspots.length;
  const discoveredTotal = Object.entries(pictureWordsByImage).reduce((total, [key, words]) => {
    const visibleCount = Math.min(3, chapter.hotspots?.[Number(key)]?.length || 0);
    return total + words.filter(index => Number(index) < visibleCount).length;
  }, 0);
  const hotspotTotal = (chapter.hotspots || []).reduce((total, words) => total + Math.min(3, words.length), 0);
  return `<section class="book-image-stage ${sceneComplete ? "scene-complete" : ""}">
    <div class="scene-visual-column">
      <div class="scene-photo-label"><span>SCÈNE ${chapter.number}</span><small>${chapter.phase}</small></div>
      <div class="book-page-frame">
        <img src="${chapter.images[imageIndex]}" alt="${chapter.imageAlts[imageIndex]}" />
        <div class="book-image-hotspots" aria-label="Franse woorden die bij de foto horen">
          ${hotspots.map((word, index) => {
            const revealed = pictureWords.includes(String(index));
            const active = activeWordIndex === index;
            return `<button data-picture-word="${index}" class="${revealed ? "revealed" : ""} ${active ? "active" : ""}" style="--spot-x:${word.x}%;--spot-y:${word.y}%" aria-label="${revealed ? "Beluister" : "Ontdek"} ${word.fr}"><b>${revealed ? "✓" : index + 1}</b></button>`;
          }).join("")}
        </div>
      </div>
    </div>
    <div class="book-image-guide">
      <span class="eyebrow">ZOEK OP DE FOTO</span>
      <h2>Tik op een cijfer</h2>
      <p>Ontdek één Frans woord per keer.</p>
      ${activeWord ? `<button class="image-word-card" data-page-french="${encodeURIComponent(activeWord.fr)}" aria-label="Luister opnieuw naar ${activeWord.fr}"><span>WOORD ${activeWordIndex + 1}</span><strong>${activeWord.fr}</strong><small>${activeWord.nl}</small><i aria-hidden="true">🔊</i></button>` : `<div class="image-word-placeholder"><span>☝️</span><strong>Kies een cijfer op de foto</strong></div>`}
      <div class="image-discovery-score"><strong>${pictureWords.length}/${hotspots.length}</strong><span>gevonden op deze foto<small>${discoveredTotal}/${hotspotTotal} in deze scène</small></span></div>
      ${sceneComplete ? `<div class="image-complete-note" aria-live="polite"><span>★</span><div><strong>Bravo!</strong><small>Alle woorden zijn gevonden.</small></div></div>` : ""}
      ${chapter.images.length > 1 ? `<div class="image-filmstrip" aria-label="Kies een illustratie">${chapter.images.map((image, index) => `<button data-gallery-image="${index}" class="${index === imageIndex ? "active" : ""}" aria-label="Bekijk illustratie ${index + 1}"><img src="${image}" alt="" /><span>${index + 1}</span></button>`).join("")}</div>` : ""}
      <div class="image-tools">
        ${chapter.images.length > 1 ? `<button data-gallery-prev aria-label="Vorige illustratie">←</button><span>${imageIndex + 1} / ${chapter.images.length}</span><button data-gallery-next aria-label="Volgende illustratie">→</button>` : `<span>Illustratie ${chapter.number}</span>`}
        <button class="expand-image" data-open-image>⛶ Vergroot</button>
      </div>
    </div>
  </section>`;
}

function sceneVisual(scene, phrase) {
  const people = `<div class="scene-kids"><span>Z</span><span>R</span></div>`;
  const scenes = {
    family: `<div class="story-scene scene-family"><div class="home-window"><i></i><i></i></div><div class="home-table"><span>🎫</span><span>🗺️</span><span>📘</span></div><div class="scene-parents"><span>M</span><span>P</span></div>${people}<div class="speech-label">Paris wacht!</div></div>`,
    cards: `<div class="story-scene scene-cards"><div class="card-floor"><i>bonjour</i><i>merci</i><i>maman</i><i>papa</i></div>${people}<div class="speech-label">Merci !</div></div>`,
    packing: `<div class="story-scene scene-packing"><div class="big-suitcase"><i></i><b>PARIS</b></div><span class="floating-item a">🧥</span><span class="floating-item b">👟</span><span class="floating-item c">👖</span>${people}<div class="speech-label">Je suis un pull rouge !</div></div>`,
    taxi: `<div class="story-scene scene-taxi"><div class="taxi-car"><b>TAXI</b><i></i><i></i></div><div class="city-road"></div>${people}<div class="speech-label">À la gare, s’il vous plaît.</div></div>`,
    station: `<div class="story-scene scene-station"><div class="station-board"><small>DÉPART</small><strong>PARIS · 09:18</strong><span>QUAI 4</span></div><div class="station-clock">09:05</div><div class="platform-train">▰▰▰▰</div>${people}</div>`,
    train: `<div class="story-scene scene-train"><div class="train-window"><span>☁</span><i></i><b>PARIS →</b></div><div class="train-seats"><i></i><i></i></div>${people}<span class="train-bag">🎒</span></div>`,
    hotel: `<div class="story-scene scene-hotel"><div class="hotel-desk"><span>HÔTEL</span><b>204</b><i>🔑</i></div><div class="receptionist">R</div>${people}<div class="speech-label">Bienvenue à Paris !</div></div>`,
    eiffel: `<div class="story-scene scene-eiffel"><span class="paris-sun"></span><div class="eiffel-shape">♜</div><div class="paris-roofs"></div>${people}<span class="level-label top">EN HAUT</span><span class="level-label bottom">EN BAS</span></div>`,
    museum: `<div class="story-scene scene-museum"><div class="museum-frame"><span>🖼️</span><small>LE LOUVRE</small></div><div class="street-sign"><b>MONTMARTRE</b><span>→</span></div><div class="artist-easel">✎</div>${people}</div>`,
    passport: `<div class="story-scene scene-passport"><div class="giant-passport"><span>OP REIS</span><strong>PASSEPORT</strong><i>★</i><small>ZAYD · RAZAN</small></div><div class="confetti">✦ · ★ · ✦</div>${people}</div>`
  };
  return `${scenes[scene]}<span class="scene-caption">${phrase}</span>`;
}

function activityTitle() {
  return "Verbind de juiste woorden";
}

function activitySubtitle() {
  return "Kies één Franse kaart en daarna de juiste Nederlandse betekenis.";
}

function matchingOrder(index) {
  const length = PARIS_CHAPTERS[index].words.length;
  const shift = (index % Math.max(1, length - 1)) + 1;
  return Array.from({ length }, (_, position) => (position + shift) % length);
}

function activityMarkup(index) {
  const words = PARIS_CHAPTERS[index].words;
  const matched = actionData(index).matchedPairsV1 || [];
  const selection = state.matchSelection;
  const rightOrder = matchingOrder(index);
  const pairClass = pairIndex => `pair-${pairIndex % 5}`;
  const cardClass = (side, pairIndex) => [
    "match-card",
    pairClass(pairIndex),
    matched.includes(String(pairIndex)) ? "matched" : "",
    selection?.side === side && selection.index === pairIndex ? "selected" : ""
  ].filter(Boolean).join(" ");

  return `<div class="word-match-game">
    <div class="match-progress"><div><span style="width:${matched.length / words.length * 100}%"></span></div><strong>${matched.length}/${words.length} paren</strong></div>
    <div class="match-board">
      <section class="match-column match-french"><h3><span>FR</span> Français</h3>${words.map(([fr], pairIndex) => `<button class="${cardClass("fr", pairIndex)}" data-match-side="fr" data-match-index="${pairIndex}" ${matched.includes(String(pairIndex)) ? "aria-pressed=\"true\"" : ""}><i>${matched.includes(String(pairIndex)) ? pairIndex + 1 : "🔊"}</i><strong>${fr}</strong><small>${matched.includes(String(pairIndex)) ? "Verbonden" : "Luister"}</small></button>`).join("")}</section>
      <div class="match-middle" aria-hidden="true"><span>↔</span><small>Verbind</small></div>
      <section class="match-column match-dutch"><h3><span>NL</span> Nederlands</h3>${rightOrder.map(pairIndex => `<button class="${cardClass("nl", pairIndex)}" data-match-side="nl" data-match-index="${pairIndex}" ${matched.includes(String(pairIndex)) ? "aria-pressed=\"true\"" : ""}><i>${matched.includes(String(pairIndex)) ? pairIndex + 1 : "?"}</i><strong>${words[pairIndex][1]}</strong><small>${matched.includes(String(pairIndex)) ? "Verbonden" : "Kies"}</small></button>`).join("")}</section>
    </div>
    ${matched.length === words.length ? `<div class="match-complete"><span>⭐</span><div><strong>Alle woorden zijn verbonden!</strong><small>Je kunt nu naar de volgende etappe.</small></div><button data-reset-matching>Opnieuw spelen</button></div>` : `<p class="match-help">Tik op een kaart links en zoek dezelfde betekenis rechts.</p>`}
  </div>`;
}

function activityReady(index) {
  return (actionData(index).matchedPairsV1 || []).length === PARIS_CHAPTERS[index].words.length;
}

function progressView() {
  const unlockedWords = PARIS_CHAPTERS.slice(0, maxUnlocked() + 1).flatMap(chapter => chapter.words);
  const uniqueWords = [...new Map(unlockedWords.map(word => [word[0], word])).values()];
  return `<section class="passport-page">
    <div class="passport-heading"><span class="eyebrow">MIJN REISPASPOORT</span><h1>Mijn avontuur in Parijs</h1><p>Bekijk je afgelegde route, herhaal de ontdekte woorden en verzamel de eindstempel.</p></div>
    <div class="passport-dashboard">
      <div class="passport-book"><span>OP REIS MET</span><strong>Zayd en Razan</strong><i>${progress.parisStamp ? "★" : "·"}</i><small>${progress.parisStamp ? "PARIJS · VOLTOOID" : "PARIJS · ONDERWEG"}</small></div>
      <div class="passport-stats"><article><span>${bookPercent()}%</span><p>van het verhaal klaar</p></article><article><span>${uniqueWords.length}</span><p>Franse woorden ontdekt</p></article><article><span>${progress.xp}</span><p>reispunten</p></article><article><span>${completedCount()}/${PARIS_CHAPTERS.length}</span><p>woordspellen klaar</p></article></div>
    </div>
    <div class="progress-timeline"><div class="section-heading"><div><span class="section-kicker">HET REISDAGBOEK</span><h2>De tien etappes</h2></div><button class="text-button" data-start-book>Ga verder →</button></div>
      ${PARIS_CHAPTERS.map((chapter, index) => `<div class="timeline-row ${progress.completedChapters.includes(chapter.id) ? "done" : ""}"><span>${progress.completedChapters.includes(chapter.id) ? "✓" : chapter.number}</span><div><strong>${chapter.title}</strong><small>${chapter.subtitle}</small></div><i>${progress.completedChapters.includes(chapter.id) ? "+30 punten" : index <= maxUnlocked() ? "Beschikbaar" : "Komt later"}</i></div>`).join("")}
    </div>
    <div class="word-bank"><div class="section-heading"><div><span class="section-kicker">MIJN WOORDENLIJST</span><h2>Luister opnieuw</h2></div><p>Alle woorden uit de etappes die je al hebt geopend.</p></div><div>${uniqueWords.map(word => `<button data-passport-word="${word[0]}"><b>${word[0]}</b><small>${word[1]}</small><i>♪</i></button>`).join("")}</div></div>
  </section>`;
}

function toggleArray(index, key, value) {
  const current = actionData(index)[key] || [];
  setAction(index, { [key]: current.includes(value) ? current.filter(item => item !== value) : [...current, value] });
}
function refreshVoices() {
  if (!("speechSynthesis" in window)) return;
  availableVoices = speechSynthesis.getVoices();
}
const VOICE_PROFILES = {
  narrator: { label: "de verteller", rate: .88, pitch: 1, preferred: /audrey|denise|hortense|thomas|henri|natural|premium|enhanced|neural/i },
  mama: { label: "Mama", rate: .87, pitch: 1.02, preferred: /audrey|denise|hortense|marie|virginie|sylvie|florence|céline|celine/i },
  papa: { label: "Papa", rate: .86, pitch: .84, preferred: /henri|thomas|gilles|bernard|daniel|alain|claude/i },
  razan: { label: "Razan", rate: .92, pitch: 1.25, preferred: /amélie|amelie|julie|léa|lea|alice|clara|margaux|child|kid|jeune/i },
  zayd: { label: "Zayd", rate: .94, pitch: 1.1, preferred: /paul|nicolas|rémi|remi|antoine|child|kid|jeune/i },
  kids: { label: "Zayd en Razan", rate: .93, pitch: 1.18, preferred: /amélie|amelie|julie|léa|lea|paul|nicolas|child|kid|jeune/i }
};
const FEMALE_FRENCH_VOICE = /audrey|denise|hortense|marie|virginie|sylvie|florence|céline|celine|amélie|amelie|julie|léa|lea|alice|clara|margaux|female|woman|femme/i;
const MALE_FRENCH_VOICE = /henri|thomas|gilles|bernard|daniel|alain|claude|paul|nicolas|rémi|remi|antoine|male|man|homme/i;
function voiceProfile(speaker = "narrator") {
  return VOICE_PROFILES[speaker] || VOICE_PROFILES.narrator;
}
function bestFrenchVoice(speaker = "narrator") {
  refreshVoices();
  const profile = voiceProfile(speaker);
  const localeScores = { "fr-fr": 300, "fr-be": 220, "fr-ca": 170 };
  const qualityWords = /natural|premium|enhanced|neural|google|microsoft|siri|samsung|acapela|audrey|denise|henri|thomas|amelie|amélie/i;
  return availableVoices
    .filter(voice => voice.lang?.toLowerCase().startsWith("fr"))
    .map(voice => {
      const localeScore = localeScores[voice.lang?.toLowerCase()] || 100;
      const wantsFemaleVoice = speaker === "mama" || speaker === "razan";
      const wantsMaleVoice = speaker === "papa" || speaker === "zayd";
      const matchingGender = wantsFemaleVoice && FEMALE_FRENCH_VOICE.test(voice.name) || wantsMaleVoice && MALE_FRENCH_VOICE.test(voice.name);
      const oppositeGender = wantsFemaleVoice && MALE_FRENCH_VOICE.test(voice.name) || wantsMaleVoice && FEMALE_FRENCH_VOICE.test(voice.name);
      const characterScore = profile.preferred.test(voice.name) ? 115 : matchingGender ? 55 : oppositeGender ? -25 : 0;
      return { voice, score: localeScore + characterScore + (qualityWords.test(voice.name) ? 45 : 0) + (voice.localService ? 5 : 0) };
    })
    .sort((a, b) => b.score - a.score)[0]?.voice || null;
}
async function waitForFrenchVoice(speaker = "narrator", timeout = 1600) {
  const immediateVoice = bestFrenchVoice(speaker);
  if (immediateVoice) return immediateVoice;
  const startedAt = Date.now();
  return new Promise(resolve => {
    const check = () => {
      const voice = bestFrenchVoice(speaker);
      if (voice || Date.now() - startedAt >= timeout) return resolve(voice);
      setTimeout(check, 100);
    };
    setTimeout(check, 80);
  });
}
function cleanFrenchForSpeech(text) {
  return String(text)
    .replace(/[‘“”„]/g, "")
    .replace(/’/g, "'")
    .replace(/\s*=.*$/g, "")
    .replace(/\bZayd\b/gu, "Zaïd")
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function stopNarration() {
  narrationRun += 1;
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}
async function speak(text, speaker = "narrator") {
  if (!("speechSynthesis" in window)) {
    state.audioNotice = "Dit toestel ondersteunt geen gesproken audio.";
    render();
    return;
  }
  const frenchText = cleanFrenchForSpeech(text);
  if (!frenchText) return;
  stopNarration();
  const currentRun = narrationRun;
  const selectedVoice = await waitForFrenchVoice(speaker);
  if (currentRun !== narrationRun) return;
  if (!selectedVoice) {
    state.audioNotice = "Installeer of activeer een Franse stem (Frans – Frankrijk) in de taalinstellingen van dit toestel.";
    render();
    return;
  }
  state.audioNotice = "";
  const utterance = new SpeechSynthesisUtterance(frenchText);
  const profile = voiceProfile(speaker);
  utterance.lang = selectedVoice.lang || "fr-FR";
  utterance.voice = selectedVoice;
  utterance.rate = profile.rate;
  utterance.pitch = profile.pitch;
  utterance.volume = 1;
  speechSynthesis.speak(utterance);
}
function feedbackTone(success) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  try {
    const audio = new AudioContextClass();
    const notes = success ? [523, 659] : [190];
    notes.forEach((frequency, index) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const start = audio.currentTime + index * .08;
      oscillator.frequency.value = frequency;
      oscillator.type = "sine";
      gain.gain.setValueAtTime(.0001, start);
      gain.gain.exponentialRampToValueAtTime(.1, start + .015);
      gain.gain.exponentialRampToValueAtTime(.0001, start + .12);
      oscillator.connect(gain).connect(audio.destination);
      oscillator.start(start);
      oscillator.stop(start + .13);
    });
    setTimeout(() => audio.close(), 350);
  } catch { /* Audio feedback is optional. */ }
}
function escapeSpeechPattern(text) { return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function flexibleFrenchPattern(phrase) {
  return Array.from(phrase.trim()).map(character => {
    if (/\s/u.test(character)) return "\\s*(?:\\([^)]*\\)\\s*)?";
    if (character === "’" || character === "'") return "['’]";
    if (/[!?.,…;:]/u.test(character)) return "(?:\\s*\\([^)]*\\))?\\s*[!?.,…;:]*";
    return escapeSpeechPattern(character);
  }).join("");
}
function languageParts(text, frenchPhrases = []) {
  const phrases = [...new Set(frenchPhrases.filter(Boolean))].sort((a, b) => b.length - a.length);
  if (!phrases.length) return [{ text, lang: "nl" }];
  const matcher = new RegExp(`(${phrases.map(flexibleFrenchPattern).join("|")})`, "giu");
  const parts = [];
  let cursor = 0;
  for (const match of text.matchAll(matcher)) {
    if (match.index > cursor) parts.push({ text: text.slice(cursor, match.index), lang: "nl" });
    parts.push({ text: match[0], lang: "fr" });
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor), lang: "nl" });
  return parts;
}
function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function lastCharacterMention(paragraphs, paragraphIndex, currentPrefix, gender = "any") {
  const allowed = gender === "female" ? ["mama", "razan"] : gender === "male" ? ["papa", "zayd"] : ["mama", "papa", "razan", "zayd"];
  const context = [...paragraphs.slice(0, paragraphIndex), currentPrefix].join(" ").toLowerCase();
  let latest = null;
  allowed.forEach(name => {
    const matches = [...context.matchAll(new RegExp(`\\b${name}\\b`, "giu"))];
    const index = matches.at(-1)?.index ?? -1;
    if (index > (latest?.index ?? -1)) latest = { speaker: name, index };
  });
  return latest?.speaker || "narrator";
}
function speakerForFrenchPhrase(paragraph, phrase, paragraphs = [], paragraphIndex = 0) {
  const source = String(paragraph);
  const phraseIndex = source.toLocaleLowerCase("nl").indexOf(String(phrase).trim().toLocaleLowerCase("nl"));
  const before = source.slice(0, phraseIndex < 0 ? source.length : phraseIndex);
  const after = source.slice((phraseIndex < 0 ? source.length : phraseIndex) + String(phrase).trim().length);
  const speechVerb = "zei|zegt|riep|riepen|vroeg|fluisterde|antwoordde|antwoordden|herhaalde|oefende|mompelde|las|schreef|sprak|wees|lachte|knikte";
  const speechCue = `(?:\\b(?:${speechVerb})\\b|:)`;
  const duoBefore = [...before.matchAll(new RegExp(`\\b(zayd\\s+en\\s+razan|razan\\s+en\\s+zayd)\\b[\\s\\S]{0,70}${speechCue}[\\s\\S]{0,90}$`, "giu"))];
  if (duoBefore.length) return "kids";
  const namedBefore = [...before.matchAll(new RegExp(`\\b(mama|papa|razan|zayd)\\b[\\s\\S]{0,70}${speechCue}[\\s\\S]{0,90}$`, "giu"))];
  if (namedBefore.length) return namedBefore.at(-1)[1].toLowerCase();
  const kidsAfter = after.match(new RegExp(`^[’'\"“”.,!?…\\s]*(?:${speechVerb})\\b\\s+(?:de\\s+kinderen|zayd\\s+en\\s+razan|razan\\s+en\\s+zayd)\\b`, "iu"));
  if (kidsAfter) return "kids";
  const namedAfter = after.match(new RegExp(`^[’'\"“”.,!?…\\s]*(?:${speechVerb})\\b\\s+(mama|papa|razan|zayd)\\b`, "iu"));
  if (namedAfter) return namedAfter[1].toLowerCase();
  const pronounAfter = after.match(new RegExp(`^[’'\"“”.,!?…\\s]*(?:${speechVerb})\\b\\s+(hij|ze)\\b`, "iu"));
  if (pronounAfter) return lastCharacterMention(paragraphs, paragraphIndex, before, pronounAfter[1].toLowerCase() === "hij" ? "male" : "female");
  const pronounBefore = before.match(/\b(hij|ze)\b[^.!?…]{0,55}[.:]\s*[‘'"“”]?\s*$/iu);
  if (pronounBefore) return lastCharacterMention(paragraphs, paragraphIndex, before, pronounBefore[1].toLowerCase() === "hij" ? "male" : "female");
  const namedSubject = before.match(/^\s*(mama|papa|razan|zayd)\b[\s\S]{0,110}[.:]\s*[‘'"“”]?\s*$/iu);
  if (namedSubject) return namedSubject[1].toLowerCase();
  const pronounSubject = before.match(/^\s*(hij|ze)\b[\s\S]{0,110}[.:]\s*[‘'"“”]?\s*$/iu);
  if (pronounSubject) return lastCharacterMention(paragraphs, paragraphIndex, before, pronounSubject[1].toLowerCase() === "hij" ? "male" : "female");
  if (new RegExp(`^[’'\"“”.,!?…\\s]*(?:${speechVerb})\\b`, "iu").test(after)) return "narrator";
  if (/^\s*[‘'"“”]/u.test(source) && /^\s*[‘'"“”]/u.test(before)) return lastCharacterMention(paragraphs, paragraphIndex, before);
  return "narrator";
}
function renderBookParagraph(paragraph, frenchPhrases, paragraphs = [], paragraphIndex = 0) {
  return languageParts(paragraph, frenchPhrases).map(part => {
    const visibleText = escapeHtml(part.text).replaceAll("\n", "<br>");
    if (part.lang !== "fr") return visibleText;
    const speaker = speakerForFrenchPhrase(paragraph, part.text, paragraphs, paragraphIndex);
    const spokenBy = speaker === "narrator" ? "de Franse verteller" : voiceProfile(speaker).label;
    return `<button class="inline-french-audio" data-page-french="${encodeURIComponent(part.text)}" data-speaker="${speaker}" aria-label="Luister naar ${spokenBy}: ${escapeHtml(part.text)}"><span>${visibleText}</span><i aria-hidden="true">🔊</i></button>`;
  }).join("");
}
if ("speechSynthesis" in window) {
  refreshVoices();
  speechSynthesis.addEventListener?.("voiceschanged", refreshVoices);
}
function completeAndContinue() {
  const chapter = PARIS_CHAPTERS[state.chapter];
  if (!activityReady(state.chapter) && !progress.completedChapters.includes(chapter.id)) return;
  if (!progress.completedChapters.includes(chapter.id)) {
    progress.completedChapters.push(chapter.id);
    progress.xp += 30;
    if (state.chapter === PARIS_CHAPTERS.length - 1) progress.parisStamp = true;
    saveProgress();
  }
  if (state.chapter < PARIS_CHAPTERS.length - 1) {
    state.chapter += 1;
    Object.assign(state, { chapterStage: "look", imageIndex: 0, activePictureWord: null, textPage: 0, message: "", matchSelection: null, quizChoice: null, quizFinished: false, quizIndex: 0, quizScore: 0 });
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;
  if (button.hasAttribute("data-dismiss-audio")) { state.audioNotice = ""; return render(); }
  if (button.dataset.view) return navigate(button.dataset.view);
  if (button.hasAttribute("data-start-book")) { state.chapter = nextChapterIndex(); state.chapterStage = "look"; state.imageIndex = 0; state.activePictureWord = null; state.textPage = 0; state.matchSelection = null; return navigate("story"); }
  if (button.dataset.chapter !== undefined) {
    const index = Number(button.dataset.chapter);
    if (index > maxUnlocked()) return;
    state.chapter = index; state.chapterStage = "look"; state.imageIndex = 0; state.activePictureWord = null; state.textPage = 0; state.message = ""; state.matchSelection = null; state.quizChoice = null;
    return navigate("story");
  }
  if (button.dataset.chapterStage) {
    stopNarration();
    state.chapterStage = button.dataset.chapterStage;
    state.message = "";
    state.matchSelection = null;
    state.activePictureWord = null;
    render();
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (button.dataset.bookPage !== undefined) {
    stopNarration();
    state.textPage = Number(button.dataset.bookPage);
    render();
    return requestAnimationFrame(() => document.querySelector("[data-full-book-reader]")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }
  if (button.hasAttribute("data-book-prev") && state.textPage > 0) {
    stopNarration();
    state.textPage -= 1;
    render();
    return requestAnimationFrame(() => document.querySelector("[data-full-book-reader]")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }
  if (button.hasAttribute("data-book-next")) {
    stopNarration();
    const pages = PARIS_CHAPTERS[state.chapter].bookPages || [];
    if (state.textPage < pages.length - 1) state.textPage += 1;
    render();
    return requestAnimationFrame(() => document.querySelector("[data-full-book-reader]")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }
  if (button.dataset.pageFrench) return speak(decodeURIComponent(button.dataset.pageFrench), button.dataset.speaker || "narrator");
  if (button.dataset.bookVocab) return speak(decodeURIComponent(button.dataset.bookVocab));
  if (button.dataset.bookQuestion !== undefined) {
    const index = Number(button.dataset.bookQuestion);
    state.bookAnswers[index] = decodeURIComponent(button.dataset.bookOption);
    return render();
  }
  if (button.dataset.pictureWord !== undefined) {
    const wordIndex = Number(button.dataset.pictureWord);
    const chapter = PARIS_CHAPTERS[state.chapter];
    const imageKey = String(state.imageIndex);
    const visibleHotspots = (chapter.hotspots?.[state.imageIndex] || []).slice(0, 3);
    const hotspot = visibleHotspots[wordIndex];
    if (!hotspot) return;
    const pictureWordsV3 = actionData(state.chapter).pictureWordsV3 || {};
    const current = pictureWordsV3[imageKey] || [];
    const discovered = current.includes(button.dataset.pictureWord) ? current : [...current, button.dataset.pictureWord];
    setAction(state.chapter, { pictureWordsV3: { ...pictureWordsV3, [imageKey]: discovered } });
    state.activePictureWord = wordIndex;
    speak(hotspot.fr);
    state.message = discovered.filter(index => Number(index) < visibleHotspots.length).length === visibleHotspots.length ? "Perfect! Elk woord hoort bij iets dat je echt op de foto ziet." : "";
    return render();
  }
  if (button.dataset.galleryImage !== undefined) {
    state.imageIndex = Number(button.dataset.galleryImage);
    state.activePictureWord = null;
    state.message = "";
    return render();
  }
  if (button.hasAttribute("data-gallery-prev")) {
    const total = PARIS_CHAPTERS[state.chapter].images.length;
    state.imageIndex = (state.imageIndex - 1 + total) % total;
    state.activePictureWord = null;
    state.message = "";
    return render();
  }
  if (button.hasAttribute("data-gallery-next")) {
    const total = PARIS_CHAPTERS[state.chapter].images.length;
    state.imageIndex = (state.imageIndex + 1) % total;
    state.activePictureWord = null;
    state.message = "";
    return render();
  }
  if (button.hasAttribute("data-open-image")) {
    const lightbox = document.querySelector("[data-lightbox]");
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.querySelector("[data-close-image]").focus();
    return;
  }
  if (button.hasAttribute("data-close-image")) {
    const lightbox = document.querySelector("[data-lightbox]");
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    return;
  }
  if (button.dataset.wordAudio !== undefined) return speak(PARIS_CHAPTERS[state.chapter].words[Number(button.dataset.wordAudio)][0]);
  if (button.dataset.passportWord) return speak(button.dataset.passportWord);
  if (button.dataset.matchSide) {
    const side = button.dataset.matchSide;
    const pairIndex = Number(button.dataset.matchIndex);
    const words = PARIS_CHAPTERS[state.chapter].words;
    const matched = actionData(state.chapter).matchedPairsV1 || [];
    if (matched.includes(String(pairIndex))) {
      if (side === "fr") speak(words[pairIndex][0]);
      return;
    }

    if (!state.matchSelection || state.matchSelection.side === side) {
      state.matchSelection = { side, index: pairIndex };
      state.message = side === "fr" ? "Kies nu de Nederlandse betekenis." : "Kies nu het Franse woord.";
      if (side === "fr") speak(words[pairIndex][0]);
      return render();
    }

    if (state.matchSelection.index === pairIndex) {
      const completedPairs = [...matched, String(pairIndex)];
      setAction(state.chapter, { matchedPairsV1: completedPairs });
      feedbackTone(true);
      speak(words[pairIndex][0]);
      state.message = completedPairs.length === words.length ? "Fantastisch! Alle woordparen zijn juist." : "Goed zo! Dit paar hoort bij elkaar.";
    } else {
      feedbackTone(false);
      state.message = "Bijna! Probeer een andere kaart.";
    }
    state.matchSelection = null;
    return render();
  }
  if (button.hasAttribute("data-reset-matching")) {
    setAction(state.chapter, { matchedPairsV1: [] });
    state.matchSelection = null;
    state.message = "Klaar voor een nieuwe ronde!";
    return render();
  }
  if (button.dataset.checkItem) {
    toggleArray(0, "checked", button.dataset.checkItem);
    state.message = (actionData(0).checked || []).length === 3 ? "Goed gedaan! De reis kan beginnen." : "";
    return render();
  }
  if (button.dataset.cardWord !== undefined) {
    toggleArray(1, "cards", button.dataset.cardWord);
    speak(PARIS_CHAPTERS[1].words[Number(button.dataset.cardWord)][0]);
    state.message = (actionData(1).cards || []).length === 4 ? "Goed gedaan! Je kent de eerste Franse woorden." : "";
    return render();
  }
  if (button.dataset.packItem) {
    toggleArray(2, "packed", button.dataset.packItem);
    speak(button.querySelector("strong").textContent);
    state.message = (actionData(2).packed || []).length === 5 ? "Goed gedaan! De koffer is volledig." : "";
    return render();
  }
  if (button.dataset.dialogueKey) {
    const index = button.dataset.dialogueKey === "taxiPhrase" ? 3 : 6;
    setAction(index, { [button.dataset.dialogueKey]: button.dataset.dialogueAnswer });
    speak(button.dataset.dialogueAnswer);
    state.message = button.dataset.dialogueCorrect === "true" ? "Perfect! Dat is de juiste Franse zin." : "Probeer opnieuw en kijk naar de situatie.";
    return render();
  }
  if (button.dataset.sequence !== undefined) {
    const choice = Number(button.dataset.sequence), expected = actionData(4).sequence || 0;
    if (choice === expected) { setAction(4, { sequence: expected + 1 }); state.message = expected === 3 ? "Goed gedaan! Iedereen kan instappen." : "Heel goed, wat komt daarna?"; }
    else state.message = "Kijk goed: welke actie komt eerst?";
    return render();
  }
  if (button.dataset.trainWord) {
    toggleArray(5, "found", button.dataset.trainWord);
    state.message = (actionData(5).found || []).length === 4 ? "Goed gedaan! Je kent de woorden van de trein." : "";
    return render();
  }
  if (button.dataset.eiffelLevel) {
    toggleArray(7, "levels", button.dataset.eiffelLevel);
    state.message = (actionData(7).levels || []).length === 3 ? "Goed gedaan! Je bent helemaal boven." : "";
    return render();
  }
  if (button.dataset.parisStop) {
    toggleArray(8, "stops", button.dataset.parisStop);
    state.message = (actionData(8).stops || []).length === 4 ? "Goed gedaan! Je hebt kunst en Montmartre ontdekt." : "";
    return render();
  }
  if (button.dataset.finalAnswer && !state.quizChoice) {
    state.quizChoice = button.dataset.finalAnswer;
    if (state.quizChoice === FINAL_QUIZ[state.quizIndex].answer) state.quizScore += 1;
    return render();
  }
  if (button.hasAttribute("data-final-next")) {
    if (state.quizIndex === FINAL_QUIZ.length - 1) {
      state.quizFinished = true;
      progress.parisQuiz = Math.max(progress.parisQuiz || 0, Math.round(state.quizScore / FINAL_QUIZ.length * 100));
      saveProgress();
    } else { state.quizIndex += 1; state.quizChoice = null; }
    return render();
  }
  if (button.hasAttribute("data-restart-quiz")) { Object.assign(state, { quizIndex: 0, quizScore: 0, quizChoice: null, quizFinished: false }); return render(); }
  if (button.hasAttribute("data-previous") && state.chapter > 0) { state.chapter -= 1; state.imageIndex = 0; state.activePictureWord = null; state.textPage = 0; state.message = ""; return render(); }
  if (button.hasAttribute("data-continue")) return completeAndContinue();
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  const lightbox = document.querySelector("[data-lightbox].open");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
});

render();
