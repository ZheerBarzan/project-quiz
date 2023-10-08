<script setup>
import { defineProps } from "vue";
const { quizQuestionLength, numberOfCorrectAnswers } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswers",
]);
</script>

<template>
  <div class="result">
    <p>Your result is...</p>
    <h1>{{ numberOfCorrectAnswers / quizQuestionLength }}</h1>
  </div>
</template>

<style scoped>
.result {
  background-color: azure;
  border: 1px solid bisque;
  border-radius: 15px;
  height: 500px;
  width: 500px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 0;
}
p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
</style>
