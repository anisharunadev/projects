<script setup>
import { ref, onMounted } from "vue";
import  SignUp  from "./components/SignUp.vue"
import axios from 'axios'

const form = ref({
    name: "anish",
    email: "",
    password: "",
});

</script>

<template>
    <body class="h-full">
        <SignUp />
    </body>
</template>

<style scoped></style>
