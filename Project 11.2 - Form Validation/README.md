# 📌 Project 11.2 - Form Validation

This project demonstrates a simple user authentication flow using React and Vite. It includes a login and sign-up system, where user data is persisted in the browser's localStorage. The authentication flow is managed via prop drilling across three main components: Login, SignUp, and ToggleController.

---

## 🚀 Features

- **User Authentication:**
  Provides a login interface that validates input and authenticates against either passed credentials or stored data in localStorage.

- **User Registration:**
  Includes a sign-up interface where new users can register. It validates that all fields are filled, passwords match, and then saves the user data to localStorage.

- **Toggle Between Form:**
  The `ToggleController` component switches between the Login and SignUp views based on the user's interaction.

- **Prop Drilling:**
  Uses prop drilling to pass down the `onSubmit` function from the parent `ToggleController` to child components (Login and SignUp).

- **Local Storage Integration:**
  User data is stored in localStorage so that login status persists on page refresh. Logging out clears this stored data.

---

## 📂 Project Folder Structure

```jsx
├── src/
│   ├── components/
│   │   ├── Login.jsx            // Component for user login.
│   │   ├── SignUp.jsx           // Component for user registration.
│   │   └── ToggleController.jsx // Main component that toggles between Login and SignUp.
│   ├── App.jsx                  // Main application component.
│   └── main.jsx                 // Entry point of the application that renders the App component.
├── public/
│   └── index.html               // HTML template used by Vite to serve the React app.
├── eslint.config.js             // ESLint configuration file for enforcing code quality and consistency.
├── vite.config.js               // Vite configuration file for building and serving the project.
├── package.json                 // Contains project metadata and dependencies.
└── README.md                    // Project documentation file.

```

---

## 🏗️ How to Use

1. **Clone the Repository:**

```bash
  git clone https://github.com/Apostle1327/Project-11.2---Form-Validation.git
```

2. **Navigate to the Project Directory:**

```bash
  cd Project-11.2---Form-Validation
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

---

## 👨🏼‍💻 Usage

- **Login:**
  Users can enter their email and password to log in. If credentials match those stored in localStorage or are provided as props, a welcome message is displayed.

- **SignUp:**
  New users can register by providing their first name, last name, email, date of birth, and password. The form validates that no field is empty and that the password matches the confirm password field. Upon successful registration, the data is saved to localStorage, and the user is logged in automatically.

- **Toggle Between Forms:**
  The ToggleController component displays either the Login or SignUp form based on user interaction. A toggle button allows switching between these views. When logged in, the interface displays a welcome message and a logout button that clears the stored user data.

---

# 📷 Screenshots

<img width="330" alt="Form Validation - 1" src="./src/Images/Form Validation - 1.png">
<img width="330" alt="Form Validation - 2" src="./src/Images/Form Validation - 2.png">
<img width="330" alt="Form Validation - 3" src="./src/Images/Form Validation - 3.png">

---

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

---

## 📜 License

This Project is Licensed under the MIT License.

---
