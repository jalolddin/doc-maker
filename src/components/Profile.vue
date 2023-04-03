<template>
    <div class="profile">
        <div class="white__navbar">
            <p>Личный кабинет</p>
            <p>/</p>
            <p>Профиль</p>
        </div>
        <div class="profile__info">
            <div class="profile__info__photo"></div>
            <div class="profile__info__data">

              <!-- ====   NAME ===== -->
              
              <div>
                  <h2>Имя профиля</h2>
                  <input type="text" v-model="username">
                </div>
              
                <!-- ====   FULLNAME ===== -->
              
                <div>
                  <h2>Имя пользователя</h2>
                  <input type="text" v-model="fullname">
                </div>
              
                <!-- ====   EMAIL ===== -->

                <div>
                  <h2>E-mail</h2>
                  <input type="email" v-model="email">
                </div>
              
                <!-- ====   TITLE ===== -->
              
                <div>
                  <h2>Название организации</h2>
                  <input type="text" v-model="title">
                </div>
              
                <!-- ====   PASSWORD ===== -->
              
                <div>
                  <h2>Пароль</h2>
                  <input type="password" v-model="password">
                </div>
              
                <!-- ====   NUMBER ===== -->
              
                <div>
                  <h2>Телефон</h2>
                  <input type="number" v-model="number">
                </div>
                <button>Сохранить</button>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        username: "nevis178rus",
        fullname: "Любовь Андреевна",
        email: "nevis@yandex.ru",
        title: "Аптеки Невис, ООО “Кора”",
        password: "12345" ,       
        number: "79085083598"
      }
    }
  };
  </script>
  
  <style></style>