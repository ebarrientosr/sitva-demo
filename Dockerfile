FROM quay.io/app-sre/ubi8-nodejs-16
WORKDIR /opt/app-root/src
COPY . .
RUN npm install
