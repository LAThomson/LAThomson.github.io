#!/usr/bin/env bash
#
# Preview the site locally before pushing to GitHub.
#
# Usage:
#   ./_dev/serve.sh          # serve on http://localhost:4000
#   ./_dev/serve.sh 4001     # serve on a different port (if 4000 is busy)
#
# Works from any directory — it locates the site root itself.
#
# Leave it running while you edit — the site rebuilds and the browser tab
# refreshes itself every time you save a file. Stop with Ctrl-C.

set -euo pipefail

# The site root is the parent of _dev/, wherever this script was called from.
cd "$(dirname "$0")/.."

PORT="${1:-4000}"

# --host 0.0.0.0: the site runs inside the dev container, so it has to listen on
#   all interfaces for VS Code to forward the port out to the host browser.
# --livereload: auto-refreshes the open browser tab on every rebuild.
# --drafts/--future: show anything in _drafts and any post dated in the future,
#   so you can preview work-in-progress that GitHub Pages won't publish yet.
exec jekyll serve \
  --host 0.0.0.0 \
  --port "$PORT" \
  --livereload \
  --drafts \
  --future
