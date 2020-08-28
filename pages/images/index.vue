<template>
    <div class="images-page">
       <!-- <ImageList :images = "loadedImages"/> -->
       {{postsData}}
    </div>
    
</template>

<script>
import axios from 'axios'
import ImageList from "@/components/Images/ImageList"
export default {
    components: {
        ImageList
    },

  data() {
      return {
        postsData: []
      }
    },
    async fetch() {
      this.postsData = await this.$http.$get(
        'https://jsonplaceholder.typicode.com/users'
      )
    },
   

    // asyncData(context) {
    //     return axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         return {
    //         postsData: res.data
    //         }
    //     })
    // .catch(e => context.error(e))
    // },
    computed: {
        postsData() {
            return this.$store.getters.postsData
        }
    },
    // created() {
    //     this.$store.dispatch('setImages', this.loadedImages)
    //     // console.log(this.$store.getters.loadedImages)
    // }
    
}
</script>

<style scoped>
.images-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>