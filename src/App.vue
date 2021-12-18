<template>
  <!-- part14. 컴포지션 Props, Context -->
  <MyBtn5
    class="heropy"
    style="color: red;"
    color="#ff0000"
    @click="log">
    Apple
  </MyBtn5>
</template>

<script>
// part14. 컴포지션 Props, Context
import MyBtn5 from '~/components/MyBtn5'

export default {
  components: {
    MyBtn5
  },
  methods: {
    log() {
      console.log('Hello world!')
    }
  }
}
</script>

<style scoped lang="scss">

</style>