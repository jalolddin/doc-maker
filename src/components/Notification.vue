<template>
    <div class="notification">
        <div class="white__navbar">
            <p>Личный кабинет</p>
            <p>/</p>
            <p>Профиль</p>
        </div>
    <div class="notification__info">
        <div class="notification__info__data">
            <div>
                <p>Смена пароля</p>
                <p>Уведомление о смене пароля...</p>
            </div>
            <DropdownIcon />
        </div>
        <div class="notification__info__data"> 
            <div>
                <p>Добрый день!</p>
                <p>Благодарим за регистрацию в нашем сервисе по формированию документов...</p>
            </div>
            <DropdownIcon />
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import DropdownIcon from '../assets/icons/dropdownIcon.vue'
  export default {
    components: {
      DropdownIcon
    }
  };
  </script>
  
  <style></style>