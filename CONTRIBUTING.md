# Contributing to Bordex

Thank you for your interest in contributing to Bordex! We appreciate your help in making this project better and more useful. Here are some guidelines to ensure smooth collaboration.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Reporting Issues](#reporting-issues)
3. [Submitting Code Changes](#submitting-code-changes)
4. [Code Style and Standards](#code-style-and-standards)
5. [Commit Guidelines](#commit-guidelines)

## Getting Started

1. **Fork the repository** and clone it to your local machine.
2. Install dependencies with `npm install`.
3. If necessary, build the project with `npm run build` to generate the dist files.
4. Start a local dev server with `npm run dev` to preview your changes live.

## Reporting Issues

If you encounter bugs, issues, or have feature requests, please [open an issue](https://github.com/Bear-Frost/bordex/issues) and include:

- A clear title and description.
- Steps to reproduce the issue if it's a bug.
- Any error messages or screenshots, if relevant.

## Submitting Code Changes

1. **Create a new branch** for each feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Write clean, modular code and add comments where necessary.
3. Test your changes to make sure they work as expected.
4. Run linters (e.g., ESLint, Prettier) to ensure code consistency:

    ```bash
    npm run lint
    ```

5.Commit your changes (see [Commit Guidelines](#commit-guidelines) below).
6. Push your branch to your forked repository and create a pull request.

## Code Style and Standards

- Follow [ESLint](./eslint.config.mjs) and [Prettier](./.prettierrc) confiurations provided in the repository.
- Avoid duplicating code. if pssible, refactor or reuse existing code.

## Commit Guidelines 

This project follows the Conventional Commits specification:

- `feat:` A new feature.
- `fix:` A bug fix.
- `docs:` Documentation updates or improvements.
- `style:` Code style changes (whitespace, formatting, missing semicolons).
- `refactor:` Code changes that neither fix a bug nor add a feature.
- `test:` Adding or updating tests.
- `chore:` Maintenance tasks, such as dependency updates or build changes.

Example commit message:

```bash
git commit -m "feat: add new border style feature"
```

## Thank You!

Thank you for taking the time to contribute! Please feel free to reach out if you have any questions or need clarification on anything.