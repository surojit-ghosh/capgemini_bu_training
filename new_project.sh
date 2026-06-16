#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FOLDER_NAME="cap_$(date +%m)_$(date +%d)"

echo "Removing existing node_modules folders under: $SCRIPT_DIR"
find "$SCRIPT_DIR" -type d -name node_modules -prune -exec rm -rf {} +

echo "Creating folder: $FOLDER_NAME"
mkdir -p "$FOLDER_NAME"
cd "$FOLDER_NAME"

echo "Creating Vite React (JS) project: react-app"
npm create vite@latest react-app -- --template react --no-interactive
cd react-app

npm install
npm install tailwindcss @tailwindcss/vite

# Configure Vite plugin
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
EOF

# Add Tailwind import to CSS
echo '@import "tailwindcss";' > src/index.css

# Clean up boilerplate
rm -rf src/assets src/App.css
cat > src/App.jsx << 'EOF'
function App() {
  return <h1 className="text-3xl font-bold underline">Hello world</h1>
}

export default App
EOF

echo ""
echo "Done! Run cd $FOLDER_NAME/react-app && npm run dev"