FROM node:alpine
COPY . /app
WORKDIR /Frontend
CMD npm run dev