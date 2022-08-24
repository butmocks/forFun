
<script setup>
  import { onMounted } from "vue";
  import ops from '@/assets/ops.png';
const props = defineProps({
  hide: Function,
  show: Boolean
}); 
  onMounted(() =>{ //Autoclose
     setInterval(() => {
      props.hide()
    }, 6000);
  })
</script>

<template>
  <Transition>
    <div :class="{ 'shake': show }" class="notification_cont">      
        <section class="notification">    
            <span @click="hide()" class="notification__btn-close">X</span>
            <div>
                <blockquote class="notification__electric notification__bubble">
                Empty files<span>Error!</span>
                </blockquote>
            </div> 
            <img class="notification__img-comic" :src="ops"/>
        </section>
     </div>
  </Transition>
</template>

<style>
.notification_cont{
    position: relative;
    z-index: 1;
}
.notification__btn-close{
    top: -6rem;
    right: 1rem;
    position: absolute;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 2px #fffbfb;
    cursor: pointer;
}
.notification div{ 
  position:absolute;
  width: 100%;
}

blockquote{
  z-index:99;
}
blockquote.notification__bubble { 
	background-position: center;
  background-repeat: no-repeat !important;
	background-size: 100% 100%;
	text-align: center;
	height: 0;
	box-sizing: content-box;
	line-height: 1;
  position:absolute;
  right:16rem;
  top: -1rem;
}

blockquote.notification__electric {
  background: url("../../assets/electric.svg");
    width: 200px;
    font-size: 1.2rem;
    font-style: italic;
    padding: 1.5rem 3rem 5rem 0;
    right: 4rem;
    top: -8rem;
}
blockquote.notification__electric span {
  display: block;
  font-size: 2rem;
  font-weight: bold;
}

.notification__img-comic{
    position: absolute;
    width: 150px;
    height: 150px;
    right: 0;
    top: -4rem;
 }


.v-leave-active {
  transition: opacity 0.4s ease;
}
.v-leave-to {
  opacity: 0;
}
  
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}


/* Media Query for Laptops and Desktops */
@media (min-width: 1025px) {
.notification__btn-close {
    z-index: 999;
    right: -1rem;
    top: -5rem;
}
blockquote.notification__electric {
    right: 0;
    top: -5rem;
}
.notification__img-comic {
    right: -5rem;
    top: -3rem;
}
}
</style>
