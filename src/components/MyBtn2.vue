<template>
  <div class="btn">
    <slot></slot>
  </div>
  <!-- <h1
    :class="$attrs.class"
    :style="$attrs.style"></h1> -->
  <h1 v-bind="$attrs"></h1>
</template>

<script>
export default {
  // 속성의 상속을 지정해주는 옵션
  inheritAttrs: false,
  created() {
    // 컴포넌트가 생성된 직후의 attrs
    console.log(this.$attrs)
  }
}
</script>

<style scoped>
.btn {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: gray;
  color: white;
  cursor: pointer;
}
</style>