FROM node:9.2-alpine

EXPOSE 3000
WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn install

COPY . .

RUN yarn compile

CMD yarn serve

