<script setup lang="ts">
const { initial } = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(initial)
</script>

<template>
  <div flex justify-center items-cente m-4>
    <button btn text-sm @click="dec">
      -
    </button>
    <div p-x-2 w-16>
      {{ count }}
    </div>
    <button btn text-sm @click="inc">
      +
    </button>
  </div>
</template>
