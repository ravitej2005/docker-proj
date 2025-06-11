FROM node:18
RUN npm install -g nodemon
RUN npm install -g cors
WORKDIR /app


COPY . .

RUN npm install

EXPOSE 5000

CMD [ "npm","start"]