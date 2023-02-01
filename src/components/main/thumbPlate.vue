<script>
import thumbProps from './thumbProps.vue'

export default{
    components:{thumbProps},
    data(){
        return{
            ImgUrl: '/images/slider32x.jpg',
            subTitle: 'FINE DINING EXPERIENCE',
            title: 'THE BEST TABLE IN TOWN',
            text: 'pellemtesque vitae viverra registerRuntimeHelpers, sagittis, venenatis riduculus scelirques nisi in urna nulla.',
            btn: 'EXPLORE THE MENU'
        }
    }
}
</script>


<template>
<thumbProps></thumbProps>
</template>


<style scoped lang="scss"></style>