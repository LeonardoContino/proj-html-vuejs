<script>
export default{
    props:{
        btn: String
    }
}
</script>

<template>

    <a href="#">{{ btn }}</a>
</template>

    
<style scoped>
    .s-border{
        border-bottom: 1px solid #B9B9B8;
        width: 50px;
    }
    a{
            padding: 5px 10px;
            text-align: center;
            font-size: 15px;
            text-decoration: none;
            color:#B9B9B8;
            border: 1px solid #B9B9B8;
            width: 200px;

            }
</style>