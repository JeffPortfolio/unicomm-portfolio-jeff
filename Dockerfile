FROM node:16.15.1-buster as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm ci --production

COPY . .

RUN npm run build

FROM nginx:1.23.1

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
