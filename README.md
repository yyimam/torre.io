# Frontend Project

This is a **Next.js** frontend project using **React** and **TailwindCSS**.

---

## Project Version

```
0.1.0
```

---

## Getting Started

### 1. Install Dependencies

Make sure you have **Node.js** installed, then run:

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### 2. Run the Project

After installing dependencies, start the development server:

```bash
npm run dev
```

The project will run at http://localhost:3000 by default.

### 3. Other Useful Commands

- **Build for production:**
  ```bash
  npm run build
  ```

- **Start production server:**
  ```bash
  npm start
  ```

- **Lint your code:**
  ```bash
  npm run lint
  ```

---

## Environment Variables

Create a `.env` file in the root of the project:

```
NEXT_PUBLIC_API_URL="https://torre.ai/api"
NEXT_PUBLIC_SEARCH_API_URL="https://search.torre.co"
```

These are used for API requests in the frontend.

---

## Building for Production

To build the project for production deployment:

1. Run the build command:
   ```bash
   npm run build
   ```

2. This will create an optimized production build in the `.next` folder.

3. To test the production build locally:
   ```bash
   npm start
   ```
