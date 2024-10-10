# Exit on first error
set -e

# Check which directory has changed
if git diff --cached --name-only | grep -q "^package/"; then
  echo "Running checks for package..."
  # Run tests, ESLint, and Prettier checks for package
  yarn --cwd package eslint . --quiet
  # yarn --cwd package prettier:check || (echo '\n\nPrettier failed. Run (` yarn prettier:fix `) to fix the formatting issues.\n\n' && exit 1)

  echo "[perttier] is prettifying your code..."
  yarn --cwd package pretty-quick --staged

  echo "Tests are being running..."
  yarn --cwd package test
fi

if git diff --cached --name-only | grep -q "^docs/"; then
  echo "Running checks for docs..."
  # Run tests, ESLint, and Prettier checks for docs
  
  yarn --cwd docs eslint . --quiet
  # yarn --cwd docs prettier --check . || (echo '\n\nPrettier failed. Run (` yarn prettier:fix `) to fix the formatting issues.\n\n' && exit 1)

  echo "[perttier] is prettifying your code..."
  yarn --cwd docs prettier -quick --staged

  echo "Tests are being running..."
  # yarn --cwd docs test

fi

echo "Pre-commit checks passed. Proceeding with commit."
