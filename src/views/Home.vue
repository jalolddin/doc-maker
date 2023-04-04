<template>
  <div class="home">
    <v-card>
      <v-layout>
        
        
        <!-- ============   SIDEBAR STAR   ====================== -->


        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
        >

        <v-list density="compact" nav>
          

            <!--================   STATEMENTS TAB   ==================== -->
            

            <v-list-item @click="openStatements(); selectComponent('statements')">
                <div class="v-list-item__prepend">
                      <Folder
                      :class="{ active: componentType === 'statements' }"
                      class="mdi-account-group-outline mdi v-icon notranslate v-theme--light v-icon--size-default"
                      aria-hidden="true"
                      density="compact">
                      </Folder>
                      <div :class="{ active: componentType === 'statements' }"  class="v-list-item-title">
                         Заявления
                      </div>
                </div>
                <DropdownUp v-if="statementsShow && componentType === 'statements'" />
                <DropdownIcon v-else />
            </v-list-item>
            <div
              @click="selectComponent('statements')"
              class="dropdown"
              :class="{ dropdownActive: componentType === 'statements' }"
              v-if="statementsShow && componentType === 'statements'"
              v-show="!rail"
              >
              <p>Список заявлений</p>
            </div>

            
            <!-- ========================    DRAFTS TAB   =================== -->
            

            <v-list-item @click="selectComponent('drafts')">
                <div class="v-list-item__prepend">
                    <Rubbish
                      :class="{ active: componentType === 'drafts' }"
                      class="mdi-account-group-outline mdi v-icon notranslate v-theme--light v-icon--size-default"
                      aria-hidden="true"
                      density="compact">
                    </Rubbish>
                      <div
                      :class="{ active: componentType === 'drafts' }"
                      class="v-list-item-title">
                      Черновики
                    </div>
                </div>
            </v-list-item>
         
            
            <!-- =======================    SIGNATORIES TAB   ======================== -->
           

            <v-list-item @click="openSignatories(); selectComponent('signatories');">
               <div class="v-list-item__prepend">
                    <Subscribers
                    :class="{ active: componentType === 'signatories' }"
                      class="mdi-account-group-outline mdi v-icon notranslate v-theme--light v-icon--size-default"
                      aria-hidden="true"
                      density="compact">
                    </Subscribers>
                    <div :class="{ active: componentType === 'signatories' }"  class="v-list-item-title">Подписанты</div>
                </div>
                 <DropdownUp v-if="signatoriesShow && componentType === 'signatories'" />
                 <DropdownIcon v-else />
            </v-list-item>
            <div
              @click="selectComponent('newSignatories')"
              class="dropdown"
              :class="{ dropdownActive: componentType === 'newSignatories' }"
              v-if="signatoriesShow && componentType === 'signatories' || componentType === 'newSignatories'"
              v-show="!rail"
              >
              <p>Новый подписант</p>
            </div>
         

            <!-- =================================  DOCUMENTS TAB  ========================== -->
         

            <v-list-item
              @click="
                openDocuments();
                selectComponent('documents');"  
            >
              <div class="v-list-item__prepend">
                <Document 
                  :class="{ active: componentType === 'documents' }"
                  class="mdi-account-group-outline mdi v-icon notranslate v-theme--light v-icon--size-default"
                  aria-hidden="true"
                  density="compact"
                ></Document>
                <div class="v-list-item-title" :class="{ active: componentType === 'documents' }">Доверенности</div>
              </div>
            <DropdownIcon v-if="!documentsShow" />
            <DropdownUp v-else />
            </v-list-item>
            <div class="dropdown" 
            @click="selectComponent('newDocuments')"
            :class="{ dropdownActive: componentType === 'newDocuments' }"
            v-if="documentsShow && componentType === 'documents' || componentType === 'newDocuments'"
            v-show="!rail"
            >
              <p>Новая доверенность</p>
            </div>


            <!-- =================================  NOTIFICATION TAB  ================================ -->
            
            
            <v-list-item @click=" openProfile()">
              <div class="v-list-item__prepend">
                <ProfileSvg
                  :class="{ active: componentType === 'profile' || componentType === 'notification' }"
                  class="mdi-account-group-outline mdi v-icon notranslate v-theme--light v-icon--size-default"
                  aria-hidden="true"
                  density="compact"
                ></ProfileSvg>
                <div
                :class="{ active: componentType === 'profile' || componentType === 'notification' }"
                class="v-list-item-title"
                >
                Профиль
              </div>
            </div>
            <DropdownIcon v-if="!profileShow" />
            <DropdownUp v-else />
            </v-list-item>
            <div :class="{ dropdownActive: componentType === 'profile' }" class="dropdown" v-if="profileShow && !rail">
              <p @click="selectComponent('profile');">Данные профиля</p>
            </div>
            <div :class="{ dropdownActive: componentType === 'notification' }" class="dropdown" v-if="profileShow  && !rail">
              <p @click="selectComponent('notification')">Уведомления</p>
            </div>


            <!-- =================================  STATISTIC TAB   ================================ -->
            
            
            <v-list-item class="mt-10">
              <div class="v-list-item__prepend">
                <Statistic
                  class="mdi-account-group-outline mdi v-icon notranslate v-theme--light v-icon--size-default"
                  aria-hidden="true"
                  density="compact"
                ></Statistic>
                <div class="v-list-item-title">Статистика</div>
              </div>
            <DropdownIcon />
            </v-list-item>
          </v-list>
          <v-btn
          v-if="!rail"
           class="closeIcon"
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = true"
          ></v-btn>
        </v-navigation-drawer>


        <!-- ====================   Sidebar End ==================  -->

        
        <!--       ======================   Active components   ==============================   -->

        <v-main style="height: 100vh">
          <Statements v-if="componentType === 'statements'" />
          <Drafts v-if="componentType === 'drafts'" />
          <Signatories v-if="componentType === 'signatories'" />
          <NewSignatories v-if="componentType === 'newSignatories'"/>
          <Documents v-if="componentType === 'documents'" />
          <NewDocuments v-if="componentType === 'newDocuments'"/>
          <Profile v-if="componentType === 'profile'" />
          <Notification v-if="componentType === 'notification'" />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<script lang="ts">
// Vue Tools
import { defineComponent, ref } from "vue";
// Svg Components
import Folder from "../assets/icons/folder.vue";
import Rubbish from "../assets/icons/rubbish.vue";
import Subscribers from "../assets/icons/subscribers.vue";
import ProfileSvg from "../assets/icons/profile.vue";
import Statistic from "../assets/icons/statistic.vue";
import Document from '../assets/icons/document.vue'
import DropdownIcon from "../assets/icons/dropdownIcon.vue";
import DropdownUp from '../assets/icons/DropdownUp.vue'
// Vue components
import Statements from "../components/statements/Statements.vue";
import Drafts from "../components/Drafts.vue";
import Signatories from "../components/signatories/Signatories.vue";
import NewSignatories from '../components/signatories/NewSignatories.vue'
import Documents from "../components/documents/Documents.vue";
import NewDocuments from '../components/documents/NewDocuments.vue'
import Profile from '../components/Profile.vue'
import Notification from '../components/Notification.vue'
export default defineComponent({
  name: "HomeView",
  components: {
    Folder,
    Rubbish,
    Subscribers,
    ProfileSvg,
    DropdownIcon,
    DropdownUp,
    Statistic,
    Statements,
    Drafts,
    Signatories,
    NewSignatories,
    Documents,
    NewDocuments,
    Document,
    Profile,
    Notification
  },
  setup() {
    const statementsShow = ref(false);
    const signatoriesShow = ref(false);
    const documentsShow = ref(false);
    const profileShow = ref(false);
    const drawer = ref(true)
    const rail = ref(true)
    const componentType = ref();
    function openStatements() {
      statementsShow.value = !statementsShow.value;
      // eslint-disable-next-line no-constant-condition
    }
    function openSignatories() {
      signatoriesShow.value = !signatoriesShow.value;
    }
    function openDocuments() {
      documentsShow.value = !documentsShow.value;
    }
    function openProfile() {
      profileShow.value = !profileShow.value;
    }
    function selectComponent(value: null) {
      componentType.value = value;
      // Statement
      if(componentType.value === "statements"){
       return;
      } else {
        statementsShow.value = false
      }
      // signatories
      if(componentType.value === "signatories" || componentType.value === 'newSignatories'){
       return;
      } else {
        signatoriesShow.value = false
      }
      // documents
      if(componentType.value === "documents" || componentType.value === 'newDocuments'){
       return;
      } else {
        documentsShow.value = false
      }
        // profile
      if(componentType.value === "profile" || componentType.value === "notification"){
       return;
      } else {
        profileShow.value = false
      }
    }
    return {
      statementsShow,
      signatoriesShow,
      documentsShow,
      openSignatories,
      openStatements,
      openDocuments,
      componentType,
      selectComponent,
      profileShow,
      openProfile,
      drawer,
      rail
    };
  },
});
</script>
