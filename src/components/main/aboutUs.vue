<script>
import thumbProps from './thumbProps.vue';
import buttom from './buttom.vue';
export default{
    components:{thumbProps, buttom},
    data(){
        return{
            titleSection: 'What critics are saying about us',
            bigCards:{
                img: '/images/blog72x.jpg',
                name: 'MEGGY STEWART',
                title:'NEW YORK TIMES',
                text: 'pellemtesque vitae viverra registerRuntimeHelpers, sagittis, venenatis riduculus scelirques nisi in urna nulla.',
                btn: 'READ FULL ARTICLE'
            },
            cards:[
               
                {
                img: '/images/info52x.jpg',
                name: 'MARY MAXEY',
                title:'THE GUARDIAN',
                text: 'pellemtesque vitae viverra registerRuntimeHelpers, sagittis, venenatis riduculus scelirques nisi in urna nulla.',
                btn: 'READ FULL ARTICLE'
                },
                {
                img: '/images/info12x.jpg',
                name: 'PATRICK MONROE',
                title:'GLOBE AND MAIL',
                text: 'pellemtesque vitae viverra registerRuntimeHelpers, sagittis, venenatis riduculus scelirques nisi in urna nulla.',
                btn: 'READ FULL ARTICLE'
                }
            ]
            

        }
    }
}
</script>

<template>
    <div class="section">
    <div><h1>{{ this.titleSection }}</h1></div>
    <div class="card-primary row row-cols-2">
        <div class="col p-0 h-100">
            <img class="img-fluid h-100" :src="bigCards.img" alt="">

        </div>
        <div class="col description d-flex flex-column justify-content-evenly">
            <h5>{{bigCards.name  }}</h5>
            <h3>{{ bigCards.title }}</h3>
            <div><font-awesome-icon class="p-1" icon="fa-solid fa-star" v-for="n in 5 "/></div>
            <div class="s-border"></div>
            <p>{{ bigCards.text }}</p>
            <buttom :btn="bigCards.btn">{{ bigCards.btn }}</buttom>

        </div>

        

    </div>
    <div  class="row cards row-cols-2 justify-content-between">
            <div v-for="card in cards" class="col p-0 img-cards">
            <img class="back-img" :src="card.img" alt="">
            <div class="card-text">
                <h5>{{card.name  }}</h5>
            <h3>{{ card.title }}</h3>
            <div><font-awesome-icon class="p-1" icon="fa-solid fa-star" v-for="n in 5 "/></div>
            <div class="s-border"></div>
            <p>{{ card.text }}</p>
            <buttom :btn="card.btn">{{ bigCards.btn }}</buttom>
            </div>
            
            </div>
            

        </div>
    </div>
</template>

<style scoped lang="scss">

.section{
    width: 1000px;
    margin: 0 auto;
    
    h1{
    margin: 80px;
    text-align: center;

    }
    .card-primary{
        height: 600px;
        border: 1px solid black;
        margin-bottom: 50px;
        .description{
            background-color: #030303;
            color: white;
            padding: 80px;

            h5{
                font-size: 12px;
            }

            .s-border{
                border-bottom: 1px solid #B9B9B8;
                width: 50px;
            }
        }
        
    }

    .cards{
        height: 500px;
        margin-bottom: 100px;
        
        
        .img-cards{
            position: relative;
            height: 100%;
            width: 480px;

        }
        .img-cards::before{
            position: absolute;
            top: 0;
            left: 0;
            background-image: linear-gradient(to bottom,rgb(0, 0, 0), transparent);
            opacity: 0.7;
            height: 100%;
            width: 100%;
            content: '';

        }
       .back-img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        
       }
       .card-text{
        position: absolute;
        top: 40px;
        left: 0;
        display: flex;
        flex-direction: column;
        color: #ffffff;
        padding: 80px;
        
       }
    }
    a{
            color:#ffffff;
        }
}
</style>