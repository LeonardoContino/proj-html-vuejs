<script>


export default{
    data(){
        return{
            subtitle: 'HAC TELLUS, FELIS RISUS AT mattis mattis. eget euismod semper eget tortor, donec amet, blandit. tristique facilisi faucibus elementum feugiat in nam in ffeugiat. ipsum idio etiam duis facilisis amet vulputate',
            title: 'FOOD IS OUR COMMON GROUP, A UNIVERSAL EXPERIENCE',
            text: 'tristique tempus condimentum fdiam donec. condimentum uliamcoper sit elementum henfrerit mi nulla in conquat, ut. Metus, nullam scelerique netus viverra dui.',
            img: '/images/info22x.jpg'
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
</style>