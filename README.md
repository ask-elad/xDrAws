# 🖌️ Excelidraw – Collaborative Whiteboarding Made Simple

Excelidraw is a real-time collaborative whiteboarding tool designed for teams, students, and creators. Draw, collaborate, and share clean diagrams and sketches without needing to sign up. Built with a powerful canvas and intuitive UI, it's an open-source alternative to Excalidraw.

---

## 🌟 Demo Screenshots

### 🚀 Landing Page

![Landing Page](./screenshots/Screenshot%20from%202025-07-25%2016-35-30.png)

### ✏️ Drawing Canvas

![Drawing Canvas](./screenshots/Screenshot%20from%202025-07-25%2016-35-41.png)

---

## 🔧 Features

- ✅ **Real-time Collaboration** – Share your board instantly with a link and collaborate live.
- 🧑‍🤝‍🧑 **Multiplayer Editing** – Multiple users can edit the same canvas simultaneously.
- ✨ **Smart Drawing** – Detects shapes and assists with clean sketching.
- 🖤 **Dark Mode Canvas** – Focused UI with minimal distractions.
- 🚫 **No Sign-Up Required** – Start drawing right away.

---

## ⚙️ Getting Started (Local Setup)

Follow these steps to run the app locally.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/excelidraw.git
cd excelidraw
```
###2️⃣ Install dependencies from the root folder
Make sure you have pnpm installed globally.
```bash
pnpm install 
```
###3️⃣ Set up your database
Go to packages/db and create a .env file:
```bash
DATABASE_URL=your_database_url_here
```
###4️⃣ Generate Prisma client
```bash
cd packages/db/prisma
npx prisma generate
```
###5️⃣ Start the development server
Back at the root folder:
```bash
pnpm run dev
```

### 📁 Tech Stack

- **Frontend:** React + Tailwind CSS  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL (via Prisma ORM)  
- **Monorepo:** Managed using PNPM Workspaces  
- **Real-time:** WebSockets / Multiplayer Sync

