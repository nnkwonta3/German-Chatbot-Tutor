# German AI Tutor

An AI-powered German language tutor chatbot built using the MERN stack and OpenAI API. This application provides interactive, personalized language learning through a conversational interface.

---

## Project Overview

The German AI Tutor is designed to simulate a real tutoring experience by enabling users to practice German through natural conversation. It combines a full-stack web application with AI-generated responses tailored specifically for language learning.

---

## Features

- **AI-Powered Chatbot**
  - Generates German language responses using OpenAI API
  - Custom prompt engineering focused on tutoring and learning

- **User Authentication**
  - Secure signup and login system
  - JWT-based authentication
  - HTTP-only cookies for session management
  - Password hashing with bcrypt

- **Chat History**
  - Persistent conversation storage
  - Enables continuous and contextual learning

- **Responsive UI**
  - Clean interface built with Material UI
  - Optimized for both desktop and mobile devices

---

## Tech Stack

### Frontend
- React (Vite)
- Material UI

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication and Security
- JSON Web Tokens (JWT)
- bcrypt
- HTTP-only cookies
- express-validator

### AI Integration
- OpenAI API

---

## Authentication System

- Token-based authentication using JWT
- Secure password storage with bcrypt hashing
- Route protection via middleware verification
- Session handling with HTTP-only cookies

---

## Data Storage

- MongoDB is used to store:
  - User credentials (email and hashed passwords)
  - Chat history
- Mongoose is used for schema modeling and database interaction

---

## Chat System

- Real-time conversational interface
- Backend sends structured prompts to OpenAI API
- Responses are tailored to support German language learning
- Designed to function as a tutor rather than a general chatbot

---

## Architecture

- **Frontend:** Vite-powered React application
- **Backend:** REST API built with Express.js
- **Database:** MongoDB for persistent storage
- **AI Layer:** OpenAI API integration for dynamic responses

---

## Future Improvements

- Improve response latency
- Enhance tutoring quality and contextual understanding
- Add support for additional languages
- Implement:
  - Two-factor authentication
  - Password reset functionality
  - Account deletion
- Improve chat history analytics and tracking

---

## Demo

GitHub Repository:  
https://github.com/nnkwonta3/German-Chatbot-Tutor

---

## Notes

- Current version may experience slower response times due to API latency
- Sample users shown in demonstrations are not real accounts

---

## Contributions

Contributions are welcome. Feel free to fork the repository and submit pull requests.

---

## Contact

For questions or feedback, reach out via GitHub.
