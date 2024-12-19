# Build stage
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG VITE_API_URL
ARG CORS_ORIGIN
ENV VITE_API_URL=$VITE_API_URL
ENV CORS_ORIGIN=$CORS_ORIGIN

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
