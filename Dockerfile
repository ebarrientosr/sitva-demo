FROM registry.access.redhat.com/ubi8/nodejs-18-minimal:1
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

