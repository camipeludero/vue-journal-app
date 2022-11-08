<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
 <button class="btn btn-primary" @click="goToDaybook">hola</button>
 <button class="btn btn-secondary">hola</button>
 <button class="btn btn-success">hola</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    goToDaybook(){
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>
