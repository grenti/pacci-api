FROM node:7

# Create app directory
RUN mkdir -p /usr/src/pacci-api
WORKDIR /usr/src/pacci-api

# Install app dependencies
COPY package.json /usr/src/pacci-api/
RUN npm install && npm build

# Bundle app source
COPY . /usr/src/pacci-api/dist

EXPOSE 8080
CMD [ "npm", "start" ]
