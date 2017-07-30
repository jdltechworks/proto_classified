<template>
    <div class="search-box">
        <div class="container grid-960">
            <form @submit.prevent="execute({ keywords, location })">
                <div class="input-group">
                    <input type="text" class="form-input" @blur="handleBlur" v-model="keywords" placeholder="Search" />
                    <button @click.prevent="toggle" class="btn btn-primary input-group-btn"><i class="icon icon-location"></i></button>
                    <button class="btn btn-primary input-group-btn"><i class="icon icon-search"></i></button>
                </div>
                {{location}}
                <transition name="slide">
                    <region-selector v-if="isOpen" v-model="location"></region-selector>
                </transition>
            </form>
        </div>
    </div>
</template>

<script>
    import debounce from 'lodash/debounce'
    import RegionSelector from './regions'
    export default {
        name: 'search',
        props: ['clearCollection', 'restoreCollection'],
        data() {
            return {
                isOpen: false,
                keywords: '',
                location: [],
                isFetching: false
            }
        },
        components: {
            RegionSelector
        },
        methods: {
            execute: debounce(function({keywords, location}) {
                this.isOpen = true
                console.log(keywords, location)
            }, 1000, { maxWait: 1000 }),
            toggle: debounce(function() {
                this.isOpen = !this.isOpen
                this.isFetching = true
                
            }, 1000, { maxWait: 1000 }),
            handleBlur() {
                this.isOpen = false;
                this.restoreCollection()
            },
            scrollObserver() {
                const base = document.querySelector('.navbar-container')
                const baseOffset = base.offsetHeight
                this.$el.classList.remove('scrolled')
                if(window.pageYOffset >= baseOffset) {
                    this.$el.classList.add('scrolled')
                }
            }
        },
        created () {
            window.addEventListener('scroll', this.scrollObserver);
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollObserver);
        }
    }
</script>

<style scoped>
    form {
        position: relative;
    }
    .search-box {
        position: fixed;
        width: 100%;
        left: 0;
        right: 0;
        z-index: 100;
        top: 65px;
    }
    .search-box.scrolled {
        top: 0%;
        padding: 10px 0;
        background: #fff;
        border-bottom: 1px solid #eee;
    }
    .location {
        background: #fff;
        position: absolute;
        width: 100%;
        top: 43px;
    }
    .slide-enter-active {
      animation: slidefadein 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
      animation: slidefadeout 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    @keyframes slidefadein {
      0% {
        opacity: 0;
        transform: translateY(-100px);
      }
      100% {
        opacity: 1;
       transform: translateY(0px);
      }
    }
    @keyframes slidefadeout {
      0% {
        opacity: 1;
        transform: translateY(0px);
      }
      100% {
        opacity: 0;
        transform: translateY(-100px);
      }
    }
</style>
