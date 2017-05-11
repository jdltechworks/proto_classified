<template>
    <div class="container-fluid">
      <div class="row">
        <div @dragover.prevent @drop="onDrop" class="upload col-md-12">
          <span class="glyphicon glyphicon-camera"></span>
        </div>
      </div>
      <div v-if="thumbnails.length !== 0" class="row">
          <ul>
              <li v-for="thumbnail in thumbnails">
                <img :src="thumbnail" width="75" height="75" />
              </li>
          </ul>
      </div>
    </div>    
</template>

<script>
    import _ from 'lodash'
    export default {
        name: 'upload',
        data () {
            return {
                thumbnails: [],
            }
        },
        methods: {
            onDrop (e) {
                e.preventDefault()
                e.stopPropagation()
                let files = e.dataTransfer.files
                _.map(files, (file, key) => {
                    this.thumbnails.push(window.URL.createObjectURL(file))
                })
            }
        }
    }
</script>