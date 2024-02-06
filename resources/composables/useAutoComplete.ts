import { ref, watch } from 'vue'
const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY
import { useDebounceFn } from '@vueuse/core'

export default () => {
  const addressSearch = ref('')
  const addressResults = ref([])
  const addressError = ref(null)

  const search = useDebounceFn(() => {
    if (!addressSearch.value) return
    const search = encodeURIComponent(addressSearch.value)
    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&apiKey=${apiKey}&format=json&filter=countrycode:us`
    )
      .then((res) => res.json())
      .then((json) => (addressResults.value = json.results))
      .catch((err) => (addressError.value = err))
  }, 1000)

  watch(addressSearch, search)

  return {
    addressSearch,
    addressResults,
    addressError
  }
}
