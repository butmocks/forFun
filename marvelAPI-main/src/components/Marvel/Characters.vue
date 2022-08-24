
<template>

  <section class="marvel__header font_marvel">
    <h1 class="marvel__header-title ">Marvel characters</h1>
    <div class="marvel__header-search">
      <SearchVue :method="handleSearch" />
    </div>
    <div  class="marvel__header-addBtn">
      <button 
        class="font__comicReg"
        @click="handleOpenModal('Add')"
      >
      Add new character</button>
    </div>
  </section>

  <Modal v-if="openModal">
    <FormAddCharacter 
      :formProps="{
        closeModal: closeModal,
        setNewData: updateCharaterList,
        handleClickEdit: handleOpenModal,
        lastId: startId,
        mode: mode,
        ele: element
      }"
    />
  </Modal>
  <main class="marvel__main">
    <div v-if="isLoading && page ===0">
        <skeletonCardVue v-for="n in 10" :key="n"/>
      </div>
    <div v-else>    
      <CharacterCard 
        v-for="(character, index) in characters" 
        :key="character.name" 
        :info="character" 
        :index="index" 
        :method="handleOpenModal"
      />
    </div>     
  </main> 

  <div class="app__container">
      <a href="" class="loadData__button-click app__more" v-if="hasMoreElements && !isLoading" @click.prevent="moreData">See more</a>
    </div>  
  <div 
    class="moreData--end font_marvel"
    v-show="!hasMoreElements && startId !==null" 
  >
    <h5>No more data</h5>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";
import CharacterCard from "./Card.vue";
import Modal from '../common/Modal.vue';
import FormAddCharacter from "./FormAddCharacter.vue";
import SearchVue from "../common/Search.vue";
import { getFormValues } from "@/utils/getFormValues";
import { fetchCharacters } from "@/utils/getCharacters";
import skeletonCardVue from "../common/skeletonCard.vue";

//modals const
const openModal=ref(false);
const mode = ref(null);
//Data const
const characters = ref([]);
const isLoading = ref(true);
//Fetch Data const
const page = ref(0);
const hasMoreElements = ref(false);
const startId = ref(null)
const limit = 10;
const searchval =  ref("");
//Edit const
const element = ref(null);
const elementIndex = ref(null);


async function moreData() {
  page.value++;
  const newCharacters = await fetchCharacters(page.value, limit, searchval.value );
  characters.value = [...characters.value, ...newCharacters.results];
  hasMoreElements.value= newCharacters.hasMore;
};

const scrolling = ({ target }) => {
  const { scrollingElement } = target;
  const gap = 60;
  if (scrollingElement.scrollTop + scrollingElement.clientHeight + gap >= scrollingElement.scrollHeight) {
    const button = document.querySelector(".loadData__button-click");
    button?.click();
  }
};

const updateCharaterList = (newVal)=>{
  openModal.value=false;
  mode.value === "Edit" 
  ?  characters.value[elementIndex.value] = newVal
  : characters.value.unshift(newVal)
}
const closeModal = ()=>{openModal.value = false};
const handleOpenModal = (modo, i=null, ele=null)=>{
  openModal.value = true;
  mode.value=modo;
  element.value=ele;
  elementIndex.value= i;
}
const handleSearch = async (e)=>{
  const {search } = getFormValues(e.target);
  searchval.value = search === "" ? "" :"&nameStartsWith="+search;
  const {results} = await fetchCharacters(0, limit, searchval.value );
  characters.value = results;
}


onBeforeMount(async () => {
  const {results, totalElements, hasMore} = await fetchCharacters(page.value, limit);
  characters.value = results;
  hasMoreElements.value = hasMore;
  startId.value = totalElements;
  isLoading.value = false;
});

onMounted(() => {
  window.addEventListener("scroll", scrolling);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrolling);
});
</script>


<style>
.marvel__header{
    z-index: 1;
    width: 100%;
    height: 105px;
    position: fixed;
    background: white;
    border-bottom: 1px solid silver;
    text-align: center;
    padding-top: 0.5rem;
}
.marvel__header-title{
    letter-spacing: 3px;
    font-size: 1.5rem;
}
.marvel__header-search{
  padding: 0 1rem;
}
.marvel__header-addBtn{
  position: fixed;
  bottom: 1.5rem;
  right: 1rem;
  z-index: 1;
}
.marvel__header-addBtn button{
    padding: 0.5rem 1rem;
    background: #ffd700;
    border: 2px solid black;
    font-weight: 700;
    font-size: 0.9rem;
    box-shadow: 4px 4px 0px 0px rgb(255 0 0);
    cursor: pointer;
}
.marvel__main{
  padding-top: 120px;
  background: url("../../assets/bgComicBook.png") no-repeat center center fixed; 
  background-size: cover;
  min-height: 100vh;
}
.marvel__main > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
}

.moreData--end{
  height: 20vh;
    background: black;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    color: white;
    font-size: 1.5rem;
    letter-spacing: 2px;
}
/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px){
  .marvel__header{
    height: 135px;
  }
  .marvel__header-title{
    font-size: 2rem;
  }
  .marvel__header-search{
    width: 60%;
    margin: auto;
  }
  .marvel__main {
    padding-top: 160px;
}
  .marvel__main > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  .marvel__header-addBtn {
    bottom: 3rem;
    right: 3rem;
  }
  .marvel__header-addBtn button {
    font-size: 1.5rem;
  }
  .moreData--end{
    font-size: 2rem;
  }
}
  
/* Media Query for Laptops and Desktops */
@media (min-width: 1025px) {
   .marvel__header{
    display: flex;
    padding-left: 2rem;
    height: 100px;
    padding-top: 0;
    align-items: center;
   }
  .marvel__header-title{
    font-size: 2rem;
  }
  .marvel__header-addBtn {
    bottom: 2rem;
    right: 3rem;
  }
 
  .marvel__header-search{
    width: none;
    margin: none;
  }
  .marvel__main {
  padding-top: 130px;
}
 .marvel__main > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
  }
  
}
</style>