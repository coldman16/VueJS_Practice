<script>
export default {
  name: 'HelloWorld',
  props: ['position', 'date' , 'time', 'comment']
}
</script>

<template>
  <li>
      <p> Позиция: {{ position }} </p>
      <p> Дата: {{ date }} </p>
      <p> Время: {{ time }} </p>
      <p> Комментарий: {{ comment }} </p> 
  </li>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
