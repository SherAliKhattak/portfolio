#!/bin/bash

# PortfolioBuilder Setup Script
# This script will help you set up all required dependencies for the project

set -e

echo "🚀 PortfolioBuilder Setup Script"
echo "=================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
check_node() {
    # Check for node@20 in Homebrew first
    if [ -f "/opt/homebrew/opt/node@20/bin/node" ]; then
        export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
    fi
    
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        echo -e "${GREEN}✓ Node.js is installed: $NODE_VERSION${NC}"
        
        # Check if it's version 20 or higher
        MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'v' -f2 | cut -d'.' -f1)
        if [ "$MAJOR_VERSION" -ge 20 ]; then
            return 0
        else
            echo -e "${YELLOW}⚠ Warning: Node.js version 20 or higher is recommended${NC}"
            return 0
        fi
    else
        echo -e "${RED}✗ Node.js is not installed${NC}"
        return 1
    fi
}

# Check if npm is installed
check_npm() {
    if command -v npm &> /dev/null; then
        NPM_VERSION=$(npm --version)
        echo -e "${GREEN}✓ npm is installed: $NPM_VERSION${NC}"
        return 0
    else
        echo -e "${RED}✗ npm is not installed${NC}"
        return 1
    fi
}

# Install Node.js using Homebrew (macOS)
install_node_homebrew() {
    if command -v brew &> /dev/null; then
        echo -e "${YELLOW}Installing Node.js 20 using Homebrew...${NC}"
        brew install node@20
        echo -e "${GREEN}✓ Node.js installed successfully${NC}"
        return 0
    else
        return 1
    fi
}

# Install Node.js using nvm
install_node_nvm() {
    if [ -s "$HOME/.nvm/nvm.sh" ]; then
        echo -e "${YELLOW}Installing Node.js 20 using nvm...${NC}"
        source "$HOME/.nvm/nvm.sh"
        nvm install 20
        nvm use 20
        echo -e "${GREEN}✓ Node.js installed successfully${NC}"
        return 0
    else
        return 1
    fi
}

# Main setup function
main() {
    echo "Step 1: Checking Node.js installation..."
    if ! check_node; then
        echo ""
        echo "Node.js is not installed. Attempting to install..."
        
        # Try Homebrew first (macOS)
        if install_node_homebrew; then
            check_node || exit 1
        # Try nvm
        elif install_node_nvm; then
            check_node || exit 1
        else
            echo ""
            echo -e "${RED}Could not automatically install Node.js.${NC}"
            echo "Please install Node.js 20 manually:"
            echo "  - macOS: brew install node@20"
            echo "  - Or download from: https://nodejs.org/"
            echo "  - Or use nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash"
            exit 1
        fi
    fi
    
    echo ""
    echo "Step 2: Checking npm installation..."
    if ! check_npm; then
        echo -e "${RED}npm is not available. Please install Node.js which includes npm.${NC}"
        exit 1
    fi
    
    echo ""
    echo "Step 3: Installing npm dependencies..."
    # Ensure node@20 is in PATH if installed via Homebrew
    if [ -f "/opt/homebrew/opt/node@20/bin/node" ]; then
        export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
    fi
    npm install
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ All dependencies installed successfully!${NC}"
    else
        echo -e "${RED}✗ Failed to install dependencies${NC}"
        exit 1
    fi
    
    echo ""
    echo "Step 4: Setting up environment variables..."
    if [ ! -f .env ]; then
        if [ -f .env.example ]; then
            cp .env.example .env
            echo -e "${GREEN}✓ Created .env file from .env.example${NC}"
            echo -e "${YELLOW}⚠ Please update .env with your DATABASE_URL${NC}"
        else
            echo -e "${YELLOW}⚠ .env.example not found. You may need to create .env manually${NC}"
        fi
    else
        echo -e "${GREEN}✓ .env file already exists${NC}"
    fi
    
    echo ""
    echo -e "${GREEN}=================================="
    echo -e "Setup complete! 🎉${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Set up your PostgreSQL database"
    echo "2. Update .env with your DATABASE_URL"
    echo "3. Run 'npm run db:push' to set up the database schema"
    echo "4. Run 'npm run dev' to start the development server"
    echo ""
}

# Run main function
main
