FROM registry.access.redhat.com/ubi8/nodejs-14

CMD [ "npm", "start" ]

RUN mkdir app

WORKDIR app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci

COPY dist .