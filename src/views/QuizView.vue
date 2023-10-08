<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();

const quizID = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizID);

const currentQuestionIndex = ref(0);

const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

watch(
  () => currentQuestionIndex.value,
  () => {
    questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
  }
);
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" />

    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">next question</button>
  </div>
</template>
