<script setup>
import {watch ,computed} from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '@/hooks/fetch.js';
import {BASE_URL, API_KEY} from '@/config/marvelAPI.js'


const route = useRoute()

let characterData;
let errorData;
watch(
    ()=>route.params,
    (id)=>{
        const url = `${BASE_URL}${id.id}${API_KEY}`
        const urlComp = computed(() => url)
       const { data, error } = useFetch(urlComp);
        characterData =data;
        errorData = error;

},{immediate:true})


</script>

<template>
<!-- <h1>{{characterData?.data}}</h1> -->
  <div v-if="errorData">Oops! un error ha ocurrido: Por favor recargue la pagina</div>
 
  <div v-else-if="characterData">
   
    <h1>{{characterData?.data.results[0].name}}</h1>

<p>Comics</p>
    <ul v-for="(comics, index) in  characterData?.data.results[0].comics.items" :key="index">
        <li>{{comics.name}}</li>
    </ul>
    <p>series</p>
    <ul v-for="(series, index) in  characterData?.data.results[0].series.items" :key="index">
        <li>{{series.name}}</li>
    </ul>
  </div>
  <div v-else>Loading...</div>


</template>
