<template>
    <div>
        <h2>Forgotten your password</h2>
        <p>Enter your email below, and we’ll send you a link to reset it.</p>

        <form @submit.prevent="handleSubmit">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="data.email" placeholder="email@example.com"/>
            <button type="submit">Send Reset Link</button>
        </form>
    </div>
</template>
<script setup>

import { reactive } from 'vue';

let data = reactive({
    email:""
})

let handleSubmit = () => {

    if(validateForm()){
        console.log("form validé");
        
    }else{
        console.log("form erreur");
        
    }
    console.log(data);
    
}

let validateForm = () => {

    if(!data.email){
        console.log("Entrer une addresse mail");
        return false
    }

    return true
}
</script>