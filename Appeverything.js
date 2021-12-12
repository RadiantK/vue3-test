{/* <template>
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
  <!-- <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Hello?!
  </h1> -->

  <!-- part6. v-if 조건부 랜더링 -->
  <!-- 고정 -->
  <!-- <button @click="handler">
    Click me!
  </button> -->
  <!-- 고정 -->
  <!-- <h1 v-if="isShow">
    Hello?!
  </h1>
  <h1 v-else-if="count > 3">
    Count > 3
  </h1>
  <h1 v-else>
    Good~
  </h1> -->

  <!-- 특정한 요소들을 보이거나 보이지 않게할 때 template에 사용,
   랜더링이 따로 안됨. 단, 최상위 template에는 올리면 안됨,  -->
  <!-- <template v-if="isShow">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template> -->

  <!-- <h1 v-if="isShow"> -->
  <!-- <h1 v-show="isShow">
    Hello?!
  </h1> -->

  <!-- part7. 리스트렌더링 -->
  <!-- <button @click="handler">
    Click me!
  </button>
  <ul> -->
    <!-- <li
      v-for="fruit in newFruits"
      :key="fruit.id">
      {{ fruit.name }}-{{ fruit.id }}
    </li> --> 
    <!-- 같은 의미 -->
    <!-- <li
      v-for="{ id, name } in newFruits"
      :key="id">
      {{ name }}-{{ id }}>
    </li>
  </ul> -->

  <!-- part.8 이벤트 핸들링 -->
  <!-- 함수의 소괄호를 제거할 수 있는건 Vue.js에서 제공하는 방식 -->
  <!-- 안수를 넣지않으면 이벤트 객체가 나타나고 인수를 넣어주면 인수가 활용 -->
  <button @click="handler('hi', $event)">
    Click 1
  </button>
  <button @click="handler('what', $event)">
    Click 2
  </button>


  <!-- part8.5  -->
  <!-- 하나의 요소에 이벤트가 발생할 때 실행할 메소드가 여러개라면
  쉼표로 구분하면서 메소드를 호출하겠다는 소괄호 필수 -->
  <button @click="handlerA(), handlerB()">
    Click me!
  </button>

    <!-- part9. 이벤트핸들링 - 이벤트 수식어 -->
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent.once="handler">
    <!-- @click.once 핸들러를 단한번만 실행해줌 -->
    NAVER
  </a>


  <!-- part9.5 -->
  <div
    class="parent"
    @click.self="handlerA">
    <div
      class="child">
    </div>
  </div>

  <!-- part9.55 -->
  <!-- .passive 로직의 처리와 화면의 스크롤을 독립시켜서 부하를 줄임 -->
  <div
    class="parent"
    @wheel.passive="handler">
    <div class="child"></div>
  </div>

</template> */}













{/* <script> 
part 1
import Fruit from '~/components/Fruit'

export default {
  components: {
    Fruit: Fruit
  },
  data() {
    return {
      count: 0,
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  methods: {
    increase() {
      this.count += 1;
    }
  }
}

part2 computed
import Fruits from '~/components/Fruits'
export default { 
  components: {
    Fruits
  }
}
export default {
  data() {
    return {
      // Getter값을 얻어내는 용도, Setter값을 지정하는 용도(둘다가능)
      msg: 'Hello Computed!'
    }
  },
  computed: {
    // cmputed 만들어논 계산된 데이터는 캐싱이라는 기능때문에 
    // 한번 연산해놓은 값이 있으면 그것을 반복적으로 데이터 출력할때
    // 다시한번 연산하지 않음. 캐싱된 값으로 그대로 출력. 처음만 계산
    // 계산된 데이터 형식 (캐싱으로 최적화 하는 용도)
    // Getter
    // 읽기전용 Readonly, 내부에있는 기본 로직에서 값을 얻어오는용도
    // reversedMessage() {
    //   return this.msg.split('').reverse().join('')
    // }
    // Getter, Setter
    reversedMessage: {
      // reversedMessage라는 계산된 데이터의 값을 얻어내는 용도
      get() {
        return this.msg.split('').reverse().join('')
      },
      // reversedMessage에 어떠한 값을 할당하는 용도
      // 어떤 로직을 동작시킬지에대한 설정
      set(value) {
        this.msg = value
        // console.log(value) // 같은의미
      }
    }
  },
  methods: {
    add() {
      this.reversedMessage += '!?'
      // this.msg += '!?' // computed에서 Getter만 쓸때 
    }
  }
}

part4. watch
export default {
  data() {
    return {
      msg: 'Hello?'
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join('')
    }
  },
  // 특정한 데이터들의 변경사항을 감시하는 용도
  // 하나의 메소드처럼 만들어서 데이터의 로직으로 
  // 그 데이터가 변경됐을 때 어떤 내용이 실행될지 명시를 해주면 됨
  watch: {
    msg(newValue) { // 매개변수이름을 원하는 이름을 넣어줘도 됨
      console.log('msg:', newValue)
    },
    reversedMessage() {
      console.log('reversedMessage: ', this.reversedMessage)
    }
  },
  methods: {
    changeMessage() {
      this.msg= 'Good!'
    }
  }
}


part 5. class바인딩
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    activate(){
      this.isActive = true
    }
  }
}


part5.5 style바인딩 
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

part6. v-if 조건부 랜더링
export default {
  data() {
    return {
      isShow: true,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 1
      console.log(this.count)
    }
  }
}

part7. 리스트렌더링
import shortid from 'shortid'

export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry'],
    }
  },
  computed: {
    newFruits() {
      return this.fruits.map((fruit) => ({
        // shortid라는 간단한 아이디를 생성해주는 메소드,
          // 비교적짧은 고유한 값의 문자데이터반환
          id: shortid.generate(),
          name: fruit
      }))
    }
  },
  methods: {
    handler() {
      this.fruits.push('Orange')
    }
  }
}

// part.8 이벤트 핸들링
export default {
  methods: {
    // event: 자바스크립트의 이벤트가 발생한 정보를 가지고 있는 데이터
    // 이름은 바꿔도 상관없음 event, msg
    handler(msg, event) {
      // console.log(event)
      // console.log(event.target.textContent)
      console.log(msg);
      console.log(event);
    }
  }
}

// part.8.5
export default {
  methods: {
    handlerA() {
      console.log('A')
    },
    handlerB() {
      console.log('B')
    }
  }
}

// part9. 이벤트 핸들링 -이벤트 수식어
export default {
  methods: {
    handler() {
      // @click에 직접적으로 사용할 수 있음(단순화)
      // event.preventDefault()
      console.log('ABC')
    }
  }
}


// part9.5 이벤트 버블링: 이벤트가 점점 확산되는것
// 자식요소를 동작시킬 때, 그 요소를 포함한 부모요소까지 전파되는것
// stopPropagation() 이벤트 버블링을 방지함. @click.stop
// 이벤트 캡처링: 부모요소에서 자식요소로 내려오는개념 @click.capture
// @click.capture.stop 이벤트 버블링을 막아줌
// @click.self 자신의 영역만 클릭했을때 동작(타겟이라는 클릭한 부분과
//  커런트 타겟이라는 그 이벤트가 연결되있는 요소가 같을때 동작)
// target: 실제로 클릭이된 그 요소
// currentTarget: 커런트 타겟이 실행하게된 함수의 이벤트에 해당하는 요소
export default {
  methods: {
    handlerA(event) {
      console.log(event.target)
      console.log(event.currentTarget)
      console.log('A')
    },
    handlerB() {
      // event.stopPropagation() // = @click.stop 
      console.log('B')
    }
  }
}


// part9.55
export default {
  methods: {
    handler(event) {
      // 휠 한번에 10000번이 됨(큰 부하가 걸림, 버벅임)
      for (let i = 0; i < 10000; i += 1) {
      console.log(event)
      }
    }
  }
}

</script> */}










// <style scoped lang="scss">
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
//  .active {
//     color: red;
//     font-weight: bold;
//   }

// part 9
// .parent {
//   width: 200px;
//   height: 100px;
//   background-color: royalblue;
//   margin: 10px;
//   padding: 10px;
//   overflow: auto; // 9.55
//   .child {
//     width: 100px;
//     height: 100px;
//     height: 2000px; // 9.55
//     background-color: orange;
//   }
// }
// </style>