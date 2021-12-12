<template>
  <!-- part10 이벤트핸들링 키 수식어 -->
  <input
    type="text" 
    @ketdown="handler" />
</template>

<script>

// part10 이벤트 핸들링 키 수식어
export default {
  methods: {
    handler(event) {
      console.log(event)
    }
  }
}
 
</script>

<style scoped lang="scss">

</style>