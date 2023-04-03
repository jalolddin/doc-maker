<template>
    <div class="step__four">
 <div class="text">
    <div>
        <p>Выберите срок действия доверенности</p>
        <span>Выберите или введите дату окончания действия</span>
    </div>

        <label for="title">
                <v-switch
                style="display: flex; flex-direction: column; justify-content: flex-start"
                color="#2F80ED"
                v-model="switchValue"
                label="Право передоверия"
                >
            <div class="v-selection-control__wrapper"><p>yes</p></div>
            </v-switch>
        </label>
 
</div>
<div class="date">
    <!-- <input type="text" readonly v-model="picker"> -->
   <input type="date" v-model="picker">
</div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            picker: new Date().toISOString().substr(0, 10),
            switchValue: true
        }
    }
}
</script>