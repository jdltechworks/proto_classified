<template>
    <div class="page">
        <navbar></navbar>
        <router-view 
            :initial-products="initialProducts" />
    </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
    name: 'app',
    props: ['initial-products'],
    components: {
        Navbar
    }
}
</script>