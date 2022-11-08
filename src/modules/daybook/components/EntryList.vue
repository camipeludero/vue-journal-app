<template>
  <div class="entry-list-container">
    <div class="px-2 pt2">
        <input type="text" class="form-control" name="search" id="search" placeholder="Search entry...">
    </div>
    <div class="entry-scrollarea">
        <EntryItem v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        EntryItem: defineAsyncComponent(()=>import('./EntryItem.vue'))
    }
}
</script>

<style lang="scss" scoped>

.entry-list-container{
    border-right: 1px solid #847b93;
    height: calc(100vh - 56px);

}

.entry-scrollarea{
    height: calc(100vh - 100px);
    overflow-y: scroll;
}
</style>