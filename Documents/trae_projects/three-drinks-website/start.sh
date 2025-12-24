#!/bin/bash

echo "🚀 Starting your Personal Website..."

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed or not in your PATH."
    echo "👉 Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node -v)"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies (this might take a minute)..."
    npm install
else
    echo "✅ Dependencies already installed."
fi

echo "🌟 Starting development server..."
echo "👉 Once started, open http://localhost:3000 in your browser."
echo "-------------------------------------------------------"

npm run dev
