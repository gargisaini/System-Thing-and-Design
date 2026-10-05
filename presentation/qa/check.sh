#!/bin/bash
# qa/check.sh: headless-render the deck in QA mode and print the report. Exit 1 on FAIL.
cd "$(dirname "$0")/.."
URL="file:///$(pwd -W | sed 's/ /%20/g')/index.html#qa"
OUT=$("/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --window-size=1920,1080 --virtual-time-budget=8000 --dump-dom "$URL" 2>/dev/null \
  | sed -n '/<pre id="qa-report">/,/<\/pre>/p')
echo "$OUT"
[ -n "$OUT" ] && ! echo "$OUT" | grep -q FAIL
