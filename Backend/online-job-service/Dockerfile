FROM node:16.15.1-alpine
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
EXPOSE 6000
CMD npm run start
