<template>
  <li>{{ name }}?!</li>
</template>

<script>
export default { // 객체 리터럴 반환
  props: {
    name: {
      type : String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: red !important;
  }
</style>