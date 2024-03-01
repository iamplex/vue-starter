<script setup lang="ts">
const router = useRouter()
const name = ref('')

function go() {
  if (name.value !== '')
    router.push(`/user/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <Counter :initial="0" />

    <input
      v-model="name"
      type="text"
      placeholder="what's up man ?"
      bg="transparent"
      p="x-4 y-2"
      w="200px"
      border="~ rounded gray-200 dark:gray-700"
      text="center"
      outline="none active:none"
      @keydown.enter="go"
    >
    <div>
      <button m-4 btn text-sm @click="go">
        Go
      </button>
    </div>
  </div>
</template>
