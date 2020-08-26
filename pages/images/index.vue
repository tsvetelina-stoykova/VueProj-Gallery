<template>
    <div class="images-page">
       <ImageList :images = "loadedImages"/>
    </div>
    
</template>

<script>
import ImageList from "@/components/Images/ImageList"
export default {
    components: {
        ImageList
    },
    async fetch(context) {
    //   this.posts = await this.$http.$get(
    //     'https://jsonplaceholder.typicode.com/posts'
    //   )
    },
    // async asyncData(context){
    //     const posts = await context.$http.$get(
    //     'https://jsonplaceholder.typicode.com/posts'
    //   )
    //   const loadedImages = await new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve ([
    //                     {
    //                         id: '1',
    //                         thumbnail: 'https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    //                         title: 'Image One' 
    //                     },
    //                     {
    //                         id: '2',
    //                         thumbnail: 'https://images.pexels.com/photos/3802667/pexels-photo-3802667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    //                         title: 'Image Two' 
    //                     }
    //                 ]
    //             )
    //         }, 2000);
    //     })
    //     .then(data => {
    //         return data;
    //     })
    //     .catch( e => {
    //         context.error(new Error())
    //     })
      
    // },
    computed: {
        loadedImages() {
            return this.$store.getters.loadedImages
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