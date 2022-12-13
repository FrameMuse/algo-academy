FROM node:14 as build-deps

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm i --silent
RUN npm i -g serve
COPY . ./
RUN CHOKIDAR_USEPOLLING=true && npm run build

ENV test myValue

# Serve command
CMD serve -s build
