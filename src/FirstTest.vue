<template>
  <div class="text">{{ props.title }}</div>
  <img :src="props.image" alt="" />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Oi tudo bem?",
  },
  image: {
    type: String,
    default:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2M2cDhhaWJjaGcxemszYzJjcWkxODI5ZmttOXlpYnB2NHZwYXp1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2R0cE5EqO3QHiCoU/giphy.webp",
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  display: flex;
  background: red;
  padding: 12px;
  justify-content: center;
  margin: auto;
  border-radius: 16px;
  box-shadow: 0 0 10px 4px rgb(201, 78, 7); /* Adiciona uma sombra azul desfocada */
  border: 4px solid transparent; /* Adiciona uma borda transparente para espaçamento */
}
.text {
  margin: 0px 12px 12px 0;
  font-size: 4rem;
  font-weight: bold;
  color: brown;
}
</style>
