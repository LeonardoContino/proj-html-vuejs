<script>
import buttom from './buttom.vue';
export default{
    components:{buttom},
    props:{
        imgThumb : String,
        title: String,
        text: String,
        btn: String,
        subtitle: String
    }
}
</script>


<template>

    <div class="row m-0 mt-4 mb-4 border thumb">
        <div class="col-7 h-100 p-0"><img :src="imgThumb" alt=""></div>
        <div class="col-5 bg">
            <h4>{{ subtitle }}</h4>
            <h2>{{ title }}</h2>
            <p>{{ text }}</p>
            <buttom :btn="btn"></buttom>
        </div>

    </div>
</template>


<style scoped lang="scss">
.thumb{
    height: 600px;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .bg{
        background-color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 80px;
        color: #B9B9B8;
        a{
            padding: 10px;
        }
        h2{
            color: white;
        }
        
     h4{
        font-size: 10px;
     }
    }
    .bg > *{
        padding: 20px 0;
    }
}
</style>