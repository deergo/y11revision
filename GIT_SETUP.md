# Git Setup Instructions

To push this project to a new GitHub repository called "y11revision":

## 1. Initialize Git Repository

```bash
cd "c:\Users\Zaha\Documents\vs2025mlstuff\y11revision"
git init
git add .
git commit -m "Initial commit: Y11 revision site template for Specification 0984"
```

## 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `y11revision`
3. Description: "Y11 revision site for Specification 0984"
4. Set to Public or Private as needed
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

## 3. Link and Push

```bash
git remote add origin https://github.com/YOUR_USERNAME/y11revision.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 4. Verify

Your repository should now be available at:
https://github.com/YOUR_USERNAME/y11revision

## 5. Enable GitHub Pages (Optional)

To host the site directly from GitHub:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in the sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at:
https://YOUR_USERNAME.github.io/y11revision

## Future Updates

To update the repository:

```bash
git add .
git commit -m "Description of changes"
git push
```