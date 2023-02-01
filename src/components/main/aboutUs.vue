<script>
export default{
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
            <img class="img-card" :src="imgCard" alt=""/>
            <h4>{{ titleCard }}</h4>
            <div class="s-border"></div>
            <p class="text-center">{{ textCard }}</p>
            <a href="#">{{ btn }}</a>

        </div>
   
</template>


<style scoped lang="scss">

    
    .img-card{
        width: 100px;
    }
    a{
        padding: 5px 10px;
        text-align: center;
        font-size: 15px;
        text-decoration: none;
        color: black;
        border: 1px solid #B9B9B8;
        width: 200px;

     }
    h4{
        font-size: 20px;
        padding: 10px;
    }
    p{
        font-size: 12px;
        padding: 20px;
    }
    .s-border{
        border-bottom: 1px solid #B9B9B8;
        width: 50px;
    }

</style>