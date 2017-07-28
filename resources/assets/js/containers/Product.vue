<template>
    <div class="product container grid-960">
        <div class="columns">
            <div class="column col-8 col-sm-12">
                <div class="carousel">
                    <input type="radio" :id="index" name="carousel-radio" 
                        v-for="(image, index) in product.images" 
                        class="carousel-locator" hidden :checked="index === 0" />
                    <div class="carousel-container">
                        <figure class="carousel-item" v-for="(image, index) in product.images">
                            <img :src="image.filename" class="img-responsive" />
                        </figure>
                    </div>
                    <div class="carousel-nav">
                        <label v-for="(image, index) in product.images" class="nav-item text-hide hand" :for="index">
                        </label>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-header">
                    </div>
                    <div class="panel-body">
                        <div class="tile">
                          <div class="tile-content">
                            <p class="tile-title">{{product.title}}</p>
                            <p class="tile-subtitle">{{product.description}}</p>
                          </div>
                          <div class="tile-action">
                              Php {{product.price}}
                          </div>
                        </div>
                    </div>
                    <div class="panel-footer text-center">
                        <a href="#">Load more</a>
                    </div>
                </div>
                <comments :comments="product.comments"></comments>
            </div>
            <div class="column col-4 col-sm-12">
                <owner :user="product.user"></owner>
                <related :related-products="relatedProducts"></related>
            </div>
        </div>
    </div>
</template>

<script>
    import chunk from 'lodash/chunk'
    import Related from './components/related'
    import Owner from './components/owner'
    import Comments from './components/comments'
    export default {
        name: 'product',
        props: [
            'collection'
        ],
        components: {
            Comments,
            Owner,
            Related
        },
        data() {
            return {
                relatedProducts: chunk(this.collection.related, 2),
                product: this.collection.product
            }
        }
    }
</script>