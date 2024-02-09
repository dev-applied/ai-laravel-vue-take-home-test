import { ref, watch } from 'vue'
const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY
import { useDebounceFn, useFetch } from '@vueuse/core'

export default () => {
  const addressSearch = ref<string>('')
  const addressResults = ref([])
  const addressError = ref<string | null>(null)
  const addressLoading = ref<boolean>(false)

  const search = useDebounceFn(async () => {
    if (!addressSearch.value) {
      addressResults.value = []
      return
    }
    const search = encodeURIComponent(addressSearch.value)
    addressLoading.value = true
    const { error, data } = await useFetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&apiKey=${apiKey}&format=json&filter=countrycode:us`
    ).json()
    addressLoading.value = false
    if (error.value) {
      addressResults.value = []
      addressError.value = error.value
      return
    }
    addressResults.value = data.value.results
  }, 1000)

  watch(addressSearch, search)

  return {
    addressSearch,
    addressResults,
    addressError,
    addressLoading
  }
}
