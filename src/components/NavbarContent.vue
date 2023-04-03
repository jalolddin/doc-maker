<!-- eslint-disable prettier/prettier -->
<template>
  <div class="navbar">

    <!-- =====  LOGO  ===== -->
    
    <div class="navbar__logo">
          <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.36667 1.56168C10.4556 2.02834 11.2333 2.49501 12.0111 3.27279C12.7889 4.05056 13.4111 4.82834 13.8778 5.91723C14.3444 7.00612 14.5 7.93945 14.5 9.02834C14.5 10.1172 14.3444 11.2061 13.8778 12.1395C13.4111 13.0728 12.7889 14.1617 12.0111 14.7839C11.2333 15.5617 10.3 16.0283 9.36667 16.495C8.43333 16.9617 7.18889 17.1172 6.1 17.1172H0.5V0.939453H6.1C7.18889 0.939453 8.27778 1.09501 9.36667 1.56168Z" fill="white"/>
            <path d="M2.98956 11.8284C3.67685 11.8284 4.23401 11.2712 4.23401 10.5839C4.23401 9.89663 3.67685 9.33948 2.98956 9.33948C2.30227 9.33948 1.74512 9.89663 1.74512 10.5839C1.74512 11.2712 2.30227 11.8284 2.98956 11.8284Z" fill="#2F80ED"/>
            <path d="M5.16632 8.40613C5.85361 8.40613 6.41076 7.84897 6.41076 7.16168C6.41076 6.47439 5.85361 5.91724 5.16632 5.91724C4.47903 5.91724 3.92188 6.47439 3.92188 7.16168C3.92188 7.84897 4.47903 8.40613 5.16632 8.40613Z" fill="#2F80ED"/>
            <path d="M7.18878 11.8284C7.87607 11.8284 8.43322 11.2712 8.43322 10.5839C8.43322 9.89663 7.87607 9.33948 7.18878 9.33948C6.50149 9.33948 5.94434 9.89663 5.94434 10.5839C5.94434 11.2712 6.50149 11.8284 7.18878 11.8284Z" fill="#2F80ED"/>
            <path d="M9.36651 8.40613C10.0538 8.40613 10.611 7.84897 10.611 7.16168C10.611 6.47439 10.0538 5.91724 9.36651 5.91724C8.67923 5.91724 8.12207 6.47439 8.12207 7.16168C8.12207 7.84897 8.67923 8.40613 9.36651 8.40613Z" fill="#2F80ED"/>
            <path d="M11.389 11.8284C12.0763 11.8284 12.6334 11.2712 12.6334 10.5839C12.6334 9.89663 12.0763 9.33948 11.389 9.33948C10.7017 9.33948 10.1445 9.89663 10.1445 10.5839C10.1445 11.2712 10.7017 11.8284 11.389 11.8284Z" fill="#2F80ED"/>
          </svg>
          <h1>REKDOC</h1>
      </div>

      <!-- ===== LOGOUT  ======= -->
      
      <div class="navbar__profile" v-if="logout">
          <v-badge content="2" color="#FF4D4F">
            <v-icon color="white">mdi-bell-outline</v-icon>
          </v-badge>
          <div class="avatar">
              <v-avatar  size="36">
                <v-img src="../assets/images/avatar.png"></v-img>
              </v-avatar>
              <h2>Любовь Андреевна</h2>
          </div>
          <div class="logout"  @click="logout = false">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.01958" cy="2.25395" r="2.00395" fill="white"/>
                  <circle cx="2.01958" cy="8.24999" r="2.00395" fill="white"/>
                  <circle cx="2.01958" cy="14.246" r="2.00395" fill="white"/>
                  <circle cx="8.01567" cy="2.25395" r="2.00395" fill="white"/>
                  <circle cx="8.01567" cy="8.24999" r="2.00395" fill="white"/>
                  <circle cx="8.01567" cy="14.246" r="2.00395" fill="white"/>
                  <circle cx="14.0118" cy="2.25395" r="2.00395" fill="white"/>
                  <circle cx="14.0118" cy="8.24999" r="2.00395" fill="white"/>
                  <circle cx="14.0118" cy="14.246" r="2.00395" fill="white"/>
              </svg>
          </div>
      </div>

      <!-- ========  PROFILE AVATAR   =======  -->
      
      <div class="logout__container" v-if="!logout">
          <v-badge content="2" color="#FF4D4F">
              <v-icon color="#2F80ED">mdi-bell-outline</v-icon>
          </v-badge>
          <div class="avatar">
              <v-avatar  size="36">
                  <v-img src="../assets/images/avatar.png"></v-img>
              </v-avatar>
              <h2>Любовь Андреевна</h2>
          </div>
          <div class="logout__icon">
              <LogoutIcon @click="logout = true" />
              <p>Выйти</p>
          </div>
      </div>
    </div>
</template>

<script>
import LogoutIcon from '../assets/icons/logoutIcon.vue'
export default {
  name: 'Navbar',
  data(){
    return{
      logout: true,
      data: [
        {
          date: "24.10.2022",
          user: "ООО “ЮГ-СЕРВИСГРУПП”",
          address: "СПБ, район Октябрьский, улица Таганрогская, дом 112, корпус 1, литера А",
          
        }
      ]
    }
  },
  components: {
    LogoutIcon
  }
};
</script>
<style></style>
