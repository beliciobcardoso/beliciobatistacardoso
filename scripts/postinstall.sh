#!/bin/bash

# Patch vinext glob import compatibility for Node.js < 22
# vinext 0.0.41 tries to use node:fs/promises glob which only exists in Node 22+
# This patch uses the glob package instead

VINEXT_FILE="node_modules/vinext/dist/routing/file-matcher.js"

if [ -f "$VINEXT_FILE" ]; then
  if grep -q "import { globIterate } from \"glob\"" "$VINEXT_FILE"; then
    echo "✓ vinext glob patch already applied"
  else
    echo "Patching vinext glob compatibility..."
    sed -i "s/import { glob } from \"node:fs\/promises\";/import { globIterate } from \"glob\";/" "$VINEXT_FILE"
    sed -i 's/for await (const file of glob(/for await (const file of globIterate(/' "$VINEXT_FILE"
    echo "✓ vinext glob patch applied"
  fi
fi
