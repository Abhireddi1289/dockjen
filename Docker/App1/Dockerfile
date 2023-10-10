FROM node:20-alpine

WORKDIR /Abhi/app/

COPY package.json .
COPY Abhiworld.js .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "Abhiworld.js"]
