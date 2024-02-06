<template>
  <header class="app-toolbar">
    <div class="app-toolbar__logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="app-toolbar__items">
      <router-link
        class="app-toolbar__items__item"
        v-for="link in links"
        :key="link.to"
        active-class="app-toolbar__items__item--active"
        :to="link.to"
      >
        {{ link.text }}
      </router-link>
    </div>
  </header>
  <div class="background" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Link {
  to: string
  text: string
}

export default defineComponent({
  data() {
    return {
      links: [
        { to: '/', text: 'Search' },
        { to: '/wishlist', text: 'Wishlist' }
      ] as Link[]
    }
  }
})
</script>

<style scoped lang="scss">
$toolbar-height: 100px;

.app-toolbar {
  display: flex;
  height: $toolbar-height;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  background: #00000080;

  &__logo img {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }

  &__items {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 20px;

    &__item {
      text-align: center;
      font-family: Poppins, serif;
      font-size: 16px;
      color: var(--color-text-white);
      font-style: normal;
      width: 90px;
      font-weight: 700;
      line-height: normal;
      text-decoration: none;

      &--active {
        color: var(--color-text-primary);
      }
    }
  }
}

.background {
  z-index: -1;
  position: absolute;
  top: 0;
  width: 100%;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--color-background) 100%),
    url('@/assets/background.jpeg'),
    var(--color-inactive) 50% / cover no-repeat;
  height: 432px;
}
</style>
