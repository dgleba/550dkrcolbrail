FROM node:10-alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# USER node

WORKDIR /app

RUN apk add --no-cache \
        python3 \
        make \
        g++ \
        gcc 

COPY package*.json ./

# RUN npm install

# COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "index.js" ]
