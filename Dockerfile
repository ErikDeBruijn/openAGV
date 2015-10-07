#base-image for arm with node
FROM resin/armv7hf-node

# install deps on build server
RUN npm install express
RUN npm install brickpi-raspberry

# copy all files to /app dir
COPY . /app 

# Run server when container runs on device
CMD ["node", "/app/agv-server.js"] 

MAINTAINER Erik de Bruijn <robots@erikdebruijn.nl>