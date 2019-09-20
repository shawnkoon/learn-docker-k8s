# Production Grade Docker Setup

In this lesson, we are going to be learning about how to create proudction quality application using docker. Goal is to create Development/Production Docker setups.

## How to run

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

    ```
