<template>
    <button :class="{ 'btn': true, [color]: color }" @click="$emit('action')">{{text}}</button>
  </template>
  
  <script>
  export default {
    props: {
        text:{
            type:String,
            required:true
        },
      color: {
        type: String,
        default: '',
        validator(value)
        {
            return ['','primary','danger'].includes(value)
        }
      }
    }
  }
  </script>