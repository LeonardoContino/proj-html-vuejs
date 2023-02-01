<script>
export default{
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
            <a href="#">{{ btn }}</a>
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
        h2{
            color: white;
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
    }
    .bg > *{
        padding: 20px 0;
    }
}
</style>