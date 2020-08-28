import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedImages: [],
            postsData: []

        },
        mutations: {
            setImages(state, images) {
                state.loadedImages = images
            },
            updatePostsData(state, data) {
                console.log('-----')
                console.log(data)
                console.log('-----')
                state.postsData = data;
            }
        },
        // actions: {
        //     async nuxtServerInit(vuexContex, context) {
        //         await axios.get('https://vuejs-http-ce521.firebaseio.com/images.json')
        //         .then((res) => {
        //             const imagesArray = []
        //             for (const key in res.data){
        //                 imagesArray.push({...res.data[key], id:key}) 
        //             }
        //             vuexContex.commit('setImages', imagesArray)
        //             })
        //         .catch(e => context.error(e))
        //         },
        //      },
        actions: {
            async nuxtServerInit(vuexContex, context) {
                // const postsData = await axios.get('https://jsonplaceholder.typicode.com/posts')
                // console.log(postsData)
                // vuexContex.commit('updatePostsData', postsData.data)

                await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    vuexContex.commit('setImages', res.data)
    })
                .catch(e => context.error(e))
                },
            async getData(context) {
                const postsData = await axios.get('https://jsonplaceholder.typicode.com/posts')
                context.commit('updatePostsData', postsData)
            }
             },
        getters: {
            loadedImages(state){
                return state.loadedImages
            },
            postsData(state){
                return state.postsData
            }
        }
    })
}


export default createStore