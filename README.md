# Gadewin - Site Web IA

Site web pour Gadewin, une agence spécialisée dans les solutions d'intelligence artificielle : chatbots IA, voice AI avec Retell, agents IA et automatisation.

## 🚀 Technologies

- **React 18** - Framework frontend
- **Vite** - Build tool et serveur de développement
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Navigation côté client
- **Lucide React** - Icônes modernes
- **Docker** - Containerisation avec Nginx

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Docker (optionnel)

### Installation des dépendances
```bash
npm install
```

## 🛠️ Développement

### Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build de production
```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

### Preview du build de production
```bash
npm run preview
```

## 🐳 Docker

### Build et lancement avec Docker Compose
```bash
# Build de l'application
npm run build

# Lancement avec Docker Compose
docker-compose up --build
```

### Build manuel avec Docker
```bash
# Build de l'application
npm run build

# Build de l'image Docker
docker build -t gadewin-website .

# Lancement du conteneur
docker run -p 80:80 gadewin-website
```

Le site sera accessible sur `http://localhost`

## 📁 Structure du projet

```
├── public/                 # Fichiers statiques
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   └── CTA.jsx
│   ├── pages/            # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Composant principal
│   ├── main.jsx          # Point d'entrée
│   └── index.css         # Styles globaux
├── Dockerfile            # Configuration Docker
├── nginx.conf           # Configuration Nginx
├── docker-compose.yml   # Configuration Docker Compose
└── tailwind.config.js   # Configuration Tailwind
```

## 🎨 Fonctionnalités

### Pages
- **Accueil** - Présentation des services et témoignages
- **Services** - Détail des solutions IA proposées
- **À propos** - Histoire et équipe de Gadewin
- **Contact** - Formulaire de contact et informations

### Services présentés
- **Chatbots IA** - Assistants conversationnels intelligents
- **Voice AI avec Retell** - Assistants vocaux naturels
- **Agents IA** - Agents autonomes pour tâches complexes
- **Automatisation IA** - Automatisation des processus métier

### Fonctionnalités techniques
- Design responsive (mobile-first)
- Navigation fluide avec React Router
- Optimisation SEO
- Performance optimisée avec Vite
- Configuration Docker pour déploiement
- Configuration Nginx pour production

## 🚀 Déploiement

### Build et déploiement Docker
```bash
# Build de production
npm run build

# Build et déploiement
docker-compose up --build -d
```

### Variables d'environnement
Créez un fichier `.env` pour les variables d'environnement :
```
VITE_API_URL=https://api.gadewin.com
VITE_CONTACT_EMAIL=contact@gadewin.com
```

## 📞 Support

Pour toute question ou support technique :
- Email : contact@gadewin.com
- Téléphone : +33 1 23 45 67 89

## 📄 Licence

© 2024 Gadewin. Tous droits réservés.
