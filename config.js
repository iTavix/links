/* ==================================================================
   CONFIG — l'unico file da toccare per cambiare la pagina.
   Puoi editarlo a mano, ma è molto più comodo aprire admin.html:
   sistemi tutto col mouse e riesporti questo file già pronto.
   ================================================================== */
window.CONFIG = {

  profilo: {
    nome: 'iTavix',
    handle: '@itavix_bricks',
    bio: 'Daily LEGO® news & MOC dal mondo dei mattoncini. AFOL, designer su Rebrickable e creator di progetti LEGO Ideas.',
    avatar: 'assets/logo.png',
    adattaAvatar: 'contain',   // 'cover' per una foto, 'contain' per un logo
    verificato: true
  },

  tema: {
    accento: '#C7391F',        // rosso mattoncino, preso dal logo
    modo: 'auto',              // 'auto' segue il telefono | 'chiaro' | 'scuro'
    sfondo: 'aurora',          // 'aurora' | 'sfumatura' | 'pulito'
    mostraSelettoreTema: true
  },

  // Riga di icone tonde sotto la bio.
  social: [
    { icona: 'instagram', url: 'https://www.instagram.com/itavix_bricks/', etichetta: 'Instagram' },
    { icona: 'threads',   url: 'https://www.threads.net/@itavix_bricks',   etichetta: 'Threads'   },
    { icona: 'mattoncino',url: 'https://rebrickable.com/users/iTavix/',    etichetta: 'Rebrickable' }
  ],

  // I pulsanti veri e propri. attivo:false = resta qui ma non si vede.
  link: [
    {
      id: 'rebrickable',
      titolo: 'Le istruzioni dei miei MOC',
      sottotitolo: 'Wall-E & Eve, add-on Rivendell e altro su Rebrickable',
      url: 'https://rebrickable.com/users/iTavix/mocs/',
      icona: 'istruzioni',
      evidenziato: true,
      badge: '',
      attivo: true
    },
    {
      id: 'instagram',
      titolo: 'Instagram',
      sottotitolo: 'News, leak e MOC ogni giorno',
      url: 'https://www.instagram.com/itavix_bricks/',
      icona: 'instagram',
      evidenziato: false,
      badge: '',
      attivo: true
    },
    {
      id: 'threads',
      titolo: 'Threads',
      sottotitolo: 'Stesso handle, formato chiacchierato',
      url: 'https://www.threads.net/@itavix_bricks',
      icona: 'threads',
      evidenziato: false,
      badge: '',
      attivo: true
    },
    {
      id: 'ideas',
      titolo: 'I miei progetti su LEGO Ideas',
      sottotitolo: 'Vota Future Boy Conan e Red Barn Winter Tree Shop',
      url: '',                 // ← incolla qui il link al tuo profilo LEGO Ideas
      icona: 'idea',
      evidenziato: false,
      badge: 'VOTA',
      attivo: false
    },
    {
      id: 'sito',
      titolo: 'itavix.it — la galleria',
      sottotitolo: 'Tutti i post e i MOC in un posto solo',
      url: '',                 // ← incolla qui l'indirizzo del tuo sito
      icona: 'globo',
      evidenziato: false,
      badge: '',
      attivo: false
    },
    {
      id: 'collabo',
      titolo: 'Collaborazioni & contatti',
      sottotitolo: 'Per brand, shop e altri creator',
      url: '',                 // ← es. mailto:tua@mail.it
      icona: 'mail',
      evidenziato: false,
      badge: '',
      attivo: false
    }
  ],

  // Conteggio click. Il contatore locale è sempre attivo (vedi admin.html →
  // Statistiche) e vale solo per il browser in cui si clicca: per i numeri
  // veri di tutti i visitatori serve GA4 o un endpoint tuo.
  analytics: {
    ga4: '',                   // es. 'G-XXXXXXXXXX'
    endpoint: ''               // es. un webhook che riceve POST JSON
  },

  footer: {
    testo: '© iTavix — LEGO® è un marchio di LEGO Group, che non sponsorizza questo sito.',
    mostraCondividi: true
  }
};
