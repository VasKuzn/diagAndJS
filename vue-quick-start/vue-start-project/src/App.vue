<template>
  <div class="containter" id="app" v-cloak>
    <div class="boxer">
      <h1 class = "header-title">{{title}}</h1>
      <div class = "content">
        <p class="outer">{{ ob[selectedIndex].text }}</p>
      <ul class = "components">
        <li class = "components-item" v-for ="(item,key) in ob" :key="key" @click="selectItem(key)">
          <div class="elems"><span :class="{'completed': completed[key], 'selected': selectedIndex === key}">{{key+1}}</span> {{item.title}}</div>
        </li>
      </ul>
      </div>
      <div class = "buts">
        <button :class="{'but back': selectedIndex === 0, 'but':selectedIndex !== 0, 'disabled': selectedIndex === 0 }" @click="prevItem" :disabled="selectedIndex === 0">НАЗАД</button>
        <button class="but" @click="nextItem" v-if ="selectedIndex<4">ВПЕРЕД</button>
        <button class="but end" @click="resetFunc" v-else>ЗАВЕРШИТЬ</button>
      </div>
    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
*
{
  font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
[v-cloak]
{
  display:none;
}
.elems
{
  display:flex;
  justify-content: center;
  align-items: center;
}
span
{
  display:flex;
  margin: 0 5px 0 0;
  background-color:grey;
  border-radius: 25px;
  width:35px;
  height:35px;
  justify-content: center;
  align-items: center;
}
span.completed {
  background-color: lightgreen;
  color: black;
}
span.selected {
  color: white;
}
.buts
{
  display:flex;
  flex-direction:row;
}
.components
{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.components-item
{
  display:flex;
  flex-direction: row;
  margin-right: 10px;
  list-style: none;
  transition: transform 0.3s ease;
}
.components-item:hover
{
  transform: scale(1.05);
  cursor: pointer;
}
.but
{
  border-radius: 15px;
  margin:0 10px 0 0;
  width:150px;
  height: 25px;
  border-color:lightgreen;
  background-color:lightgreen;
  transition: transform 0.3s ease;
}
.back
{
  background-color:aliceblue;
}
.but.disabled {
  background-color: aliceblue !important;
  cursor: not-allowed !important; 
  transition: none !important; 
}
.disabled:hover {
  background-color: aliceblue !important;
  cursor: not-allowed !important; 
}
.but:hover
{
  transform: scale(1.05);
  cursor: pointer;
}
.containter
{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #2c3e50;
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
}
.boxer
{
  display: flex;
  flex-direction: column;
  padding:15px;
  background-color:aliceblue;
  font-size:16px;
  width: 55%;
  height: 25%;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px grey;
  min-height: 200px;
  height: auto; 
  overflow: hidden; 
}
</style>
<script>
import { ref, computed, watch } from 'vue'

export default {
  setup() {
    const ob = ref([{title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
    {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
    {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
    {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
    {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'}])
    const title = ref("План по изучению Vue.js")
    const selectedIndex = ref(0);
    const selectItem = (index) => {
      selectedIndex.value = index;
      completed.value[index] = true
    };
    const prevItem = () => {
      if (selectedIndex.value > 0) {
        selectedIndex.value--;
        completed.value[selectedIndex.value] = true
      }
    };

    const nextItem = () => {
      if (selectedIndex.value < ob.value.length - 1) {
        selectedIndex.value++;
        completed.value[selectedIndex.value] = true
      }
    };
    const completed = ref([true, ...Array(ob.value.length - 1).fill(false)]);
    const resetFunc = () =>
    {
      selectedIndex.value = 0;
      completed.value = [true, ...Array(ob.value.length - 1).fill(false)];
    }
    // // const counter = ref(0)
    // const title = ref(`Список заметок`)
    // const placeh = ref("Введите заметку!")
    // const inputValue = ref('')
    // const notes = ref(['Заметка 1', 'Заметка 2', 'Заметка 3']);
    // const addNewNote = () => {
    //   if (inputValue.value !== "") {
    //     notes.value.push(inputValue.value)
    //     inputValue.value = ''
    //   }
    // }
    // const deleteNote = (idx, event) => {
    //   notes.value.splice(idx, 1)
    // }
    // const toUpperCase = (item) => {
    //   return item.toUpperCase()
    // }

    // const notesCount = computed(() => notes.value.length)
    // const doubledNotesCount = computed(() => notesCount.value * 2)
    // const evenItems = computed(()=> items.value.filter(i => i%2 ===0))
    // const personChar = 
    // {
    //   firstName: "Vasily",
    //   lastName: "Kuznetsov",
    //   age: "20"
    // }
    // const items = ref([1,2,3,4,5,6])
    // const deleteFunc = (i) => 
    // {
    //   items.value.splice(i,1);
    // }
    // const addItem=()=>
    // {
    //     items.value.unshift(myInput.value)
    //     myInput.value = ''
    // }
    // const myInput = ref(null);
    // // const increment = () => counter.value += 2
    // // const decrement = () => counter.value--
    // const alerting = (item) =>
    // {
    //   alert(` Вы удалили ${item}`)
    // }
    // watch(inputValue, (newValue, oldValue) => {
    //   console.log(`Значение inputValue изменилось с "${oldValue}" на "${newValue}"`)
    //   if (newValue.length > 10) {
    //     inputValue.value = ''
    //     alert("Хехе, больше 10 не вводи, брат")
    //   }
    // })
    return {
      ob,
      title,
      selectedIndex,
      selectItem,
      prevItem,
      nextItem,
      resetFunc,
      completed
      // counter,
      // increment,
      // decrement,
      //title,
      //placeh,
      //notes,
      //inputValue,
      //addNewNote,
      //deleteNote,
      //toUpperCase,
      //notesCount,
      //doubledNotesCount,
      //personChar,
      //items,
      //deleteFunc,
      //evenItems,
      //addItem,
      //myInput,
      //alerting

    }
  }
}
</script>