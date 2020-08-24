<template>
  <div class="home-page">
   <ImageList />

  </div>
</template>

<script>
import ImageList from "@/components/Images/ImageList"

export default {
  components: {
    ImageList
  }
}
</script>

<style>
.featured-images {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>
