# Node Web Application in Docker Compose

In this lesson, we are going to be learning about how to create two or more services in containers to work together.

As you can see in the `docker-compose.yml` file, we are creating basic express application which talks to Redis which is in it's own container. They are under same **services** which by default make them be able to talk to each other through same network.

## How to run 💻

1. Run containers.

    ```bash
    $ docker-compose build

    ...


    $ docker-compose up

    Creating network "4-docker-compose_default" with the default driver
    Creating 4-express ... done
    Creating 4-redis   ... done
    Attaching to 4-redis, 4-express

    ...
    ```

2. Access the web app.
    - `http://localhost:3000`.

## Docker-Compose tricks 👾

1. By default, all **services** are connected through default network.

2. restart policies
    - "no" (default) : Never attempt to restart this container if it stops or crashes
    - "always" : If this container stops **for any reason**, always attempt to restart it.
    - "on-failure" : Only restart container if it was stopped with an error code(non 0).
    - "unless-stopped" : Always restart container, **unless** we forcibly stop it.

## Key Takeaways 🎯

1. By default, `docker-compose` creates default network, which connects services listed under yml file to talk to each other via network.
2. You can create `restart policy` within the service.
