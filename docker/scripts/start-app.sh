#!/bin/sh
set -e

echo "[login_next_auth] Inicializando aplicacao..."

if [ -f "server.js" ]; then
  exec node server.js
else
  exec npm run start
fi
