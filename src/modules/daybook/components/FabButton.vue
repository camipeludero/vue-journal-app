<template>
  <button class="btn btn-primary text-white">
    <i class="fa" :class="icon">
    </i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "fa-plus"
    }
  }
}
</script>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    bottom: 20px;
    height: 48px;
    position: fixed;
    right: 20px;
    width: 48px;
}
</style>