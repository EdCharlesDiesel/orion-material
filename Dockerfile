FROM node:20.17.0 AS build 

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build app/dist/orion-material /usr/share/nginx/html

EXPOSE 80