FROM node
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
CMD ['node', 'index.js']