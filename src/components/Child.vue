<template>
  <div>
    Child: {{ msg.value }}
  </div>
</template>

<script>
export default {
  // props: {
  //   msg: {
  //     type: String,
  //     default: ''
  //   }
  // }
  inject: ['msg']
}
</script>