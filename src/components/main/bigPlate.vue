<script>
export default{
    data(){
        return{
            img: '/images/page52x.jpg',
            text: 'KUNG PAD CHICKEN - $32'
        }
    }
}
</script>


<template>
<div class="image">
    <img class="img-fluid" :src="this.img" alt="">
    <h5>{{ this.text }}</h5>
</div>

</template>

<style scoped lang="scss">

.image{
    height: 500px;
    margin-bottom: 50px;
    position: relative;
    img{
        height: 100%;
        object-fit: cover;
        
    }
    
    h5{
        font-size: 15px;
        position: absolute;
        bottom: 10px;
        left: calc(50% - 95px );
        color: #ffffff;
        
    }
}
.image::after{
        background: linear-gradient(to top,rgb(0, 0, 0) 5%, transparent);
        position: absolute;
            top: 0;
            left: 0;
            opacity: 0.5;
            height: 100%;
            width: 100%;
            content: '';
    }

</style>