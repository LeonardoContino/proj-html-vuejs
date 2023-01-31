<script>
export default{
    data(){
        return{
            navList: ['Home', 'Culinary History',' Our Team', 'Our Menu', 'Takeout', 'Bulletin', 'Reservation',  ]
        }
    } 
}
    
</script>

<template>
 <header>
    <div class="d-flex">
        <div class="left-header">
            <a href="#"><img src="../../assets/images/logo-restaurant.png" alt="logo"></a>
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
header{
    min-height: 700px;
    
    .left-header{
        flex-basis: 40%;
        border: 1px solid black;
        min-height: 700px;
        background-color: #000000;
        padding: 40px;
        img{
            width: 200px;
        }
    
        
        
    }
    .right-header{
        flex-basis: 60%;
        height: 100%;
        border: 1px solid black;
        min-height: 700px;
        position: relative;
        background-image: url('../../assets/images/headerthumb.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        padding: 40px;
        display: flex;
        justify-content: space-around;
        nav{
            
            a{
            padding: 10px;
            text-decoration: none;
            color:#B9B9B8;

            }
        }


    }
}
</style>