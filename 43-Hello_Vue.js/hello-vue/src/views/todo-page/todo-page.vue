<template>
  <div class="todoPage">
    <ListTodo />
  </div>
</template>
<script>
// @ is an alias to /src
import ListTodo from '@/views/todo/list.vue'

export default {
  name: 'TodoPage',
  components: {
    ListTodo
  }
}
</script>