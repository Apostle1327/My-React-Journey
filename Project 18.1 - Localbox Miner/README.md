# 📌 Dynamic Web Application

This project is a collection of interactive React components bundled into a single dashboard. It demonstrates dynamic UI patterns such as tabbed navigation, theming, real‑time updates, and CRUD operations—all built with React hooks (useState, useEffect, useRef) and styled using Bootstrap.

## 🚀 Features

- **Tabbed Navigation:**

  Navigate between multiple views—Home, Clock, Counter, Fruit List, To‑do List, and User Profiles—via a sticky header. Active tabs are highlighted for clarity.

- **Theme Toggle:**

  Switch between light and dark modes globally. The toggle button is fixed to the bottom‑right corner and updates backgrounds, text colors, and cards across all components.

- **Real‑time Clock:**

  Displays the current time (HH:MM:SS AM/PM) and date (weekday, month, day, year), updating every second. Shows a contextual greeting (Good Morning/Afternoon/Evening/Night).

- **Counter with Auto‑Increment:**

  A customizable counter that you can increment or decrement by a user‑defined value. Includes “Start/Stop Auto” to automatically adjust the count every second and a reset button.

- **Dynamic Fruit List:**
  Manage a list of fruits with add, edit (with confirmation), and delete operations. Displays a color swatch, name, and quantity in a responsive table.

- **To‑do List:**
  Add tasks (with duplicate‑check), mark them as completed or undo, and delete them. Inline keyboard support lets you press Enter to add a task.

- **User Profiles Management:**
  View a table of user profiles, edit any profile via a pre‑filled form (with confirmation checkbox), and cancel or save changes.

- **Responsive & Accessible:**
  All components adapt to viewport size (vh-100, flex utilities) and include semantic elements and ARIA‑friendly interactions.

- **Local Storage Integration:**
  All user data is stored in localStorage, ensuring persistence across browser sessions.

## 📂 Project Folder Structure

```jsx
├── node_modules/                   // Installed dependencies
├── public/                         // Static public assets (e.g., index.html, favicon)
├── src/
│   ├── Assets/                     // Any static assets (fonts, extra styles, etc.)
│   ├── Components/                 // Reusable React components
│   │   ├── Clock.jsx               // Real‑time clock with greeting (updates every second)
│   │   ├── Counter.jsx             // Customizable counter with manual & auto‑increment
│   │   ├── FruitList.jsx           // CRUD manager for a list of fruits (add, edit, delete)
│   │   ├── Header.jsx              // Sticky navigation header with tab buttons
│   │   ├── Home.jsx                // Landing page / welcome card explaining the demo
│   │   ├── MainPage.jsx            // Root component: handles theme & active tab routing
│   │   ├── ThemeToggler.jsx        // Floating button to switch between light/dark themes
│   │   ├── ToDo.jsx                // To‑do list manager (add, complete, delete tasks)
│   │   └── UserProfile.jsx         // User profiles table with edit & confirm functionality
│   ├── Images/                     // Image assets used in the app
│   ├── App.css                     // Global styles for the app
│   ├── App.jsx                     // Main application wrapper (renders `<MainPage />`)
│   ├── index.css                   // Base CSS resets & utilities
│   └── main.jsx                    // React DOM entry point
├── .gitignore                      // Files & folders to ignore in Git
├── eslint.config.js                // ESLint configuration
├── index.html                      // HTML template served by the development server
├── package-lock.json               // Exact versions of installed npm packages
├── package.json                    // Project metadata & npm scripts
├── README.md                       // Project documentation (this file)
└── vite.config.js                  // Vite build & dev‑server configuration

```

## 🏗️ How to Use

1. **Clone the Repository:**

```bash
https://github.com/Apostle1327/Project-18.1---Localbox-Miner.git
```

2. **Navigate to the Project Directory:**

```bash
cd Project-18.1---Localbox-Miner
```

3. **Install Dependencies:**
   Install the required Dependencies using this command

```bash
  npm install
```

4. **Run the Application:**
   Start the development server

```bash
  npm run dev
```

5. **Open in Browser:**
   Navigate to Localhost url in your web browser to view the application.

## 👨🏼‍💻 Usage

- **Switch Tabs:**
  Click any tab in the header to load that component’s view.

- **Toggle Theme:**
  Click the circular button at the bottom‑right to switch between light (🌙) and dark (🌞) modes.

- **Real‑time Clock:**
  Navigate to “Clock” to see the live time, date, and greeting.

- **Counter:**
  In “Counter,” adjust the increment amount, then use the “+” or “–” buttons (or start the auto increment) to change the count. Reset returns to zero.

- **Manage Fruits:**
  Under “Fruit List,” fill out the form to add a new fruit. Click “Edit” to modify and check “Confirm Changes” before saving. “Delete” removes an entry.

- **To‑do List:**
  Enter a task in the input field and press “Add” or Enter. Mark tasks done, undo, or delete as needed.

- **User Profiles:**
  View profiles in a table. Click “Edit” to update name, email, or designation; check “Confirm Changes” to save or “Cancel” to abort.

# 📷 Screenshots

<img width="330" alt="Localbox Miner - 1" src="./src/Images/Localbox Miner - 01.png">
<img width="330" alt="Localbox Miner - 2" src="./src/Images/Localbox Miner - 02.png">
<img width="330" alt="Localbox Miner - 3" src="./src/Images/Localbox Miner - 03.png">
<img width="330" alt="Localbox Miner - 4" src="./src/Images/Localbox Miner - 04.png">
<img width="330" alt="Localbox Miner - 5" src="./src/Images/Localbox Miner - 05.png">
<img width="330" alt="Localbox Miner - 6" src="./src/Images/Localbox Miner - 06.png">
<img width="330" alt="Localbox Miner - 7" src="./src/Images/Localbox Miner - 07.png">
<img width="330" alt="Localbox Miner - 8" src="./src/Images/Localbox Miner - 08.png">
<img width="330" alt="Localbox Miner - 9" src="./src/Images/Localbox Miner - 09.png">
<img width="330" alt="Localbox Miner - 10" src="./src/Images/Localbox Miner - 10.png">
<img width="330" alt="Localbox Miner - 11" src="./src/Images/Localbox Miner - 11.png">
<img width="330" alt="Localbox Miner - 12" src="./src/Images/Localbox Miner - 12.png">

## 🛠️ Technologies Used

- **HTML:**
  To Structure the App Layout.
- **CSS:**
  To Style & Enhance the user Interface.
- **Node.js**
  To run the development environment and manage project dependencies via npm or yarn.
- **JavaScript LocalStorage:**
  In this app, localStorage is used to save the cart data in the browser, allowing the cart to persist even after the page is reloaded. This ensures that users' selections are maintained across sessions.
- **React + Vite + JSX (JavaScript & XML):**
  React + Vite + JSX is a modern stack for building fast web apps. React provides reusable UI components, Vite offers fast development and optimized builds, and JSX allows writing HTML-like code in JavaScript for seamless UI creation.
- **React Hooks (`useState`, `useEffect`):**
  - `useState` for managing component‑level state (e.g., cart items, quantities).
  - `useEffect` for handling side effects such as reading from or writing to localStorage, fetching data, or subscribing/unsubscribing to events.

## 📜 License

This project is licensed under the MIT License.
Feel free to fork, modify, and distribute!
