FROM node:16

WORKDIR /usr
COPY .env ./
COPY jest.config.js ./
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

## this is stage two , where the app actually runs
FROM node:16
WORKDIR /usr
COPY .env ./
COPY jest.config.js ./
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install --only=production
COPY --from=0 /usr/dist .
RUN npm install pm2 -g
EXPOSE 3333
CMD ["pm2-runtime","index.js"]