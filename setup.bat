@echo off
echo ========================================
echo  Ryan Clark Creates - Setup Script
echo ========================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js not found!
    echo Download from: https://nodejs.org
    pause
    exit /b 1
)

echo [OK] Node.js found:
node --version
echo.

:: Install dependencies
echo Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo [ERROR] npm install failed
    pause
    exit /b 1
)
echo.
echo [OK] Dependencies installed
echo.

:: Check for .env.local
if not exist .env.local (
    echo [WARNING] No .env.local file found!
    echo.
    echo Creating .env.local template...
    (
        echo # Stripe Configuration
        echo STRIPE_SECRET_KEY=sk_test_your_key_here
        echo STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
        echo NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
        echo.
        echo # Site URL
        echo NEXT_PUBLIC_SITE_URL=http://localhost:3000
    ) > .env.local
    echo [OK] Created .env.local - Please update with real Stripe keys!
    echo.
)

echo ========================================
echo  Setup Complete!
echo ========================================
echo.
echo To start the dev server, run:
echo   npm run dev
echo.
echo Then open: http://localhost:3000
echo.
pause
