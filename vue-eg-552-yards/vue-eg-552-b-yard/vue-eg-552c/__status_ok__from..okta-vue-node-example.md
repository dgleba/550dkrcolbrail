_____________

Status:

I like this as an example app. 2021-01-05

works.
needs improvements.

_____________



Goal:

Simple vue crud for backend api with auth, etc.

_____________

=================================================

todo:

refactor naming. use ppost for post table name

add cancel button to form.

error notifications? May be enough.

add search feature

add pagination?

add pbook table

add searchable select box of pbook in ppost

remove edit/delete buttons from table. click row to edit. show delete button on form if editing.


_____________


done:

add toast or something that shows loading status over top of page, not inserted in div.
    added https://bootstrap-vue.org/docs/components/overlay

show current user. login if not logged in and logout if logged in.

add create button --  show hidden form on pressing create.
    idea: git clone -b formReuse --single-branch https://github.com/MaxMonteil/VueTodo.git
    

=================================================


detail:

front:
okta-vue-node-example
sftp://192.168.88.60/srv/dkr/550dkrcolbrail/vue-eg-552-yards/vue-eg-552-b-yard/vue-eg-552c

back:
sftp://192.168.88.60/srv/dkr/550dkrcolbrail/vue-eg-552-yards/brail542c17


_____________


issue:


some of it works.
cors error on edit.

some actions like put were not in cors setup in rails config/application.rb



=================================================
