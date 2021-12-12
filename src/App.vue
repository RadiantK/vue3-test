<template>
  <!-- part12.2 컴포넌트 속성 상속-->
  <!-- 속성상속: 컴포넌트가 사용되는 곳에 작성을 해놓은 class같은 
  여러 속성들이 컴포넌트 내부에 있는 하나의 요소에 연결이 되는 것 -->
  <!-- 컴포넌트 내부의 최상위 요소가 여러개면 속성이 상속되지 못함 -->
  <MyBtn2
    class="heropy"
    style="color: red;"
    title="Hello world!">
    Banana
  </MyBtn2>
</template>

<script>
// part12.2 컴포넌트 속성 상속
import MyBtn2 from '~/components/MyBtn2'

export default {
  components: {
    MyBtn2
  }
}

</script>

<style scoped lang="scss">

</style>