import { ProjectTextMap } from '../projectTypes';

export const projectTextIt: ProjectTextMap = {
  goodnightPotion: {
    title: "Goodnight Potion",
    type: "Videogioco",
    description: "🌙 Intraprendi un viaggio magico in un coinvolgente puzzle game single-player in cui la vita di un potente mago dipende dalle sue pozioni notturne. Creato originariamente durante la Mini Jam 103: Darkness e successivamente ampliato con aggiornamenti e nuovi contenuti su itch.io. Gioco disponibile per Web, Desktop e Android!",
    caseStudy: {
      challenge: "Creare una meccanica di gioco avvincente che bilanci semplicità e strategia profonda con risorse limitate.",
      role: "Lead Developer and Game Designer",
      solution: "Sviluppato un sistema di movimento a griglia dove l'ordine di consumo delle pozioni è fondamentale, usando Unity 2D e logica di pathfinding personalizzata.",
      result: "Pubblicato su itch.io per Web, Desktop e Android con feedback positivi su struttura dei puzzle e progressione del gameplay."
    }
  },
  distordi: {
    title: "Distordi (aka Ricordi Distorti)",
    type: "Videogioco",
    description: "Un puzzle game multiplayer 3D in terza persona. Sviluppato per la Global Game Jam e sponsorizzato da Photon. Vivevate tutti nello stesso quartiere e quel fast food era il vostro ritrovo. Ritorni nel luogo dopo molti anni e ritrovi tutti i tuoi ricordi del passato... I ricordi e le storie sono generati da IA (immagini e testi).",
    caseStudy: {
      challenge: "Sincronizzare stati di puzzle complessi tra più giocatori in ambiente 3D integrando contenuti generativi.",
      role: "Full Stack Developer (Unity + Photon)",
      solution: "Implementato Photon Bolt per il networking e bridge API personalizzati per l'iniezione degli indizi generati dall'IA.",
      result: "Esperienza multiplayer sperimentale basata su ricordi generati da IA, esplorazione collaborativa e interazione narrativa."
    }
  },
  myStupidBigFamily: {
    title: "MyStupidBigFamily",
    type: "Videogioco",
    description: "Sviluppato per la Global Game Jam 2021. Hai temporaneamente perso la memoria dopo un incidente stradale, nulla di grave ma sei ricoverato. La tua famiglia è piena di persone divertenti e un po' stupide che, invece di preoccuparsi del tuo stato, decidono di farti fesso inviandoti messaggi sotto false identità. Puoi usare il tuo smartphone virtuale per chattare con famiglia e amici o persino riprodurre musica. Riuscirai a scoprire chi mente e chi dice la verità? Quanti dei quattordici sospetti saprai collocare correttamente? Metti alla prova le tue abilità investigative con questo thriller soft senza crimini!",
    caseStudy: {
      challenge: "Implementare un sistema di comportamento IA complesso per i membri della famiglia entro un limite di 48 ore.",
      role: "Lead Developer",
      solution: "Usate macchine a stati semplici e allocazione dei compiti basata su priorità per simulare interazioni realistiche.",
      result: "Completato con successo per la jam con ottimi voti per umorismo e stile."
    }
  },
  treeOfHeroes: {
    title: "Tree of Heroes",
    type: "Videogioco",
    description: "Un gioco focalizzato sulle linee di discendenza di famiglie di eroi. Il gioco è una metafora della vita degli eroi, vista come una serie di sfide di carisma, forza, fortuna e coraggio. Il tuo ruolo è scegliere quali sfide affrontare. Al termine delle sfide, due eroi si incontrano e danno vita a nuovi eroi che erediteranno alcuni tratti di partenza ed inizieranno il livello successivo.",
    caseStudy: {
      challenge: "Progettare un sistema di progressione dinastica in cui i tratti ereditari influenzano concretamente le generazioni future.",
      role: "Game Designer and Developer",
      solution: "Effettuati molteplici passaggi di bilanciamento sui costi delle risorse e meccaniche di combattimento durante la jam.",
      result: "Ottimo posizionamento nella categoria Jam per innovazione e integrazione del tema."
    }
  },
  digitalTwins: {
    title: "Digital Twins per i Beni Culturali",
    type: "Ricerca",
    description: "Ricerca e sviluppo di sistemi di digital twin interattivi per musei e ambienti culturali nell'ambito del progetto IDEALIA.",
    caseStudy: {
      challenge: "Rappresentare accuratamente ambienti museali reali mantenendo alte prestazioni su browser web e VR mobile.",
      role: "Tecnologo della ricerca @ CRS4",
      solution: "Creati shader personalizzati e sistemi LOD (Level of Detail) in Unity per gestire modelli fotogrammetrici ad alta fedeltà.",
      result: "Utilizzato come base per esperienze museali virtuali e sistemi di esplorazione del patrimonio culturale."
    }
  },
  conversationalNPC: {
    title: "Conversational NPC Tourist Guide in VR",
    type: "Pubblicazioni",
    description: "Pubblicazione IEEE focalizzata su agenti conversazionali virtuali in ambienti VR immersivi per la guida culturale, con analisi di engagement, comportamento spaziale e memorizzazione delle informazioni.",
    journal: "IEEE Xplore",
    pubDate: "Pubblicato: Nov 2021",
    paperSubtitle: "AGENTE CONVERSAZIONALE",
    caseStudy: {
      challenge: "Valutare l'usabilità complessiva e l'impatto cognitivo di un agente vocale che guida passeggeri e turisti all'interno di ambienti immersivi ad alta interattività.",
      role: "Co-Autore & Sviluppatore Lead XR",
      solution: "Sviluppato il sistema di audio spaziale, le routine di tracciamento e le macchine a stati decisionali del prototipo VR interamente integrato in Unity.",
      result: "La pubblicazione evidenzia un miglioramento dell'engagement, dell'orientamento spaziale e della memorizzazione delle informazioni in VR."
    }
  },
  rossana: {
    title: "Rossana / Sistema Robotico di Assistenza Brevettato",
    type: "Pubblicazioni",
    description: "Brevetto internazionale WIPO relativo a un sistema robotico antropomorfo per la guida autonoma dei visitatori in spazi pubblici, integrando ROS, avatar virtuali e comportamenti interattivi.",
    journal: "Brevetti WIPO (PCT)",
    pubDate: "Pubblicato: Apr 2023",
    paperSubtitle: "BREVETTO SISTEMA ROBOTICO",
    caseStudy: {
      challenge: "Far comunicare in tempo reale motori fisici, sensoristica (ROS) ed espressioni mimiche tramite un avatar virtuale interattivo ad alta fedeltà.",
      role: "Co-Inventore & Architetto di Sistema",
      solution: "Progettazione e brevettazione di un orchestratore hardware-software che integra Unity via websocket con moduli ROS, sensori rotativi ed Arduino.",
      result: "Pubblicazione brevettuale internazionale validata tramite scenari di test pubblici dedicati all'interazione autonoma con i visitatori."
    }
  },
  fireEvacuation: {
    title: "Modelli di Comportamento per l'Evacuazione da Incendio in Unity",
    type: "Pubblicazioni",
    description: "Pubblicazione scientifica (SAGE / SIMULATION) sull'uso di Unity ML-Agents per modellare il comportamento di persone durante l'evacuazione da incendi indoor tramite apprendimento per rinforzo per una locomozione di crisi verosimile.",
    journal: "SAGE / SIMULATION",
    pubDate: "Pubblicato: Mag 2026",
    paperSubtitle: "SIMULAZIONE EVACUAZIONE",
    caseStudy: {
      challenge: "Simulare dinamiche credibili di panico e movimento umano in situazioni ad alto stress all'interno di planimetrie complesse.",
      role: "Co-Autore & Ingegnere di Simulazione ML",
      solution: "Addestramento di agenti tramite Deep Reinforcement Learning (ML-Agents) provvisti di sensori visivi e parametri di forza sociale.",
      result: "Framework di ricerca che dimostra la validità del reinforcement learning per la simulazione del comportamento collettivo durante evacuazioni."
    }
  },
  sarim: {
    title: "Sarim",
    type: "Ricerca",
    description: "Esperienza VR immersiva per HTC Vive dedicata alla digitalizzazione e all'esplorazione del patrimonio culturale sardo tramite fotogrammetria e rendering realtime.",
    caseStudy: {
      challenge: "Catturare e digitalizzare siti archeologici su larga scala con precisione millimetrica per un ambiente VR immersivo.",
      role: "Sviluppatore VR e Fotografo",
      solution: "Usato 3DF Zephyr per la fotogrammetria e ottimizzate le mesh risultanti da milioni di poligoni per l'uso VR in Unity.",
      result: "Esposto a fiere culturali, portando la storia antica al grande pubblico."
    }
  },
  outOfHere: {
    title: "Out of Here",
    type: "Boardgame",
    description: "Un gioco di carte a tema esplorazione spaziale in cui i giocatori cercano di salvare l'umanità mentre la Terra collassa.",
    caseStudy: {
      challenge: "Distillare meccaniche spaziali complesse in un gioco di strategia di carte accessibile.",
      role: "Game Designer e Illustratore",
      solution: "Focus su un approccio di 'narrativa emergente' in cui le interazioni delle carte raccontano una storia di sopravvivenza.",
      result: "I playtest del prototipo hanno evidenziato buona rigiocabilità e coinvolgimento costante dei partecipanti."
    }
  },
  pinguini: {
    title: "Pinguini alla Deriva",
    type: "Boardgame",
    description: "Un board game browser-based a turni in cui i giocatori gestiscono colonie di pinguini su iceberg alla deriva, bilanciando movimento, sopravvivenza e controllo territoriale.",
    caseStudy: {
      challenge: "Creare un gioco di strategia a turni bilanciato che funzioni senza problemi nel browser con aggiornamenti in tempo reale.",
      role: "Lead Developer",
      solution: "Sviluppato un sistema di gestione dello stato personalizzato per gestire turni e logica di movimento del ghiaccio.",
      result: "Prototipo browser-based giocabile con sistemi strategici di movimento e interazioni ambientali dinamiche."
    }
  },
  wurmSlayer: {
    title: "Wurm Slayer",
    type: "Videogioco",
    description: "Un gioco di sopravvivenza frenetico dove il personaggio viene mangiato da un verme. I giocatori devono evitare o distruggere ostacoli nello stomaco.",
    caseStudy: {
      challenge: "Creare un ambiente ad alta pressione con generazione procedurale di ostacoli che si adatti a un loop di 1 minuto.",
      role: "Sviluppatore di gioco",
      solution: "Implementato un sistema di galleggiamento e gravità personalizzato per simulare l'interno di uno stomaco, con object pooling.",
      result: "Prototipo action ad alta intensità sviluppato per sperimentare sistemi di feedback e meccaniche survival."
    }
  },
  trafficSystem: {
    title: "Traffic System / City Gen",
    type: "Ricerca",
    description: "Una simulazione del traffico e della gestione semaforica in un centro città. Sistema di crescita algoritmica per ambienti urbani complessi.",
    caseStudy: {
      challenge: "Gestire migliaia di istanze di veicoli unici e logica semaforica complessa mantenendo prestazioni elevate.",
      role: "Architetto di sistema e Lead Developer",
      solution: "Implementata simulazione ad eventi discreti per i semafori e GPU instancing per il rendering dei veicoli.",
      result: "Prototipo di simulazione utilizzato come base tecnica per visualizzazioni e sperimentazioni sul traffico urbano."
    }
  }
};
