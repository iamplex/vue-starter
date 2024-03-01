<script setup lang="ts">
const router = useRouter()
const route = useRoute('/user/[name]')

const { name } = route.params
</script>

<template>
  <div>
    <p>
      Hello {{ name }}
    </p>
    <button m-4 mt-8 text-sm btn @click="router.back()">
      Back
    </button>
  </div>
</template>
