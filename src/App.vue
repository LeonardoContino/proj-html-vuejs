<script>
import navBarHeader from './components/header/navBarHeader.vue';
import universalExp from './components/main/universalExp.vue';
import thumbPlate from './components/main/thumbPLate.vue';
import aboutUs from './components/main/aboutUs.vue';

export default{
  components: {navBarHeader, universalExp, thumbPlate, aboutUs}
}
</script>

<template>
<navBarHeader></navBarHeader>
<universalExp></universalExp>
<thumbPlate></thumbPlate>
<aboutUs></aboutUs>
</template>

<style scoped>

</style>
