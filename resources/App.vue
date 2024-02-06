<template>
  <app-toolbar />
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import AppToolbar from '@/components/AppToolbar.vue'

export default defineComponent({
  components: { AppToolbar }
})
</script>

<style scoped lang="scss"></style>
