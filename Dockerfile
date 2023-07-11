FROM node:16

WORKDIR /usedMarket/
COPY ./package.json /usedMarket/
COPY ./yarn.lock /usedMarket/
RUN yarn install

COPY . /usedMarket/
RUN yarn build

CMD yarn start