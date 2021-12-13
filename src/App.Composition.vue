<template>
  <h1 @click="increase">
    {{ count }} / {{ doubleCount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} / {{ reversedMessage }}
  </h1>
</template>

<script>
// part13.1 컴포지션 API 반응형 데이터(반응성)
// ref로 만든 값은 객체데이터이므로 사용할 때 .value 꼭 사용할 것!
// 기존에 mounted로 사용하던것을 onMounted가 됨
// created 라이프사이클은 setup() 내부에서 맘대로 지정하면 됨
import { ref, computed, watch, onMounted } from 'vue'

export default {
  // setup메소드는 created라는 라이프사이클 즉, 컴포넌트가 생성된 직후에 동작하기 때문에
  // setup메소드 내부에서 실행되는 로직은 created()에 작성하는것과 비슷함
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => {
      return count.value * 2
    })
    function increase() {
      count.value += 1
    }

    const message = ref('Hello world')
    const reversedMessage = computed(() => {
      return message.value.split('').reverse().join('')
    })
    // 첫번째 인수: 내가 감시하고 싶은 데이터(value를 사용하지않고 객체데이터를 그대로 적어줌)
    // 두번째 인수: 해당하는 데이터가 감지됐을 때 실행할 콜백함수를 만들어줌.
    watch(message, (newValue) => {
      console.log(newValue)
    })
    function changeMessage() {
      message.value = 'Good?!'
    }
    // created()를 사용하는 것과 같음
    console.log(message.value)

    onMounted(() => {
      console.log(count.value)
    })

    return {
      count,
      increase,
      doubleCount,
      message,
      changeMessage,
      reversedMessage
      
    }
  }
}
</script>

<style scoped lang="scss">

</style>