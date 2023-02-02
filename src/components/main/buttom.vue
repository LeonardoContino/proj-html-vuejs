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
a{
            padding: 5px 10px;
            text-align: center;
            font-size: 15px;
            text-decoration: none;
            color:  #bda16b;
            border: 1px solid #bda16b;
            width: 200px;

            }
    a:hover{
                color:#000000;
                background-color: #bda16b;
            }
</style>