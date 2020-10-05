#!/bin/sh

docker run \
    -p 3000:3000 \
    -v `pwd`/todos:/todos \
    -w /todos \
    -it node:alpine /bin/sh