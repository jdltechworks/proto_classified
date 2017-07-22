<template>
    <div class="products container grid-960">
        <div class="input-group mt-10 pt-10 mb-10 pt-10">
          <input type="text" class="form-input" placeholder="Search" />
          <button class="btn btn-primary input-group-btn"><i class="icon icon-location"></i></button>
          <button class="btn btn-primary input-group-btn"><i class="icon icon-search"></i></button>
        </div>

        <div v-for="row in products" class="columns mt-10 pt-10">
            <div v-for="product in row" class="column col-3">
                <div class="card">
                    <div v-if="index === 0" 
                        v-for="(image, index) in product.images" 
                        class="card-image" 
                        :key="index">
                        <img v-if="index === 0" :src="image.filename" class="img-responsive" />
                    </div>
                    <div class="card-header text-right">
                        <h6 class="card-title" style="font-size: 14px;text-transform:capitalize;">
                            <a :href="/product/ + product.id">{{product.title}}</a>
                        </h6>
                        <div class="card-subtitle"><span>Php {{product.price}}</span></div>
                    </div>
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
        computed: {
            products() {
                return chunk(this.initialProducts, 4)
            }
        }
    }
</script>