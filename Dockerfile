FROM node:12

WORKDIR /opt

COPY . /opt

CMD npm run start:prod