# Electracode Project Structure Setup
# Run this in the folder WHERE you want the project created
# Example: if you want it at C:\Projects\electracode, run this from C:\Projects

$root = "."

$folders = @(
    # Frontend - app routes
    "$root/frontend/app/(public)/about",
    "$root/frontend/app/(public)/features",
    "$root/frontend/app/(public)/contact",
    "$root/frontend/app/(public)/login",
    "$root/frontend/app/(public)/signup",
    "$root/frontend/app/(protected)/dashboard",
    "$root/frontend/app/(protected)/profile",
    "$root/frontend/app/(protected)/practice/[sessionId]",

    # Frontend - components
    "$root/frontend/components/ui",
    "$root/frontend/components/layout",
    "$root/frontend/components/landing",
    "$root/frontend/components/auth",
    "$root/frontend/components/practice",
    "$root/frontend/components/profile",
    "$root/frontend/components/tracker",

    # Frontend - lib and types
    "$root/frontend/lib",
    "$root/frontend/types",

    # Backend - modules
    "$root/backend/src/auth",
    "$root/backend/src/users/dto",
    "$root/backend/src/questions/dto",
    "$root/backend/src/practice/dto",
    "$root/backend/src/tracker",
    "$root/backend/src/upload",
    "$root/backend/src/contact",

    # Backend - prisma
    "$root/backend/prisma"
)

$files = @(
    # Frontend - app pages
    "$root/frontend/app/(public)/page.tsx",
    "$root/frontend/app/(public)/about/page.tsx",
    "$root/frontend/app/(public)/features/page.tsx",
    "$root/frontend/app/(public)/contact/page.tsx",
    "$root/frontend/app/(public)/login/page.tsx",
    "$root/frontend/app/(public)/signup/page.tsx",
    "$root/frontend/app/(protected)/dashboard/page.tsx",
    "$root/frontend/app/(protected)/profile/page.tsx",
    "$root/frontend/app/(protected)/practice/page.tsx",
    "$root/frontend/app/(protected)/practice/[sessionId]/page.tsx",
    "$root/frontend/app/(protected)/layout.tsx",
    "$root/frontend/app/layout.tsx",
    "$root/frontend/app/globals.css",

    # Frontend - layout components
    "$root/frontend/components/layout/Navbar.tsx",
    "$root/frontend/components/layout/Footer.tsx",

    # Frontend - landing components
    "$root/frontend/components/landing/HeroSection.tsx",
    "$root/frontend/components/landing/PlacedStudents.tsx",
    "$root/frontend/components/landing/FounderCards.tsx",

    # Frontend - auth components
    "$root/frontend/components/auth/LoginForm.tsx",
    "$root/frontend/components/auth/SignupForm.tsx",
    "$root/frontend/components/auth/GoogleAuthButton.tsx",

    # Frontend - practice components
    "$root/frontend/components/practice/QuestionCard.tsx",
    "$root/frontend/components/practice/OptionsList.tsx",
    "$root/frontend/components/practice/Timer.tsx",
    "$root/frontend/components/practice/ProgressBar.tsx",
    "$root/frontend/components/practice/ResultScreen.tsx",

    # Frontend - profile components
    "$root/frontend/components/profile/ProfileForm.tsx",

    # Frontend - tracker components
    "$root/frontend/components/tracker/DailyStats.tsx",
    "$root/frontend/components/tracker/ProgressRing.tsx",

    # Frontend - lib and types
    "$root/frontend/lib/api.ts",
    "$root/frontend/lib/auth.ts",
    "$root/frontend/types/index.ts",

    # Frontend - config files
    "$root/frontend/.env.local",
    "$root/frontend/next.config.ts",
    "$root/frontend/tailwind.config.ts",

    # Backend - auth module
    "$root/backend/src/auth/auth.module.ts",
    "$root/backend/src/auth/auth.controller.ts",
    "$root/backend/src/auth/auth.service.ts",
    "$root/backend/src/auth/jwt.strategy.ts",
    "$root/backend/src/auth/google.strategy.ts",

    # Backend - users module
    "$root/backend/src/users/users.module.ts",
    "$root/backend/src/users/users.controller.ts",
    "$root/backend/src/users/users.service.ts",
    "$root/backend/src/users/dto/update-profile.dto.ts",
    "$root/backend/src/users/dto/create-user.dto.ts",

    # Backend - questions module
    "$root/backend/src/questions/questions.module.ts",
    "$root/backend/src/questions/questions.controller.ts",
    "$root/backend/src/questions/questions.service.ts",
    "$root/backend/src/questions/dto/filter-questions.dto.ts",

    # Backend - practice module
    "$root/backend/src/practice/practice.module.ts",
    "$root/backend/src/practice/practice.controller.ts",
    "$root/backend/src/practice/practice.service.ts",
    "$root/backend/src/practice/dto/start-session.dto.ts",
    "$root/backend/src/practice/dto/submit-answer.dto.ts",

    # Backend - tracker module
    "$root/backend/src/tracker/tracker.module.ts",
    "$root/backend/src/tracker/tracker.controller.ts",
    "$root/backend/src/tracker/tracker.service.ts",

    # Backend - upload module
    "$root/backend/src/upload/upload.module.ts",
    "$root/backend/src/upload/upload.service.ts",

    # Backend - contact module
    "$root/backend/src/contact/contact.module.ts",
    "$root/backend/src/contact/contact.controller.ts",
    "$root/backend/src/contact/contact.service.ts",

    # Backend - root
    "$root/backend/src/app.module.ts",

    # Backend - prisma
    "$root/backend/prisma/schema.prisma",

    # Backend - config
    "$root/backend/.env",

    # Root
    "$root/.gitignore",
    "$root/README.md"
)

Write-Host "Creating Electracode project structure..." -ForegroundColor Cyan

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}
Write-Host "Folders created." -ForegroundColor Green

foreach ($file in $files) {
    New-Item -ItemType File -Path $file -Force | Out-Null
}
Write-Host "Files created." -ForegroundColor Green

Write-Host ""
Write-Host "Done! Your project structure is ready at ./$root" -ForegroundColor Cyan
Write-Host "Next step: follow the Day 1 setup instructions in the project guide." -ForegroundColor Yellow