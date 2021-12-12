<template>
  <!-- part1 -->
  <!-- <h1 @click="increase">
    {{ count }}
  </h1>
  <div v-if="count > 4">
    4보다 큽니다!
  </div>
  <ul>
    <Fruit
      v-for="fruit in fruits"
      :key="fruit"
      :name="fruit">
      {{ fruit }}
    </Fruit> 
  </ul> -->
  <!-- Remove & use example component -->

  <!-- part2 computed -->
  <!-- <Fruits /> -->

  <!-- part3 computed 캐싱, Getter Setter -->
  <!-- <button @click="add">
    ADD
  </button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1> -->

  <!-- part4. watch -->
  <!-- <h1 @click="changeMessage">
    {{ msg }}
  </h1>
  <h1>{{ reversedMessage }}</h1> -->

  <!-- part 5. class바인딩, style바인딩 -->
  <!-- active에 클래스속성을 추가하고싶은데 true값일때 추가가 되므로
  문자를 클릭해서 isActive가 true값이 될 때 active 클래스가 추가 -->
  <!-- 클래스속성에 연결하는것이 객체데이터이므로 key value 형태로
   여러가지의 클래스를 연결 가능  -->
  <!-- <h1
    :class="{active: isActive}"
    @click="activate">
    Hello?!({{ isActive }})
  </h1> -->

  <!-- part5.5 style바인딩  -->
  <!-- 여러개의 객체데이터를 이용할 때 배열구문 사용 -->
  <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Hello?!
  </h1>
</template>

<script> 
// part 1
// import Fruit from '~/components/Fruit'

// export default {
//   components: {
//     Fruit: Fruit
//   },
//   data() {
//     return {
//       count: 0,
//       fruits: ['Apple', 'Banana', 'Cherry']
//     }
//   },
//   methods: {
//     increase() {
//       this.count += 1;
//     }
//   }
// }

// part2 computed
// import Fruits from '~/components/Fruits'
// export default { 
//   components: {
//     Fruits
//   }
// }
// export default {
//   data() {
//     return {
//       // Getter값을 얻어내는 용도, Setter값을 지정하는 용도(둘다가능)
//       msg: 'Hello Computed!'
//     }
//   },
//   computed: {
//     // cmputed 만들어논 계산된 데이터는 캐싱이라는 기능때문에 
//     // 한번 연산해놓은 값이 있으면 그것을 반복적으로 데이터 출력할때
//     // 다시한번 연산하지 않음. 캐싱된 값으로 그대로 출력. 처음만 계산
//     // 계산된 데이터 형식 (캐싱으로 최적화 하는 용도)
//     // Getter
//     // 읽기전용 Readonly, 내부에있는 기본 로직에서 값을 얻어오는용도
//     // reversedMessage() {
//     //   return this.msg.split('').reverse().join('')
//     // }
//     // Getter, Setter
//     reversedMessage: {
//       // reversedMessage라는 계산된 데이터의 값을 얻어내는 용도
//       get() {
//         return this.msg.split('').reverse().join('')
//       },
//       // reversedMessage에 어떠한 값을 할당하는 용도
//       // 어떤 로직을 동작시킬지에대한 설정
//       set(value) {
//         this.msg = value
//         // console.log(value) // 같은의미
//       }
//     }
//   },
//   methods: {
//     add() {
//       this.reversedMessage += '!?'
//       // this.msg += '!?' // computed에서 Getter만 쓸때 
//     }
//   }
// }

// part4. watch
// export default {
//   data() {
//     return {
//       msg: 'Hello?'
//     }
//   },
//   computed: {
//     reversedMessage() {
//       return this.msg.split('').reverse().join('')
//     }
//   },
//   // 특정한 데이터들의 변경사항을 감시하는 용도
//   // 하나의 메소드처럼 만들어서 데이터의 로직으로 
//   // 그 데이터가 변경됐을 때 어떤 내용이 실행될지 명시를 해주면 됨
//   watch: {
//     msg(newValue) { // 매개변수이름을 원하는 이름을 넣어줘도 됨
//       console.log('msg:', newValue)
//     },
//     reversedMessage() {
//       console.log('reversedMessage: ', this.reversedMessage)
//     }
//   },
//   methods: {
//     changeMessage() {
//       this.msg= 'Good!'
//     }
//   }
// }


// part 5. class바인딩
// export default {
//   data() {
//     return {
//       isActive: false
//     }
//   },
//   methods: {
//     activate(){
//       this.isActive = true
//     }
//   }
// }


// part5.5 style바인딩 
export default {
  data() {
    return {
      // color: 'orange',
      // fontSize: '30px'
      fontStyle: { // 위랑 같은의미
        color: 'orange',
        fontSize: '30px'
      },
      backgroundStyle: {
        backgroundColor: 'black'
      }
    }
  },
  methods: {
    changeStyle() {
      this.fontStyle.color = 'blue'
      this.fontStyle.fontSize = '50px'
    }
  }
}

</script>

<style scoped lang="scss">
  // part 1
  /* h1 {
    font-size: 50px;
    color: royalblue;
  }
  ul {
    li {
      font-size: 40px;
    }
  } */

  //
 .active {
    color: red;
    font-weight: bold;
  }
</style>