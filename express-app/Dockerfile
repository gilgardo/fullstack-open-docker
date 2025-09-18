FROM node:24.8.0-bookworm-slim
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV DEBUG=playground:*
  

USER node

CMD ["npm", "start"]