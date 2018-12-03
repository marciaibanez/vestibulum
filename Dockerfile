FROM node:11-alpine
WORKDIR /app
COPY ./package.json ./yarn.lock .
RUN yarn
COPY . .
RUN yarn run build
EXPOSE 3000
