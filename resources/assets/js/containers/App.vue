<template>
    <div class="page">
        <div class="page-inner">
            <navbar></navbar>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>