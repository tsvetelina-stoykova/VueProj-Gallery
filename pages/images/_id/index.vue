<template>
    <div class="single-image-page">
        <section class="image">
            <h1 class="image-title">{{ loadedImages.title }}</h1>
            <div class="image-details">
                <div class="image-details">{{ loadedImages.size }}</div>
                <div class="image-details">{{ loadedImages.frames }}</div>
                <div class="image-details">{{ loadedImages.glassOptions }}</div>
                <div class="image-details">{{ loadedImages.thumbnail }}</div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedImages: 
          {
            id: '1',
            title: 'First image', 
            size: '15x17cm',
            frames:'Wood',
            glassOptions: 'UV protecting glass',
            thumbnail: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
      });
    },1000);
  }
};
</script>

<style scoped>
.single-image-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.image {
  width: 100%;
}

@media (min-width: 768px) {
  .image {
    width: 600px;
    margin: auto;
  }
}

.image-title {
  margin: 0;
}

.image-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .image-details {
    flex-direction: row;
  }
}

.image-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

</style>