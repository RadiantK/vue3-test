<template>
  <!-- :콜론기호를 적용하지않고 =을 써서 속성과 값처럼 명시하게되면
  이 컴포넌트가 실행되고 있는 모든 속성부분이 적용  -->
  <div 
    v-bind="$attrs"
    class="btn"
    @click="hello">
    <slot></slot>
  </div>
</template>

<script>

// 컴포지션 변경전
// export default {
//   // 속성을 상속받지 않음, 직접지정할때 사용
//   inheritAttrs: false,
//   props: {
//     color: {
//       type: String,
//       // 기본값
//       default: 'gray'
//     }
//   },
//   emits: ['hello'],
//   mounted() {
//     console.log(this.color)
//     console.log(this.$attrs)
//   },
//   methods: {
//     hello() {
//       this.$emit('hello')
//     }
//   }
// }

// 변경 후
import { onMounted } from 'vue'
export default {
  // 속성을 상속받지 않음, 직접지정할때 사용
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      // 기본값
      default: 'gray'
    }
  },
  emits: ['hello'],
  // props같은 경우는 많이 사용하기 때문에 별도의 첫번째 
  // 매개변수로 분리해서 해당하는 내용을 접근해서 사용
  setup(props, context) {
    function hello() {
      context.emit('hello')
    }
    onMounted(() => {
      console.log(props.color)
      // console.log(this.$attrs) this대신 context사용 $제거
      console.log(context.attrs)
    })

    return {
      hello
    }
  }
}
</script>