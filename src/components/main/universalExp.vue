<script>
import cards from './cards.vue';
import buttom from './buttom.vue';

export default{
    components: {cards, buttom},
    data(){
        return{
            subtitle: 'HAC TELLUS, FELIS RISUS AT mattis mattis. eget euismod semper eget tortor, donec amet, blandit. tristique facilisi faucibus elementum feugiat in nam in ffeugiat. ipsum idio etiam duis facilisis amet vulputate',
            title: 'FOOD IS OUR COMMON GROUP, A UNIVERSAL EXPERIENCE',
            text: 'tristique tempus condimentum fdiam donec. condimentum uliamcoper sit elementum henfrerit mi nulla in conquat, ut. Metus, nullam scelerique netus viverra dui.',
            img: '/images/info22x.jpg',

            sushiCard:[
                {
                    imgCard: '/images/sushi-1.png',
                    titleCard: 'THE BEST TABLE IN TOWN',
                    textCard: 'sed aenean egestas ut aliquam turpis mauris, molestie. vitae tellus tempor sem id tempus neque, tellus turpis turpis. morbi tordor id gravida aliquet',
                    btn: 'EXPLORE THE MENU'
                },
                {
                    imgCard: '/images/sushi-2.png',
                    titleCard: 'PERFECT FOR GROUPS',
                    textCard: 'sed aenean egestas ut aliquam turpis mauris, molestie. vitae tellus tempor sem id tempus neque, tellus turpis turpis. morbi tordor id gravida aliquet',
                    btn: 'MAKE A RESERVATION'
                },
                {
                    imgCard: '/images/sushi-3.png',
                    titleCard: 'FRESH PRODUCE EVERYDAY',
                    textCard: 'sed aenean egestas ut aliquam turpis mauris, molestie. vitae tellus tempor sem id tempus neque, tellus turpis turpis. morbi tordor id gravida aliquet',
                    btn: 'LEARN MORE ABOUT US'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="row m-0 row-cols-2 main-exp">
        <div class="col text-exp">
            <p>{{ subtitle }}</p>
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
            <img src="/images/signature.jpg" alt="">

        </div>
        <div class="col">
            <img class="p-4 img-exp img-fluid" :src="img" alt="">
        </div>
    </div>

    <div class="row row-cols-3 justify-content-center p-4 sushi-card">
    <cards v-for="sushi in sushiCard" :key="sushi.titleCard"
    :imgCard="sushi.imgCard"
    :titleCard="sushi.titleCard"
    :textCard="sushi.textCard"
    :btn="sushi.btn"

    >
</cards>
</div>
</template>


<style scoped lang="scss">
.main-exp{
    height: 600px;
    padding: 50px 80px;

    .text-exp{
        padding-left: 80px;
        padding-right: 50px;
        padding-top: 40px;

        p{
            font-size: 15px;
        }
        h1{
            padding: 30px 0;
        }
        img{
            height: 100px;
            padding-top: 30px;
        }
    }

}

.img-exp{
    height: 600px;
    

}
.sushi-card{
    margin: 0;
    margin-top: 100px;

    .img-card{
        width: 100px;
    }

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
}

</style>