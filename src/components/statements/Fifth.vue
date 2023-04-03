<template>
  <div class="fifth">
    <div class="left">
            <section>
                <label for="name">Выберите тип конструкции</label>
                <span>Нажмите, чтобы выбрать тип конструкции</span>
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
                <label for="name">Выберите место установки</label>
                <span>Нажмите, чтобы выбрать место установки</span>
                <div @click="isAddress = !isAddress" class="select">
                          <input class="selectInput" type="text" readonly v-model="address">
                          <DropdownIcon v-if="!isAddress"/>
                          <DropdownUp  v-else />
                 </div>
                 <div class="dropdownInfo" v-if="isAddress">
                     <p @click="AddressConstruction(info)" v-for="info in addresses" :key="info">{{ info }}</p>
                  </div>
            </section>
            <section>
                <label for="name">Выберите номер места</label>
                <span>Нажмите, чтобы выбрать номер места из списка</span>
                <div @click="isNumber = !isNumber" class="select">
                          <input class="selectInput" type="text" readonly v-model="number">
                          <DropdownIcon v-if="!isNumber"/>
                          <DropdownUp  v-else />
                 </div>
                 <div class="dropdownInfo" v-if="isNumber">
                     <p @click="NumberConstruction(info)" v-for="info in numbers" :key="info">{{ info }}</p>
                  </div>
            </section>
                <v-switch
                        style="display: flex; flex-direction: row; justify-content: flex-start"
                        color="#2F80ED"
                        v-model="switchValue"
                        label="Согласовывается по факту, используя приложение №6"
                        inline
                 ></v-switch>
        </div>
  </div>
</template>

<script>
import DropdownIcon from "../../assets/icons/dropdownIcon";
import DropdownUp from "../../assets/icons/DropdownUp.vue";
export default {
    data(){
        return{
type: "Настенная вывеска",
address: "Стена",
number: "Выберите номер места",
isType: false,
isAddress: false,
isNumber: false,
switchValue: false,
types: [
    "Настенная вывеска",
    "Другой"
],
addresses: [
    "Стена",
    "Другой"
],
numbers: [
    "2",
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