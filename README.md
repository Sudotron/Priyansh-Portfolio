# Priyansh Saini — Portfolio

React (Create React App) + Bootstrap 5 portfolio.

## Run locally
```bash
npm install
npm start          # http://localhost:3000
```

## Production build
```bash
npm run build      # output in /build
```

## Docker
```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio     # http://localhost:8080
# or for development with hot reload:
docker compose up
```

## Edit your content
Everything (name, links, projects, skills, education) lives in `src/data/config.js`.
Project banners are in `public/img/`, your resume is `public/files/Priyansh_Saini_Resume.pdf`.

## Deploy
Push to GitHub and import the repo on Vercel or Netlify (build command `npm run build`, output `build`).
