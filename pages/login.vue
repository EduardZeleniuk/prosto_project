<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Login form</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email"></v-text-field>
                                    <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                                </v-form>
                                    <v-btn class="signIn mb-2" primary @click.native="googleSignUp">Google Sign In</v-btn>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="onSubmit">Log in</v-btn>
                                <v-btn color="primary" to="/registration">Create account!</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    layout: 'login',
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