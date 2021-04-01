FROM registry.access.redhat.com/ubi8/nodejs-14
# version set

WORKDIR /opt/app-root/src

COPY --chown=default:root . .

ENV NODE_ENV=production

RUN npm install

RUN npm run build-prod

CMD [ "npm", "start" ]


# FROM registry.access.redhat.com/ubi8/nodejs-14 AS builder

# WORKDIR /opt/app-root/src

# RUN mkdir client
# COPY --chown=default:root . .
# RUN npm install

# WORKDIR /opt/app-root/src

# RUN npm install && npm run build-prod

# FROM registry.access.redhat.com/ubi8/nodejs-14

# COPY --from=builder dist dist
# COPY --from=builder server server
# COPY package*.json
# RUN npm install --production

# ENV NODE_ENV=production
# ENV HOST=0.0.0.0 PORT=3000

# EXPOSE 3000/tcp

# CMD ["npm", "start"]