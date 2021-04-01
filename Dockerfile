FROM registry.access.redhat.com/ubi8/nodejs-14
# version set

WORKDIR /opt/app-root/src

# ADD app-src .

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install

WORKDIR /opt/app-root

RUN npm run build-prod

COPY dist .

CMD [ "npm", "start" ]


# FROM registry.access.redhat.com/ubi8/nodejs-14
# WORKDIR /opt/app-root/src
# COPY . .
# RUN npm install
# EXPOSE 3000
# CMD [ "npm", "start" ]





# FROM registry.access.redhat.com/ubi8/nodejs-14 AS builder

# WORKDIR /opt/app-root/src

# RUN mkdir client
# COPY --chown=default:root client client
# COPY package*.json ./
# RUN npm ci

# WORKDIR /opt/app-root/src/client 

# RUN npm ci && npm run build-prod

# FROM registry.access.redhat.com/ubi8/nodejs-14

# COPY --from=builder /opt/app-root/src/client/build client/build
# COPY dist dist
# COPY server server
# COPY package.json .
# RUN npm install --production

# ENV NODE_ENV=production
# ENV HOST=0.0.0.0 PORT=3000

# EXPOSE 3000/tcp

# CMD ["npm", "start"]
