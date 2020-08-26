<template>
  <div class="home-page">
    <ImageList  :images ="loadedImages" />
  </div>
</template>

<script>
import ImageList from "@/components/Images/ImageList"

export default {
  components: {
    ImageList
  },
  // asyncData(context, callback) {
  //     setTimeout(() => {
  //       callback(null, {
  //         loadedImages: [
  //         {
  //           id: '1',
  //           thumbnail: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //           title: 'First image' 
  //         },
  //         {
  //           id: '2',
  //           thumbnail: 'https://media.istockphoto.com/photos/hand-drawn-acrylic-painting-abstract-art-background-acrylic-painting-picture-id967699926',
  //           title: 'Second image' 
  //         }
  //       ]
  //       }); 
  //     }, 1500);
  // },
    computed: {
      loadedImages(){
        return this.$store.getters.loadedImages
      }
    }
  
  // data() {
  //   return{
  //     loadedImages: []   
  //   }
  // },
//   created() {
//     setTimeout(() => {
//       this.loadedImages = [
//         {
//           id: '1',
//           thumbnail: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//           title: 'First image' 
//         },
//          {
//           id: '2',
//           thumbnail: 'https://media.istockphoto.com/photos/hand-drawn-acrylic-painting-abstract-art-background-acrylic-painting-picture-id967699926',
//           title: 'Second image' 
//         }
//       ]
//     }, 1500)
//   }
// }

};
</script>

<style>
.featured-images {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
