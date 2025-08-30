# Fusion Starter - React App

A modern React application built with Vite, featuring a blog system and beautiful UI components.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. Make sure your repository is named `alaaet.github.io` (or update the base path in `vite.config.ts`)
2. Ensure you have write permissions to the repository

### Automatic Deployment

The app will automatically deploy when you push to the `main` or `master` branch. The GitHub Actions workflow will:

1. Build the production version of your app
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://alaaet.github.io/alaaet.github.io`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build for production
npm run build:gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

- `client/` - React frontend application
- `server/` - Express backend server
- `articles/` - Markdown blog articles
- `shared/` - Shared utilities and types
- `netlify/` - Netlify functions (if using Netlify)

## 🛠️ Built With

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Express** - Backend server

## 📝 License

This project is private and proprietary.
