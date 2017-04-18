<template>
    <div class="col-lg-8">
    <div class="row" v-for="row in groupedProducts">
        
        <div class="col-md-3 product-list" v-for="product in row">
            <div class="clearfix item">
                <img src="https://dummyimage.com/193x100/000/fff" class="img-responsive"/>
                <div class="caption">
                    <a v-bind:href="productUrl + product.slug">{{product.title}}</a>
                </div>
            </div>                
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        name: 'products-list',
        props: {
            products: {
                type: Array,
                default: []
            }
        },
        computed: {
            productUrl() {
                return '/product/'
            },
            groupedProducts() {
                return _.chunk(this.products, 4)
            }
        },
        mounted() {
        }
    }
</script>
