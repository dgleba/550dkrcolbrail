// We need Vue so we can do all the things
import Vue from 'vue'

// Special little mixin that allows working 
// in a Turbolinks environment more friendly

// import TurbolinksAdapter from 'vue-turbolinks';

// This is where we have our template, and methods, and fun stuff
import ContactApp from './index.vue'

// Let's not load anything until turbolinks has done it's deal
document.addEventListener('turbolinks:load', () => {
  // We are going to create a constant 
  // from on our mounting element in edit.html.erb
  const element = document.getElementById("contactApp")
  
  // Next we want to grab and parse the json from 
  // the mounting element's data attribute
  const props = JSON.parse(element.getAttribute('data'))

  // Here we are creating conditional that won't build the instance
  // UNLESS the element is present, and props is present
  if (element != null && props != null) {
    
    // The rest should look pretty familar
    var contactApp = new Vue({
      el: '#contactApp',
      // except we are passing the props like so in the render
      render: h => h(ContactApp, { props }),
      mixins: [TurbolinksAdapter],
    });
  }
});
