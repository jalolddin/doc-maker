<template>
    <div class="signatories">
      <div class="white__navbar">
      <p>Личный кабинет</p>
      <p>/</p>
      <p>Подписанты</p>
      </div>
      <div class="signatories__content">
        <div class="search">
          <input type="text" placeholder="Поиск">
        </div>
        <div class="data">
        <v-table
      fixed-header
    >
  
      <thead>
        <tr>
          <th class="text-left">
            ФИО
          </th>
          <th class="text-left">
            Юридическое лицо
          </th>
          <th class="text-center">
            <Dots />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in users"
          :key="index"
        >
          <td>{{ user.name }}</td>
          <td>{{ user.title }}</td>
          <td class="text-center"><Dots /></td>
        </tr>
      </tbody>
    </v-table>
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
  import PlusIcon from '../../assets/icons/plusIcon.vue'
  import Star from '../../assets/icons/full-star.vue'
  import EmptyStar from '../../assets/icons/emtyStar.vue'
  import Dots from '../../assets/icons/dots.vue'
  export default {
    components: {
      PlusIcon,
      Star,
      Dots,
      EmptyStar
    },
    data(){
      return {
        page: 1,
        users: [
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 },
 {
    name: "Орехов Антон Игоревич",
    title: "ООО “ЮГ-СЕРВИСГРУПП”"
 }       
        ]
      }
    }
  };
  </script>
  
  <style></style>
  