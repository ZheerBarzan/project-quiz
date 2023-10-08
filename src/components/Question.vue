<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["selectOption"]);

const { question } = defineProps(["question"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="answer-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option-lable">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
}
.question {
  font-size: 40px;
  margin-bottom: 20px;
}
.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}
.option-lable {
  background-color: bisque;
  width: 60px;
  height: 60px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 1px 1px 10px;
}

.option-value {
  width: 100%;
  background-color: rgba(244, 239, 239, 1);
  font-size: 30px;
  border-radius: 1px 10px 10px 1px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}
</style>
