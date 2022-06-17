FROM node:14-alpine

USER node

WORKDIR /server

COPY --chown=node:node server/package.json .

RUN npm install

COPY --chown=node:node /server .

ENV SENDGRID=$SENDGRID

ENV NUBER_OF_ROOMS=$NUMBER_OF_ROOMS

EXPOSE $PORT

CMD [ "npm", "start" ]

