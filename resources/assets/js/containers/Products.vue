<template>
    <div class="products container grid-960">
        <div class="input-group mt-10 pt-10 mb-10 pt-10">
          <input type="text" class="form-input" placeholder="Search" />
          <button class="btn btn-primary input-group-btn"><i class="icon icon-location"></i></button>
          <button class="btn btn-primary input-group-btn"><i class="icon icon-search"></i></button>
        </div>

        <div v-for="row in loadedProducts" class="columns mt-10 pt-10">
            <div v-for="product in row" class="column col-3 col-sm-12">
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
</template>

<script>
    import chunk from 'lodash/chunk'
    export default {
        name: 'products',
        props: ['initialProducts'],
        data() {
            return {
                products: this.initialProducts
            }
        },
        computed: {
            loadedProducts() {
                return chunk(this.products, 4)
            }
        }
    }
</script>