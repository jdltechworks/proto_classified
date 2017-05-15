<template>
    <div class="container-fluid">
      <div class="row">
        <div @dragover.prevent @click="onClick" class="upload col-md-12" @drop="upload">
          <span class="glyphicon glyphicon-camera"></span>
          <input @change="upload" type="file" multiple>
        </div>
      </div>
      <div v-if="thumbnails.length !== 0" class="row">
          <div class="col-lg-12">
            <ul class="list-inline">
                <li v-for="thumbnail in thumbnails">
                    <img width="65" height="65" :src="thumbnail" />
                </li>
            </ul>
          </div>
      </div>
    </div>    
</template>

<script>
    import _ from 'lodash'
    export default {
        name: 'upload',
        data() {
            return {
                thumbnails: [],
                images: []
            }
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
                    this.thumbnails.push(window.URL.createObjectURL(file))
                })
            }
        }
    }
</script>