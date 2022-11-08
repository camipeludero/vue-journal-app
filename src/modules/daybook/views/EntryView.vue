<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2021</span>
    </div>
    <div>
        <button class="btn btn-danger mx-2">
            Delete
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
            Upload Picture
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column-px-3 h-75">
    <textarea placeholder="What happened today?"></textarea>
  </div>
  <FabButton icon="fa-save"/>
  <img src="https://64.media.tumblr.com/9fcd002ba927883a51cbe6e17ec83c57/605725346776780b-a9/s500x750/a3e4b3648af9356dc13045e74dcbbf63dcfbe21c.jpg" alt="entru-picture">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        FabButton: defineAsyncComponent(()=>import('../components/FabButton.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 150px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>