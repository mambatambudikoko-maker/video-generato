{
  "version": 2,
  "builds": [
    { "src": "public/**", "use": "@vercel/static" },
    { "src": "api/**/*.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1" },
    { "src": "/(.*)", "dest": "/public/$1" }
  ]
}

{
  "name": "video-generator-site",
  "version": "1.0.0",
  "private": true
}

# Générateur de vidéo IA — 10 secondes

Site simple : l’utilisateur écrit un texte, le site génère une vidéo de 10 secondes via l’API Kling 3.0 (kie.ai).

## Structure

- public/index.html — la page que voit le visiteur
- api/generate.js — lance la génération (backend, clé API cachée)
- api/status.js — vérifie si la vidéo est prête (backend)

## Déploiement sur Vercel

1. Pousser ce dossier sur GitHub
1. Sur vercel.com, “Add New Project” → importer le dépôt GitHub
1. Dans les réglages du projet Vercel → “Environment Variables”, ajouter :
- Nom : KIE_API_KEY
- Valeur : ta clé API kie.ai
1. Déployer

⚠️ Ne jamais mettre la clé API directement dans le code. Elle doit toujours passer par les “Environment Variables” de Vercel.

One API for All the Best AI Models – Try Affordable AI API on Kie.ai
kie.ai
