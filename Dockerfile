FROM quay.io/calico/node:latest
LABEL authors="ebarrientosr"

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

ENTRYPOINT ["top", "-b"]
