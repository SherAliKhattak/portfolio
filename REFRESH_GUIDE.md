# 🔄 How to Refresh/Restart the Development Server

## Quick Refresh Methods

### 1. **Browser Refresh** (Fastest - for code changes)
The development server has **hot module replacement (HMR)**, so most changes auto-reload:

- **Normal refresh**: `Cmd + R` (Mac) or `F5` (Windows)
- **Hard refresh** (clear cache): `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- **Open in browser**: http://localhost:3000

### 2. **Restart the Server** (For server/config changes)

**Step 1: Stop the current server**
- Find the terminal where `npm run dev` is running
- Press `Ctrl + C` to stop it

**Step 2: Start it again**
```bash
cd /Users/macbookpro/Downloads/PortfolioBuilder
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
npm run dev
```

### 3. **Kill Port and Restart** (If port is stuck)

**Option A: Use the helper script**
```bash
./kill-port.sh 3000
npm run dev
```

**Option B: Manual kill**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Then restart
npm run dev
```

**Option C: Use a different port**
```bash
PORT=3001 npm run dev
# Then open http://localhost:3001
```

## Common Scenarios

### ✅ Code changes in React components
→ **Just refresh browser** (`Cmd + R`) - HMR will update automatically

### ✅ Changes to `portfolio-data.ts` or data files
→ **Refresh browser** - usually auto-reloads, but hard refresh (`Cmd + Shift + R`) if needed

### ✅ Changes to server files (`server/index.ts`, `server/vite.ts`)
→ **Restart the server** (stop with `Ctrl + C`, then `npm run dev`)

### ✅ Changes to `vite.config.ts` or build config
→ **Restart the server**

### ✅ Port already in use error
→ **Kill the port** then restart:
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

## Quick Commands Reference

```bash
# Check if server is running
curl http://localhost:3000

# Check what's using port 3000
lsof -ti:3000

# Kill port 3000
lsof -ti:3000 | xargs kill -9

# Restart server
npm run dev
```

## Tips

- **Hot reload is enabled**: Most frontend changes appear automatically
- **Server changes require restart**: Changes to `server/` files need a full restart
- **Check terminal logs**: The server shows compilation status and errors
- **Browser DevTools**: Open with `Cmd + Option + I` (Mac) to see console errors
