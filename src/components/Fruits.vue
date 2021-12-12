<template>
  <section v-if="hasFruit">
    <h1>Fruits</h1>
    <ul>
      <li 
        v-for="fruit in fruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
  <br />
  <section>
    <h1>Reverse Fruits</h1>
    <ul>
      <li
        v-for="fruit in reverseFruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        'Apple', 'Banana', 'Cherry'
      ]
    }
  },
  // 정의된 값을 반환해서 사용할 수 있는 새로운 데이터, 계산된 데이터
  computed: {
    hasFruit() {
      return this.fruits.length > 0
    },
    reverseFruits() {
      return this.fruits.map(fruit => {
        // 'Apple' => ['A','p','p','p','e']
        // => ['e','l','p','p','A'] => 'elppA'
        return fruit.split('').reverse().join('')
      })
    }
  }
}
</script>

<style scoped>
  section {
    font-size: 20px;
  }
</style>