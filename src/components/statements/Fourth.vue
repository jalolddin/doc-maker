<template>
    <div class="steps">
        <button :class="{activeStep: page === 1}" @click="page = 1">Шаг 1</button>
        <button :class="{activeStep: page === 2}" @click="page = 2">Шаг 2</button>
    </div>
    <div class="fourth" v-if="page === 1">
        <div class="left">
            <div>
                <label for="name">Выберите начало адреса</label>
                <div @click="isShow = !isShow" class="select">
                        <input class="selectInput" type="text" readonly v-model="select">
                        <DropdownIcon v-if="!isShow"/>
                        <DropdownUp  v-else />
                </div>
                <div class="dropdownInfo" v-if="isShow">
                        <p @click="isOpen(info)" v-for="info in items" :key="info">{{ info }}</p>
                </div>
            </div>
            <div>
                <label for="name">Введите продолжение адреса</label>
                <span class="blueSpan">Пример: Ленина, реки Фонтанки</span>
                <input class="input" type="text" placeholder="Введите продолжение адреса">
            </div>
            <div class="input__groups">
                    <div>
                        <label for="name">Номер дома</label>
                        <span class="blueSpan">Пример: 132</span>
                        <input class="input" type="number" placeholder="000">
                    </div>
                    <div>
                        <label for="title">Корпус</label>
                        <span class="blueSpan">Пример: 1, отсутствует, другое</span>
                        <div @click="isBlock = !isBlock" class="select">
                            <input class="selectInput" type="text" readonly v-model="block">
                            <DropdownIcon v-if="!isShow"/>
                            <DropdownUp  v-else />
                         </div>
                        <div class="dropdownInfo" v-if="isBlock">
                            <p @click="isBlockOpen(info)" v-for="info in blocks" :key="info">{{ info }}</p>
                        </div>
                    </div>
                    <div>
                        <label for="name">Литера или строение</label>
                        <span class="blueSpan">Пример: 1, отсутствует, другое</span>
                        <input class="input" type="number" placeholder="0">
                    </div>
            </div>
            <div>
                <label for="name">Введите пересечение с домом или павильон, если имеется</label>
                <input class="input" type="text" placeholder="Павильон, пересечение с домом Ленина, д.23">
            </div>
        </div>
        <div class="right">
            <div>
                <label for="name">Выберите начало адреса</label>
                <div @click="isRegion = !isRegion" class="select">
                        <input class="selectInput" type="text" readonly v-model="region">
                        <DropdownIcon v-if="!isRegion"/>
                        <DropdownUp  v-else />
                </div>
                <div class="dropdownInfo" v-if="isRegion">
                        <p @click="isRegionOpen(info)" v-for="info in regions" :key="info">{{ info }}</p>
                </div>
            </div>
        </div>
</div>
<div class="address_two" v-if="page === 2">
    <div class="left">
        <p>Установка карты</p>
        <v-radio-group
         v-model="inline"
        >
                    <v-radio
                        color="#2F80ED"
                        label="Использовать сервис Яндекс.Карты"
                        value="radio-1">
                    </v-radio>
                    <v-radio
                        color="#2F80ED"
                        label="Самостоятельно загрузить файл карты, формата 1:2000"
                        value="radio-2">
                    </v-radio>
        </v-radio-group>
            <span class="blueSpan">Карта должна быть соотношением 1.5 к 1, с сервиса РГИС, масштабом 1:2000 с указанным местом установки конструкции</span>
            <div class="uploadFile">
                <p>Перенесите сюда <br> подпись или нажмите <br> для загрузки</p>
            </div>
    </div>
    <div class="right">
        <p>Пример карты</p>
        <img v-bind:src="require('../../assets/images/exampleMap.jpg')" />
    </div>
</div>
</template>

<script>
import DropdownIcon from "../../assets/icons/dropdownIcon";
import DropdownUp from "../../assets/icons/DropdownUp.vue";
import Map from '../../assets/icons/exampleMap.vue'
export default{
    components: {
        DropdownIcon,
        DropdownUp,
        Map
    },
    data(){
        return{
            page: 1,
            select: "Улица",
            items: ["Улица", "Дом"],
            regions: ["Адмиралтейский", "Другой"],
            region: "Адмиралтейский",
            block: "отсутствует",
            blocks: ["отсутствует", "присутствует"],
            isShow: false,
            isBlock: false,
            isRegion: false,
            inline: null,
            switchValue: true,
            page: 1
        }
    },
    methods: {
      isOpen(value){
        this.select = value
        this.isShow = false
      },
      isBlockOpen(value){
        this.block = value
        this.isBlock = false
      },
      isRegionOpen(value){
        this.region = value
        this.isRegion = false
      }
    }
}
</script>