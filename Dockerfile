FROM node:14 as client-builder

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

COPY client/ ./

RUN npm run build

FROM node:lts-alpine

WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY server/ ./

RUN npx prisma generate

RUN npm run build

COPY --from=client-builder /app/client/dist /app/server/public

COPY server/ ./

EXPOSE 5000

CMD ["npm", "start"]
