# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis

# Tell the image what todo when it starts as a container
CMD [ "redis-server" ]
