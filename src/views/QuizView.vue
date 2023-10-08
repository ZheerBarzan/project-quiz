<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";
import result from "../components/Result.vue";

const route = useRoute();

const quizID = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizID);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResult = ref(false);

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quiz.questions.length}`;
});
const barPrecentage = computed(() => {
  return `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`;
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz.questions.length === currentQuestionIndex.value) {
    showResult.value = ture;
  }
  currentQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPrecentage="barPrecentage" />

    <div>
      <Question
        v-if="!showResult"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />

      <result
        v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
    </div>
  </div>
</template>
