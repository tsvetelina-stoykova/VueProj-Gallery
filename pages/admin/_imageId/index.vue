<template>
    <div class="admin-image-page">
        <section class="update-form">
            <AdminImageForm  :post="loadedImage"/>
        </section>
    </div>
</template>

<script>
import AdminImageForm from '@/components/Admin/AdminImageForm'
export default {
    components: {
        AdminImageForm
    },
    data() {
        return {
            loadedImage: {
                title: 'Apple James Grieve',
                size: 'Unframed: 31 x 23 cm',
                frames: 'Frames come in white, black and oak.',
                glassOptions: 'Standard glass',
                thumbnailLink: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            }
        }
    }
    
}
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>