<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { quizQuestionLength, numberOfCorrectAnswers } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswers",
]);
</script>

<template>
  <div class="result">
    <p>Your result is...</p>
    <h1>
      {{ Math.round((numberOfCorrectAnswers / quizQuestionLength) * 1000) / 100 }} /
      {{ (quizQuestionLength / 3) * 10 }}
    </h1>
    <div class="back">
      <RouterLink to="/" style="text-decoration: none; color: black">Go Back</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.result {
  background-color: azure;
  border: 5px solid bisque;
  border-radius: 15px;
  height: 400px;
  width: 400px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 0;
  text-overflow: clip;
  text-wrap: wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
.back {
  width: 100px;
  background-color: bisque;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  position: absolute;
  border-radius: 10px;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
