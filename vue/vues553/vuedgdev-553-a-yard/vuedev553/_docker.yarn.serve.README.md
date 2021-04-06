# How to run this.


works:

vue cli project..

Set image from docker and project name:

    nodeimg='node:14.15-slim'

    proj=vuecliproj03

create:

    mkdir -p $proj ;  cd "$_" ; 
      docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it $nodeimg sh -c "yarn global add @vue/cli && vue create . "

      originally: node:11.1-alpine 
        try specific: docker pull $nodeimg
        
perm:

    docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node:14-slim sh -c "chmod -R 777 ./node_modules && chmod -R ugo+rw . && chown -R 1000:33 ."

    - chown:  albe user is 1000. 33 is www-data group. You may need to adjust these numbers to your user and a group you are in to get permission to write etc.

install node packages:

    docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node:14-slim sh -c "yarn"

run dev serve:

    docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -p 14329:8080 -it  $nodeimg sh -c "yarn serve"


---

shell into container:

    docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node:14-slim sh

variables:

    echo ${PWD}
    echo $(basename `pwd`)
    echo "${PWD}:/$(basename `pwd`)"



ref.
https://medium.com/@jwdobken/vue-with-docker-initialize-develop-and-build-51fad21ad5e6


# .

