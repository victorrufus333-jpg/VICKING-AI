
# ⚔️ VICKING AI App

A full-stack AI chatbot powered by OpenAI, built with React (Vite + Tailwind) frontend and Express backend.

## 🚀 Deployment

### Frontend (Vercel)
1. Go to [Vercel](https://vercel.com/).
2. Import the `client` folder.
3. Add env var: `VITE_API_URL=https://your-backend.onrender.com`
4. Deploy → get your live site.

### Backend (Render)
1. Go to [Render](https://render.com/).
2. Import the `server` folder.
3. Add env var: `OPENAI_API_KEY=your_openai_key`
4. Deploy → get your backend API link.

## 🛠️ Development
- Frontend: `cd client && npm install && npm run dev`
- Backend: `cd server && npm install && npm start`


## 📤 GitHub Setup
1. Extract this project folder.
2. Open terminal in the project root and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for VICKING AI"
   git branch -M main
   git remote add origin https://github.com/your-username/vicking-ai.git
   git push -u origin main
   ```
3. Then connect to Vercel (frontend) and Render (backend) for deployment.
