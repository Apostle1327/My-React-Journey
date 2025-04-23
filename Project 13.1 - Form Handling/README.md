# 📌 User Management Application

This project is a simple user management system built using React. It includes functionalities for user registration, editing, deleting, and viewing user data. The data is persisted in the browser's localStorage for a seamless user experience.

## 🚀 Features

- **User Registration::**
  Users can register by filling out a detailed form, including fields like username, email, phone, hobbies, gender, and more. The form validates the input to ensure all required fields are filled correctly.

- **User Data Management::**

  - View all registered users in a tabular format.
  - Edit user details through a pre-filled form.
  - Delete users from the list.

- **Local Storage Integration:**
  All user data is stored in localStorage, ensuring persistence across browser sessions.

- **Form Validation:**
  Comprehensive validation ensures data integrity, including password strength, required fields, and valid formats.

- **Dynamic Interaction:**
  Toggle password visibility, dynamic hobby selection, and gender radio buttons enhance the user experience.

## 📂 Project Folder Structure

```jsx
├── node_modules/             // Installed dependencies
├── public/                   // Static public assets
├── src/
│   ├── Assets/               // Any static assets (fonts, stylesheets, etc.)
│   ├── Components/
│   │   ├── EntryForm.jsx     // Component for user registration & editing
│   │   └── ViewData.jsx      // Component for displaying & managing user list
│   ├── Images/               // Image files used in the app
│   ├── App.css               // Global CSS for the App
│   ├── App.jsx               // Main application component
│   ├── index.css             // Base styles
│   └── main.jsx              // Entry point that renders `<App />`
├── .gitignore                // Files & folders to ignore in Git
├── eslint.config.js          // ESLint rules & settings
├── index.html                // HTML template served by Vite
├── package-lock.json         // Exact versions of installed npm packages
├── package.json              // Project metadata & npm scripts
├── README.md                 // This documentation file
└── vite.config.js            // Vite build & dev-server configuration

```

## 🏗️ How to Use

1. **Clone the Repository:**

```bash
https://github.com/Apostle1327/Project-13.1---Form-Handling.git
```

2. **Navigate to the Project Directory:**

```bash
cd Project-13.1---Form-Handling
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

- **Register Users:**
  Fill out the registration form with all required details. Validations will guide the user in case of missing or incorrect input.

- **View User Data:**
  All registered users are displayed in a table. Each entry includes options to edit or delete the user.

- **Edit User Details:**
  Click the "Edit" button on any user entry to update their details using the same registration form.

- **Delete User:**
  Remove a user by clicking the "Delete" button in the user data table.

# 📷 Screenshots

<img width="330" alt="Form Handling - 1" src="./src/Images/Form Handling - 1.png">
<img width="330" alt="Form Handling - 2" src="./src/Images/Form Handling - 2.png">
<img width="330" alt="Form Handling - 3" src="./src/Images/Form Handling - 3.png">
<img width="330" alt="Form Handling - 4" src="./src/Images/Form Handling - 4.png">

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

This Project is Licensed under the MIT License.
