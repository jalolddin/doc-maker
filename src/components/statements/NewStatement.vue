<template>
    <div class="create__statements">
        <div class="white__navbar">
            <p>Заявление №643</p>
            <p>/</p>
            <p v-if="page === 1">Тип заявителя / Выбор типа заявителя</p>
            <p v-if="page === 2">Выбор способа подачи</p>
            <p v-if="page === 3">Самостоятельно  /  Информация о заявителе</p>
            <p v-if="page === 4">Адрес местности</p>
            <p v-if="page === 5">Информация о конструкции</p>
            <p v-if="page === 6">Фотофиксация перспективы конструкции</p>
            <p v-if="page === 7">Компьютерный монтаж перспективы конструкции</p>
            <p v-if="page === 8">Эскизный проект шаг 1</p>
            <p v-if="page === 9">Данные о конструкции</p>
            <p v-if="page === 10">Данные о проектировщие и изготовителе</p>
            <p v-if="page === 11">Сохранение заявления</p>
        </div>
    <div class="create__statements__content">
        <div v-if="page === 1" class="create">
            <div class="left">
                    <div>
                        <label for="title">1 Поиск по ИНН</label>
                        <span>Введите ИНН, дождитесь загрузки и нажмите далее</span>
                        <input type="text" placeholder="Введите ИНН">
                    </div>
                    <div>
                        <label for="title">Выберите тип заявителя</label>
                        <span>В выпадающем списке ниже</span>
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
                        <label for="title">Введите ОГРН</label>
                        <input type="text" placeholder="Введите ОГРН">
                    </div>
                    <div>
                        <label for="title">Введите КПП</label>
                        <input type="text" placeholder="Введите КПП">
                    </div>
                    <div>
                        <label for="title">Юридический адрес</label>
                        <input type="text" placeholder="Введите юридический адрес">
                    </div>
             </div>
             <div class="right">
                    <div>
                        <label for="title">Введите сокращённое название организации</label>
                        <span>Пример</span>
                        <input type="text" placeholder="Сокращённое название организации">
                    </div>
                    <div>
                        <label for="title">Введите полное название организации</label>
                        <span>Пример</span>
                        <input type="text" placeholder="Полное название организации">
                    </div>
                </div>
            </div>
            <Second v-if="page === 2" />
            <Third v-if="page === 3" />
            <Fourth v-if="page === 4" />
            <Fifth v-if="page === 5" />
            <Sixth v-if="page === 6" />
            <Seventh v-if="page === 7" />
            <Eigth v-if="page === 8" />
            <Nineth v-if="page === 9" />
            <Tenth v-if="page === 10"/>
            <Eleventh v-if="page === 11" />
        </div>
        <div class="example" v-if="page === 1 || page === 2 || page === 3 || page === 4 || page === 5">
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
        <vue-awesome-paginate
        :total-items="85"
        :items-per-page="5"
        :max-pages-shown="77"
        v-model="page"
        prev-button-content="Назад"
        next-button-content="Далее"
  />
    </div>
</template>

<script>
import DropdownIcon from "../../assets/icons/dropdownIcon";
import DropdownUp from "../../assets/icons/DropdownUp.vue";
import Third from './Third.vue';
import Second from './Second.vue'
import Fourth from './Fourth.vue'
import Fifth from './Fifth.vue'
import Sixth from './Sixth.vue'
import Seventh from './Seventh.vue'
import Eigth from './Eigth.vue'
import Nineth from './Nineth.vue'
import Tenth from './Tenth.vue'
import Eleventh from './Eleventh.vue'
  export default {
    components: {
        DropdownIcon,
        DropdownUp,
        Second,
        Third,
        Fourth,
        Fifth,
        Sixth,
        Seventh,
        Eigth,
        Nineth,
        Tenth,
        Eleventh
    },
    data(){
        return{
            page: 1,
            select: "Юридическое лицо",
            items: ["Юридическое лицо", "Физической лицо"],
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