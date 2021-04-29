FROM node:14.15.0-buster

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon cmake-js

CMD ["nodemon", "index.js"]