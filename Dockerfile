FROM node:current-alpine3.19
WORKDIR /app/
COPY package*.json /app/
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT ["npm","start"]