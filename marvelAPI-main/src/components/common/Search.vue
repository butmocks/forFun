<script setup>


const props = defineProps({
  method: Function ,
});
</script>

<template>
<form class="search__form" @submit.prevent="method">
  <input type="text"  name="search" placeholder="Search character...">
</form>
  
</template>

<style>
.search__form input[type=text] {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url("../../assets/searchicon.png");
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

.search__form input[type=text]:focus {
  width: 100%;
}

@media (min-width: 1024px) {

}
</style>