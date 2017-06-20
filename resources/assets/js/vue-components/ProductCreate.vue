<template>
    <div class="product-create">
    <image-upload v-bind:images="images"></image-upload>
        <div class="container">
          <div class="row">
              <div class="col-md-8 col-md-offset-2">
                  <div class="panel panel-default">
                      <div class="panel-body">
                          <form @submit.prevent="create">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter product name" v-model="title" />
                                </div>
                                <div class="form-group">
                                   <textarea v-model="description" @keyup.enter="autoexpand" @keyup.delete="test" placeholder="Enter product details" class="form-control"></textarea>
                                </div>
                            <button type="submit" class="btn btn-warning btn-block">Submit</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import ImageUpload from './ImageUpload'
    import Editor from './Editor'
    export default {
        name: 'product-create',
        data () {
            return {
                images: [],
                title: '',
                description: ''
            }
        },
        methods: {
            create (e) {
            },
            test (e) {
                e.target.style.height = (e.target.scrollHeight - 18) + "px"
            },
            getText (title) {
                var test = title.replace(/(<([^>]+)>)/g, '')
            },
            autoexpand (e) {
                e.target.style.height = (e.target.scrollHeight + 18) +"px"
            }
        },
        components: {
            ImageUpload,
            Editor
        }
    }
</script>