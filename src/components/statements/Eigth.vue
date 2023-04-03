<template>
    <div class="steps">
        <button :class="{activeStep: page === 1}" @click="page = 1">Шаг 1</button>
        <button :class="{activeStep: page === 2}" @click="page = 2">Шаг 2</button>
        <button :class="{activeStep: page === 3}" @click="page = 3">Шаг 3</button>
    </div>
    <div class="eight" v-if="page === 1">
        <article>
            <div class="left">
                <section>
                    <label for="name">Добавьте первую часть эскизного проекта</label>
                    <span>Добавьте фото в поле ниже</span>
                </section>
                <section class="fileUpload">
                    <p>Перенесите сюда файл <br> карты или нажмите для <br> загрузки</p>
            </section>
            <span>Название файла, перспектива.jpg</span>
        </div>
        <div class="right">
            <p>Пример изображения</p>
            <img v-bind:src="require('../../assets/images/pyaterochka.jpg')" />
        </div>
    </article>
    </div>
    <div class="eight" v-if="page === 2">
        <article>
            <div class="left">
                <section>
                    <label for="name">Добавьте вторую часть эскизного проекта</label>
                    <span>Добавьте фото в поле ниже</span>
                </section>
                <section class="fileUpload">
                    <p>Перенесите сюда файл <br> карты или нажмите для <br> загрузки</p>
                </section>
                <span>Название файла, перспектива.jpg</span>
            </div>
            <div class="right">
                <p>Пример изображения</p>
                <img v-bind:src="require('../../assets/images/exampleMarket2.jpg')" />
            </div>
        </article>
    </div>
    <div class="eight" v-if="page === 3">
        <v-switch
            v-if="page === 3"
            style="display: flex; flex-direction: row; justify-content: flex-start;"
            color="#2F80ED"
            v-model="switchValue"
            label="Использовать в этой части компьютерный монтаж издали ( по умолчанию)"
            inline
         ></v-switch>
        <article>
            <div class="left" v-if="!switchValue">
             <section>
                 <label for="name">Добавьте третью часть эскизного проекта</label>
                 <span>Добавьте фото в поле ниже</span>
                </section>
                <section class="fileUpload">
                    <p>Перенесите сюда файл <br> карты или нажмите для <br> загрузки</p>
                </section>
                <span>Название файла, перспектива.jpg</span>
            </div>
            <div class="right">
                <p>Пример изображения</p>
                <img v-bind:src="require('../../assets/images/exampleMarket.jpg')" />
                <span v-if="switchValue">Название файла, перспектива.jpg</span>
            </div>
        </article>
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
            switchValue: false,
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