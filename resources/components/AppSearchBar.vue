<template>
  <div class="container">
    <div class="app-search-bar">
      <h3 class="app-search-bar__title">{{ title }}</h3>
      <div class="app-search-bar__right">
        <AppAddressAutocomplete v-model="address" />
        <button class="btn btn--primary" @click="$emit('search')">Search</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppAddressAutocomplete from '@/components/AppAddressAutocomplete.vue'

export default defineComponent({
  emits: ['update:modelValue', 'search'],
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: { AppAddressAutocomplete },
  computed: {
    address: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  padding-top: 24px;
  padding-bottom: 24px;
}

.app-search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  &__title {
    color: var(--color-text-white);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__right {
    display: flex;
    width: 700px;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
    align-self: stretch;
  }
}
</style>
