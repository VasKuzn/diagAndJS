<script>
import AppNews from "./AppNews.vue";
import { ref } from 'vue';

export default {
  components: {
    'app-news': AppNews,
  },
  setup() {
    const dt = ref(new Date().toLocaleDateString());
    const news = ref([
      {
        id: 0,
        title: "Дональд Трамп победил на выборах в США",
        isOpen: false,
        etcInfo: "interz делает дабл и забирают 2-й раунд для Cloud9",
        wasRead: false,
      },
      {
        id: 1,
        title: "Z",
        isOpen: false,
        etcInfo: "Тизер серии по Вархраммер Сорок Тысяч в антологии Secret Level от авторов «Любовь. Смерть и Роботы».",
        wasRead: false,
      },
      {
        id: 2,
        title: "Vue 3 успешно работает",
        isOpen: false,
        etcInfo: "Взяли две крайности, тем временем Алан второй, или Рдр2 просто вычеркивают этот пост из истории",
        wasRead: false,
      },
    ]);
    const openRate = ref(0);
    const readRate = ref(0);

    const toggleDetails = (id) => {
      const newsItem = news.value.find(item => item.id === id);
      if (newsItem) {
        newsItem.isOpen = !newsItem.isOpen;
      }
    };

    const updateOpenRate = () => {
      openRate.value++;
    };

    const updateReadRate = () => {
      readRate.value++;
    };

    // Обновление состояния wasRead для новости
    const updateRead = (id) => {
      const newsItem = news.value.find(item => item.id === id);
      if (newsItem) {
        newsItem.wasRead = true;  // Устанавливаем значение wasRead в true
      }
    };

    return {
      dt,
      news,
      toggleDetails,
      openRate,
      readRate,
      updateOpenRate,
      updateReadRate,
      updateRead,
    };
  },
};
</script>

<template>
  <div>
    <div class="containter pt-1">
      <div class="card">
        <h2>Актуальные новости на {{ dt }} <span>Открыто: {{ openRate }}</span> | <strong>Прочитано: {{ readRate }}</strong></h2>
      </div>

      <app-news
        v-for="(item) in news"
        :key="item.id"
        :snew="item.title"
        :i="item.id"
        :etc="item.etcInfo"
        :wasRead="item.wasRead"
        @toggle-details="toggleDetails(item.id)"
        @open-news="updateOpenRate"
        @read-news="updateReadRate"
        @toggle-read="updateRead"
      />
    </div>

    <the-header />
  </div>
</template>

<style scoped>
/* Стили компонента */
</style>