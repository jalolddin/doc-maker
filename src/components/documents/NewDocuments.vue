<template>
    <div class="create__documents">
        <div class="white__navbar">
            <p>Заявление №643</p>
            <p>/</p>
            <p>По доверенности</p>
        </div>
        <div class="create__documents__content">
          <div class="content">
            <div class="steps">
              <button :class="{activeStep: page === 1}" @click="page = 1">Шаг 1</button>
              <button :class="{activeStep: page === 2}" @click="page = 2">Шаг 2</button>
              <button :class="{activeStep: page === 3}" @click="page = 3">Шаг 3</button>
              <button :class="{activeStep: page === 4}" @click="page = 4">Шаг 4</button>
              <button :class="{activeStep: page === 5}" @click="page = 5">Шаг 5</button>
              <button :class="{activeStep: page === 6}" @click="page = 6">Шаг 6</button>
        </div>
        <div class="example">
          <p>Примеры отображения</p>
          <div class="rectangle">
            <svg width="140" height="203" viewBox="0 0 140 203" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5.75049" y="6.77979" width="128" height="188" stroke="black"/>
              <rect x="56.3379" y="53.0396" width="29.9125" height="8" fill="#2F80ED"/>
              <rect x="39.0034" y="63.7476" width="64.5819" height="8" fill="#2F80ED"/>
              <rect x="39.0034" y="135.75" width="64.5819" height="8" fill="#2F80ED"/>
              <rect x="39.0034" y="74.4556" width="64.5819" height="8" fill="#2F80ED"/>
              <rect x="94.2505" y="13.7798" width="31.9623" height="8" fill="#E0E0E0"/>
              <rect x="94.2505" y="26.1353" width="31.9623" height="8" fill="#E0E0E0"/>
              <rect x="94.2505" y="38.4907" width="31.9623" height="8" fill="#E0E0E0"/>
            </svg>
          </div>
        </div>
      </div>
        <StepOne v-if="page === 1" />
        <StepTwo v-if="page === 2" />
        <StepThree v-if="page === 3" />
        <StepFour v-if="page === 4" />
        <StepFifth v-if="page === 5" />
        <StepSix v-if="page === 6" />
      </div>
      <v-pagination
            v-model="page"
            :length="77"
          >
      </v-pagination>
    </div>
</template>

<script>
  import StepOne from './StepOne.vue'
  import StepTwo from './StepTwo.vue'
  import StepThree from './StepThree.vue'
  import StepFour from './StepFour.vue'
  import StepFifth from './StepFifth.vue'
  import StepSix from './StepSix.vue'
  export default {
    components: {
      StepOne,
      StepTwo,
      StepThree,
      StepFour,
      StepFifth,
      StepSix
    },
    data(){
        return{
            page: 1
        }
    }
  };
</script>