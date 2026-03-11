# Movieflix-GPT
- Create-react-app
- installed and configured tailwind css
- installed npm install react-router-dom
- install redux-react ,@reactjs/toolkit
- Provide Routing for signUp and SignIn page
- SignUp page and SignIn page Degin completed successfully
- Add firebase to the application to create authentication
- Firebase authentication with email is done
- SignUp, SignIn, Forgot password, Google signIn is created usind firebase Authentication
- After signIn routed to browse page
- Main container is created with video title and background trailer play
- now playing movies is fetched form TMDB movies using TMDB API
- Main Container with movie trailer and populate Nowplaying Upcoming etc is completed
- Created Gpt Search Page and routed from browser.ToDO: develop gpt search in search page
- Language change option is create on gpt search page for search bar
- search bar with input and search button is created.
- Gemini API key is created in Google Ai Studio
- need to install npm install @google/generative-ai
- Follow the steps in 
- Gemini Ai is integrated into app and fetched movie suggestions

# Features to be developed
- SignUp page
- sign in / Sign up Form
- redirect to Browser page
- Logged In Users
-   Browser page (after authentication)
-   Header
-   Main movie
-       Trailer in Background
-       Title in description
-       Movies Suggestions
-           Movies List * n
-   Movieflix GPT
-       Search Bar
-       Movie Suggestions

# MovieFlix GPT

## Overview
MovieFlix GPT is an AI-powered movie recommendation platform that helps users discover movies based on their interests. The application combines movie data from the TMDB API with GPT-based search to provide intelligent and personalized movie suggestions.

The project features a Netflix-style user interface where users can browse trending movies, watch trailers, and search for movie recommendations using AI prompts.

---

## Features

### Authentication
- User Sign Up and Sign In
- Firebase Authentication
- Protected routes for logged-in users

### Browse Movies
- Netflix-style movie browsing interface
- Featured movie with trailer background
- Multiple movie categories and suggestions
- Movie information and descriptions

### AI Movie Search (GPT)
- GPT-powered movie search
- AI-generated movie recommendations
- Search movies using natural language prompts

### Additional Features
- Multilingual support
- Responsive design for different devices
- State management using Redux Toolkit

---

## Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Tailwind CSS

### State Management
- Redux Toolkit

### APIs
- TMDB API (Movie Data)
- GPT API (AI Movie Recommendations)

### Backend / Services
- Firebase Authentication
- Firebase Hosting

### Tools
- Git
- GitHub
- npm

---

## Installation

### 1 Clone the repository

```bash
git clone https://github.com/binduthotal/movieflix-gpt.git
