#!/bin/bash
# Doppio clic per pubblicare la pagina su GitHub.
# Prima deve esistere il repository VUOTO github.com/iTavix/links
cd "$(dirname "$0")" || exit 1

# Su questo Mac /usr/bin/git e' bloccato dalla licenza Xcode: usiamo il binario vero.
GIT=/Library/Developer/CommandLineTools/usr/bin/git
[ -x "$GIT" ] || GIT=$(command -v git)

echo "──────────────────────────────────────────────────────"
echo " Pubblicazione su github.com/iTavix/links"
echo ""
echo " Se git chiede le credenziali:"
echo "   Username: iTavix"
echo "   Password: NON la password dell'account, ma un token"
echo "             (github.com/settings/tokens/new, spunta 'repo')"
echo " macOS lo salva nel portachiavi: te lo chiede una volta sola."
echo "──────────────────────────────────────────────────────"
echo ""

"$GIT" push -u origin main || {
  echo ""
  echo "❌ Push non riuscito. Le cause tipiche:"
  echo "   • il repository github.com/iTavix/links non esiste ancora"
  echo "   • oppure non e' vuoto (non deve avere README ne' licenza)"
  echo "   • oppure il token non ha il permesso 'repo'"
  echo ""
  read -r -p "Premi Invio per chiudere."
  exit 1
}

echo ""
echo "✅ Fatto. Ora attiva GitHub Pages:"
echo "   github.com/iTavix/links/settings/pages"
echo "   Source: Deploy from a branch → main → / (root) → Save"
echo ""
echo "   Fra un minuto la pagina sara' su:"
echo "   https://itavix.github.io/links/"
echo ""
read -r -p "Premi Invio per chiudere."
