# 📌 React Authentication App

A demonstration of user authentication flow built with React, React Router v6, React Bootstrap, and Vite. It features a full sign-up + login experience, protected routes, form validation, and persistent session state via LocalStorage.

## 🚀 Features

- **User Sign-Up:**

  Validates required fields (name, username, email, DOB, phone, hobbies, gender, address, city, password & confirm password), shows inline errors, and prevents duplicate email/username.

- **User Login:**

  Authenticates users against stored credentials in LocalStorage and handles invalid-credentials errors.

- **Protected Home Page:**

Only accessible after login; displays a welcome message and a logout button.

- **Persistent Authentication:**

  Stores the “currentUser” in LocalStorage so page reloads keep you logged in.

- **Form Validation:**
  Centralized in AuthContext with regex checks for email, phone, and strong password requirements.

- **404 Page:**
  Catches all unmatched routes and displays a friendly “Page Not Found” screen.

## 📂 Project Folder Structure

```jsx
├── node_modules/
├── public/
│   └── index.html                 // Static HTML template
├── src/
│   ├── Assets/                    // Static assets (images, fonts, etc.)
│   ├── Components/                // React component files
│   │   ├── HomePage.jsx           // Protected dashboard
│   │   ├── LogIn.jsx              // Login form
│   │   ├── Missing.jsx            // 404 fallback
│   │   └── SignUp.jsx             // Registration form
│   ├── Context/
│   │   └── AuthContext.jsx        // Auth provider & validation logic
│   ├── App.css                    // Global styles
│   ├── App.jsx                    // Router + Context setup
│   ├── index.css                  // Base CSS resets & utilities
│   └── main.jsx                   // ReactDOM entry point
├── .gitignore                     // Git ignore rules
├── eslint.config.js               // ESLint configuration
├── index.html                     // Entry HTML (mirrored under `/public`)
├── package-lock.json              // Exact dependency versions
├── package.json                   // Project metadata & scripts
├── README.md                      // Project documentation
└── vite.config.js                 // Vite config (dev server & build)

```

## 🏗️ How to Use

1. **Clone the Repository:**

```bash
https://github.com/Apostle1327/My-React-Journey/tree/master/Project%2020.1%20-%20Navigator
```

2. **Navigate to the Project Directory:**

```bash
cd Project 20.1 - Navigator
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

- **Sign Up:**
  Complete all fields on the Sign-Up page. Inline validation errors will guide you. On success, you’ll be redirected to Home.

- **Login:**
  Enter your registered email and password. On success, you’ll be taken to the Home page.

- **Home Page:**
  View a personalized welcome message and click Logout to end your session.

- **404 Page:**
  Try any undefined URL (e.g., /foo) to see the “404 – Page Not Found” screen.

# 📷 Screenshots

<img width="330" alt="Navigator - 1" src="./src/Images/Navigator - 01.png">
<img width="330" alt="Navigator - 2" src="./src/Images/Navigator - 02.png">
<img width="330" alt="Navigator - 3" src="./src/Images/Navigator - 03.png">
<img width="330" alt="Navigator - 4" src="./src/Images/Navigator - 04.png">
<img width="330" alt="Navigator - 5" src="./src/Images/Navigator - 05.png">
<img width="330" alt="Navigator - 6" src="./src/Images/Navigator - 06.png">
<img width="330" alt="Navigator - 7" src="./src/Images/Navigator - 07.png">
<img width="330" alt="Navigator - 8" src="./src/Images/Navigator - 08.png">

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
- **React Bootstrap:**
  - Supplies ready-made form controls, layout utilities, and responsive styling for a consistent, mobile-friendly UI.
- **React Router v6:**
  - Implements client-side routing, defining routes for signing up, logging in, the protected home page, and a catch-all 404 page.

## 📜 License

This project is licensed under the MIT License.
Feel free to fork, modify, and distribute!
