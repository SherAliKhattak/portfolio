#!/bin/bash

# Helper script to kill processes on common ports
# Usage: ./kill-port.sh [port_number]

PORT=${1:-3000}

echo "🔍 Checking for processes on port $PORT..."

if lsof -ti:$PORT > /dev/null 2>&1; then
    echo "⚠️  Port $PORT is in use. Killing processes..."
    lsof -ti:$PORT | xargs kill -9 2>/dev/null
    sleep 1
    if lsof -ti:$PORT > /dev/null 2>&1; then
        echo "❌ Failed to kill process on port $PORT"
        exit 1
    else
        echo "✅ Port $PORT is now free"
    fi
else
    echo "✅ Port $PORT is already free"
fi
