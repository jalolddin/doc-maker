<template>
    <div class="login">
        <div class="logo">
            <LoginLogo />
            <h2>DOCUMENT <br> MAKER</h2>
        </div>
        <p>Поможем вам <br> сформировать документы</p>
        <div class="form">
            <div>
                <label for="email">Введите логин</label>
                <input type="text" placeholder="Введите логин">
            </div>
            <div>
                <label for="password">Введите пароль</label>
                <input type="password" placeholder="Введите пароль">
            </div>
            <div>
                <button>Войти</button>
                <span>или</span>
                <button>Зарегистрироваться</button>
            </div>
            <span>Забыли пароль?</span>
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