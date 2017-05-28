FROM node:alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
ENV PORT 80
EXPOSE 80
CMD node index.js
