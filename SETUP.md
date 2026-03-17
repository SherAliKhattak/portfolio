# Setup Guide for PortfolioBuilder

This guide will help you install all required dependencies and set up the project.

## Prerequisites

### 1. Install Node.js 20

The project requires **Node.js version 20 or higher**. Choose one of the following methods:

#### Option A: Using Homebrew (macOS - Recommended)
```bash
brew install node@20
```

#### Option B: Using nvm (Node Version Manager)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Reload your shell configuration
source ~/.zshrc  # or ~/.bashrc

# Install Node.js 20
nvm install 20
nvm use 20
```

#### Option C: Direct Download
Download and install from [nodejs.org](https://nodejs.org/)

### 2. Install PostgreSQL

The project uses PostgreSQL as the database. You have several options:

#### Option A: Using Homebrew (macOS)
```bash
brew install postgresql@16
brew services start postgresql@16
```

#### Option B: Using Docker
```bash
docker run --name postgres-portfolio -e POSTGRES_PASSWORD=password -e POSTGRES_DB=portfoliobuilder -p 5432:5432 -d postgres:16
```

#### Option C: Use a Cloud Database (Neon, Supabase, etc.)
- Sign up for a free account at [Neon](https://neon.tech) or [Supabase](https://supabase.com)
- Create a new database
- Copy the connection string

## Installation Steps

### 1. Run the Setup Script

```bash
./setup.sh
```

This script will:
- Check for Node.js installation
- Install npm dependencies
- Set up environment variables

### 2. Manual Installation (if script doesn't work)

```bash
# Install all npm dependencies
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```bash
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/portfoliobuilder

# Server Configuration
PORT=5000
NODE_ENV=development

# Session Secret (generate a random string for production)
SESSION_SECRET=your-secret-key-here-change-in-production
```

**Important**: Replace the `DATABASE_URL` with your actual PostgreSQL connection string.

### 4. Set Up the Database Schema

```bash
npm run db:push
```

This will create the necessary database tables using Drizzle ORM.

## Running the Project

### Development Mode
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Production Build
```bash
npm run build
npm start
```

## Project Structure

- `/client` - React frontend application
- `/server` - Express.js backend
- `/shared` - Shared TypeScript types and schemas
- `/attached_assets` - Static assets (images, PDFs, etc.)

## Troubleshooting

### Node.js not found
- Make sure Node.js is installed and in your PATH
- Try restarting your terminal
- Verify installation: `node --version` should show v20.x.x or higher

### Database connection errors
- Verify PostgreSQL is running: `brew services list` (macOS) or `pg_isready`
- Check your DATABASE_URL format
- Ensure the database exists

### npm install fails
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Check your internet connection
- Verify npm version: `npm --version`

## Required Extensions/VS Code Setup

If using VS Code, recommended extensions:
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **TypeScript and JavaScript Language Features** - Built-in
- **PostgreSQL** - Database management (optional)

## Dependencies Overview

### Frontend
- React 18 with TypeScript
- Vite for building
- Tailwind CSS for styling
- Radix UI components (shadcn/ui)
- Wouter for routing

### Backend
- Express.js
- Drizzle ORM
- PostgreSQL (Neon serverless driver)

### Development Tools
- TypeScript
- tsx for running TypeScript
- esbuild for production builds

For a complete list, see `package.json`.
