<template>
  <div id="app">
    <hr>
    https://www.tutorialspoint.com/vuejs/vuejs_reactive_interface.htm
    <hr>
    <p style="font-size: 25px">Counter: {{ counter }}</p>
    <button @click="counter++" style="font-size: 25px">Click Me</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!",
      counter: 1,
    };
    vm.$watch("counter", function (nval, oval) {
      alert("Counter is incremented :" + oval + " to " + nval + "!");
    });
    setTimeout(function () {
      vm.counter = 20;
    }, 2000);
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
