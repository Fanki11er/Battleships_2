FROM node:14-alpine as build

USER node

WORKDIR /client

COPY --chown=node:node client/package.json .

RUN npm install

COPY --chown=node:node client .

RUN npx browserslist@latest --update-db

RUN npm run build

ENV REACT_APP_SERVER=$REACT_APP_SERVER

EXPOSE $PORT

CMD [ "npm", "build" ]

FROM nginx:alpine

COPY --from=build /client/build /usr/share/nginx/html

