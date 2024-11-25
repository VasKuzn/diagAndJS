<template>
    <h1>{{ title }}</h1>
    <hr/>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, dolor? Est, aliquam inventore! Voluptates corporis nobis perspiciatis dicta ex nisi.</p>
  </template>
  
  <script>
  import { ref, computed, watch } from 'vue'
  
  export default {
    setup() {
      const title = ref("Заголовочек емае")
      return {
        title
      }
    }
  }
  </script>