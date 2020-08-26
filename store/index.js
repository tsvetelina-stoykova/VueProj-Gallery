import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedImages: []
        },
        mutations: {
            setImages(state, images) {
                state.loadedImages = images
            }
        },
        actions: {
            nuxtServerInit(vuexContex, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContex.commit("setImages", 
                        [
                            {
                                id: '1',
                                thumbnail: 'https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                                title: 'Image One' 
                            },
                            {
                                id: '2',
                                thumbnail: 'https://images.pexels.com/photos/3802667/pexels-photo-3802667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                                title: 'Image Two' 
                            }
                        ])
                    resolve();
                    }, 2000);
            });
        },
        },
            setImages(vuexContext, images) {
                vuexContext.commit('setImages', images)
            },
        
        getters: {
            loadedImages(state){
                return state.loadedImages
            }
        }
    })
}


export default createStore