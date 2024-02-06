import { ref, watch } from 'vue'
const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY

export default () => {
  const addressSearch = ref('')
  const searchResults = ref([])
  const searchError = ref(null)

  watch(addressSearch, async (search: string) => {
    if (!search) return
    search = encodeURIComponent(search)
    await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((json) => (searchResults.value = json))
      .catch((err) => (searchError.value = err))
  })
}
