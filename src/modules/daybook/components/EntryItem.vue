<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 10}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem
      tempora, quod nostrum nemo earum eveniet quo iusto possimus praesentium,
      quam dignissimos, nobis cum quis eaque distinctio repellat. Cumque ipsum
      hic eaque a iure sunt doloribus. Iste perspiciatis laborum illum hic
      dolorem voluptatem dolores? Quam animi iste, cumque officia, aspernatur
      ratione, qui illum sint voluptatem magnam quas inventore ipsam!
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background: lighten($color: grey, $amount: 45);
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>