<script>
import buttom from './buttom.vue';
export default{
    components:{buttom},
    props:{
        imgCard : String,
        titleCard: String,
        textCard: String,
        btn: String
    }
}
</script>


<template>

    
    
        <div class="col d-flex flex-column align-items-center">
            <img class="img-card img-fluid" :src="imgCard" alt=""/>
            <h4>{{ titleCard }}</h4>
            <div class="s-border"></div>
            <p class="text-center">{{ textCard }}</p>
            <buttom :btn="btn"></buttom>

        </div>
   
</template>


<style scoped lang="scss">

    
    
    
    h4{
        font-size: 20px;
        padding: 10px;
    }
    p{
        font-size: 12px;
        padding: 20px;
    }
    

</style>