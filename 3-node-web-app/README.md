# Node Web App with Dockerfile

In this lesson, we are going to be looking at how to do following list of tasks:

1. Create very basic Node JS express Web App in TypeScript.
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

4. You can access directory structure for debugging purpose.
     - `$ docker run -it shawnkoon/simpleweb:latest sh`

5. If you know the container id, you can attach into running container.
     - `$ docker exec -it <CONTAINER ID/NAMES> sh`

## Key Takeaways 🎯

- Order of **Dockerfile** instructions matter.
- Developer can reduce unnecessary cache busting and re-installing dependencies by separating `COPY` commands.
- You have to **map ports** in order to access port in container application.
- `WORKDIR` command will set pwd on **ANY** subsequent container commands. (Even attaching into container).
