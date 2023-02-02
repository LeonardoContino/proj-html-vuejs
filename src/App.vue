<script>
import navBarHeader from './components/header/navBarHeader.vue';
import universalExp from './components/main/universalExp.vue';
import thumbPlate from './components/main/thumbPLate.vue';
import aboutUs from './components/main/aboutUs.vue';
import bigPlate from './components/main/bigPlate.vue';
import newsProm from './components/main/newsProm.vue';
import takeOut from './components/main/takeOut.vue';
import listMenu from './components/main/listMenu.vue';

export default{
  components: {navBarHeader, universalExp, thumbPlate, aboutUs, bigPlate, newsProm, takeOut, listMenu}
}
</script>

<template>
<navBarHeader></navBarHeader>
<universalExp></universalExp>
<thumbPlate></thumbPlate>
<aboutUs></aboutUs>
<bigPlate></bigPlate>
<newsProm></newsProm>
<takeOut></takeOut>
<listMenu></listMenu>
</template>

<style scoped>

a{
    padding: 5px 10px;
    text-align: center;
    font-size: 15px;
    text-decoration: none;
    color: black;
    border: 1px solid #B9B9B8;
    width: 200px;
     }
     
     .s-border{
        border-bottom: 1px solid #B9B9B8;
        width: 50px;
    }

</style>
