
FROM node:24.8.0-bookworm-slim AS base

WORKDIR /usr/src/app

COPY package*.json ./


FROM base AS build-stage

RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run build


FROM base AS test-stage

RUN npm ci

COPY . .

ENV NODE_ENV=test

RUN npm run test


FROM nginx:1.29.1-alpine AS production-stage

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
