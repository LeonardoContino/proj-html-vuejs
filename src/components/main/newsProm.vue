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
        <div v-for="card in promCards" class="col d-flex flex-column align-items-center h-card">
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
            position: relative;
        }
    .img-card:hover{
        height: 700px;
       
    }
    

    h4{
        padding-top: 30px;
    }
    p{
        font-size: 10px;
    }
    .h-card:hover{
        position: relative;
        h4{
        position: absolute;
        top: calc(50% - 40px);
        color: white;
        
        
    }
    .img-card::after{
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(to bottom,rgb(0, 0, 0), transparent);
            height: 100%;
            width: 100%;
            content: '';

        }
    p{
            color: white;
        }
    }
    

   

</style>
