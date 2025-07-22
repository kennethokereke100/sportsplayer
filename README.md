# Sports Player Lookup App

Search for athletes and view their status, sport, and position in real-time.

## 🚀 Tech Stack
- **React** (with [Vite](https://vitejs.dev)) for fast frontend development
- **TailwindCSS** for modern and responsive styling
- **TypeScript** for type safety
- **TheSportsDB API** for free sports player data

### 📸 UI Features

- Clean dropdown suggestions as you type
- Accurate result filtering (e.g. only shows "LeBron James" when typed fully)
- Responsive player cards
- Fully mobile and desktop friendly

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sports-player-lookup.git
cd sports-player-lookup
```
### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Your app will be live at http://localhost:5173 (or whatever Vite shows).

🎨 TailwindCSS Setup (already included)

If you're editing or extending the app, Tailwind is already configured with:

- tailwind.config.js

- postcss.config.js

- index.css with Tailwind's base, components, and utilities.

Make sure to import index.css in your main src/main.tsx file:

```bash
import './index.css';
```
### Tailwind should work out-of-the-box, no extra setup needed.

### ⚽ API Usage — TheSportsDB
This app uses TheSportsDB, a free and public sports API.

### No API key required for basic use:

- You can search players by name
- View basic data like sport, team, position, and status

### ⚠️ Avoid API errors (like CORS or rate limits)

- https://www.thesportsdb.com/documentation has usage limits on free accounts (1 request per second max is recommended)
- This project is optimized to only call the API on search, not on every keystroke
- If you experience CORS issues while hosting, consider adding a proxy server or deploying on trusted domains (like Vercel or Netlify)

### ✅ Next Steps

Once you're happy with the app:
- Push it to GitHub
