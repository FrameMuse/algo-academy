# FROM node:14 as build-deps

# WORKDIR /usr/src/app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json package-lock.json ./
# RUN npm i --silent
# RUN npm i -g serve
# COPY . ./
# RUN npm run build

# # Serve command
# CMD serve -s build
