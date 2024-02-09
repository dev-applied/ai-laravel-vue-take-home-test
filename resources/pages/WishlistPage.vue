<template>
  <AppSearchBar v-model="address" title="Search" @search="search" />
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="(_property, i) in properties" :key="i">
        <PropertyCard v-model="properties[i]" @removed="search" />
      </div>
    </div>
    <div class="container text-center">
      <InfiniteLoading @infinite="fetchData" :identifier="identifier">
        <template #spinner>
          <div class="spinner" />
        </template>
      </InfiniteLoading>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppSearchBar from '@/components/AppSearchBar.vue'
import PropertyCard from '@/components/PropertyCard.vue'

export default defineComponent({
  components: { PropertyCard, AppSearchBar },
  data() {
    return {
      address: {} as any,
      properties: [],
      page: 1,
      loading: false,
      identifier: 0
    }
  },
  methods: {
    search() {
      this.properties = []
      this.page = 1
      this.identifier++
    },
    async fetchData($state) {
      const {
        data: { properties, message },
        status
      } = await this.$http
        .get('/api/v1/wishlist', {
          params: {
            lat: this.address?.lat,
            lon: this.address?.lon,
            page: this.page
          }
        })
        .catch((e) => e)
      if (status > 204) {
        $state.$error()
        console.log(`errors: ${message}`)
        this.properties = []
        return
      }

      this.properties.push(...properties)
      this.page++
      if (properties.length < 9) {
        $state.complete()
      } else {
        $state.loaded()
      }
    }
  }
})
</script>

<style scoped lang="scss"></style>
