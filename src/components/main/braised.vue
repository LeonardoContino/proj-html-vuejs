<script>
import buttom from './buttom.vue';
export default{
    components:{buttom},
    data(){
        return{
            title: 'BRAISED ABALONE',
            price: '$52',
            text: 'pretium accumsan cporttitor viverra leo gravida mollis imperdiet. frigilla nibh pharetra sociis leo amet',
            btn: 'VIEW IN THE MENU'
        }
    }
}
</script>


<template>
    <div class="thumb">
        <img src="/images/hero42x.jpg" alt="">
        <div class="description">
            <div class="title-price"><h3>{{ title }} </h3><span>{{ price }}</span></div>
            <div class="s-border"></div>
            <p>{{ text }}</p>
            <buttom :btn="btn"></buttom>

        </div>
    </div>
</template>



<style scoped lang="scss">

.s-border{
        border-bottom: 1px solid #B9B9B8;
        width: 50px;
        margin: 30px 0;
    }
    a{
    padding: 5px 10px;
    text-align: center;
    font-size: 15px;
    text-decoration: none;
    color: white;
    border: 1px solid #B9B9B8;
    width: 200px;
     }

.thumb{
    height: 700px;
    margin-top: 100px;
    position: relative;
    color: white;

    
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .description{
        position: absolute;
        background-color: black;
        height: 450px;
        width: 400px;
        bottom: calc(350px - 225px);
        left: 300px;
        padding: 50px;
        .title-price{
        display: flex;
        
        h3{
            flex-basis: 50%;
        }
        span{
            position: absolute;
            right: 50px;
            
        }
       

    }
    p{
            color: #B9B9B8;
            padding:30px 0;
        }
    }
}
</style>