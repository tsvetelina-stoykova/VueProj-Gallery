<template>
    <div class="admin-image-page">
        <section class="update-form">
            <AdminImageForm  :post="loadedImage"/>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import AdminImageForm from '@/components/Admin/AdminImageForm'
export default {
    components: {
        AdminImageForm
    },
    computed: {
      loadedImages(){
        return this.$store.getters.loadedImages
      }
    },
asyncData() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then( res => {
        return {
            loadedImage: res.data
        }
    });
    
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