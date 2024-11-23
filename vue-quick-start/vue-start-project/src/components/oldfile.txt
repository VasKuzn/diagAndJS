<template>
  <div class="containter" id="app" v-cloak>
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
          <!-- <span :class="myNote.length>5 ? 'primary' : 'bold'">№{{ idx + 1 }}: {{ toUpperCase(myNote) }}</span> -->
          <!-- <span :class="
          {
            'primary': true,
            'bold': myNote.length >5
          }">№{{ idx + 1 }}: {{ toUpperCase(myNote) }}</span> -->
          <span :class="['bold',{'primary' : myNote.length >5}]">№{{ idx + 1 }}: {{ toUpperCase(myNote) }}</span>
          <button class="btn danger" v-on:click="deleteNote(idx, $event)">Удалить</button>
        </li>

      </ul>
      <!-- <div v-else-if="notes.length === 1"> Друг, всего 1 заметка! Добавь еще пожалуйста!</div> -->
      <div v-else> Увы! Список заметок пуст :( добавьте заметки!</div>
      <hr />
      <p>Общее количество заметок: {{ notesCount }} | Удвоенное: {{ doubledNotesCount }}</p>
      <hr/>
      <ul class="list">
        <li class="list-item" v-for="(value,key) in personChar">{{key}}: <strong>{{value}}</strong>

        </li>
      </ul>
      <div>
        <input type="text" @keyup.enter = "addItem" ref="myInput">
      </div>
      <ul class="list" v-show = "items.length>0">
        <li class="list-item" v-for ="(item,idx) in items" @click.right.prevent="deleteFunc(idx), alerting(item)">
          {{item}}&nbsp;<input type = "text" @click.stop :key="item">
        </li>
      </ul>
      <div class="divisional" v-show = "items.length ===0">
        Элементов, к сожалению, нет!
      </div>
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
.bold
{
  font-weight: bold;
  color:cadetblue;
}
.primary
{
  color:brown;
  font-style: italic;
}
[v-cloak]
{
  display:none;
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
    const evenItems = computed(()=> items.value.filter(i => i%2 ===0))
    const personChar = 
    {
      firstName: "Vasily",
      lastName: "Kuznetsov",
      age: "20"
    }
    const items = ref([1,2,3,4,5,6])
    const deleteFunc = (i) => 
    {
      items.value.splice(i,1);
    }
    const addItem=()=>
    {
        items.value.unshift(myInput.value)
        myInput.value = ''
    }
    const myInput = ref(null);
    // const increment = () => counter.value += 2
    // const decrement = () => counter.value--
    const alerting = (item) =>
    {
      alert(` Вы удалили ${item}`)
    }
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
      doubledNotesCount,
      personChar,
      items,
      deleteFunc,
      evenItems,
      addItem,
      myInput,
      alerting
    }
  }
}
</script>