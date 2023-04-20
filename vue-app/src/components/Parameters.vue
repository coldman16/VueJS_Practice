<template>
    <li>
      <p> Позиция {{ position }} </p>
      <p> Дата {{ date }} </p>
      <p> Время {{ time }} </p>
      <p> Комментарий {{ comment }} </p> 
    </li>
</template>
<script>
import MyComp from './MyComp'
export default {
  name: 'Parameters',
  components: { MyComp },
  props: {
    position: String,
    date: Date,
    time: TimeRanges,
    comment: String
  }
}
</script>