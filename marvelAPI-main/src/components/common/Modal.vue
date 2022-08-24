<script setup>

</script>

<template>
  <teleport to="body">
    <div class="modal">
      <div>
        <slot></slot>
      </div> 
    </div>
  </teleport>
  
</template>

<style>
.modal{
   position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.555);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal > div{
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    width: 90%;
}

/* Media Query for Tablets Ipads portrait mode */
@media (min-width: 768px) and (max-width: 1024px){
.modal > div{
  width: 80%;
}
}
  
/* Media Query for Laptops and Desktops */
@media (min-width: 1025px) {
.modal > div{
  width: 50%;
}
}
</style>