FROM node:14 as build-deps

WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ARG REACT_APP_API_HOST
ENV REACT_APP_API_HOST = $REACT_APP_API_HOST

COPY package.json package-lock.json ./
RUN npm ci --silent
RUN npm i react-scripts -g --silent
RUN npm i serve -g  --silent
COPY . ./
RUN npm run build

# Serve command
CMD serve -s build
