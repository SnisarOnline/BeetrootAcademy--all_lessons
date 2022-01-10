<template>
  <section>
    <h2><a v-bind:href="task_1.href">{{ task_1.name }}</a></h2>
    <button v-on:click="upNumber()">{{ countNumber }} +1</button>
    <button @click.once="downNumber()">{{ countNumber }} -1</button>
    <hr>
    <input type="text" v-on:keyup.enter="upNumber">

    <br>
    <select v-model="selected">
      <option value="null">Выберите один из вариантов</option>
      <option>А</option>
      <option>Б</option>
      <option>В</option>
    </select>
    <span>Выбрано: {{ selected }} / {{typeof selected}}</span>
    <br>

    <input v-model.number="age">
    <span>{{ age }} / {{ typeof age }}</span>
    <br>

    <input v-model="text" type="text">
    <span>{{ text }} / {{ typeof text }}</span>
    <br>

    <input v-model="isCheckboxActive" type="checkbox" :title="selected">
    <hr>

    <h2><a href="https://ru.vuejs.org/v2/guide/class-and-style.html">Связывание CSS-классов/style : </a></h2>
    <div v-bind:class="{ active: isCheckboxActive }">isCheckboxActive : {{ isCheckboxActive }}</div>
    <div v-bind:class="[isCheckboxActive ? 'active' : '', 'errorClass']">errorClass</div>

    <button class="red green"> btn1 </button>
    <button class="green red"> btn2 </button>

    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">style color</div>
    <div v-bind:style="styleObject">style color</div>
    <hr>

    <h2><a href="https://ru.vuejs.org/v2/guide/conditional.html">Условная отрисовка : </a></h2>
    <span v-if="isCheckboxActive">Чекбокс включен!</span>
    <span v-else>Чекбокс выключен!</span>

    <br>
    <template>
      <div v-if="selected === 'А'"> block А</div>
      <div v-else-if="selected === 'Б'"> block Б</div>
      <div v-else-if="selected === 'В'"> block В</div>
      <div v-else> Не A/B/C</div>
    </template>
    <hr>

    <h2><a
        href="https://ru.vuejs.org/v2/guide/list.html#%D0%9E%D1%82%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-v-for">
      Отображение массива элементов :
    </a></h2>
    <span><a href="https://ru.vuejs.org/v2/api/#key">Специальныей атрибут key</a></span>
    <ul>
      <li v-for="item of task_2.arr" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
    <hr>

    <h2><a href="https://ru.vuejs.org/v2/api/#ref">Специальныей атрибут ref - регистрации ссылки на елемент</a></h2>
    <span ref="testRef222"> testRef style </span>
    <button v-on:click="setNewStyle">setNewStyle</button>


    <p>get property from parent {{propertyData }}</p>

    <hr>
    <h2><a href="https://ru.vuejs.org/v2/guide/forms.html">Работа с формами</a> </h2>
<!-- new component  + Vuelidate-->


  </section>
</template>

<script>
export default {
  name: 'functional_2',
  data: () => {
    return {
      task_1: {
        name: 'Модификаторы событий :',
        href: 'https://ru.vuejs.org/v2/guide/events.html#%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9',
        title: 'Модификаторы'
      },
      countNumber: 0,
      selected: 0,
      age: 0,
      text: 0,
      isCheckboxActive: false,

      activeColor: 'yellow',
      fontSize: 30,
      styleObject: {
        color: 'blue',
        fontSize: '20px',
        'box-sizing': 'border-box',
        padding: '15px 0 0 0',
        paddingLeft: '15px'
      },

      task_2: {
        name: 'Директивы :',
        arr: [
          {name: 'name_1'},
          {name: 'name_2'},
          {name: 'name_3'},
        ]
      }
    }
  },
  props: ['propertyData'],
  methods: {
    upNumber: function () {
      this.countNumber++
    },
    downNumber: function () {
      this.countNumber--
    },
    setNewStyle() {
      this.$refs.testRef222.style.color = 'red'
      this.$refs.testRef222.style.fontWeight = 'bold'
    }
  }
}
</script>

<style scoped lang="scss">

.active{
  font-weight: bolder;
  color: green;
}
.errorClass{
  color: red;
}
.green{
  color: green;
}
.red{
  color: red;
}

</style>
