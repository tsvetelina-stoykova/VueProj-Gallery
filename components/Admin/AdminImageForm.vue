<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedImage.title">Title</AppControlInput>
        <AppControlInput v-model="editedImage.size">Size</AppControlInput>
        <AppControlInput v-model="editedImage.frames">Frames</AppControlInput>
        <AppControlInput v-model="editedImage.glassOptions">Glass options</AppControlInput>
        <AppControlInput v-model="editedImage.thumbnailLink">Thumbnail Link</AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton
            type="button"
            style="margin-left: 10px"
            btn-style="cancel"
            @click="onCancel">Cancel
        </AppButton>
    </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
export default {
    components: {
        AppControlInput,
        AppButton
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedImage: this.post 
            ? {...this.post} 
            :{
                title: '',
                size: '',
                frames: '',
                glassOptions: '',
                thumbnailLink: ''
            }
        }
    },
    methods: {
        onSave() {

        },

        onCancel() {
            this.$router.push('/admin');
        }
    }
}
</script>