<script setup>

import {useRouter} from 'vue-router'

//const router = useRouter();

const props = defineProps({
  info: Object,
  index:Number,
  method: Function
});

/*
function handleClick(characterId){
  router.push( {"name":"character","params":{id: characterId}}) 
}
*/
function parsedDate (val){
  const date= new Date(val);
  return date.getDate() + "-"+(date.getMonth()+1 )+ "-" +date.getFullYear()
}
</script>

<template>


  
  
<div class="flipCard">
  <div class="flipCard-inner">
    <div class="flipCard__front">
      <div class="flipCard__front_ctn">
        <img :src="info.src" :alt="info.name" loading="lazy">
          <h2 class="flipCard__front_name font_marvel">{{ info.name }}</h2>
      </div>  
    </div> 

    <div class="flipCard__back">
      <div class="name_back-container">
        <h2 class="font_marvel">{{ info.name }}</h2> 
      </div>
      <div class="maincontainer">
        <div class="thumnails_mod">
          <img :src="info.src" :alt="info.name" loading="lazy" >
          <div class="flipCard__back-ctn font_marvel">
            <span>{{ info.modified !=="" && parsedDate( info.modified) }}</span>
            <span>Update date</span>
          </div>
        </div>
      
        <div class="flipCard__back-description">
          <p>{{ info.description ==="" ? "For now we haven't information about this character. But we know how important is this information for the humanity. So please help us to complete it and be a superhero too." : info.description }}</p>   
          <div>
            <button @click="method('Edit', index, info)">Edit</button>
          </div>     
        </div>
      </div>
    </div>  
  </div>
</div>

</template>

<style>


.flipCard {
  background-color: transparent;
  width: 280px;
  height: 400px;
  perspective: 1000px;
}

.flipCard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flipCard:hover .flipCard-inner {
  transform: rotateY(180deg);
}

.flipCard__front, .flipCard__back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
}

.flipCard__front {
  color: black;  
  background-color: #858277;
  padding: 1.5rem 0.6rem 0.4rem 0.6rem;
  box-sizing:border-box;
  height: 100%;
}
.flipCard__front_ctn{
   background-color: #1c313e;
   height: 100%;
  padding: 8px 5px 25px 5px;
  box-sizing:border-box;
}
.flipCard__front_ctn::before{
    display: inline-block;
    width: 50%;
    border-top: 100px solid red;
    border-left: 100px solid transparent;
    height: 50px;
    content: "";
    top: -0.6rem;
    right: 0;
    position: absolute;
}
.flipCard__front img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.flipCard__front_name{
  position:absolute;
  bottom:0;
  left: 5px;
  font-size: 1.5rem;
  text-shadow: 2px -2px 0px #F51D1D;
  font-weight: bold;
  text-transform: uppercase;
  color: yellow;
  letter-spacing: 3px;
}
.flipCard__front_name::first-letter {
  font-size: 3rem;
}


.flipCard__back {
  background-color: #ffffca;
  transform: rotateY(180deg);
  padding-top:1.5rem;
}
.name_back-container{
  background: yellow;
  height:1.5rem;
  border-top: 1px solid black;
  border-bottom:1px solid black;
}
.name_back-container h2{
  position:absolute;
  top:-1rem;
  left: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px -2px 0px orange;
  color: navy;
  z-index: 1;
      letter-spacing: 3px;
}
.name_back-container h2::first-letter {
  font-size: 3rem;
  float: left;
  line-height: 1;
}
.maincontainer{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30% 60%;
    grid-gap: 10px;
    box-sizing: border-box;
    height:100%;
}
.thumnails_mod{
  display: grid;
  grid-template-columns: 35% 60%;
  gap: 0.5rem;
  padding: 0.4rem;
}
.thumnails_mod img{
    object-fit: cover;
    max-width: 90%;
    height: 100px;
    margin: auto;
  border: 1px solid black;
}
.flipCard__back-ctn{
  background: white;
  border: 1px solid black;
  border-top: 10px solid black;
  display: flex;
  flex-direction:column;
 justify-content: space-between;
}
.flipCard__back-ctn span:first-child{ 
  padding-top: 1rem;
    font-size: 1.5rem;
}
.flipCard__back-ctn span:nth-child(2){
  background: black;
  color: white;
}
.flipCard__back-description{
   font-size: 0.9rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.flipCard__back-description> p{
  font-size: 0.8rem;
}
.flipCard__back-description >div{
  height: 50px;
}
.flipCard__back-description button{
  padding: 0.5rem 1rem;
    background: #ffffff;
    border: 1px solid black;
    font-weight: 700;
    font-size: 0.9rem;
    box-shadow: 3px 3px 0px 0px rgb(155 155 155);
    cursor: pointer;
}

</style>