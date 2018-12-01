<template>
    <form class="authorization-form" @submit.prevent="checkForm">
        <div class="authorization-form__heading">Registration</div>
        <div class="authorization-form__wrap-input">
            <span class="authorization-form__label-input">Email</span>
            <input class="authorization-form__input" :class="{ 'error': errors.email_error }" type="text" name="email" v-model="email" placeholder="Your email">
            <span class="authorization-form__focus-input" data-symbol=""></span>
            <span class="authorization-form__error-input" :class="{ 'error': errors.email_error }"></span>
        </div>
        <div class="authorization-form__wrap-input">
            <span class="authorization-form__label-input">Password</span>
            <input class="authorization-form__input" :class="{ 'error': errors.password_error }" type="password" name="password" v-model="password" placeholder="Password">
            <span class="authorization-form__focus-input" data-symbol="&#xf206;"></span>
            <span class="authorization-form__error-input" :class="{ 'error': errors.password_error }"></span>
        </div>

        <div class="authorization-form__wrap-btn">
            <div class="authorization-form__bg-btn"></div>
            <button class="authorization-form__btn" type="submit">Create account</button>
        </div>

        <div class="authorization-form__registration-button">
            <nuxt-link to="/login">Login</nuxt-link>
        </div>

        <ul v-if="errors.email_error || errors.password_error" class="authorization-form__errors">
            <li v-if="errors.email_error">{{ errors.email_error_message }}</li>
            <li v-if="errors.password_error">{{ errors.password_error_message }}</li>
        </ul>
    </form>
</template>

<script>
  export default {
    data () {
      return {
        errors: {},
        email: null,
        password: null,
      }
    },
    layout: 'authentication',
    methods: {
      checkForm () {
        this.errors = {};

        if (!this.password) {
          this.errors.password_error = true
          this.errors.password_error_message = 'Password is required'
        } else if (!this.validPassword(this.password)) {
          this.errors.password_error = true
          this.errors.password_error_message = 'The password\'s first character must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used'
        }

        if (!this.email) {
          this.errors.email_error = true
          this.errors.email_error_message = 'E-mail is required'
        } else if (!this.validEmail(this.email)) {
          this.errors.email_error = true
          this.errors.email_error_message = 'E-mail must be valid'
        }

        if (!this.errors.email_error && !this.errors.password_error) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('user/registerUser', user)
        }
      },

      validEmail (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
      },

      validPassword (password) {
        var re = /^[a-zA-Z]\w{3,14}$/;
        return re.test(password)
      }
    }
  }
</script>
