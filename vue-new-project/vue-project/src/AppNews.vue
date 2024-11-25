<template>
    <div class="card">
      <h3>Новость №{{ i + 1 }}: {{ snew }}</h3>
      <button class="btn" @click="toggleDetails">{{ isOpen ? 'Закрыть' : 'Подробнее' }}</button>
      <div v-if="isOpen">
        <hr />
        <p>{{ etc }}</p>
        <button class="btn primary" @click="mark" v-if="!was_read">Прочесть новость</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      snew: String,
      i: Number,
      etc: String,
      wasRead: Boolean,  // Добавим пропс для отслеживания состояния "прочитано"
    },
    emits: {
      'open-news': null,
      'read-news': null,
      'toggle-read': null,  // Новый эмит для отметки новости как прочитанной
    },
    setup(props, { emit }) {
      const isOpen = ref(false);
      const was_read = ref(props.wasRead); // Используем пропс для начальной установки
  
      const toggleDetails = () => {
        isOpen.value = !isOpen.value;
        if (isOpen.value) {
          emit('open-news', 42);
        }
      };
  
      const mark = () => {
        was_read.value = true;  // Отмечаем новость как прочитанную
        emit('read-news');  // Отправляем событие о том, что новость прочитана
        emit('toggle-read', props.i);  // Отправляем ID новости в родительский компонент
      };
  
      return {
        isOpen,
        toggleDetails,
        mark,
        was_read,
      };
    }
  };
  </script>
  
  <style scoped>
  /* Стили компонента */
  </style>