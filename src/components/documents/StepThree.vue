<template>
    <div class="step__three">
        <div class="left">
            <div>
                <label for="name">Введите серию паспорта</label>
                <span>Пример: 2212</span>
                <input type="number" placeholder="0000">
            </div>
            <div>
                <label for="name">Введите номер паспорта</label>
                <span>Пример: 999654</span>
                <input type="number" placeholder="000000">
            </div>
            <div>
                <label for="name">Дата выдачи</label>
                <span>Пример: 20.02.2002</span>
                <input type="date" placeholder="__.__.____">
            </div>
        </div>
        <div class="right">
            <div>
                <label for="name">Кем выдан паспорт</label>
                <span>Пример: Отделом УФМС России по гор. Москва по району Митино</span>
                <input type="text" placeholder="Введите учреждение">
            </div>
            <div>
                <label for="name">Код подразделения</label>
                <span>Пример: 770-093</span>
                <input type="number" placeholder="000-000">
            </div>
            <div>
                <label for="name">Где зарегистрирован</label>
                <span>Пример: г. Москва, ул. Ленина, д. 74, кв. 105</span>
                <input type="text" placeholder="Введите адрес регистрации">
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            inline: null
        }
    }
}
</script>