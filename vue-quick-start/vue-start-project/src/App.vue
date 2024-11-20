<template>
  <div class="containter" id="app">
    <div class="card">
      <h1
        :style="{ color: inputValue.length < 5 ? 'darkred' : 'darkblue', fontSize: inputValue.length < 6 ? '35px' : '30px' }">
        {{ title }}</h1>
      <div class="form-control">
        <input type="text" v-bind:placeholder="placeh" v-model="inputValue" v-on:keypress.enter="addNewNote" />
        <!-- !!! v-bind = : , v-on = @ !!! Сверху где-то так и сделано -->
      </div>
      <h2>input с кнопки: {{ inputValue }}</h2>
      <button class=" btn" v-on:click="addNewNote">Добавить заметку</button>
      <hr />
      <ul v-if="notes.length !== 0">
        <li class="list-item" v-for="(myNote, idx) in notes">
          №{{ idx + 1 }}: {{ toUpperCase(myNote) }}
          <button class="btn danger" v-on:click="deleteNote(idx, $event)">Удалить</button>
        </li>

      </ul>
      <!-- <div v-else-if="notes.length === 1"> Друг, всего 1 заметка! Добавь еще пожалуйста!</div> -->
      <div v-else> Увы! Список заметок пуст :( добавьте заметки!</div>
      <hr />
      <p>Общее количество заметок: {{ notesCount }} | Удвоенное: {{ doubledNotesCount }}</p>
    </div>
  </div>
</template>
<style>
h3 {
  font-weight: lighter;
}

p {
  color: red;
}
</style>
<script>
import { ref, computed, watch } from 'vue'

export default {
  setup() {
    // const counter = ref(0)
    const title = ref(`Список заметок`)
    const placeh = ref("Введите заметку!")
    const inputValue = ref('')
    const notes = ref(['Заметка 1', 'Заметка 2', 'Заметка 3']);
    const addNewNote = () => {
      if (inputValue.value !== "") {
        notes.value.push(inputValue.value)
        inputValue.value = ''
      }
    }
    const deleteNote = (idx, event) => {
      notes.value.splice(idx, 1)
    }
    const toUpperCase = (item) => {
      return item.toUpperCase()
    }

    const notesCount = computed(() => notes.value.length)
    const doubledNotesCount = computed(() => notesCount.value * 2)
    // const increment = () => counter.value += 2
    // const decrement = () => counter.value--
    watch(inputValue, (newValue, oldValue) => {
      console.log(`Значение inputValue изменилось с "${oldValue}" на "${newValue}"`)
      if (newValue.length > 10) {
        inputValue.value = ''
        alert("Хехе, больше 10 не вводи, брат")
      }
    })
    return {
      // counter,
      // increment,
      // decrement,
      title,
      placeh,
      notes,
      inputValue,
      addNewNote,
      deleteNote,
      toUpperCase,
      notesCount,
      doubledNotesCount
    }
  }
}
</script>