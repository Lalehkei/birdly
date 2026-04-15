# 🐦 Birdly

Birdly is a birdwatching web application that allows users to explore bird species, view recent sightings, and report their own observations.

---

## 🚀 Live Demo
https://birdly.vercel.app/

---

## 📌 Features

- 🔍 Search and explore bird species by name and category
- 🖼️ Responsive bird gallery with dynamic card rendering
- 🐦 Featured birds section on homepage
- 📡 Live recent sightings powered by eBird API
- 📝 Report bird sightings (stored in localStorage)
- ⚡ Single Page Application (SPA) navigation
- 📱 Fully responsive design for mobile, tablet, and desktop

---

## 🛠️ Technologies Used

- HTML5 (semantic structure)
- CSS3 (Flexbox, Grid, responsive design)
- JavaScript (ES6+)
- Vercel (deployment & serverless functions)
- eBird API (live bird data)

---

## 🧠 How It Works

- Bird data is stored locally in a JavaScript array and rendered dynamically.
- The Explore page uses real-time filtering based on user input.
- Recent sightings are fetched from the eBird API using a secure Vercel serverless function.
- The API key is stored securely using environment variables.
- Navigation between sections is handled using SPA techniques (show/hide views).

---

## ⚙️ Project Structure
---

## ⚠️ Challenges & Solutions

### 1. Secure API Key Handling
**Challenge:** Avoid exposing API key in frontend  
**Solution:** Used Vercel serverless function and environment variables

---

### 2. Dynamic Rendering Performance
**Challenge:** Efficiently render multiple bird cards  
**Solution:** Used `map()` and `innerHTML` update once instead of multiple DOM updates

---

### 3. Responsive Layout
**Challenge:** Ensure usability across devices  
**Solution:** Implemented CSS Grid and media queries for adaptive layout

---

### 4. Real-time Search Filtering
**Challenge:** Provide instant feedback while typing  
**Solution:** Used input event listener and dynamic filtering

---

## 📚 Future Improvements

- Add bird images from external APIs
- Add map integration for sightings
- Save user-reported sightings to backend
- Improve filtering with multiple criteria

---

## 👩‍💻 Author

Laleh Keivani