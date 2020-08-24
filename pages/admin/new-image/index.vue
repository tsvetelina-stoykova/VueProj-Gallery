<template>
    <div class="admin-new-image">
        <section class="new-image-form"> 
            <AdminImageForm />
        </section>
    </div>
</template>

<script>
import AdminImageForm from '@/components/Admin/AdminImageForm'

export default {
    components: {
        AdminImageForm  
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