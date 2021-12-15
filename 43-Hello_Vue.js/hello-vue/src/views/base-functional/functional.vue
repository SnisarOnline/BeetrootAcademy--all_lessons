<template>
  <div class="functional">
    <functional_2 />

    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>

    <h1><a href="https://ru.vuejs.org/v2/guide/syntax.html">Синтаксис шаблонов</a></h1>
    <hr>
    <br>

    <h2>Text</h2>
    <p>{{ message }}</p>
    <p v-text="message">Lorem ipsum dolor.</p>
    <p v-once><b>once</b> {{ message }} - без реактивной привязки</p>
    <p>reverse text = "{{ message.split('').reverse().join('') }}"</p>

    <hr>
    <h2>calc</h2>
    <p>{{ 2 + 2 }}</p>
    <p>{{ message + 2 }}</p>
    <p>{{ testNumber + 2 }}</p>
    <p v-once> {{ !(testNumber % 2) ? 'even' : 'odd' }}</p>
    <p> {{ !(testNumber % 2) ? 'even' : 'odd' }}</p>

    <!--<a href="{{href}}">{{href}}</a> - нельзя использовать интерполяцию в атрибутах - для етого v-bind:-->
    <a v-bind:href="href" v-bind:title="'google'">{{ href }}</a>
    <br>
    <button v-bind:disabled="isDisabled">btn is {{ !isDisabled ? 'Enable' : 'Disabled' }}</button>


    <hr>
    <h2>Computed : </h2>
    <p>{{ computedReversedMessage }}</p>
    <p>{{ computedUserHtml }}</p>
    <p v-html="computedUserHtml"></p> <!-- можно но ненужно -->

    <hr>
    <h2>Methods : </h2>
    <p>{{ methodsUserHtml() }}</p>
    <p v-html="methodsUserHtml()"></p> <!-- можно но ненужно -->

    <hr>
    <h2><a href="https://ru.vuejs.org/v2/guide/events.html">Event : </a> </h2>
    <button v-on:click="methodsIncNumber()">{{ testNumber }}</button>
    <button @click="methodsIncNumber()">{{ testNumber }}</button>

    <hr>
    <hr>
    <hr>

  </div>
</template>

<script>
import functional_2 from './functional_2.vue'

export default {
  name: "functional",
  components: {
    functional_2
  },
  data: () => ({
    message: 'Привет',
    testNumber: 20,
    href: 'https://google.com',
    isDisabled: true,
    user: {
      name: 'UserName',
      tel: '+380123456789',
      email: 'email@email.com',
      pass: 'pass',
    }
  }),
  computed: {
    // @info https://ru.vuejs.org/v2/guide/computed.html
    // геттер вычисляемого значения
    computedReversedMessage: function () {
      return this.message.split('').reverse().join('');
    },
    computedUserHtml: function () {
      // console.log('computedUserHtml - вызывается 1 раз при создании шаблона');
      return `
          <p><b>Name:</b> ${this.user.name}</p>
          <p><b>tel:</b> ${this.user.tel}</p>
          <p><b>pass:</b> ${this.user.pass}</p>
          <p><b>email:</b> ${this.user.email}</p>
      `;
    }
  },
  methods: {
    // в основном для вззаимодействия с пользователем (Кнопки, события)
    // вычисляемые свойства кэшируются, основываясь на своих реактивных зависимостях.
    methodsUserHtml: function () {
      // console.log('methodsUserHtml - вызывается каждый раз при изменении шаблона');
      return `
          <p><b>Name:</b> ${this.user.name}</p>
          <p><b>tel:</b> ${this.user.tel}</p>
          <p><b>pass:</b> ${this.user.pass}</p>
          <p><b>email:</b> ${this.user.email}</p>
      `;
    },
    methodsIncNumber: function () {
      // console.log('event + ', this.testNumber);
      this.testNumber++;
    }
  },
}
</script>