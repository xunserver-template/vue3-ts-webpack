import { ref } from "vue"

export const useLoading = (value = true) => {
  const loading = ref(value)
  const setLoading = (value: boolean) => {
    loading.value = value
    return value
  }

  const b = "123"

  return {
    setLoading,
    loading,
  }
}
