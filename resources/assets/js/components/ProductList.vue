<template>
    <div class="col-md-9">
    <div class="row  product-list" v-for="row in groupedProducts">
        
        <div class="col-md-3 product-list-product" v-for="product in row">
            <div class="clearfix item">
                <img src="https://dummyimage.com/220X135.97/000/fff" class="img-responsive"/>
                <a v-bind:href="productUrl + product.slug">{{product.title}}</a>
            </div>                
        </div>
    </div>
    </div>
</template>
<script>
    import moment from 'moment'
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
            console.log(this.products)
        }
    }
</script>
