<script>

import buttom from './buttom.vue';

export default{
    components:{buttom},
    data(){
        return{
            promCards:[
                {
                    imgCard: '/images/blog92x.jpg',
                    titleCard: 'THE BEST COFFEE IN TOWN',
                    text: 'By admin | January 7th,2020 | Categories: news'
                },
                {
                    imgCard: '/images/blog72x.jpg',
                    titleCard: 'PERFECT FOR GROUPS',
                    text: 'By admin | January 7th,2020 | Categories: news'
                },
                {
                    imgCard: '/images/blog82x.jpg',
                    titleCard: 'FRESH PRODUCE EVERYDAY',
                    text: 'By admin | January 7th,2020 | Categories: news'                    
                }
            ]
        }
    },
    
}
</script>


<template>
<h1 class="p-4 mb-5 text-center fst-italic fw-light">Latest news & promotions</h1>
<div class="container card-prom">
    <div class="row row-cols-3">
        <div v-for="card in promCards" class="col d-flex flex-column align-items-center">
                <img class="img-card img-fluid" :src="card.imgCard" alt=""/>
                <h4>{{ card.titleCard }}</h4>
                <p class="text-center">{{ card.text }}</p>
            </div>
    </div>
</div>

</template>


<style scoped lang="scss">
    .card-prom{
        margin-bottom: 100px;
    }
    .img-card{
            height: 500px;
            object-fit: cover;
        }

    h4{
        padding-top: 30px;
    }
    p{
        font-size: 10px;
    }

   

</style>
