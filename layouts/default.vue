<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile @click="loginout">
          <v-list-tile-action>
            <v-icon v-html="$auth.$state.loggedIn ? 'lock' : 'lock_open'"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$auth.$state.loggedIn ? 'Log Out' : 'Log In'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() + 'BoSo RnD Co., Ltd. All rights reserved.' }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        clipped: true,
        miniVariant: false,
        title: 'Make SW Visible & Imaginable'
      }
    },
    computed: {
      items: function(){
        return [
          { icon: 'home', title: 'Home', to: '/main' },
          { icon: 'apps', title: 'Main Page', to: '/' },
          { icon: 'face', title: 'My Page', to: '/me' },
        ];
      }
    },
    methods: {
      loginout(){
        if (this.$auth.$state.loggedIn){
          this.$auth.logout();
        }
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>
