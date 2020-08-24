<template>
    <div class="images-page">
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

<style scoped>
.images-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>