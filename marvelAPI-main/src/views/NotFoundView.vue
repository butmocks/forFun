
<template>
<section class="notFound">
    <div class="notFound__img">
        <h1>404</h1>
        <img :src="kaboon" alt="Error page image" />
    </div>
    <div class="notFound__description">
        
        <h3>UH OH! - PAGE NOT FOUND</h3>
        <p>The page you are looking for migth have been removed or is temporarly unaviable.</p>
        <button @click="handleClick" class="notFound__button">Go to homepage</button>
    </div>
</section>
</template>

<script setup>
import {useRouter} from 'vue-router'
import kaboon from '@/assets/bang.png'

const router = useRouter();

function handleClick(){
  router.push( {"name":"marvel"}) 
}
</script>


<style>
.notFound{
    height: 100vh;
}
.notFound__img{
    width: 80%;
    margin: 2rem auto 0 auto;
}
.notFound__img > h1{
    font-size: 4rem;
    margin: 0;
    text-align: center;
}
.notFound__img > img{
    width: 100%;
}
.notFound__description{
    text-align: center;
    padding: 1rem 2rem;
}
.notFound__description h3{
    font-size: 1.2rem;
}
.notFound__button{
    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
    background: rgb(3 249 112);
    border: 1px solid black;
    box-shadow: 4px 4px 0px 0px #002dbf;
    color: #000;
    cursor: pointer;
}



/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px){

.notFound__img{
    width: 70%;
}
.notFound__description > h3{
    font-size: 2rem;
}
.notFound__description > p{
    font-size: 1.5rem;
}
.notFound__button{
    font-size: 1.5rem;
}
}
  
/* Media Query for Laptops and Desktops */
@media (min-width: 1025px) {
  .notFound{
    display: flex;
    padding: 0 2rem;
   }
.notFound__img{
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.notFound__description{    
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;

}
.notFound__description h3{
    font-size: 1.5rem;
}
.notFound__button{
    width: 200px;
    margin: 1rem auto 0 auto;
}
}
</style>