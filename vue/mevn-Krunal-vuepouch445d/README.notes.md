# Notes

## Error - "id" to be defined

error:
[vue - router] missing param for named route "edit": Expected "id" to be defined

ggl: vue - router missing param for named route edit Expected id to be defined

https://github.com/vuejs/vue-router/issues/986

https://codepen.io/anon/pen/LbmQrm?editors=1010

```
const routes = [{
  ...
name: "edit",
path: "/edit/:id",
component: EditComponent
```

## Error -- put

press create button, get this error.

Vue warn Error in v-on handler TypeError Cannot read property put of undefined

```
Error in v-on handler: "TypeError: Cannot read property 'put' of undefined"

[Vue warn]: Error in v-on handler: "TypeError: Cannot read property 'put' of undefined"
TypeError: Cannot read property 'put' of undefined

---

viuid= 190224_2056.08.342-0500-8280
Object {title: "erf"}
[Vue warn]: Error in v-on handler: "TypeError: Cannot read property 'put' of undefined"

found in
---> <CreateComponent> at /src/components/CreateComponent.vue
<Root>
TypeError: Cannot read property 'put' of undefined
at VueComponent.addMrow (https://109ozmpqnq.codesandbox.io/src/components/CreateComponent.vue?ada01e5e:77:19)
at submit (https://109ozmpqnq.codesandbox.io/src/components/CreateComponent.vue?841d613a:1:318)
at invokeWithErrorHandling (https://109ozmpqnq.codesandbox.io/node_modules/vue/dist/vue.common.dev.js:1859:26)
at HTMLFormElement.invoker (https://109ozmpqnq.codesandbox.io/node_modules/vue/dist/vue.common.dev.js:2183:14)
at HTMLFormElement.original.\_wrapper (https://109ozmpqnq.codesandbox.io/node_modules/vue/dist/vue.common.dev.js:7502:25)
```

##
