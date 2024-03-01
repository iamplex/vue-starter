export default function useCounter(initialValue: number) {
  const _initialValue = initialValue
  const count = ref(initialValue)

  const inc = () => count.value++
  const dec = () => count.value--
  const reset = () => count.value = _initialValue

  return {
    count,
    inc,
    dec,
    reset,
  }
}
