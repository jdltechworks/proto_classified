<template>
    <div class="container-fluid">
      <div class="row">
        <div id="droppable" class="upload col-md-12" v-model="image">
            <span>Drop your files here</span>
          <span class="glyphicon glyphicon-camera"></span>
        </div>
      </div>
      <div class="row">
          <div class="col-lg-12 previews dropzone-previews">
          </div>
      </div>
    </div>    
</template>

<script>
    import Dropzone from 'dropzone'
    export default {
        name: 'upload',
        data() {
            return {
                image: ''
            }
        },
        mounted() {
            new Dropzone('#droppable', { 
                url: '/file/post',
                paramName: 'file',
                maxFileSize: 2,
                accept: (file, done) => {

                },
                acceptedFiles: 'image/png,image/jpeg',
                clickable: true,
                previewsContainer: '.previews',
                addRemoveLink: true,
                previewTemplate: document.getElementById('preview-template').innerHTML,
                addedFile: (file) => {
                    file.previewElement = Dropzone.createElement(this.options.previewTemplate)
                }
            })
        }
    }
</script>