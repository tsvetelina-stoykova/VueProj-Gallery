<template>
    <div class="single-image-page">
        <section class="image">
            <h1 class="image-title">Title of the painting</h1>
            <div class="image-details">
                <div class="image-details">Size: ABC</div>
                <div class="image-details">Frames: ABC</div>
                <div class="image-details">Glass options: ABC</div>
            </div>
        </section>
    </div>
</template>

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