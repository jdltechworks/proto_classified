<template>
    <div class="login pt-4">
        <div>
        <div class="panel">
            <progress class="progress" max="100"></progress>
            <div class="panel-header">
            </div>
            <nav class="panel-nav">
              <ul class="tab tab-block">
                <li class="tab-item active">
                  <a href="#panels">
                    Login
                  </a>
                </li>
                <li class="tab-item">
                  <a href="#panels">
                    Signup
                  </a>
                </li>
              </ul>
            </nav>
            <div class="panel-body">
                <form v-on:submit.prevent="login({email, password, confirmpassword})">
                  <!-- form input control -->
                  <div class="form-group pt-10 pb-10">
                    <input class="form-input" v-model="email" type="email" id="email" placeholder="email" />
                  </div>
                  <div class="form-group pb-10">
                    <input class="form-input" v-model="password" type="password" id="password" placeholder="password" />
                  </div>
                  <div class="form-group pb-10">
                    <input class="form-input" v-model="confirmpassword" type="password" id="confirm-password" placeholder="confirm password" />
                  </div>
                  <button class="btn btn-action circle"><i class="icon icon-arrow-right"></i></button>
                </form>
            </div>
            <div class="panel-footer">
                
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        //default form values
        data() {
            return {
                email: '',
                password: '',
                confirmpassword: ''
            }
        },
        methods: {
            login(values) {
                console.log(values)
            }
        }
    }
</script>