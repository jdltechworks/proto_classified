<template>
    <div class="container-fluid">
      <div class="row">
        <div @dragover.prevent @click="onClick" class="upload col-md-12" @drop="upload">
          <span class="glyphicon glyphicon-camera"></span>
          <input @change="upload" type="file" multiple>
        </div>
      </div>
      <div v-if="images.length !== 0" class="row">
          <div class="col-lg-12">
            <ul class="list-inline">
                <li v-for="image in images">
                    <img width="65" height="65" :src="image" />
                </li>
            </ul>
          </div>
      </div>
    </div>    
</template>

<script>
    import _ from 'lodash'
    export default {
        name: 'image-upload',
        props: {
          images: Array
        },
        methods: {
            onClick(e) {
                e.stopPropagation()
                const { currentTarget: { lastChild} } = e
                lastChild.click()
            },
            /**
             * Naming this upload is the most relevant name of the function
             * 
             * @todo  complete upload using fetch api or equivalent technology
             * @param  {object} element properties
             * @return {object} Url and additional details the image upload
             */
            upload (e) {
                e.preventDefault()
                const files = e.target.files || e.dataTransfer.files
                _.map(files, (file, key) => {
                    this.images.push(window.URL.createObjectURL(file))
                })
            }
        }
    }
</script>