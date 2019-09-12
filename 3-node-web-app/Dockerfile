# Specify base image
FROM node:alpine

# Change into safe directory
WORKDIR /usr/app

# Copy over package file only
COPY ./package.json ./

# Install dependencies
RUN npm install

# COPY Rest of files
COPY ./ ./

# Default command
CMD ["npm", "start"]
