<template>
    <div class="admin-page">
        <section class="new-image">
            <button @click="$router.push('/admin/new-image/')">Add Painting</button>
        </section>
        <section class="existing-images">
            <h1>Existing Paintings</h1>
            <ImageList isAdmin />
        </section>
    </div>
</template>

<script>
import ImageList from '@/components/Images/ImageList'
export default {
    components: {
        ImageList
    }
}
</script>


<style scoped>
.admin-page {
  padding: 20px;
}

.new-image {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-images h1 {
  text-align: center;
}

</style>