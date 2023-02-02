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

    
<style scoped lang="scss">
@use '../../assets/sass/variables.scss' as *;

a{
            padding: 5px 10px;
            text-align: center;
            font-size: 15px;
            text-decoration: none;
            color:  $primary;
            border: 1px solid $primary;
            width: 200px;

            }
    a:hover{
                color:$black;
                background-color: $primary;
            }
</style>