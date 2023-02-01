<script>
import thumbProps from './thumbProps.vue';

export default{
    components:{thumbProps},
    data(){
        return{
            ImgUrl: '/images/slider72x-scaled.jpg',
            subTitle: 'ENJOY YOUR MEAL AT HOME',
            title: 'TAKE OUT NOW AVALIBLE',
            text: 'pellemtesque vitae viverra registerRuntimeHelpers, sagittis, venenatis riduculus scelirques nisi in urna nulla.',
            btn: 'VIEW TAKE OUT MENU'
        }
    }
}
</script>



<template>
<thumbProps
:subtitle="this.subTitle"
:imgThumb="this.ImgUrl"
:title="this.title"
:text="this.text"
:btn="this.btn"
></thumbProps>
</template>


<style scoped lang="scss"></style>