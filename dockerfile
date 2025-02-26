# Használjunk egy hivatalos Node.js image-t alapként
FROM mcr.microsoft.com/playwright:latest

# Állítsuk be a munkakönyvtárat
WORKDIR /app

# Másoljuk be a package.json fájlokat
COPY package.json package-lock.json ./
RUN npm install

# Másoljuk be a projekt többi fájlt
COPY . .

# Telepítsük a Playwright böngészőket
RUN npx playwright install

# Futtassuk a teszteket
CMD ["npx", "playwright", "test"]