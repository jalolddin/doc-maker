<template>
    <div class="step__one">
        <div class="left">
            <div>
                <label for="name">Введите фамилию</label>
                <input type="text" placeholder="Введите фамилию">
            </div>
            <div>
                <label for="name">Введите имя</label>
                <input type="text" placeholder="Введите имя">
            </div>
            <div>
                <label for="name">Введите должность</label>
                <span>В лице кого подаём. Пример: Генерального директора</span>
                <input type="text" placeholder="Введите должность">
            </div>
            <div>
                <label for="name">Введите ФИО в родительном падеже</label>
                <span>В лице кого подаём. Пример: Иванова Ивана Ивановича</span>
                <input type="text" placeholder="Введите ФИО в родительном падеже">
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
                    <span>Подпись должны быть в формате png, размером не менее 100 × 100 px</span>
                    <div class="uploadFile">
                        <p>Перенесите сюда <br> подпись или нажмите <br> для загрузки</p>
                    </div>
                </section>
        </div>
</div>
</template>

<script>
export default{
    data(){
        return{
            inline: null,
            switchValue: true
        }
    }
}
</script>