<script>

</script>


<template>
    <div class="thumb">
        <img src="/images/hero42x.jpg" alt="">
        <div class="description">

        </div>
    </div>
</template>



<style scoped lang="scss">

.thumb{
    height: 700px;
    margin: 100px 0;
    position: relative;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .description{
        position: absolute;
        background-color: black;
        height: 450px;
        width: 400px;
        bottom: calc(350px - 225px);
        left: 300px;
    }
}
</style>