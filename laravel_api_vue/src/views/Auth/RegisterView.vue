<script setup>
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { reactive } from 'vue';

const { errors } = storeToRefs(useAuthStore())
// const authStore = useAuthStore()
const { authenticate } = useAuthStore();


const formData = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

onMounted(() => (errors.value = {}));

1
</script>

<template>
  <main>
    <h1 class="title text-3xl font-bold text-red-300 text-center">
        Register a new account
    </h1>

    <form 
        @submit.prevent="
           authenticate('register', formData)
            "
        
        class="w-1/2 mx-auto space-y-6"
    >
        <div>
            <input 
                type="text" 
                placeholder="Name" 
                v-model="formData.name" 
            />
            <p v-if="errors.name" class="error">{{ errors.name[0] }}</p>
        </div>
        <div>
            <input 
                type="text" 
                placeholder="Email" 
                v-model="formData.email" 
            />
            <p v-if="errors.email" class="error">{{ errors.email[0] }}</p>
        </div>
        <div>
            <input 
                type="password" 
                placeholder="Password" 
                v-model="formData.password" 
            />
            <p v-if="errors.password" class="error">{{ errors.password[0] }}</p>
        </div>
        <div>
            <input 
                type="password" 
                placeholder="Confirm Password" 
                v-model="formData.password_confirmation" 
            />
        </div>
        
        <button class="primary-btn">Register</button>
    </form>
  
  </main>
</template>
