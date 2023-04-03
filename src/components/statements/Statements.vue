<template>
  <div class="statements">
    <div v-if="!newStatement" class="white__navbar">
    <p>Личный кабинет</p>
    <p>/</p>
    <p>Заявления</p>
    <p>/</p>
    <p>Список заявлений</p>
    </div>
    <div class="statements__content" v-if="!newStatement">
      <div class="search">
        <button @click="createStatement()"><PlusIcon /> Новое заявление</button>
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
<v-pagination
    v-model="page"
    :length="77"
    v-if="!newStatement"
  >
</v-pagination>
</div>
<NewStatement v-if="newStatement" />

  </div>
</template>

<script>
import PlusIcon from '../../assets/icons/plusIcon.vue'
import Star from '../../assets/icons/full-star.vue'
import EmptyStar from '../../assets/icons/emtyStar.vue'
import Dots from '../../assets/icons/dots.vue'
import NewStatement from './NewStatement.vue'

export default {
  components: {
    PlusIcon,
    Star,
    Dots,
    EmptyStar,
    NewStatement
  },
  methods: {
createStatement(){
  this.newStatement = true
}
  },
  data(){
    return {
      page: 1,
      newStatement: false,
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
