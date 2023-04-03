<template>
    <div class="step__one">
        <h2>Доверенность</h2>
        <p>Предлагаем Вам воспользоваться услугой формирования <br> доверенности. Данные указанные в ней автоматически <br> отобразятся в необходимых для заполнения полях <br> заявления</p>
        <div @click="isShow = !isShow" class="select">
        <input type="text" readonly v-model="select">
        <DropdownIcon v-if="!isShow"/>
        <DropdownUp  v-else />
        </div>
        <div class="dropdownInfo" v-if="isShow">
        <p @click="isOpen(info)" v-for="info in items" :key="info">{{ info }}</p>
        </div>
    </div>
</template>
<script>
import DropdownIcon from "../../assets/icons/dropdownIcon.vue";
import DropdownUp from '../../assets/icons/DropdownUp.vue'
export default{
  components: {
    DropdownIcon,
    DropdownUp
  },
    data(){
        return{
            select: "Новая доверенность",
            items: ["Изменить доверенность", "Новая доверенность"],
            isShow: false
          }
    },
    methods: {
      isOpen(value){
      this.select = value
      this.isShow = false
      }
    }
}
</script>