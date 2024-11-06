# Usar una imagen de Node.js oficial
FROM mcr.microsoft.com/playwright:v1.46.0-noble

# Crear y definir el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos necesarios al contenedor
COPY package*.json ./
COPY index.js ./

# Instalar las dependencias (incluye Playwright)
RUN npm install

# Configurar el punto de entrada del contenedor
CMD ["node", "index.js"]
