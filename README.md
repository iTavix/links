# Link in bio — iTavix

Una pagina sola con tutti i tuoi link, da mettere nella bio di Instagram.
È un sito statico: nessun server, nessun abbonamento, nessun account da creare.

```
linkinbio/
├── index.html     la pagina pubblica (quella che vedono i follower)
├── admin.html     l'editor visuale — lo apri solo tu, dal tuo Mac
├── config.js      i tuoi dati: profilo, link, colori   ← l'unico file che cambia
├── icone.js       le 34 icone disponibili
├── avvia-editor.command   apre l'editor con un mini server locale (piano B)
└── assets/        logo e immagini
```

---

## 1. Modificare la pagina

Fai doppio clic su **`admin.html`**: si apre nel browser e da lì fai tutto col mouse.

> Se la pagina dovesse restare bianca (alcuni browser bloccano i file affiancati
> quando si apre direttamente da disco), fai invece doppio clic su
> **`avvia-editor.command`**: accende un mini server locale e apre l'editor da lì.
> La prima volta macOS chiede conferma: tasto destro → Apri → Apri.

- **Link** — aggiungi, riordina (trascina la maniglia a sinistra, o usa ↑ ↓),
  cambia icona, metti un link *in evidenza* o nascondilo senza cancellarlo.
- **Profilo & tema** — nome, bio, immagine, colore d'accento, tema chiaro/scuro.
- **Statistiche** — quali link vengono cliccati (vedi il punto 4).
- **Salva** — genera il nuovo `config.js`.

A destra (o sotto, se la finestra è stretta) c'è l'anteprima dal vivo: cambia mentre scrivi.
Il lavoro in corso resta salvato nel browser, quindi se chiudi per sbaglio lo ritrovi.

Quando hai finito: **Salva config.js** → il file va nei Download → sostituisci
il `config.js` dentro questa cartella con quello nuovo.

---

## 2. Pubblicare su GitHub Pages (senza toccare il terminale)

**La prima volta:**

1. Vai su **github.com**, in alto a destra **+** → **New repository**.
2. Nome: `links` — spunta **Public** — **Create repository**.
3. Nella pagina che si apre, clicca **uploading an existing file**.
4. Trascina dentro il contenuto della cartella `linkinbio`
   (`index.html`, `admin.html`, `config.js`, `icone.js` e la cartella `assets`)
   e premi **Commit changes**.
5. **Settings** → **Pages** → in *Source* scegli **Deploy from a branch**,
   ramo **main** e cartella **/ (root)** → **Save**.
6. Dopo circa un minuto la pagina è online su:
   **https://itavix.github.io/links/**

**Le volte dopo**, per aggiornare i link basta sostituire un file solo:
apri `config.js` su GitHub → icona della **matita** → incolla il contenuto
del nuovo file (o usa *Copia negli appunti* nell'editor) → **Commit changes**.
Un minuto ed è online.

> `admin.html` viene caricato anche online, ma non fa danni: non salva niente
> sul sito, genera solo il file da incollare. Se preferisci, non caricarlo.

---

## 3. Metterla nella bio di Instagram

Instagram → **Modifica profilo** → **Link** → **Aggiungi link esterno** →
incolla `https://itavix.github.io/links/` → **Fatto**.
L'anteprima con il logo, quella che compare mandando il link su WhatsApp o
Telegram, e' gia' configurata in `index.html` sull'indirizzo definitivo:
non devi toccare niente.
appare anche quando mandi il link su WhatsApp o Telegram.

---

## 4. Le statistiche, onestamente

Il conteggio dei click è scritto nella memoria del browser di **chi clicca**.
Quindi la scheda *Statistiche* ti mostra solo i click fatti **dal tuo** browser:
serve per controllare che tutto funzioni, non per sapere cosa fanno i follower.

Per i numeri veri di tutti i visitatori, che è gratis:

1. Crea una proprietà su **Google Analytics 4** (analytics.google.com).
2. Copia l'ID, che ha la forma `G-XXXXXXXXXX`.
3. Incollalo in *Profilo & tema* → **ID Google Analytics 4**, riesporta e ripubblica.

Da quel momento ogni click parte anche verso GA4 come evento `select_link`,
con il titolo del link: lì vedi quanti sono, da dove arrivano e quando.

In alternativa, se hai un tuo webhook, mettilo nel campo *Endpoint*: riceverà
un POST JSON a ogni click.

---

## 5. Note tecniche

- Nessuna libreria esterna: la pagina è un solo file HTML con CSS e JS scritti a mano,
  così si apre subito anche con la rete lenta del cellulare.
- Tema chiaro/scuro automatico, con pulsante per forzarlo; la scelta viene ricordata.
- Funziona da 320px in su; gli indirizzi vengono filtrati (niente `javascript:`)
  e ogni testo del config viene messo a schermo in modo sicuro.
- Rispetta *Riduci movimento* nelle impostazioni di accessibilità.

### Se un giorno vuoi usare `git` da terminale

Su questo Mac `git`, `python3` e gli altri strumenti Xcode sono bloccati finché
non accetti la licenza. Una volta sola, dal Terminale:

```bash
sudo xcodebuild -license
```

Non serve per niente di quanto scritto sopra: GitHub via browser basta e avanza.
