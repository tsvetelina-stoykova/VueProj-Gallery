<template>
    <div class="admin-new-image">
        <section class="new-image-form"> 
            <AdminImageForm @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import AdminImageForm from '@/components/Admin/AdminImageForm'

export default {
    components: {
        AdminImageForm  
    },
    methods: {
      onSubmitted(imageData) {
          axios.post('https://vuejs-http-ce521.firebaseio.com/images.json', imageData)
          .then (result => console.log(result))
          .catch(e => console.log(e))
      },
    }
    
}
</script>

<style scoped>
.new-image-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-image-form {
    width: 500px;
  }
}

</style>