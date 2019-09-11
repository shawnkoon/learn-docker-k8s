# Node Web App with Dockerfile

In this lesson, we are going to be looking at how to do following list of tasks:

1. Create Node JS Web App.
2. Build custom image of our application.
3. Run newly built web app image in a container.
4. Access the web app from our host machine.

## How to run 💻

1. Create Docker image.
     - `$ docker build -t <your_name>/simpleweb .`

2. Run Docker image.
     - `$ docker run -p 8080:8080 <your_name>/simpleweb:latest`

3. Access Web server.
     - `http://localhost:8080`.
