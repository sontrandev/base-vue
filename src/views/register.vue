<template>
  <div class="mt-5">
      <div class="container mx-auto px-8">
        <form @submit.prevent="onsubmit" class="flex flex-col justify-start space-y-6">
          <div class="row">
            <label class="flex flex-col" for="fullName">
              <span class="font-semibold">Full Name</span>
              <input type="text" id="fullName" v-model="fullName" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" placeholder="I like you....">
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col" for="email">
              <span class="font-semibold">Email</span>
              <input type="email" id="email" v-model="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" placeholder="example@gmail.com">
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col" for="password">
              <span class="font-semibold">Password</span>
              <input type="password" id="password" v-model="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" placeholder="password">
            </label>
          </div>
          <div class="row">
            <button v-if="!isPending" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg" type="submit">
              Sign Up
            </button>
            <button v-else class="py-3 text-center w-full text-white font-bold bg-gray-800 rounded-lg cursor-not-allowed" disabled type="button">
              Loading...
            </button>
          </div>
        </form>
        <!--  Start: Error-->
        <div v-if="error" class="text-left text-red mt-4">
          <span> {{ error }}</span>
        </div>
        <!-- Start : Direction -->
        <div class="text-center w-full mt-6">
          <span class="font-semibold">
            I'm already a member.
          </span><span class="ml-1">
            <router-link :to="{ name: 'Login', params: {}}" class="text-primary font-bold">Sign In</router-link>
          </span>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSignUp } from '@/uses/auth/useSignUp'
export default {
  setup () {
    const { error, isPending, signup } = useSignUp()

    const fullName = ref('')
    const email = ref('')
    const password = ref('')

    async function onsubmit () {
      await signup(email.value, password.value, fullName.value)
    }
    return { onsubmit, fullName, email, password, error, isPending }
  }
}
</script>
