  GNU nano 7.2                                                                                         rebuild.sh                                                                                                  
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Vérifier qu'on est dans le bon dossier
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erreur: package.json introuvable. Êtes-vous dans le dossier du portfolio ?${NC}"
    exit 1
fi

npm install

# 1. Build de l'application React
echo -e "${YELLOW}📦 Build de l'application React...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Erreur: Le dossier dist n'a pas été créé${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build React terminé${NC}"

# 2. Arrêter le conteneur portfolio
echo -e "${YELLOW}🛑 Arrêt du conteneur portfolio...${NC}"
cd ..
sleep 5

docker-compose stop chatbot

# 3. Rebuild de l'image Docker (sans cache)
echo -e "${YELLOW}🐳 Reconstruction de l'image Docker...${NC}"
docker-compose build --no-cache chatbot

# 4. Redémarrer le conteneur
echo -e "${YELLOW}▶️  Démarrage du nouveau conteneur...${NC}"
docker-compose up -d chatbot

# 5. Vérifier le statut
echo -e "${YELLOW}🔍 Vérification du statut...${NC}"
sleep 5
docker-compose ps chatbot

# 6. Afficher les logs
echo -e "${YELLOW}📋 Logs duchatbot:${NC}"
docker-compose logs --tail=30 chatbot

echo -e "${GREEN}✨ Rebuild complet terminé!${NC}"
echo -e "${YELLOW}💡 Accédez à votre portfolio via l'URL configurée dansCHATBOT_HOSTNAME${NC}"
