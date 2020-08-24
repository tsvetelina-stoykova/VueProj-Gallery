<template>
     <section class="image-list">
            <ImagePreview 
                id="1"
                :is-admin ="isAdmin"
                thumbnail="https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="First Image"
            />
            <ImagePreview 
                id="2"
                :is-admin ="isAdmin"
                thumbnail="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Second Image"
            />
            <ImagePreview 
                id="3"
                :is-admin ="isAdmin"
                thumbnail="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Third Image"
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
        }
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