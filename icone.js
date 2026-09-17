/* ------------------------------------------------------------------
   Set di icone condiviso tra index.html e admin.html.
   Ogni voce è il contenuto interno di un <svg viewBox="0 0 24 24">
   disegnato con fill="none" stroke="currentColor": i marchi dei social
   che funzionano solo pieni portano fill/stroke espliciti sul path.
   ------------------------------------------------------------------ */
window.ICONE = {
  /* --- social --- */
  instagram: '<rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none"/>',
  threads:   '<circle cx="12" cy="12" r="3.9"/><path d="M15.9 12v1.4a2.6 2.6 0 0 0 5.2 0V12a9.1 9.1 0 1 0-3.6 7.2"/>',
  youtube:   '<rect x="2.3" y="5" width="19.4" height="14" rx="4.2"/><path d="M10.2 9.1 15.7 12l-5.5 2.9z" fill="currentColor" stroke="none"/>',
  tiktok:    '<path d="M13.9 3v11.3a3.35 3.35 0 1 1-2.7-3.29"/><path d="M13.9 3.2c.45 2.65 2.05 4.25 4.75 4.55"/>',
  facebook:  '<path d="M13.9 21.4v-8.3h2.75l.42-3.2H13.9V7.85c0-.92.26-1.55 1.58-1.55h1.69V3.44c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.12 1.5-4.12 4.24v2.35H7.82v3.2h2.76v8.3z" fill="currentColor" stroke="none"/>',
  x:         '<path d="M3 2.9h5.1l4.35 5.82L17.8 2.9h2.13l-6.3 7.2 7.37 10h-5.1l-4.72-6.32L5.4 20.1H3.26l6.72-7.68z" fill="currentColor" stroke="none"/>',
  whatsapp:  '<path d="M3.2 20.8l1.3-4.2a8.3 8.3 0 1 1 3.1 3z"/><path d="M9 9.1c.3 1 .9 1.9 1.6 2.6.7.7 1.6 1.3 2.6 1.6l.9-1.2 2 1c-.3 1.1-1.3 1.7-2.4 1.5a8 8 0 0 1-6-6c-.2-1.1.4-2.1 1.5-2.4l1 2z"/>',
  telegram:  '<path d="M21.3 3.6 2.9 10.5c-.85.32-.83 1.53.03 1.82l4.5 1.5 1.72 5.1c.27.8 1.3.99 1.83.33l2.26-2.82 4.5 3.3c.62.46 1.5.13 1.67-.62l3-13.9c.18-.82-.63-1.5-1.4-1.2z" fill="currentColor" stroke="none"/>',
  pinterest: '<circle cx="12" cy="12" r="9.2"/><path d="M9.4 21c-.5-1.6-.1-3.4.2-4.7l1-4.1"/><path d="M8.6 10.4c0-2.3 1.7-4.1 4-4.1 2.1 0 3.6 1.4 3.6 3.5 0 2.5-1.3 4.6-3.2 4.6-1 0-1.8-.9-1.5-1.9"/>',
  twitch:    '<path d="M4 3h16v11l-4 4h-3l-3 3H8v-3H4z"/><path d="M11 7.5V12M15.5 7.5V12"/>',
  discord:   '<path d="M8.4 6.2A15 15 0 0 1 12 5.8c1.3 0 2.5.14 3.6.4l1.2-1.6c2 .5 3.6 1.4 3.6 1.4 1.5 3 1.9 6 1.8 9-1.4 2-3.6 3.1-3.6 3.1l-1.2-1.9"/><path d="M8.4 6.2 7.2 4.6S5.6 5.5 4.1 8.5c-.1 3-.3 6 1.8 9 0 0 2.2-1.1 3.6-3.1"/><circle cx="9.4" cy="12.4" r="1.2"/><circle cx="14.6" cy="12.4" r="1.2"/>',

  /* --- LEGO & maker --- */
  mattoncino: '<rect x="3" y="8.2" width="18" height="11" rx="2.1"/><path d="M7.4 8.2V6.7a1.55 1.55 0 0 1 3.1 0v1.5M13.5 8.2V6.7a1.55 1.55 0 0 1 3.1 0v1.5"/>',
  idea:       '<path d="M9.3 18.2h5.4M10.4 21h3.2"/><path d="M12 3a6.2 6.2 0 0 0-3.75 11.14c.65.5 1.05 1.24 1.15 2.06h5.2c.1-.82.5-1.56 1.15-2.06A6.2 6.2 0 0 0 12 3z"/>',
  istruzioni: '<rect x="3.4" y="3.6" width="17.2" height="16.8" rx="2.6"/><path d="M8 8.4h8M8 12h8M8 15.6h5"/>',
  puzzle:     '<path d="M10.3 3.6h3.4v2.1a1.7 1.7 0 1 0 3.4 0V3.6h.6a2 2 0 0 1 2 2v3.1h-2.1a1.7 1.7 0 1 0 0 3.4h2.1v4.3a2 2 0 0 1-2 2h-4.3v-2.1a1.7 1.7 0 1 0-3.4 0v2.1H6.3a2 2 0 0 1-2-2V5.6a2 2 0 0 1 2-2z"/>',

  /* --- commercio & contatto --- */
  carrello:  '<circle cx="9.4" cy="20" r="1.4"/><circle cx="17.8" cy="20" r="1.4"/><path d="M2.6 3.7h2.2l2.35 11.2a1.6 1.6 0 0 0 1.57 1.27h8.9a1.6 1.6 0 0 0 1.57-1.27L20.9 7.6H6.1"/>',
  mail:      '<rect x="2.6" y="4.6" width="18.8" height="14.8" rx="3.1"/><path d="m4.4 7.7 6.9 4.78a1.35 1.35 0 0 0 1.54 0l6.9-4.78"/>',
  chat:      '<path d="M21 12.3a8.1 8.1 0 0 1-8.7 8.06 8.7 8.7 0 0 1-3.2-.78L3.4 21l1.45-5.6a8.1 8.1 0 1 1 16.15-3.1z"/>',
  euro:      '<circle cx="12" cy="12" r="9.2"/><path d="M15.9 8.6a4.4 4.4 0 0 0-6.9.9 6.1 6.1 0 0 0 0 5 4.4 4.4 0 0 0 6.9.9"/><path d="M6.9 10.8h6M6.9 13.4h6"/>',
  regalo:    '<rect x="3" y="8.8" width="18" height="11.6" rx="2"/><path d="M2.2 8.8h19.6M12 8.8v11.6"/><path d="M12 8.8S10.9 4 8.6 4a2.1 2.1 0 0 0 0 4.8M12 8.8S13.1 4 15.4 4a2.1 2.1 0 0 1 0 4.8"/>',

  /* --- generiche --- */
  globo:     '<circle cx="12" cy="12" r="9.2"/><path d="M2.8 12h18.4"/><path d="M12 2.8a13.6 13.6 0 0 1 0 18.4 13.6 13.6 0 0 1 0-18.4z"/>',
  link:      '<path d="M10.2 13.6a4.1 4.1 0 0 0 5.85 0l2.75-2.75a4.1 4.1 0 1 0-5.85-5.85l-1.6 1.6"/><path d="M13.8 10.4a4.1 4.1 0 0 0-5.85 0L5.2 13.15A4.1 4.1 0 1 0 11.05 19l1.6-1.6"/>',
  stella:    '<path d="m12 3.6 2.72 5.5 6.08.9-4.4 4.28 1.04 6.04L12 17.47l-5.44 2.85 1.04-6.04-4.4-4.28 6.08-.9z"/>',
  cuore:     '<path d="M12 20.4S3.6 15.6 3.6 9.9A4.6 4.6 0 0 1 12 7.3a4.6 4.6 0 0 1 8.4 2.6c0 5.7-8.4 10.5-8.4 10.5z"/>',
  play:      '<circle cx="12" cy="12" r="9.2"/><path d="m10.1 8.3 6 3.7-6 3.7z" fill="currentColor" stroke="none"/>',
  musica:    '<path d="M9.2 18V5.4l10-1.8v12.2"/><circle cx="6.6" cy="18.2" r="2.7"/><circle cx="16.6" cy="15.6" r="2.7"/>',
  camera:    '<rect x="2.6" y="6.6" width="18.8" height="14" rx="3.2"/><circle cx="12" cy="13.6" r="3.9"/><path d="M8.6 6.6 10 3.6h4l1.4 3"/>',
  documento: '<path d="M14 3.2H7.4a2.2 2.2 0 0 0-2.2 2.2v13.2a2.2 2.2 0 0 0 2.2 2.2h9.2a2.2 2.2 0 0 0 2.2-2.2V8.2z"/><path d="M14 3.2V8.2h4.8M8.8 13h6.4M8.8 16.6h4.2"/>',
  download:  '<path d="M12 3.4v11.8m0 0 4.4-4.4M12 15.2l-4.4-4.4"/><path d="M3.8 16.4v2.1a2.6 2.6 0 0 0 2.6 2.6h11.2a2.6 2.6 0 0 0 2.6-2.6v-2.1"/>',
  calendario:'<rect x="3.2" y="5.2" width="17.6" height="15.6" rx="3"/><path d="M8.2 2.8v4.4M15.8 2.8v4.4M3.2 10.2h17.6"/>',
  posizione: '<path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10.2" r="2.7"/>',
  utente:    '<circle cx="12" cy="8.2" r="4.1"/><path d="M4.4 20.6a7.9 7.9 0 0 1 15.2 0"/>',
  fuoco:     '<path d="M12 21.4c3.4 0 6.1-2.5 6.1-5.9 0-4.6-4.3-6.4-3.4-11.9-3 1.2-5.3 4.2-5.3 7 0 1.4-.7 2-1.5 2-.9 0-1.6-.8-1.6-2.3a9.4 9.4 0 0 0-.4 5.2c.5 3.3 3 5.9 6.1 5.9z"/>',
  bacchetta: '<path d="m4 20 11-11M16.5 3.2l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8zM7.2 3.4l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5zM19.4 14l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5z"/>',

  trascina:  '<circle cx="9" cy="6" r="1.45" fill="currentColor" stroke="none"/><circle cx="15" cy="6" r="1.45" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r="1.45" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.45" fill="currentColor" stroke="none"/><circle cx="9" cy="18" r="1.45" fill="currentColor" stroke="none"/><circle cx="15" cy="18" r="1.45" fill="currentColor" stroke="none"/>',

  matita:    '<path d="M4 20h4.2l10.4-10.4a2.1 2.1 0 0 0 0-3l-1.2-1.2a2.1 2.1 0 0 0-3 0L4 15.8z"/><path d="m14.6 6.4 3 3"/>',

  /* --- interfaccia (non selezionabili nell'editor) --- */
  freccia:   '<path d="m9.2 5.4 6.6 6.6-6.6 6.6"/>',
  sole:      '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.3M12 19.1v2.3M21.4 12h-2.3M4.9 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6 17 17M7 7 5.4 5.4"/>',
  luna:      '<path d="M20.4 13.6A8.4 8.4 0 0 1 10.4 3.6a8.9 8.9 0 1 0 10 10z"/>',
  condividi: '<path d="M12 3.4v12.2M8.2 7.2 12 3.4l3.8 3.8"/><path d="M5.2 13.4v5.2a2.4 2.4 0 0 0 2.4 2.4h8.8a2.4 2.4 0 0 0 2.4-2.4v-5.2"/>',
  spunta:    '<path d="m4.8 12.6 4.6 4.6 9.8-10.4"/>',
  verificato:'<path d="m12 2.6 2.4 1.85 3-.25 1 2.85 2.6 1.55-1.05 2.85 1.05 2.85-2.6 1.55-1 2.85-3-.25L12 21.4l-2.4-1.85-3 .25-1-2.85L3 15.4l1.05-2.85L3 9.7l2.6-1.55 1-2.85 3 .25z" fill="currentColor" stroke="none"/><path d="m8.7 12.2 2.3 2.3 4.3-4.6" stroke="var(--su-accento,#fff)" stroke-width="2.3"/>'
};

/* Nomi mostrati nel selettore icone dell'editor (ordine = ordine in griglia). */
window.ICONE_SCEGLIBILI = [
  'link','mattoncino','istruzioni','idea','puzzle','stella','fuoco','cuore','bacchetta',
  'instagram','threads','youtube','tiktok','facebook','x','whatsapp','telegram','pinterest','twitch','discord',
  'globo','carrello','euro','regalo','mail','chat','utente','documento','download',
  'play','musica','camera','calendario','posizione'
];
