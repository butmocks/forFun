'use strict';

const VALUE_VALIDATIONS={
    INPUT:{
        text: (val)=>{
            //not white space or empty
            if(val.value === "" || val.value.trim()===""){
                createAlert();
                val.focus();
                return true;
            }
        },
        number:{},
        email:"",
        checkbox:""
    },
    SELECT:{
       "select-one": (val)=>{
        if(val.value === ""){ 
            createAlert();
            val.focus();
            return true;
        }
    }
    }
}




function validator(...elem){
    let status=false;
    const noValue = (elem)=> VALUE_VALIDATIONS[elem.tagName][elem.type](elem) === true;

    status = elem.some(noValue);
 
 return (status) ? false : true
 
}

