# Maryam Chaudhry — Portfolio

React + TypeScript portfolio byggd med Vite.

## Kom igång

```bash
npm install
npm run dev
```

Öppna [http://localhost:5173](http://localhost:5173) i webbläsaren.

## Bygga för produktion

```bash
npm run build
```

## Lägga till projekt

Öppna `src/data.ts` och lägg till ett nytt objekt i `projects`-arrayen:

```ts
{
  id: 3,
  title: 'Mitt nya projekt',
  description: 'Beskriv vad du byggt.',
  tags: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/maryam891/mitt-projekt',
  liveUrl: 'https://mitt-projekt.vercel.app', // valfritt
}
```

## Deploya till Vercel

1. Pusha projektet till GitHub
2. Gå till [vercel.com](https://vercel.com) och logga in med GitHub
3. Klicka "Add New Project" och välj ditt repo
4. Vercel hittar Vite automatiskt — klicka bara Deploy
5. Din portfolio är live! 🚀

## Struktur

```
src/
  components/       ← En fil per sektion
  hooks/
    useReveal.ts    ← Scroll-animationslogik
  data.ts           ← All text och projektdata
  App.tsx
  main.tsx
  index.css         ← Globala CSS-variabler
```
