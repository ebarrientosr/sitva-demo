FROM node:18.16-alpine as build
WORKDIR /app
# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./
RUN npm install
# Copiar todo el contenido de la aplicación
COPY . .

# Compilar la aplicación
RUN npm run build
# Etapa 2: Crear la imagen de producción
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
# Copiar los archivos de construcción desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html
# Exponer el puerto en el que se ejecutará el servidor Nginx
RUN chmod 777 -R /run
EXPOSE 4580
# Comando para iniciar el servidor Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
