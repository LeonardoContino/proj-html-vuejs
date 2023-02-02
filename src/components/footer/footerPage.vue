<script>
export default{
    
        data(){
            return{
            text: 'quam en proin sit massa condimentum.Volutpat non pulvinasr aliqet nuine. Quam en proin sit massa condimentum'

            }
        }
    }

</script>


<template>
    <div class="footer">
        
        <div class="row m-0 row-cols-3 flex-column h-100 text-center text-white justify-content-center align-items-center">
            <div class="col"><img class="img-logo" src="/images/logo-restaurant.png" alt=""></div>
            <div class="col"><p class="p-3">{{ text }}</p></div>
            <div class="col d-flex justify-content-center gap-3">
                <div class="icon">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </div>
                <div class="icon">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </div>
                <div class="icon">
                    <font-awesome-icon icon="fa-brands fa-youtube" />
                </div>
                <div class="icon">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </div>
                <div class="icon">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </div>
            
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer{
    height: 500px;
    background-image: url("/images/footer2x.jpg");
    background-size: cover;
    .icon{
        
        background-color: white;
        color: black;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>