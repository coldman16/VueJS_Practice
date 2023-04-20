<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {HelloWorld},
  data() {
    return {
      parameters:
        {
        position: '213DSAF546',
        date: '12.07.2002',
        time: '11:40', 
        comment: 'Большой и содержащий комментарий'
        }
    }
  }
}
</script>

<template>
  <div>
    <HelloWorld
      :position="parameters.position"
      :date="parameters.date"
      :time="parameters.time"
      :comment="parameters.comment"
    />
  </div>
</template>   

<style scoped>
</style>
