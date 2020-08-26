<template>
     <section class="image-list">
            <ImagePreview 
                v-for="image in images"
                :key="image.id"
                :id="image.id"
                :is-admin ="isAdmin"
                :thumbnail="image.thumbnail"
                :title="image.title"
            />
        </section>
</template>


<script>
import ImagePreview from "@/components/Images/ImagePreview"
export default {
    components: {
        ImagePreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        },
        images: {
            type: Array,
            requred: true
        }
    },
    created(){
       
    }
    
}
</script>

<style scoped>
.image-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>