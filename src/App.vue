<template>
  <!-- part8.5  -->
  <!-- 하나의 요소에 이벤트가 발생할 때 실행할 메소드가 여러개라면
  쉼표로 구분하면서 메소드를 호출하겠다는 소괄호 필수 -->
  <button @click="handlerA(), handlerB()">
    Click me!
  </button>
</template>

<script>

// part.8.5
export default {
  methods: {
    handlerA() {
      console.log('A')
    },
    handlerB() {
      console.log('B')
    }
  }
}
</script>

<style scoped lang="scss">
 
</style>