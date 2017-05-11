<template>
    <div class="container-fluid">
      <div class="row">
        <div @dragover.prevent class="upload col-md-12" @drop="onDrop">
          <span class="glyphicon glyphicon-camera"></span>
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
                thumbnails: []
            }
        },
        methods: {
            onDrop (e) {
                e.preventDefault()
                e.stopPropagation()
                const files = e.dataTransfer.files
                console.log(files)
                _.map(files, (file, key) => {
                    this.thumbnails.push(window.URL.createObjectURL(file))
                })
            }
        }
    }
</script>