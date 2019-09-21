# Production Grade Docker Setup

In this lesson, we are going to be learning about how to create proudction quality application using docker. Goal is to create Development/Production Docker setups.

## How to run 💻

- Development Server

    ```bash

    # Build docker image.
    $ docker build -f Dockerfile.dev -t shawnkoon/5-production-web:latest .

    ...

    # Execute docker image in a container.
    $ docker run -p 3000:3000 shawnkoon/5-production-web

    ...

    Compiled successfully!

    You can now view 5-production-grade in the browser.

      Local:            http://localhost:3000/
      On Your Network:  http://172.17.0.2:3000/

    Note that the development build is not optimized.
    To create a production build, use npm run build.

    # If you want to sync files
    # -v /usr/app/node_modules make it so that you don't need to have node_modules locally.
    $ docker run -p 3000:3000 -v /usr/app/node_modules -v $(pwd):/usr/app shawnkoon/5-production-web

    # Running test
    $ docker run -it shawnkoon/5-production-web npm run test


    # OR...

    $ docker-compose up

    ```

- Production Server

    ```bash

    # Build npm && create nginx server with built files.
    $ docker build -t shawnkoon/5-production-web:1.0.0 .

    # Create & run docker container.
    $ docker run -p 8080:80 shawnkoon/5-production-web:1.0.00
    ```

  - Then, navigate to `http://localhost:8080`.

## Key Takeaways 🎯

- If utilized correctly, docker can be used for both development and production workflow.
- Following are dockerfile on purpose of `development` workflow.
  - `Dockerfile.dev`
  - `docker-compose.yml`
- You can add `as <name>` after `FROM <img_name>` in dockerfile, which then can be used as a reference from next block of container steps.
