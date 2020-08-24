<template>
    <nuxt-link class="image-preview" :to="imageLink">
        <article >
          <div class="image-thumbnail"
          :style="{backgroundImage: 'url('+ thumbnail +')'}"></div>
          <div class="image-content">
            <h1> {{ title }} </h1>
          </div>
        </article>
      </nuxt-link>
</template>


<script>
export default {
    name: 'ImagePreview',
    props: {
        id: {
            type: String,
            required: true
        },
        isAdmin: {
          type: Boolean,
          required: true
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        }
    },
    computed: {
      imageLink() {
        return this.isAdmin ? '/admin/' + this.id : '/images/' + this.id 
      }
    }
}
</script>


<style scoped>
.image-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .image-preview {
    width: 400px;
    margin: 10px;
  }
}

.image-thumbnail {
  /* background-image: url("~assets/img/img-1.png"); */
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.image-content {
  padding: 10px;
  text-align: center;
}

a:hover .image-content,
a:active .image-content {
  background-color: #ccc;
}
</style>

