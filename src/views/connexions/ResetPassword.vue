<template>
    <div>
        <h2>Reset Your Password</h2>
        <p>Choose a new password to secure your account.</p>

        <form @submit.prevent="handleSubmit">
            <label for="password">New Password</label>
            <input type="password" id="password" v-model="data.password" />
            <label for="confirmPassword">Confirm New Password</label>
            <input type="password" id="confirmPassword" v-model="data.confirmPassword" />
            <button type="submit">Reset Password</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

let data = reactive({
    password: "",
    confirmPassword: ""
});

let handleSubmit = () => {
    
    if (!validateForm()) {
        console.log("form invalide");
        
    }else{
        console.log("form valide");
        
    }
};

// Vérifie la validité du mot de passe
let checkPassword = () => {
    if (data.password.length < 8 && data.confirmPassword.length < 8) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        return false;
    }
    return true;
};

let compareInputs = () => {
    if (data.password === data.confirmPassword) {
        return true;
    } else {
        alert("Passwords do not match.");
        return false;
    }
};

let validateForm= () => {

    if (!data.password) {
        alert("Veuillez entrer un mot de passe.");
        return false;
    }

    if (!data.confirmPassword) {
        alert("Veuillez entrer un mot de passe de confirmation.");
        return false;
    }

    if (!checkPassword()) {
        return false; 
    }

    if(!compareInputs()){
        return false
    }

    return true; 
}

</script>
