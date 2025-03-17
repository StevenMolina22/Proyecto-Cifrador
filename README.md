# Proyecto Cifrado 🔑

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technical Architecture](#technical-architecture)
   - [Directory Structure](#directory-structure)
   - [File Breakdown](#file-breakdown)
4. [User Interface](#user-interface)
5. [Functionality](#functionality)
   - [Encryption Mechanism](#encryption-mechanism)
   - [Decryption Mechanism](#decryption-mechanism)
   - [Copy to Clipboard](#copy-to-clipboard)
6. [Design and Styling](#design-and-styling)
   - [Responsive Design](#responsive-design)
   - [Color Scheme](#color-scheme)
7. [Setup and Installation](#setup-and-installation)
8. [Usage Instructions](#usage-instructions)
9. [Future Enhancements](#future-enhancements)
10. [Why This Project Matters](#why-this-project-matters)
11. [Contact and Collaboration](#contact-and-collaboration)

---

## Project Overview
"Proyecto Cifrado" is a sleek, modern web application designed to encrypt and decrypt text messages using a custom substitution cipher. Built with a focus on usability, responsiveness, and clean code, this project showcases a blend of front-end development skills, including HTML, CSS (with SCSS preprocessing), and JavaScript. It serves as an excellent demonstration of creating intuitive user interfaces and implementing functional logic for real-world applications.

This project is ideal for:
- **Recruiters**: A polished example of front-end development expertise.
- **Developers**: A well-structured codebase to study or contribute to.
- **Clients**: A customizable encryption tool for secure communication needs.

---

## Key Features
- **Text Encryption/Decryption**: Transforms user input using a predefined substitution cipher.
- **Responsive Design**: Adapts seamlessly across desktop, tablet, and mobile devices.
- **Interactive UI**: Clean, modern interface with intuitive buttons and dynamic content updates.
- **Copy Functionality**: Allows users to copy encrypted/decrypted text to the clipboard.
- **Lightweight**: Minimal dependencies, ensuring fast load times and easy deployment.

---

## Technical Architecture

### Directory Structure
The project follows a modular structure for maintainability and scalability:
```
css/                  # Compiled CSS files and source maps
scss/                 # SCSS source files for styling
.gitignore            # Git ignore rules
index.html            # Main HTML file
package.json          # Project metadata and dependencies
scripts.js            # JavaScript logic for encryption/decryption
```

### File Breakdown
- **HTML (`index.html`)**: Defines the structure of the application, including input areas, buttons, and output containers.
- **SCSS/CSS**: Modular styles split into `global.scss` (base styles), `components.scss` (UI components), and `styles.scss` (combined styles).
- **JavaScript (`scripts.js`)**: Handles encryption, decryption, UI toggling, and clipboard functionality.
- **Dependencies (`package.json`)**: Uses `sass` for SCSS compilation.

---

## User Interface
The interface is designed for simplicity and elegance:
- **Main Content Area**: A textarea for input and buttons for encryption/decryption.
- **Side Content Area**: Displays the result or a placeholder message when no content is processed.
- **Visual Feedback**: Subtle animations and color changes on hover enhance interactivity.

---

## Functionality

### Encryption Mechanism
The encryption function replaces vowels with predefined strings:
- `a` → `ai`
- `e` → `enter`
- `i` → `imes`
- `o` → `ober`
- `u` → `ufat`
- Non-vowel characters remain unchanged.
- Example: `hello` becomes `henterllober`.

### Decryption Mechanism
The decryption function reverses the process by replacing the encrypted strings with their original vowels using a `replaceAll` approach.

### Copy to Clipboard
A dedicated button leverages the `navigator.clipboard` API to copy the processed text, with a confirmation alert for user feedback.

---

## Design and Styling

### Responsive Design
- **Desktop (>1300px)**: Side-by-side layout for input and output.
- **Tablet (700px-1300px)**: Stacked layout with adjusted heights.
- **Mobile (<700px)**: Vertical button stack and hidden decorative images.

### Color Scheme
Defined in `global.scss` using CSS variables:
- **Dark Blues**: `#609ED4` to `#052051` for primary elements.
- **Light Blues**: `#F3F5FC` to `#757FB2` for backgrounds and accents.
- **Grays**: `#CED4DA` to `#343A40` for text and shadows.

The design employs subtle shadows, rounded corners, and a clean sans-serif font for a professional look.

---

## Setup and Installation
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd proyecto-cifrado
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Compile SCSS** (if modifying styles):
   ```bash
   npx sass scss/:css/
   ```
4. **Run Locally**:
   Open `index.html` in a browser or use a local server (e.g., `npx live-server`).

---

## Usage Instructions
1. Enter text in the provided textarea (lowercase, no accents).
2. Click "Encriptar" to encrypt or "Desencriptar" to decrypt.
3. View the result in the side panel.
4. Click "Copiar" to copy the output to your clipboard.

---

## Future Enhancements
- **Advanced Ciphers**: Implement more complex encryption algorithms (e.g., Caesar cipher, AES).
- **Input Validation**: Add real-time feedback for invalid characters.
- **Multilingual Support**: Extend to handle accented characters and other languages.
- **Backend Integration**: Add a server to store encrypted messages securely.
- **Themes**: Introduce light/dark mode toggling.

---

## Why This Project Matters
"Proyecto Cifrado" demonstrates a strong grasp of front-end development principles, from semantic HTML to modular SCSS and functional JavaScript. It’s a versatile foundation that can be adapted for educational tools, secure messaging apps, or portfolio showcases. Its clean code and responsive design make it a standout project for technical evaluation or client pitches.

---

## Contact and Collaboration
Interested in exploring this project further? Whether you're a recruiter seeking talent, a developer looking to collaborate, or a client with a vision, feel free to reach out via professional channels (e.g., GitHub, LinkedIn). Let’s build something extraordinary together!

