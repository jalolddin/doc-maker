<template>
  <div class="documents">
    <div class="white__navbar">
    <p>Личный кабинет</p>
    <p>/</p>
    <p>Черновики</p>
    </div>
    <div class="documents__content">
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
          №
        </th>
        <th class="text-left">
          Дата
        </th>
        <th class="text-left">
          Юридическое лицо
        </th>
        <th class="text-left">
          Адрес
        </th>
        <th>
          <Star />
        </th>
        <th class="text-left">
          <Dots />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(user, index) in users"
        :key="index"
      >
        <td>{{ index + 1 }}</td>
        <td>{{ user.date }}</td>
        <td>{{ user.title }}</td>
        <td>{{ user.address }}</td>
        <td class="text-left"><EmptyStar /></td>
        <td><Dots /></td>
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
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        {
        date: "24.10.2022",
        title: "ООО “ЮГ-СЕРВИСГРУПП”",
        address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
        },
        
      ]
    }
  }
};
</script>

<style></style>
