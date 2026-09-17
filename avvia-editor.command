#!/bin/bash
# Doppio clic su questo file: apre l'editor in un mini server locale.
# Serve solo se aprendo admin.html col doppio clic la pagina resta vuota
# (qualche browser blocca i file affiancati quando si apre da disco).
cd "$(dirname "$0")" || exit 1
PORTA=8777

if ! command -v ruby >/dev/null 2>&1; then
  echo "Ruby non disponibile: apro l'editor direttamente."
  open admin.html
  exit 0
fi

# Se la porta è già occupata, riuso quel server invece di aprirne un altro.
if ! nc -z 127.0.0.1 $PORTA 2>/dev/null; then
  ruby -run -e httpd . -p $PORTA --bind-address 127.0.0.1 >/dev/null 2>&1 &
  SERVER=$!
  trap 'kill $SERVER 2>/dev/null' EXIT
  sleep 1
fi

echo "──────────────────────────────────────────────"
echo " Editor aperto su http://127.0.0.1:$PORTA/admin.html"
echo " La pagina pubblica: http://127.0.0.1:$PORTA/"
echo ""
echo " Quando hai finito, chiudi questa finestra."
echo "──────────────────────────────────────────────"
open "http://127.0.0.1:$PORTA/admin.html"

[ -n "$SERVER" ] && wait $SERVER
