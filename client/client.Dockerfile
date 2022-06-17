FROM node:14-alpine as build

USER node

WORKDIR /client

COPY --chown=node:node client/package.json .

RUN npm install

COPY --chown=node:node client .

ENV REACT_APP_SERVER=$REACT_APP_SERVER

ENV REACT_APP_PORT=$PORT

RUN npm run build

EXPOSE $APP_PORT

CMD [ "npm", "build" ]

FROM node:14-alpine

RUN npm install -g serve

USER node

WORKDIR /client

COPY --chown=node:node --from=build /client/build build

CMD serve build