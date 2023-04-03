<template>
    <div class="step__fifth">
<label for="title">Выберите подписантов</label>
<span>После выбора подписантов, выберите того, от которого будет подаваться заявление</span>
<div class="selected__signatures">
<div>
    <section>
        <input type="radio" v-model="checked">
        <p>Орехов А.И.</p>
    </section>
    <LogoutIcon />
</div>
<div>
    <section>
        <input type="radio">
        <p>Орехов А.И.</p>
    </section>
    <LogoutIcon />
</div>
</div>
<div>
    <div v-for="i in 18" :key="i">Томишина О.А.</div>
</div>
<button>Добавить нового подписанта</button>
    </div>
</template>

<script>
import LogoutIcon from '../../assets/icons/logoutIcon.vue'
export default{
    data(){
        return{
checked: true
        }
    },
    components: {
        LogoutIcon
    }
}
</script>