"use strict"
import Vue from 'vue'
const Helper = {
    install(Vue) {
        Vue.prototype.appName = process.env.VUE_APP_NAME
        Vue.prototype.getImage = function (image){
            if(image!=null && image.length>0){
                return "https://namikazenaruto2.000webhostapp.com/image"+ image
            }
            return "/img/unavailable.png"
        }
    }
}

Vue.use(Helper)