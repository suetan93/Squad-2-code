FROM registry.access.redhat.com/ubi8/nodejs-14
# version set

CMD [ "npm", "start" ]

WORKDIR app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci

RUN npm run build-prod

COPY dist .
