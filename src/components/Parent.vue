<template>
  <!-- <Child :msg="msg" /> -->
  <Child />
</template>

<script>
import Child from '~/components/Child'

export default {
  components: {
    Child
  },
  // props: {
  //   msg: {
  //     type: String,
  //     default: ''
  //   }
  // }
}
</script>