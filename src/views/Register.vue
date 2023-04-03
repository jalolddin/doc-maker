<template>
    <div class="register">
        <div class="logo">
            <LoginLogo />
            <h2>DOCUMENT <br> MAKER</h2>
        </div>
        <p>Регистрация</p>
        <div class="form">
            <div>
                <label for="email">Введите E-mail</label>
                <input type="email" placeholder="nevis@yandex.ru">
            </div>
            <div>
                <label for="email">Введите телефон в формате 79008007060</label>
                <input type="email" placeholder="79008006070">
            </div>
            <div>
                <button>Зарегистрироваться</button>
                <button>Подтвердить номер телефона</button>
            </div>
        </div>
    </div>
</template>
<script>
import LoginLogo from '../assets/icons/mainLogo.vue'
export default{
    components: {
        LoginLogo
    }
}
</script>