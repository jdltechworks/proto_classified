<template>
    <div class="page">
        <navbar></navbar>
        <router-view 
            :initial-products="initialProducts"
            :product="product"
            :related="related" />
    </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
    name: 'app',
    props: [
        'initial-products',
        'product',
        'related'
    ],
    components: {
        Navbar
    }
}
</script>