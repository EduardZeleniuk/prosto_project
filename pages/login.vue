<template>
    <div class="authorization-form">
        <div class="authorization-form__heading">{{ formHeading }}</div>
        <div class="authorization-form__wrap-input">
            <span class="authorization-form__label-input">Email</span>
            <input class="authorization-form__input" type="text" name="email" v-model="email" placeholder="Your email">
            <span class="authorization-form__focus-input" data-symbol=""></span>
        </div>
        <div class="authorization-form__wrap-input">
            <span class="authorization-form__label-input">Password</span>
            <input class="authorization-form__input" type="password" name="password" v-model="password" placeholder="Password">
            <span class="authorization-form__focus-input" data-symbol="&#xf206;"></span>
        </div>

        <div class="authorization-form__wrap-btn">
            <div class="authorization-form__bg-btn"></div>
            <button class="authorization-form__btn"  @click="onSubmit">
                Login
            </button>
        </div>

        <div class="authorization-form__registration-button">
            <nuxt-link to="/registration">Create account</nuxt-link>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        formHeading: 'Login',
      }
    },
    layout: 'startPage',
    methods: {
      onSubmit () {
        if (this.email && this.password) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('user/loginUser', user)
        }
      },
      googleSignUp () {
        this.$store.dispatch('user/signInWithGoogle')
      }
    }
  }
</script>

<style lang="sass">

</style>