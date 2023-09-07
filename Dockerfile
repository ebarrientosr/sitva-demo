FROM quay.io/app-sre/ubi8-nodejs-16 as node
WORKDIR /opt/app-root/src
COPY . .
RUN npm install
RUN npm run build:prod

FROM quay.io/bedrock/nginx
COPY --from=node /app/dist/angular-app /usr/share/nginx/html
