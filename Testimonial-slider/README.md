<div align="center">

# 🌀 Anime Testimonials

**A sleek testimonial carousel — built to master React fundamentals.**

<br/>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)](https://tailwindcss.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)
[![Vite](https://img.shields.io/badge/Vite-1a1a2e?style=for-the-badge&logo=vite&logoColor=bd34fe)](https://vite.dev)

</div>

---

## ✦ Overview

A mini React project featuring fictional anime character testimonials — crafted as a focused exercise in component architecture, state management, and responsive UI design. Navigate through characters with Prev / Next arrows or jump to a random one instantly.

---

## ⚡ Features

- 🎴 &nbsp;Navigate testimonials with **Prev / Next** controls
- 🎲 &nbsp;**Anime** button — jump to a random character instantly
- 🔁 &nbsp;Circular navigation — wraps around at both ends
- 💜 &nbsp;Polished dark UI with smooth transitions

---

## 🖼️ Screenshots

| Testimonial Card |
|:---:|
| ![Anime Testimonials Preview](./src/assets/pics/gojo.png) |

| ![Screenshot 2](./src/assets/pics/naruto.png) |
|:---:|
| Random Character View |

---

## 🧠 React Concepts Practiced

### 1. `useState` Hook
The `index` state controls which testimonial is currently shown. Every button click updates the index and React re-renders the card automatically.
```jsx
const [index, setIndex] = useState(0)
```

---

### 2. Props Drilling
Data flows top-down: `App` passes `animeData` → `Testimonials`, which picks one item and passes it → `Card`. Each component only receives what it needs.
```jsx
// App → Testimonials
<Testimonials animeData={animeData} />

// Testimonials → Card
<Card animeData={animeData[index]} />
```

---

### 3. Functional State Updates (Prev State Pattern)
Instead of reading `index` directly, state is updated using a callback. This is the safe pattern to avoid stale closures.
```jsx
// Left arrow — wraps to end if at start
setIndex((prevIndex) =>
  prevIndex === 0 ? animeData.length - 1 : prevIndex - 1
)

// Right arrow — wraps to start if at end
setIndex((prevIndex) => (prevIndex + 1) % animeData.length)
```

---

### 4. Circular / Wrapping Navigation
Boundary conditions are handled with the modulo operator `%` and a ternary — the list loops infinitely in both directions.
```jsx
// Going right past the last item resets to 0
(prevIndex + 1) % animeData.length

// Going left past 0 jumps to the last item
prevIndex === 0 ? animeData.length - 1 : prevIndex - 1
```

---

### 5. Random Index Generation
The Anime button picks a random entry using `Math.floor` + `Math.random()` — a common pattern for shuffle/random features.
```jsx
const animeHandler = () => {
  const randomIndex = Math.floor(Math.random() * animeData.length)
  setIndex(randomIndex)
}
```

---

### 6. Component Decomposition
UI is cleanly split into three layers — each with a single responsibility.
```
App.jsx           → layout, imports data, renders Testimonials
Testimonials.jsx  → holds index state, navigation logic, renders Card
Card.jsx          → pure display component, destructures and shows one item
```

---

### 7. Destructuring Props
Card destructures the data object directly for clean, readable JSX — no `animeData.name`, `animeData.role` everywhere.
```jsx
const { id, name, role, image, text } = animeData
```

---

### 8. External Data File (Separation of Concerns)
All character data lives in `utils/data.js` and is imported where needed — keeping components clean and data easy to update.
```jsx
import animeData from './utils/data'
```

---

### 9. Third-party Icon Library (react-icons)
Icons from `react-icons` are used as regular React components — no manual SVG needed.
```jsx
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
```

---

### 10. Dynamic Positioning with Tailwind
The avatar image uses absolute positioning to break out of its card container — a CSS layout trick practiced via Tailwind utility classes.
```jsx
<div className="absolute top-[-7rem] z-[10] mx-auto">
```

---

## 📁 Project Structure

```
src/
  ├── components/
  │   ├── Card.jsx          // displays one character's testimonial
  │   └── Testimonials.jsx  // carousel logic + navigation buttons
  ├── utils/
  │   └── data.js           // all anime character data
  └── App.jsx               // root layout
```
---

<div align="center">
<sub>Built with focus. Powered by curiosity. ⚔️</sub>
</div>