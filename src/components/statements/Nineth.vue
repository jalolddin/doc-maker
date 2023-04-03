<template>
    <div class="steps">
        <button :class="{activeStep: page === 1}" @click="page = 1">Шаг 1</button>
        <button :class="{activeStep: page === 2}" @click="page = 2">Шаг 2</button>
        <button :class="{activeStep: page === 3}" @click="page = 3">Шаг 3</button>
    </div>
    <!-- First Step -->
    <div class="NineStepOne" v-if="page === 1">
        <div>
                <label for="name">Наличие и вид подсветки</label>
                <span>Светодиоды, отсутствует, другое</span>
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
            <label for="title">Габаритные размеры, м</label>
        <section>
            <div>
                <span>Ширина</span>
                <input placeholder="3,32" type="number">
            </div>
            <div>
                <span>Высота</span>
                <input placeholder="0,8" type="number">
            </div>
            <div class="quantitySelect">
                <span>Количество инф. полей</span>
                <div @click="isQuantity = !isQuantity" class="select">
                    <input class="selectInput" type="text" readonly v-model="quantity">
                    <DropdownIcon v-if="!isQuantity"/>
                    <DropdownUp  v-else />
                </div>
                <div class="dropdownInfo" v-if="isQuantity">
                        <p @click="isOpenQuantity(info)" v-for="info in quantities" :key="info">{{ info }}</p>
                </div>
            </div>
        </section>
        </div>
        <div class="info">
            <label for="title">Информационное поле</label>
            <section>
                <div>
                    <span>Ширина</span>
                    <input placeholder="0,2" type="number">
                </div>
                <div>
                    <span>Высота</span>
                    <input placeholder="0,2" type="number">
                </div>
            </section>
        </div>
        <div class="info">
            <label for="title">Информационное поле №2</label>
        <section>
            <div>
                <span>Ширина</span>
                <input placeholder="0,2" type="number">
            </div>
            <div>
                <span>Высота</span>
                <input placeholder="0,2" type="number">
            </div>
        </section>
        </div>
    </div>
    
<!-- Second Step -->

    <div class="NineStepTwo" v-if="page === 2">
        <div class="left">
            <div>
                <label for="name">Наличие и вид подсветки</label>
                    <span>Светодиоды, отсутствует, другое</span>
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
                <label for="title">Габаритные размеры, м</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="3,32" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,8" type="number">
                    </div>
                    <div class="quantitySelect">
                        <span>Количество инф. полей</span>
                        <div @click="isQuantity = !isQuantity" class="select">
                            <input class="selectInput" type="text" readonly v-model="quantity">
                            <DropdownIcon v-if="!isQuantity"/>
                            <DropdownUp  v-else />
                        </div>
                        <div class="dropdownInfo" v-if="isQuantity">
                                <p @click="isOpenQuantity(info)" v-for="info in quantities" :key="info">{{ info }}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="info">
                <label for="title">Информационное поле</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
             <div class="info">
                <label for="title">Информационное поле №2</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
             <div class="info">
                <label for="title">Информационное поле №3</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
             <div class="info">
                <label for="title">Информационное поле №4</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
        </div>
        <div class="right">
            <div class="info">
                <label for="title">Информационное поле №5</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
             <div class="info">
                <label for="title">Информационное поле №6</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
             <div class="info">
                <label for="title">Информационное поле №7</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
             <div class="info">
                <label for="title">Информационное поле №8</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
             <div class="info">
                <label for="title">Информационное поле №9</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
             <div class="info">
                <label for="title">Информационное поле №10</label>
                <section>
                    <div>
                        <span>Ширина</span>
                        <input placeholder="0,2" type="number">
                    </div>
                    <div>
                        <span>Высота</span>
                        <input placeholder="0,2" type="number">
                    </div>
                </section>
             </div>
        </div>
    </div>


    <!-- Third Step -->

    <div class="NineStepThree" v-if="page === 3">
        <label for="title">Информационное поле №22</label>
        <section>
            <div>
                <span>Ширина</span>
            <input type="number" placeholder="0,2">
        </div>
        <div>
            <span>Высота</span>
            <input type="number" placeholder="0,2">
        </div>
        </section>
</div>
</template>

<script>
import DropdownIcon from "../../assets/icons/dropdownIcon";
import DropdownUp from "../../assets/icons/DropdownUp.vue";
export default{
    components: {
        DropdownIcon,
        DropdownUp
    },
    data(){
        return{
            page: 1,
            select: "Светодиодные модули и комплектующие",
            items: ["Светодиодные модули и комплектующиеs", "Другой"],
            isShow: false,
            quantity: "2",
            quantities: ["1", "2", "3", "4"],
            isQuantity: false,
            switchValue: false,
            page: 1
        }
    },
    methods: {
      isOpen(value){
        this.select = value
        this.isShow = false
      },
      isOpenQuantity(value){
        this.quantity = value
        this.isQuantity = false
      },
    }
}
</script>