# AI Recipe App 🍳🤖

A React web app that lets users enter a list of ingredients and generates recipe suggestions using **Claude AI**. Recipes are displayed in a clean, Markdown-friendly format.

---

## Features

- Add multiple ingredients dynamically
- View AI-generated recipe suggestions
- Recipes are rendered with Markdown for readability
- Minimalist, responsive UI
- Backend-ready for secure API key usage

---

## Tech Stack

- **Frontend:** React, React Markdown, Vite
- **Backend (optional):** Node.js / Express
- **AI API:** Claude AI (via Anthropic SDK)

---



## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/get-aakash/makeYourOwnReciepe.git

cd makeYourOwnReciepe



Install dependencies

npm install

Create environment variables

Create a .env file in the root directory with your API key:

VITE_API_KEY=your_anthropic_api_key

Run the development server
npm run dev

Usage

Type in ingredients in the input box and click Add Ingredient.

Click Get Recipe to generate an AI-recommended recipe.

The recipe will appear below in Markdown format, including steps and optional additional ingredients.