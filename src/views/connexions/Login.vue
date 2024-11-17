<template>
    <div>
        <h1>Notes</h1>
        <span>Please log in to continue</span>

        <form @submit.prevent="handleSubmit">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="data.email"/>
            <label for="password">Password</label>
            <div>
                <input type="password" id="password" v-model="data.password"/>
<a href="#">Forgot</a>
            </div>
            <button type="submit">Login</button>
        </form>

        <div>
            <span>Or log in with:</span>
            <button>Google</button>
            <span>No account yet? <a href="#">Sign Up</a></span>
        </div>
    </div>
</template>


<script setup>

//utilisation de reactive pour rentre ma variable data en un objet reactif
import { reactive } from 'vue';

// Import du routeur
import { useRouter } from 'vue-router';

// Initialisation du routeur
const router = useRouter();


const data = reactive({
    email:"",
    password:""
})

let handleSubmit = () => {
    if(!validateForm()){
        console.log("formulaire incorrect");
    }else{
        console.log("form validé redirection page home");      
        router.push("/home")   
    }
    
    
}

//Verifie la validité du formulaire
let validateForm = () => {
    if (!data.email) {
        alert("Veuillez entrer une adresse email.");
        return false;
    }

    if (!data.password) {
        alert("Veuillez entrer un mot de passe.");
        return false;
    }

    if (!checkPassword(data.password)) {
        return false; 
    }

    return true; 
};


// Vérifie la validité du mot de passe
let checkPassword = (password) => {
    if (password.length < 8) {
        alert("Le mot de passe doit contenir au moins 8 caractères.");
        return false;
    }
    return true;
};

</script>