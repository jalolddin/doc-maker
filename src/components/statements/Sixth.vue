<template>
    <div class="steps">
        <button :class="{activeStep: page === 1}" @click="page = 1">Шаг 1</button>
        <button :class="{activeStep: page === 2}" @click="page = 2">Шаг 2</button>
        <button :class="{activeStep: page === 3}" @click="page = 3">Шаг 3</button>
    </div>
    <div class="sixth" v-if="page === 1">
        <div class="left">
            <div>
                <label for="name">Добавьте горизонтальное обзорное фото вывески сбоку</label>
                <span>Добавьте фото в поле ниже</span>
            </div>
            <div class="fileUpload">
                <p>Перенесите сюда файл <br> карты или нажмите для <br> загрузки</p>
            </div>
            <span>Название файла, перспектива.jpg</span>
        </div>
        <div class="right">
                <p>Пример изображения</p>
                <img v-bind:src="require('../../assets/icons/exampleMarket.jpg')" />
        </div>
    </div>
    <div class="sixth" v-if="page === 2">
        <div class="left">
            <div>
                <label for="name">Добавьте горизонтальное обзорное фото вывески сбоку</label>
                <span>Добавьте фото в поле ниже</span>
            </div>
            <div class="fileUpload">
                <p>Перенесите сюда файл <br> карты или нажмите для <br> загрузки</p>
            </div>
            <span>Название файла, перспектива.jpg</span>
        </div>
        <div class="right">
                <p>Пример изображения</p>
                <img v-bind:src="require('../../assets/icons/exampleMarket.jpg')" />
        </div>
    </div>
    <div class="sixth" v-if="page === 3">
        <div class="left">
            <div>
                <label for="name">Добавьте горизонтальное обзорное фото вывески сбоку</label>
                <span>Добавьте фото в поле ниже</span>
            </div>
            <div class="fileUpload">
                <p>Перенесите сюда файл <br> карты или нажмите для <br> загрузки</p>
            </div>
            <span>Название файла, перспектива.jpg</span>
        </div>
        <div class="right">
                <p>Пример изображения</p>
                <img v-bind:src="require('../../assets/icons/exampleMarket.jpg')" />
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