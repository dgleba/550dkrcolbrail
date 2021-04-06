<template>
  <section id="contactApp">
    <h1>{{contact.name}}</h1>
    <p>{{contact.bio}}</p>
  </section>
</template>

<script>
export default {
  name: 'Contact_Person',
  props: ['contact'], 
  // If you sent another attribute in the data, add it in the array as well
  // Like ['contact', 'message'],
  data() {
    return {
     // define data here
    }
  }
}
</script>
