<script>
import buttom from '../main/buttom.vue';
export default{
    components:{buttom},
    data(){
        return{   
            subtitle: 'THE BEST TABLE IN TOWN',
            title: 'FINE DINING EXPERIENCE',
            text: 'Pellente vitae viverra risus, sagitts, Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis'  ,
            navList: ['Home', 'Culinary History',' Our Team', 'Our Menu', 'Takeout', 'Bulletin', 'Reservation',  ],
            img: "/images/logo-restaurant.png",
            btn: 'EXPLORE THE MENU'
            
        }
    } 
}
    
</script>

<template>
 <header>
    <div class="d-flex">
        <div class="left-header">
            <a href="#"> <img :src="img" alt="logo"/> </a>

            <div class="d-flex flex-column h-100 justify-content-center text-white header-text">
                
                <h4>{{ subtitle }}</h4>
                <h1>{{ title}}</h1>
                <p>{{ text }}</p>
                <buttom :btn="btn"></buttom>

            </div>
        </div>
        <div class="right-header">
            <nav>
                <a v-for="list in navList" href="#">{{ list }}</a>
                <a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
            </nav>
        </div>
    </div>
 </header>
</template>


<style scoped lang="scss">
@use '../../assets/sass/variables' as *;
header{
    min-height: 700px;
    
    .left-header{
        flex-basis: 40%;
        border: 1px solid $black;
        min-height: 700px;
        background-color: $black;
        padding: 40px;
        padding-left: 50px;
        img{
            width: 200px;
        }
        .header-text{
            padding-left: 50px;
            h4{
                
                padding-bottom: 30px;
                font-size: 12px;
            }
            h1{
                font-size: 50px;
                padding: 30px 0px;
            }
            p{
                
                padding: 30px 0px;
                padding-right: 50px;
            }
            
            

           
        }
    
        
        
    }
    .right-header{
        flex-basis: 60%;
        height: 100%;
        border: 1px solid black;
        min-height: 700px;
        position: relative;
        background-image: url('/images/headerthumb.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        padding: 40px;
        display: flex;
        justify-content: space-around;
        nav{
            
            a{
            padding: 10px;
            text-decoration: none;
            color: $secondary;

            }
        }


    }
}
</style>