FROM ubi8/nodejs-16
LABEL authors="ebarrientosr"

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

ENTRYPOINT ["top", "-b"]
