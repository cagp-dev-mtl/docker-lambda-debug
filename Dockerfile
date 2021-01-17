FROM node:12-alpine as base

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Copy handler and package.json
COPY handler.ts ${WORKDIR}
COPY package.json ${WORKDIR}

# Install app dependencies
RUN cd /code; npm install

CMD ["npm", "run", "debug"]
