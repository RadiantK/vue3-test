<template>
  <!-- props의 데이터 연결 :style -->
  <div
    :class="{ large: large }"
    :style="{ backgroundColor: color }"
    class="btn">
    <!-- {{ text }} -->
    <slot></slot>
    <!-- myBtn이 열고 닫히는 모든 부분을 slot라는 태그로 대체해서 넣어줌 -->
  </div>
</template>

<script>
export default {
  // props 컴포넌트가 실행이 될 때 속성처럼 받아내는 내용들을 받아줄 수 있는
  // color같은 내용을 정의
  props: {
    color: {
      type: String,
      default: 'gray' // 버튼의 기본값 지정
    },
    large: {
      type: Boolean,
      default: false
    },
    // text: {
    //   type: String,
    //   default: ''
    // }
  }
}
</script>

<style scoped lang="scss">
.btn {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: gray;
  color: white;
  cursor: pointer;
  &.large {
    font-size: 20px;
    padding: 10px 20px;
  }
}
</style>