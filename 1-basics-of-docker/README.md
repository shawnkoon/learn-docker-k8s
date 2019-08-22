# Lesson 1 - Basics of Docker

In this lesson, we are going to be learning about what docker is, and some of the basic commands that will be useful when using docker!

## Definitions 🔍

**docker hub** - Public docker image registry. Can download/upload docker images of own.

**docker server** - Long running program docker daemon (`dockerd`) to manage docker objects like images, containers, networks, volumnes via Docker REST API.

**docker client** - Client which we as a users to interact with (`docker`) to talk to the docker server. According to the documentation, it uses REST API to talk with **docker server**.

**container** - Runnable instance of an image.

## About Docker

> **What is Docker?**
>
> Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.
>
> **Why Docker?**
>
> With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

[source](https://docs.docker.com/engine/docker-overview/)

## Basic CLI Commands 💻

```bash

$ docker run <img> <cmd?>
# Create / Run docker container with img and optional cmd.

$ docker create <img>
# Create docker container with img; then returns container ID.

$ docker start -a <container_id>
# Starts docker container of *container_id*.
# “-a” makes it run in attach mode.

$ docker logs <container_id>
# Display all the sys logs happened during the container execution.

$ docker system prune
# Removes everything (with prompt)

$ docker stop <container_id>
# Triggers `SIGTERM` and hope it gracefully stops.
# Forced shutdown after *10 seconds*.

$ docker kill <container_id>
# Triggers `SIGKILL` and force shutdown.

$ docker exec -it <container_id> <command>
$ docker run -it <container_id> <command>
# `exec` Executes an additional command in a container.
# “-i” Connects my terminal to STDIN of container.
# “-t” Basically makes the STDOUT more user-friendly.
# <command> - examples of command processors
#     * “sh”
#     * “bash”
#     * “powershell”
#     * “zsh”

```
