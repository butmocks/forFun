<template>
<Notification v-if="showNotf" :show="showNotf" :hide="hideNotification"/>  

    <p class="marvel_form-title font__comicReg">{{formProps.mode}} character</p>
    <form 
    class="marvel__form"
        @submit.prevent="handleSubmit">
        <div>
            <label class="font__comicReg" for="name">Name</label>
            <input 
                name="name" 
                placeholder="name"
                :value="formProps.mode === 'Edit' ? error ?'':formProps.ele.name : ''"
            />
             <span v-show="error" class="marvel__form_input--error" >This field is required</span>

        </div>
        <div>
            
            <label class="font__comicReg" for="description">Description</label>
            <textarea 
                name="description" 
                placeholder="Description" 
                rows="5" maxlength="250"
                :value="formProps.mode === 'Edit' ? formProps.ele.description:''"
            >
            </textarea>
        </div>
        <div>
            <label class="font__comicReg">Image</label>
           <input 
            type="file" 
            @change="handleOnFile" 
            placeholder="urlImg" 
            ref="fileInput"
            accept="image/*"
            
            /> 
        </div>
        <div class="marvel__form-buttons">
            <button class="marvel__form-buttons--add" type="submit">{{formProps.mode}}</button>
        <button class="marvel__form-buttons--close" @click="formProps.closeModal">Close</button>
        </div>
        
    </form>

</template>


<script setup>
    import { ref } from "vue";
    import ShadowHero from '@/assets/shadow-hero.png';
    import { getFormValues } from "@/utils/getFormValues";
    import Notification from "@/components/common/Notifications.vue"

    const props = defineProps({
    formProps: Object,
    });

console.log(props.formProps)
    const startId = ref(props.formProps.lastId); //get the total element from the MARVEL API
    const fileInput= ref(null);
    const error = ref(false);
    const showNotf = ref(false);

    const hideNotification=()=> showNotf.value= false;

    function handleOnFile(e) { //get the encodeIMG
        const files = e.target.files
        if (!files.length) return

        const reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = () => fileInput.value = reader.result;
    }
    function handleSubmit(e){
        const formDataObj = getFormValues(e.target);
        if(formDataObj.name.trim() ==="") {
            showNotf.value= true;
            error.value=true;
            return 
        }
        createCharater(formDataObj, fileInput)
    };
    function createCharater(data, imgsrc){
        startId.value ++; //one number to the ID
        const newVal = { //setting the object value
            id:startId.value,
            name: data.name,
            description: data.description,
            src: typeof imgsrc.value !== "string" 
                ? props.formProps.mode === 'Edit'? props.formProps.ele.src : ShadowHero 
                : imgsrc.value, //conditional url in case it comes empty
            modified: new Date(),
        }
        props.formProps.setNewData(newVal)
    }
</script>


<style>
.marvel_form-title{
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
}

.marvel__form input, .marvel__form textarea{
    box-sizing: border-box;
    border: 1px solid #000;
    padding: 0.5rem;
}
.marvel__form>div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
.marvel__form>div label {
    font-weight: 700;
}
.marvel__form_input--error{
    color: tomato;
    font-weight: 700;
}
.marvel__form .marvel__form-buttons{
    flex-direction: initial;
    justify-content: space-evenly;
}
.marvel__form-buttons--close,
.marvel__form-buttons--add{
  
    border: 1px solid black;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
}
.marvel__form-buttons--add{
     padding: 0.5rem 1.5rem;
    background: navy;
    box-shadow: 3px 3px 0px 0px orange;
    color: white;
}

.marvel__form-buttons--close{
     padding: 0.5rem 1rem;
    background: #ffffff;
    box-shadow: 3px 3px 0px 0px rgb(155 155 155);
}
</style>
