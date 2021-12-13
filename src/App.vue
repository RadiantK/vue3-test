<template>
  <!-- part12.5 컴포넌트 Refs -->
  <!-- ref 해당하는 요소 참조 -->
  <Hello ref="hello" />
</template>

<script>
// part12.5 컴포넌트 Refs
// 컴포넌트를 ref라는 속성으로 참조할 때는 $refs.hello라는 참조된 이름에
// $el이라는 속성을 적어줘야함($refs.hello만 적고 콘솔로그 읽어보기),
// 최상위 요소 하나일때 가능으로 여러개면 요소를 명시해주는게 좋음
import Hello from '~/components/Hello'

export default {
  components: {
    Hello
  },
  // created() {
  //   // 컴포넌트 생성직후이기때문에 사용불가
  //   console.log(this.$refs.hello)
  // },
  // ref는 컴포넌트가 Html에 연결된 mounted에서만 사용 가능
  mounted() {
    // const h1El = document.querySelector('#hello')
    //  console.log(h1El.textContent)
    console.log(this.$refs.hello.$refs.good)
  }
}
</script>

<style scoped lang="scss">

</style>