# 🚀 How to Run the PortfolioBuilder Project

## Quick Start

### 1. Make sure Node.js is in your PATH

Since Node.js was installed as "keg-only", add it to your PATH:

```bash
# Add to your shell profile (run once)
echo 'export PATH="/opt/homebrew/opt/node@20/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

Or for the current terminal session only:
```bash
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
```

### 2. Navigate to the project directory

```bash
cd /Users/macbookpro/Downloads/PortfolioBuilder
```

### 3. Run the development server

```bash
npm run dev
```

The application will start and be available at: **http://localhost:5000**

---

## Detailed Steps

### Option A: Run Without Database (Frontend Only)

The frontend can run without a database connection. Just run:

```bash
# Make sure Node.js is in PATH
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"

# Start the dev server
npm run dev
```

**Note**: Some features that require database access won't work, but you can view the portfolio frontend.

### Option B: Run With Full Database Support

If you want full functionality, set up PostgreSQL:

#### Step 1: Set up PostgreSQL Database

Choose one option:

**Option 1: Local PostgreSQL (macOS)**
```bash
brew install postgresql@16
brew services start postgresql@16
```

**Option 2: Docker**
```bash
docker run --name postgres-portfolio \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=portfoliobuilder \
  -p 5432:5432 -d postgres:16
```

**Option 3: Cloud Database (Easiest - Recommended)**
1. Sign up for free at [Neon.tech](https://neon.tech) or [Supabase](https://supabase.com)
2. Create a new database
3. Copy the connection string

#### Step 2: Create `.env` file

Create a `.env` file in the project root:

```bash
# For local PostgreSQL
DATABASE_URL=postgresql://postgres:password@localhost:5432/portfoliobuilder

# For cloud database (Neon/Supabase), use the connection string they provide
# DATABASE_URL=postgresql://user:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require

PORT=5000
NODE_ENV=development
SESSION_SECRET=your-secret-key-here
```

#### Step 3: Set up database schema

```bash
npm run db:push
```

This creates the necessary database tables.

#### Step 4: Start the server

```bash
npm run dev
```

---

## Available Commands

```bash
# Development server (with hot reload)
npm run dev

# Type checking
npm run check

# Build for production
npm run build

# Run production build
npm start

# Database migrations
npm run db:push
```

---

## Troubleshooting

### "node: command not found"
```bash
# Add Node.js to PATH
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"

# Or add permanently to ~/.zshrc
echo 'export PATH="/opt/homebrew/opt/node@20/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### "Cannot find module" errors
```bash
# Reinstall dependencies
npm install
```

### Database connection errors
- Make sure PostgreSQL is running: `brew services list` (macOS)
- Check your `.env` file has the correct `DATABASE_URL`
- For local PostgreSQL, try: `psql -U postgres -d portfoliobuilder` to test connection

### Port already in use (EADDRINUSE error)
If you see "address already in use" error:

**Quick fix - kill the process:**
```bash
# Kill process on port 3000
./kill-port.sh 3000

# Or manually:
lsof -ti:3000 | xargs kill -9
```

**Or use a different port:**
```bash
PORT=3001 npm run dev
```

**Note:** Port 5000 is often used by Apple's AirPlay Receiver on macOS, so the default port is now 3000.

---

## What You'll See

Once running, open your browser to:
- **http://localhost:5000** - Portfolio website

The development server includes:
- Hot module replacement (HMR)
- Fast refresh for React components
- TypeScript compilation
- Vite dev server for frontend

---

## Next Steps After Running

1. Open http://localhost:5000 in your browser
2. Explore the portfolio interface
3. Check the terminal for any errors or logs
4. Make changes to the code - they'll hot-reload automatically!
