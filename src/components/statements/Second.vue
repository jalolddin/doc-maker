<template>
        <div class="second">
             <p>2. Подача осуществляется самостоятельно или по доверенности</p>
            <div @click="isShow = !isShow" class="select">
                    <input class="selectInput" type="text" readonly v-model="select">
                    <DropdownIcon v-if="!isShow"/>
                    <DropdownUp  v-else />
            </div>
            <div class="dropdownInfo" v-if="isShow">
                    <p @click="isOpen(info)" v-for="info in items" :key="info">{{ info }}</p>
            </div>
        </div>
</template>

<script>
import DropdownIcon from "../../assets/icons/dropdownIcon";
import DropdownUp from "../../assets/icons/DropdownUp.vue";
  export default {
    components: {
        DropdownIcon,
        DropdownUp
    },
    data(){
        return{
            page: 1,
            select: "Самостоятельно",
            items: ["По доверенности", "Самостоятельно"],
            isShow: false
        }
    },
    methods: {
      isOpen(value){
      this.select = value
      this.isShow = false
      }
    }
  };
</script>