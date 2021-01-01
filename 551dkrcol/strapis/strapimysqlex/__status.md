
status:

this backend seems to work. 

    but sibling..  strapi-starter-vue-blog  has error.


goal:

try strapi back with vue front


_____________

detail.


https://strapi.io/blog/build-a-blog-with-vue-strapi-and-apollo


https://github.com/strapi/strapi-starter-vue-blog


https://github.com/strapi/strapi-docker


dgleba@gmail.com dgdg David1212@gmail.com


http://192.168.88.60:1337/admin/plugins/content-type-builder/content-types/application::contact.contact



dc exec strapi bash -c 'strapi console'

dc exec strapi bash -c 'strapi install graphql'


curl 'http://192.168.88.60:1337/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://192.168.88.60:1337' --data-binary '{"query":"# Write your query or mutation here\n"}' --compressed

