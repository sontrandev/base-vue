<template>
  <div class="mt-5">
      <div class="container mx-auto px-8">
        <form @submit.prevent="onsubmit" class="flex flex-col justify-start space-y-6">
          <div class="row">
            <label class="flex flex-col" for="email">
              <span class="font-semibold">Email</span>
              <input type="email" id="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" placeholder="example@gmail.com">
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col" for="password">
              <span class="font-semibold">Password</span>
              <input type="password" id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" placeholder="password">
            </label>
          </div>
          <div class="row">
            <button class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg" type="submit">
              Sign In
            </button>
          </div>
        </form>

        <!-- Start : Direction -->
        <div class="text-center w-full mt-6">
          <span class="font-semibold">
            I'm a new member.
          </span><span class="ml-1">
            <router-link :to="{ name: 'Register', params: {}}" class="text-primary font-bold">Sign Up</router-link>
          </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  setup () {
    function onsubmit () {

    }
    return { onsubmit }
  }
}
</script>
