# About Dockerfile & basic custom redis example

In this lesson, we are going to take a look at how to **use** Dockerfile and **create** custom redis image.

## Definitions 🔍

**Dockerfile** - A text document that contains all the commands a user could call on the command line to assemble an image.

**$ docker build <context>** - Command builds an image from a Dockerfile and a context. The build’s context is the set of files at a specified location PATH or URL. The PATH is a directory on your local filesystem.

**.dockerignore file** - Before the docker CLI sends the context to the docker daemon, it looks for a file named `.dockerignore` in the root directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using **ADD** or **COPY**.

## Dockerfile instructions

    ADD - Copies new files, directories or remote file URLs from <src> and adds them to the filesystem of the image at the path <dest>. ex) ADD <src> <dest>

    ARG - Defines a variable that users can pass at build-time to the builder with the docker build command using the --build-arg <varname>=<value> flag. If a user specifies a build argument that was not defined in the Dockerfile, the build outputs a warning.

    CMD - Provide defaults for an executing container. These defaults can include an executable, or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.

    COPY - Copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>.

    ENTRYPOINT - Allows you to configure a container that will run as an executable.

    ENV - Sets the environment variable <key> to the value <value>. This value will be in the environment for all subsequent instructions in the build stage and can be replaced inline in many as well. ex) ENV <key> <value>

    EXPOSE - Informs Docker that the container listens on the specified network ports at runtime. You can specify whether the port listens on TCP or UDP, and the default is TCP if the protocol is not specified.

    FROM - Initializes a new build stage and sets the Base Image for subsequent instructions.

    LABEL - Adds metadata to an image. A LABEL is a key-value pair. To include spaces within a LABEL value, use quotes and backslashes as you would in command-line parsing.

    RUN - Execute any commands in a new layer on top of the current image and commit the results. The resulting committed image will be used for the next step in the Dockerfile.

    USER - Sets the user name (or UID) and optionally the user group (or GID) to use when running the image and for any RUN, CMD and ENTRYPOINT instructions that follow it in the Dockerfile.

    VOLUME - Creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers.

    WORKDIR - Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile. If the WORKDIR doesn’t exist, it will be created even if it’s not used in any subsequent Dockerfile instruction.

    etc...

[source](https://docs.docker.com/engine/reference/builder/)

## CLI command

    * To Add image name to Dockerfile image.

    $ docker build -t <IMAGE_NAME> .
    // IMAGE_NAME convention : <user_name>/<image_purpose>:<version>


    * To Run newly created docker image.

    $ docker run <IMAGE_NAME>

## Key Takeaways 🎯

- Docker creates new image on every steps in **Dockerfile**.
- Docker will use *cached* images if nothing has been changed in **Dockerfile**.
- Docker will use *cached* images **until** the new change in **Dockerfile**, then every subsequent steps creates new images.
