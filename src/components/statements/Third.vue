<template>
    <div class="steps">
        <button :class="{activeStep: page === 1}" @click="page = 1">Шаг 1</button>
        <button :class="{activeStep: page === 2}" @click="page = 2">Шаг 2</button>
    </div>
    <div class="independetly" v-if="page === 1">
        <div class="left">
            <div>
                <label for="name">Введите фамилию</label>
                <input class="input" type="text" placeholder="Введите фамилию">
            </div>
            <div>
                <label for="name">Введите имя</label>
                <input class="input" type="text" placeholder="Введите имя">
            </div>
            <div>
                <label for="name">Введите должность</label>
                <span class="blueSpan">В лице кого подаём. Пример: Генерального директора</span>
                <input class="input" type="text" placeholder="Введите должность">
            </div>
            <div>
                <label for="name">Введите ФИО в родительном падеже</label>
                <span class="blueSpan">В лице кого подаём. Пример: Иванова Ивана Ивановича</span>
                <input class="input" type="text" placeholder="Введите ФИО в родительном падеже">
            </div>
        </div>
        <div class="right">
                <section>
                    <label for="title">
                        <v-switch
                        style="display: flex; flex-direction: row; justify-content: flex-start"
                        color="#2F80ED"
                        v-model="switchValue"
                        label="Отчество"
                        ></v-switch>
                    </label>
                    <input class="lastname" type="text" placeholder="Введите отчество">
                </section>
                <section class="gender">
                    <label for="gender">Выберите пол</label>
                    <v-radio-group
                    v-model="inline"
                    inline>
                    <v-radio
                        color="#2F80ED"
                        label="Мужчина"
                        value="radio-1">
                    </v-radio>
                    <v-radio
                        color="#2F80ED"
                        label="Женщина"
                        value="radio-2">
                    </v-radio>
                    </v-radio-group>
                </section>
                <section>
                    <label for="title">Загрузите или перенесите сюда файл подписи</label>
                    <span class="blueSpan">Подпись должны быть в формате png, размером не менее 100 × 100 px</span>
                    <div class="uploadFile">
                        <p>Перенесите сюда <br> подпись или нажмите <br> для загрузки</p>
                    </div>
                </section>
        </div>
</div>
<div class="independetly_two" v-if="page === 2">
        <div class="left">
            <div>
                <label for="name">Введите серию паспорта</label>
                <span class="blueSpan">Пример: 2212</span>
                <input class="input"  type="number" placeholder="0000">
            </div>
            <div>
                <label for="name">Введите номер паспорта</label>
                <span class="blueSpan">Пример: 999654</span>
                <input class="input" type="number" placeholder="000000">
            </div>
            <div>
                <label for="name">Дата выдачи</label>
                <span class="blueSpan">Пример: 20.02.2002</span>
                <input class="input" type="date" placeholder="__.__.____">
            </div>
        </div>
        <div class="right">
            <div>
                <label for="name">Кем выдан паспорт</label>
                <span class="blueSpan">Пример: Отделом УФМС России по гор. Москва по району Митино</span>
                <input class="input" type="text" placeholder="Введите учреждение">
            </div>
            <div>
                <label for="name">Код подразделения</label>
                <span class="blueSpan">Пример: 770-093</span>
                <input class="input" type="number" placeholder="000-000">
            </div>
            <div>
                <label for="name">Где зарегистрирован</label>
                <span class="blueSpan">Пример: г. Москва, ул. Ленина, д. 74, кв. 105</span>
                <input class="input" type="text" placeholder="Введите адрес регистрации">
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            inline: null,
            switchValue: true,
            page: 1
        }
    }
}
</script>