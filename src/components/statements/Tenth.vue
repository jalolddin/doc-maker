<template>
    <div class="tenth">
      <div class="left">
              <section>
                  <label for="name">Выберите или введите название проектировщика</label>
                  <span>Пример: ООО “Консалтинговая группа “СЕВЕР””</span>
                  <div @click="isType = !isType" class="select">
                            <input class="selectInput" type="text" readonly v-model="type">
                            <DropdownIcon v-if="!isType"/>
                            <DropdownUp  v-else />
                   </div>
                   <div class="dropdownInfo" v-if="isType">
                       <p @click="TypeConstruction(info)" v-for="info in types" :key="info">{{ info }}</p>
                    </div>
              </section>
              <section>
                  <label for="name">Выберите или введите название изготовителя</label>
                  <span>Пример: ООО “Консалтинговая группа “СЕВЕР””</span>
                  <div @click="isAddress = !isAddress" class="select">
                            <input class="selectInput" type="text" readonly v-model="address">
                            <DropdownIcon v-if="!isAddress"/>
                            <DropdownUp  v-else />
                   </div>
                   <div class="dropdownInfo" v-if="isAddress">
                       <p @click="AddressConstruction(info)" v-for="info in addresses" :key="info">{{ info }}</p>
                    </div>
              </section>

          </div>
    </div>
  </template>
  
  <script>
  import DropdownIcon from "../../assets/icons/dropdownIcon";
  import DropdownUp from "../../assets/icons/DropdownUp.vue";
  export default {
      data(){
          return{
  type: "ООО “Консалтинговая группа “СЕВЕР””",
  address: "ООО “Консалтинговая группа “СЕВЕР””",
  isType: false,
  isAddress: false,
  types: [
      "ООО “Консалтинговая группа “СЕВЕР””",
      "Другой"
  ],
  addresses: [
      "ООО “Консалтинговая группа “СЕВЕР””",
      "Другой"
  ]
          }
      },
      components: {
          DropdownIcon,
          DropdownUp,
      },
      methods: {
          TypeConstruction(value){
              this.type = value
              this.isType = false
          },
          AddressConstruction(value){
              this.address = value
              this.isAddress = false
          },
          NumberConstruction(value){
              this.number = value
              this.isNumber = false
          }
      }
  }
  </script>
  
  <style>
  
  </style>