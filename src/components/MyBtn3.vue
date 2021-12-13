<template>
  <div class="btn">
    <slot></slot>
  </div>
  <h1 @dblclick="$emit('click', $event)">
    ABC
  </h1>
  <input
    type="text"
    v-model="msg" />
</template>

<script>
export default {
  // inheritAttrs: false
  // 일반적인 속성이 아닌 이벤트를 상속받아서 emits라는 옵션에 연결을 해서
  // emit()이라는 메소드를 통해 어디에서 어떻게 실행될 것인지 작성
  // emit : 원하는 이름의 이벤트를 부모 자식 컴포넌트간에 이벤트를 주고받을 수 있음
  emits: [
    'click',
    'changeMsg'
  ],
  data() {
    return {
      msg: ''
    }
  },
  watch: {
    msg() {
      // 'changeMsg'라는 이벤트를 연결 시켜주고 데이터론 this.msg연결
      this.$emit('changeMsg', this.msg)
    }
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