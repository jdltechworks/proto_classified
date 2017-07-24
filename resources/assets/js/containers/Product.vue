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
                <div class="panel mt-10 pt-10">
                    <div class="panel-header">
                        <div class="panel-title">
                            Comments
                        </div>
                    </div>
                    <div class="panel-body">
                        <div v-for="comment in product.comments" class="tile">
                          <div class="tile-icon">
                            <figure class="avatar" data-initial="YZ"></figure>
                          </div>
                          <div class="tile-content">
                            <p class="tile-title">{{comment.title}}</p>
                            <p class="tile-subtitle">{{comment.body}}</p>
                          </div>
                          <div class="tile-action">
                          </div>
                        </div>
                    </div>
                    <div class="panel-footer text-center">
                        <a href="#">Load more</a>
                    </div>
                </div>
            </div>
            <div class="column col-4 col-sm-12">
                <div class="product-related">
                    <div class="panel pb-10 mb-10">
                        <div class="panel-header">
                        </div>
                        <div class="panel-body">
                            <div class="tile">
                                <div class="tile-icon">
                                <figure class="avatar" data-initial="YZ"></figure>
                              </div> 
                              <div class="tile-content">
                                <p class="tile-title">{{product.user.name}}</p>
                              </div>
                            </div>
                        </div>
                        <div class="panel-footer text-center">
                        </div>
                    </div>
                    <p class="pt-10 mt-10">You might also like</p>
                    <div class="divider"></div>
                    <div v-for="row in relatedProducts" class="columns mt-10 pt-10">
                        <div v-for="product in row" class="column col-6 col-sm-12">
                            <div class="card">
                                <a :href="/product/ + product.slug">
                                    <div v-if="index === 0" 
                                        v-for="(image, index) in product.images" 
                                        class="card-image" 
                                        :key="index">
                                        <img v-if="index === 0" :src="image.filename" class="img-responsive" />
                                    </div>
                                    <div class="card-header text-right">
                                        <h6 class="card-title" style="font-size: 14px;text-transform:capitalize;">
                                            {{product.title}}
                                        </h6>
                                        <div class="card-subtitle"><span>Php {{product.price}}</span></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
    import chunk from 'lodash/chunk'
    export default {
        name: 'product',
        props: [
            'product',
            'related'
        ],
        data() {
            return {
                relatedProducts: chunk(this.related, 2)
            }
        }
    }
</script>