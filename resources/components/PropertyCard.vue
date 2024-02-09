<template>
  <div class="property-card">
    <div class="property-card__image">
      <div class="property-card__image__distance" v-if="property.distance_from_search !== null">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <path
            d="M2.22056 7.44181C2.01391 7.56439 1.875 7.78967 1.875 8.04688C1.875 8.43458 2.19042 8.75 2.57812 8.75C2.88366 8.75 3.14419 8.55404 3.24094 8.28125H5.0625C5.4502 8.28125 5.76562 8.59667 5.76562 8.98438C5.76562 9.37208 5.4502 9.6875 5.0625 9.6875H2.25C1.60383 9.6875 1.07812 10.2132 1.07812 10.8594C1.07812 11.5055 1.60383 12.0312 2.25 12.0312H4.59375C4.7232 12.0312 4.82812 11.9263 4.82812 11.7969C4.82812 11.6674 4.7232 11.5625 4.59375 11.5625H2.25C1.8623 11.5625 1.54688 11.2471 1.54688 10.8594C1.54688 10.4717 1.8623 10.1562 2.25 10.1562H5.0625C5.70867 10.1562 6.23438 9.63055 6.23438 8.98438C6.23438 8.3382 5.70867 7.8125 5.0625 7.8125H3.24094C3.18551 7.65622 3.07634 7.52523 2.93569 7.44181L4.7258 4.50472C5.0074 4.08144 5.15625 3.58822 5.15625 3.07812C5.15625 1.65655 3.9997 0.5 2.57812 0.5C1.15655 0.5 0 1.65655 0 3.07812C0 3.58822 0.148852 4.08144 0.430453 4.50472L2.22056 7.44181ZM2.57812 8.28125C2.44889 8.28125 2.34375 8.17611 2.34375 8.04688C2.34375 7.91764 2.44889 7.8125 2.57812 7.8125C2.70736 7.8125 2.8125 7.91764 2.8125 8.04688C2.8125 8.17611 2.70736 8.28125 2.57812 8.28125ZM2.57812 0.96875C3.74123 0.96875 4.6875 1.91502 4.6875 3.07812C4.6875 3.49691 4.56499 3.9016 4.33324 4.24848C4.33144 4.25117 4.32968 4.25391 4.32799 4.2567L2.57812 7.12777C2.57812 7.12777 0.824813 4.25117 0.823008 4.24848C0.591258 3.9016 0.46875 3.49691 0.46875 3.07812C0.46875 1.91502 1.41502 0.96875 2.57812 0.96875Z"
            fill="white"
          />
          <path
            d="M2.57812 4.25C3.2243 4.25 3.75 3.7243 3.75 3.07812C3.75 2.43195 3.2243 1.90625 2.57812 1.90625C1.93195 1.90625 1.40625 2.43195 1.40625 3.07812C1.40625 3.7243 1.93195 4.25 2.57812 4.25ZM2.57812 2.375C2.96583 2.375 3.28125 2.69042 3.28125 3.07812C3.28125 3.46583 2.96583 3.78125 2.57812 3.78125C2.19042 3.78125 1.875 3.46583 1.875 3.07812C1.875 2.69042 2.19042 2.375 2.57812 2.375Z"
            fill="white"
          />
          <path
            d="M9.42188 4.39062C8.0003 4.39062 6.84375 5.54717 6.84375 6.96875C6.84375 7.47966 6.99307 7.97363 7.27556 8.39736L9.05899 11.1949C8.9209 11.2784 8.81381 11.4082 8.75909 11.5625H6.70312C6.57368 11.5625 6.46875 11.6674 6.46875 11.7969C6.46875 11.9263 6.57368 12.0312 6.70312 12.0312H8.75906C8.85581 12.304 9.11632 12.5 9.42188 12.5C9.80958 12.5 10.125 12.1846 10.125 11.7969C10.125 11.5419 9.98852 11.3181 9.78478 11.1949L11.5682 8.39736C11.8507 7.97363 12 7.47966 12 6.96875C12 5.54717 10.8435 4.39062 9.42188 4.39062ZM9.42188 12.0312C9.29264 12.0312 9.1875 11.9261 9.1875 11.7969C9.1875 11.6676 9.29264 11.5625 9.42188 11.5625C9.55111 11.5625 9.65625 11.6676 9.65625 11.7969C9.65625 11.9261 9.55111 12.0312 9.42188 12.0312ZM11.177 8.1391C11.1761 8.14051 9.42188 10.8921 9.42188 10.8921C9.42188 10.8921 7.66767 8.14048 7.66676 8.1391C7.43501 7.79223 7.3125 7.38753 7.3125 6.96875C7.3125 5.80564 8.25877 4.85938 9.42188 4.85938C10.585 4.85938 11.5312 5.80564 11.5312 6.96875C11.5312 7.38753 11.4087 7.79223 11.177 8.1391Z"
            fill="white"
          />
          <path
            d="M9.42188 5.79688C8.7757 5.79688 8.25 6.32258 8.25 6.96875C8.25 7.61492 8.7757 8.14062 9.42188 8.14062C10.068 8.14062 10.5938 7.61492 10.5938 6.96875C10.5938 6.32258 10.068 5.79688 9.42188 5.79688ZM9.42188 7.67188C9.03417 7.67188 8.71875 7.35645 8.71875 6.96875C8.71875 6.58105 9.03417 6.26562 9.42188 6.26562C9.80958 6.26562 10.125 6.58105 10.125 6.96875C10.125 7.35645 9.80958 7.67188 9.42188 7.67188Z"
            fill="white"
          />
          <path
            d="M5.64844 12.0312C5.77788 12.0312 5.88281 11.9263 5.88281 11.7969C5.88281 11.6674 5.77788 11.5625 5.64844 11.5625C5.519 11.5625 5.41406 11.6674 5.41406 11.7969C5.41406 11.9263 5.519 12.0312 5.64844 12.0312Z"
            fill="white"
          />
        </svg>
        {{ property.distance_from_search }} mi
      </div>
      <div
        class="property-card__image__wishlist"
        :class="{ 'property-card__image__wishlist--active': property.on_wishlist }"
        @click="toggleWishlist"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
            stroke="#989898"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
    <div class="property-card__info">
      <div class="property-card__info__address">
        {{ address }}
      </div>
      <div class="property-card__info__details">
        {{ features }}
      </div>
      <div class="property-card__info__timestamps">
        <div>{{ formatDate(property.dateAdded) }}</div>
        <div>{{ formatDate(property.dateUpdated) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['update:modelValue', 'removed'],
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  computed: {
    property: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    },
    image() {
      return `https://source.unsplash.com/random?collections=1482091&sig=${this.property.id}`
    },
    address() {
      return `${this.property.address}, ${this.property.city}, ${this.property.province} ${this.property.postalCode}`
    },
    features() {
      const amenities = this.property?.features?.find(
        (feature) => feature.key === 'Amenities'
      )?.value
      if (!amenities) return
      return amenities.slice(0, 5).join(', ')
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    async toggleWishlist() {
      let response
      this.property.on_wishlist = !this.property.on_wishlist

      if (!this.property.on_wishlist) {
        response = await this.$http.delete(`/api/v1/wishlist/${this.property.id}`).catch((e) => e)
        this.$emit('removed')
      } else {
        response = await this.$http
          .post('/api/v1/wishlist', {
            property: this.property
          })
          .catch((e) => e)
      }

      if (response.status > 204) {
        console.log(`errors: ${response.data.message}`)
        this.property.on_wishlist = !this.property.on_wishlist
      }
    }
  }
})
</script>

<style scoped lang="scss">
.property-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  flex: 1 0 0;
  border-radius: 10px;
  background: var(--color-white);
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.11);

  &__image {
    display: flex;
    height: 150px;
    padding: 20px 19.667px 106px 359px;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
    background-image: v-bind("`url('${image}')`");
    background-color: lightgray;
    background-size: cover;
    background-repeat: no-repeat;

    &__distance {
      position: absolute;
      left: 20px;
      top: 20px;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      border-radius: 24px;
      background: var(--Primary, #ca342d);
      display: flex;
      color: var(--color-text-white);
      padding: 4px 8px;
      align-items: center;
      gap: 4px;
    }

    &__wishlist {
      svg path {
        fill: var(--color-inactive);
      }

      &--active svg path {
        fill: var(--color-primary);
      }
    }
  }

  &__info {
    display: flex;
    padding: 12px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;

    &__address {
      color: var(--color-secondary);
      font-size: 14px;
      font-weight: 500;
    }

    &__details {
      color: var(--color-tertiary);
      font-size: 11px;
      font-weight: 400;
    }

    &__timestamps {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>
