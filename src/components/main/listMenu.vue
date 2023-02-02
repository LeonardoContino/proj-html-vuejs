<script>
export default{
    data(){
        return{
            title1: "HORS D'OEUVRES",
            title2: "MAIN COURSE",
            title3: 'DESSERT',
            hords:[
                    {
                        subtitle: 'AHI SALMON NIGIRI',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$48'
                    },
                    {
                        subtitle: 'UMI MASU SALAD',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$21'
                    },
                    
                    {
                        subtitle: 'TEMAKI WITH CRAB',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$32'
                    },
                    
                    {
                        subtitle: 'CALIFORNIA ROLLS',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$22'

                    
                    },
                   ],
                   mainCourse:[
                    {
                        subtitle: 'BRAISED ABALONE',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$48'
                    },
                    {
                        subtitle: 'TWICE COOKED PORK',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$21'

                    },
                    
                    {
                        subtitle: 'KUNGPAO CHICKEN',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$32'

                    },
                    {
                        subtitle: 'CHAIR SIU SUSHIS',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$48'

                    },
                   ],
                   dessert:[
                   {

                        subtitle: 'BRAISED ABALONE',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$52'
                    },
                    {
                        subtitle: 'TWICE COOKED PORK',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$21'

                    },
                    {
                        subtitle: 'KUNGPAO CHICKEN',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$32'

                    },
                    {
                        subtitle: 'CHAIR SIU SUSHIS',
                        text:'edget vulputate vitae quis rutrum blandit sed quam nulla sit lacinia',
                        price: '$48'

                    },
                   ]       
            }
        }
}
        

           
        

</script>


<template>

    <div class="container menu">
        <div class="row card-menu row-cols-3 m-0">
            <div class="col">
                
                <div >
                    <h3>{{ title1 }}</h3>
                <div v-for="hord in hords">
                    <div class="text"><h5>{{ hord.subtitle }}<span>{{ hord.price }}</span></h5></div>
                    <p>{{ hord.text }}</p>


                </div>
                </div>
            </div>
            <div class="col">
                <div >
                    <h3>{{ title2 }}</h3>
                <div v-for="main in mainCourse">
                    <div class="text"><h5>{{ main.subtitle }}<span>{{ main.price }}</span></h5></div>
                    <p>{{ main.text }}</p>


                </div>
                </div>
            </div>
            <div class="col">
                <div >
                    <h3>{{ title3 }}</h3>
                <div v-for="d in dessert">
                   <div class="text"><h5>{{ d.subtitle }}<span>{{ d.price }}</span></h5></div> 
                    <p>{{ d.text }}</p>


                </div>
                </div>
            </div>
            

        </div>
    </div>
</template>

<style scoped lang="scss">
.menu{
    margin-top: 100px;
    margin-bottom: 100px;
    .text{
        position: relative;

        span{
            position: absolute;
            right: 2px;
        }
        
    }
    
}
.card-menu{
    height: 700px;
}
.card-menu > *{
    height: 100%;
    padding: 50px;
    background-color:#E8E8E8 ;

}
.card-menu > *:hover{
    color: white;
    position: relative;
    bottom: 50px;
    background-image: url('/images/misc22x.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.card-menu > *::before{
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.567) 5%, transparent);
    height: 100%;
    width: 100%;
    content: '';
            
}
.card-menu > *::after{
    color: white;
}


</style>