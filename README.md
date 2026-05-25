# Harold Jirro I. Madrona — Next.js Portfolio

Black & white + red accent | Next.js 14 | Tailwind CSS | Framer Motion

---

## 🚀 STEP-BY-STEP SETUP & DEPLOYMENT GUIDE

### STEP 1 — Install Node.js
Download and install Node.js from https://nodejs.org (choose LTS version).
Verify it works by opening a terminal and typing:
```
node -v
npm -v
```

---

### STEP 2 — Install Project Dependencies
Unzip this project, open a terminal inside the folder, then run:
```
npm install
```
This downloads all required packages. Wait until it finishes.

---

### STEP 3 — Add Your Photo
Place your photo file inside the `public/` folder.
Name it exactly: `profile.jpg`
(If your file is .png, rename it or update the src in Hero.jsx)

---

### STEP 4 — Add Your CV/Resume
Place your PDF resume inside the `public/` folder.
Name it exactly: `Harold_Jirro_Madrona_CV.pdf`

---

### STEP 5 — Connect Formspree (Contact Form)
1. Go to https://formspree.io → Sign up free
2. Click "New Form" → name it "Portfolio Contact"
3. Copy the endpoint URL (looks like: https://formspree.io/f/abcd1234)
4. Open `components/sections/Contact.jsx`
5. Replace `YOUR_FORM_ID` with your actual ID on line 9

---

### STEP 6 — Update Social Links
Open `lib/data.js` and update the `social` section with your real links:
```js
social: {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
  facebook: 'https://facebook.com/YOUR_USERNAME',
},
```

---

### STEP 7 — Run Locally
```
npm run dev
```
Open your browser and go to: http://localhost:3000

---

### STEP 8 — Set Up Git & GitHub

**Install Git** from https://git-scm.com if you haven't already.

Open terminal in your project folder and run these commands one by one:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

**Create a GitHub repository:**
1. Go to https://github.com → Sign in
2. Click the "+" icon → "New repository"
3. Name it: `harold-portfolio` (or anything you like)
4. Set it to Public
5. Do NOT check "Initialize with README"
6. Click "Create repository"

**Connect and push:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/harold-portfolio.git
git branch -M main
git push -u origin main
```

---

### STEP 9 — Deploy on Vercel (Free)

1. Go to https://vercel.com → Sign up with your GitHub account
2. Click "New Project"
3. Import your `harold-portfolio` repository
4. Vercel auto-detects Next.js — just click **Deploy**
5. Wait ~2 minutes — your site is live! 🎉
6. Vercel gives you a URL like: `harold-portfolio.vercel.app`

---

### STEP 10 — Update Your Site After Changes

After making any changes to your code:
```bash
git add .
git commit -m "Update portfolio content"
git push
```
Vercel automatically re-deploys within 1-2 minutes!

---

## 📁 Folder Structure

```
harold-nextjs-portfolio/
├── app/
│   ├── layout.jsx        ← SEO metadata, fonts, global structure
│   └── page.jsx          ← Main page, assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx    ← Navigation with dark mode toggle
│   │   └── Footer.jsx    ← Footer with social links
│   ├── sections/
│   │   ├── Hero.jsx      ← Landing section with typewriter
│   │   ├── About.jsx     ← About me + job roles grid
│   │   ├── Stats.jsx     ← Animated counters (red background)
│   │   ├── Skills.jsx    ← Skills by category
│   │   ├── Experience.jsx← Work history timeline
│   │   ├── Projects.jsx  ← Project gallery with modals
│   │   ├── Education.jsx ← Degrees and activities
│   │   ├── Certifications.jsx ← Credentials grid
│   │   └── Contact.jsx   ← Contact form + social links
│   └── ui/
│       ├── Loader.jsx    ← Splash screen animation
│       ├── CustomCursor.jsx ← Red dot cursor
│       └── BackToTop.jsx ← Scroll-to-top button
├── lib/
│   └── data.js           ← ⭐ ALL CONTENT LIVES HERE — edit this!
├── public/
│   ├── profile.jpg       ← 👉 Add your photo here
│   └── Harold_Jirro_Madrona_CV.pdf ← 👉 Add your CV here
├── styles/
│   └── globals.css       ← Design tokens, dark mode, animations
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## ✏️ How to Update Content

**All website content is in ONE file: `lib/data.js`**

- Change your name, bio, email → edit `personal`
- Add/remove skills → edit `skills` array
- Add work experience → edit `experience` array
- Add projects → edit `projects` array
- Add certifications → edit `certifications` array
- Change stats numbers → edit `stats` array

---

## 💡 Recommended Future Upgrades

- Add a **Blog section** using Next.js MDX
- Connect a **CMS** (like Sanity or Contentful) for easy content updates
- Add **Google Analytics** to track visitors
- Set up a **custom domain** (e.g. haroldmadrona.com) via Vercel
- Add **i18n** (Filipino/English language toggle)
- Upload and showcase **actual design works** in the Projects section
