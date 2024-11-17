<template>
    <div>
        <h1>Notes</h1>
        <span>Please log in to continue</span>

        <form @submit.prevent="handleSubmit">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="data.email" />
            <label for="password">Password</label>
            <div>
                <input type="password" id="password" v-model="data.password" />
                <a href="#">Forgot</a>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script setup>
</script>