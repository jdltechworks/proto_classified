<template>
    <form @submit="execute({ keywords, region, categories })">
        <div class="input-group mt-10 pt-10 mb-10 pt-10">
            <input type="text" class="form-input" placeholder="Search" />
            <button @click.prevent="toggle" class="btn btn-primary input-group-btn"><i class="icon icon-location"></i></button>
            <button class="btn btn-primary input-group-btn"><i class="icon icon-search"></i></button>
        </div>
        <transition name="slide">
            <div v-if="isOpen" class="columns">
                <div class="column col-12">
                    <div class="panel">
                        Pussy!
                    </div>
                </div>
            </div>
        </transition>
    </form>
</template>

<script>
    export default {
        name: 'search',
        props: ['updateList'],
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            execute({keywords, region, categories}) {
                console.log(keywords, region, categories)
            },
            toggle() {
                this.isOpen = !this.isOpen
            }
        }
    }
</script>

<style scoped>
    .slide-enter-active {
      animation: slidefadein 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
      animation: slidefadeout 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    @keyframes slidefadein {
      0% {
        opacity: 0;
        margin-top: 0;
      }
      100% {
        opacity: 1;
        margin-top: 30px;
      }
    }
    @keyframes slidefadeout {
      0% {
        opacity: 1;
        margin-top: 30px;
      }
      100% {
        opacity: 0;
        margin-top: 0;
      }
    }
</style>
