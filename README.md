# Link in bio — iTavix

Una pagina sola con tutti i tuoi link, da mettere nella bio di Instagram.

**Pagina pubblica:** https://itavix.github.io/links/
**Editor:** https://itavix.github.io/links/admin.html

```
linkinbio/
├── index.html     la pagina pubblica (quella che vedono i follower)
├── admin.html     l'editor: aggiungi link e pubblichi, anche dal telefono
├── config.js      i tuoi dati: profilo, link, colori
├── icone.js       le 34 icone disponibili
└── assets/        logo e immagini
```

---

## 1. Aggiungere o modificare i link

Apri **https://itavix.github.io/links/admin.html** da qualsiasi dispositivo,
telefono compreso. Modifichi e premi **Salva e pubblica**: dopo una trentina
di secondi la pagina pubblica è aggiornata. Nient'altro da fare.

- **Link** — aggiungi, riordina (trascina la maniglia a sei punti, o usa ↑ ↓),
  cambia icona, metti un link *in evidenza* o nascondilo senza cancellarlo.
- **Profilo & tema** — nome, bio, immagine, colore d'accento, tema chiaro/scuro.
- **Statistiche** — quali link vengono cliccati (vedi il punto 3).
- **Salva** — pubblica online.

Mentre modifichi, l'anteprima accanto (o sotto, su schermo stretto) si aggiorna
dal vivo. Il lavoro in corso resta salvato nel browser: se chiudi per sbaglio,
lo ritrovi.

### La prima volta: collegare il token

Perché l'editor possa scrivere da solo, serve un permesso di scrittura sul
repository. Si fa una volta sola, per dispositivo:

1. Apri https://github.com/settings/personal-access-tokens/new
2. **Repository access** → *Only select repositories* → scegli `links`
3. **Permissions** → *Repository permissions* → **Contents** → *Read and write*
4. **Generate token**, copialo
5. Incollalo nell'editor, scheda **Salva** → **Collega**

Il token resta nel browser di quel dispositivo e viene mandato solo a
`api.github.com`. È volutamente ristretto a questo solo repository: se te lo
rubassero, il danno massimo è una modifica a questa pagina. Puoi revocarlo
quando vuoi da https://github.com/settings/tokens, e da ogni dispositivo puoi
usare **Scollega token**.

> Se non vuoi collegare nessun token, la scheda *Salva* ha ancora
> **Scarica config.js**: il vecchio giro manuale resta disponibile.

---

## 2. Metterla nella bio di Instagram

Instagram → **Modifica profilo** → **Link** → **Aggiungi link esterno** →
incolla `https://itavix.github.io/links/` → **Fatto**.

L'anteprima con il logo, quella che compare mandando il link su WhatsApp o
Telegram, è già configurata: non devi toccare niente.

---

## 3. Le statistiche, onestamente

Il conteggio dei click è scritto nella memoria del browser di **chi clicca**.
Quindi la scheda *Statistiche* ti mostra solo i click fatti **dal tuo** browser:
serve per controllare che tutto funzioni, non per sapere cosa fanno i follower.

Per i numeri veri di tutti i visitatori, che è gratis:

1. Crea una proprietà su **Google Analytics 4** (analytics.google.com)
2. Copia l'ID, che ha la forma `G-XXXXXXXXXX`
3. Incollalo in *Profilo & tema* → **ID Google Analytics 4**, poi pubblica

Da quel momento ogni click parte anche verso GA4 come evento `select_link`,
con il titolo del link. In alternativa, se hai un tuo webhook, mettilo nel
campo *Endpoint*: riceverà un POST JSON a ogni click.

---

## 4. Note tecniche

- Nessuna libreria esterna: la pagina pubblica è un solo file HTML con CSS e JS
  scritti a mano, così si apre subito anche con la rete del cellulare.
- Tema chiaro/scuro automatico, con pulsante per forzarlo; la scelta resta ricordata.
- Funziona da 320px in su; gli indirizzi vengono filtrati (niente `javascript:`)
  e ogni testo del config viene messo a schermo in modo sicuro.
- Rispetta *Riduci movimento* nelle impostazioni di accessibilità.
- L'editor salva scrivendo `config.js` via API GitHub (endpoint *Contents*),
  con controllo dello SHA: se qualcuno ha pubblicato nel frattempo da un altro
  dispositivo, chiede conferma prima di sovrascrivere.

### Sviluppo in locale

`git` di sistema è bloccato dalla licenza Xcode non accettata: usa il binario
reale in `/Library/Developer/CommandLineTools/usr/bin/git`. Per un server
locale, `avvia-editor.command` oppure:

```bash
ruby -run -e httpd . -p 8765 --bind-address 127.0.0.1
```
