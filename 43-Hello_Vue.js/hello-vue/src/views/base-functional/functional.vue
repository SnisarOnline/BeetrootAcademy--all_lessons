<template>
  <div class="functional">
    <h1>Text</h1>
    <p>{{ message }}</p>
    <p v-text="message">Lorem ipsum dolor.</p>
    <p v-once><b>once</b> {{ message }} - без реактивной привязки</p>
    <p>reverse text = "{{ message.split('').reverse().join('') }}"</p>

    <hr>
    <h1>calc</h1>
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
    <h1>Computed : </h1>
    <p>{{ computedReversedMessage }}</p>
    <p>{{ computedUserHtml }}</p>
    <p v-html="computedUserHtml"></p> <!-- можно но ненужно -->

    <hr>
    <h1>Methods : </h1>
    <p>{{ methodsUserHtml() }}</p>
    <p v-html="methodsUserHtml()"></p> <!-- можно но ненужно -->

    <hr>
    <h1>Event : </h1>
    <button v-on:click="methodsIncNumber()">{{ testNumber }}</button>
    <button @click="methodsIncNumber()">{{ testNumber }}</button>
  </div>
</template>

<script>
export default {
  name: "functional",
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
      console.log('computedUserHtml - вызывается 1 раз при создании шаблона');
      return `
          <p><b>Name:</b> ${this.user.name}</p>
          <p><b>tel:</b> ${this.user.tel}</p>
          <p><b>pass:</b> ${this.user.pass}</p>
          <p><b>email:</b> ${this.user.email}</p>
      `;
    }
  },
  methods: {
    // вычисляемые свойства кэшируются, основываясь на своих реактивных зависимостях.
    methodsUserHtml: function () {
      console.log('methodsUserHtml - вызывается каждый раз при изменении шаблона');
      return `
          <p><b>Name:</b> ${this.user.name}</p>
          <p><b>tel:</b> ${this.user.tel}</p>
          <p><b>pass:</b> ${this.user.pass}</p>
          <p><b>email:</b> ${this.user.email}</p>
      `;
    },
    methodsIncNumber: function () {
      console.log('event + ', this.testNumber);
      this.testNumber++;
    }
  },
}
</script>