<template>
  <div class="app-address-autocomplete">
    <input
      @click="isOpen = true"
      class="app-address-autocomplete__input"
      placeholder="Search Address..."
      v-model="addressSearch"
    />
    <div class="app-address-autocomplete__results" v-if="isOpen">
      <div class="app-address-autocomplete__results__no-search" v-if="!addressSearch">
        Start typing to search...
      </div>
      <div
        class="app-address-autocomplete__results__no-results"
        v-if="addressSearch && !addressLoading && !addressResults.length"
      >
        No Results
      </div>
      <div class="app-address-autocomplete__results__loader" v-if="addressLoading" />
      <ul v-else>
        <li
          class="app-address-autocomplete__results__result"
          v-for="result in addressResults"
          @click="setResult(result)"
          :key="result.formatted"
        >
          {{ result.formatted }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useAddressSearch from '@/composables/useAddressSearch'

export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Object,
      default: null
    }
  },
  setup() {
    return useAddressSearch()
  },
  data() {
    return {
      isOpen: false as boolean
    }
  },
  watch: {
    value: {
      handler(value) {
        this.addressSearch = value?.value.formatted
      },
      immediate: true
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    },
    setResult(result) {
      this.isOpen = false
      this.addressSearch = result?.formatted
      this.$emit('update:modelValue', result)
    }
  }
})
</script>

<style scoped lang="scss">
.app-address-autocomplete {
  display: flex;
  width: 100%;
  position: relative;

  &__input {
    display: flex;
    height: 60px;
    padding: 10px;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 12px;
    border: 1px solid #cbcbcb;
    background: #fff;
  }

  &__results {
    border-radius: 12px;
    padding: 12px;
    margin: 0;
    background: var(--color-white);
    max-height: 250px;
    overflow: auto;
    position: absolute;
    top: 64px;
    z-index: 1;
    left: 0;
    right: 0;

    ul {
      margin: 0;
      padding: 0;
    }

    &__loader {
      border: 8px solid var(--color-inactive);
      border-top: 8px solid var(--color-primary);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spin 2s linear infinite;
      margin: auto;
    }

    &__result {
      list-style: none;
      text-align: left;
      padding: 4px 2px;
      cursor: pointer;
      border-radius: 12px;
      color: var(--color-text-black);

      &:hover {
        background-color: var(--color-secondary);
        color: var(--color-white);
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
