
No need:  dc run --rm vuedev npm init

https://cli.vuejs.org/guide/installation.html


works 
    dc run --rm vuedev npm install -g @vue/cli
but..
    dc run --rm vuedev vue create hello-world
throws error.

    workaround.. use host installed vue-cli to run vue create.

dc run --rm vuedev vue --version



dc run --rm vuedev yarn

dc run --rm vuedev yarn  serve



Permission:

dc run --rm vuedev bash -c 'chmod -R go+rw /app; chgrp -R 33 /app;'


=================================================

https://medium.com/@jwdobken/vue-with-docker-initialize-develop-and-build-51fad21ad5e6


=================================================

vue create hello-world


error:

albe@vamp398:/srv/test/vues/vuedgdev-553-yard/vuedev553$ dc run --rm vuedev vue create hello-world

internal/modules/cjs/loader.js:883
  throw err;
  ^

Error: Cannot find module '/app/vue'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
albe@vamp398:/srv/test/vues/vuedgdev-553-yard/vuedev553$


https://github.com/vuejs/vue-cli/issues/5107



=================================================

vue yarn run serve not reachable docker

https://stackoverflow.com/questions/56641438/unable-to-connect-to-dockerised-vue-cli-service-from-host


I didn't realise that docker-compose run doesn't set up the ports defined in the docker-compose.yml by default. This can be forced by docker-compose run --service-ports.

command: ['yarn', 'serve']


=================================================

i don't have this issue

https://stackoverflow.com/questions/59224130/docker-compose-hot-reloading-does-not-work-with-vuejs-app/63273539

=================================================


https://github.com/vuejs/vue-cli/issues/5107

this didn't help.

https://github.com/vuejs/vue-cli/issues/3506#issuecomment-466915042


=================================================

