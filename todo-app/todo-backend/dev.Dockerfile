FROM node:24.8.0-bookworm-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 3000
CMD ["nodemon", "./bin/www"]

