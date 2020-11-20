<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      {{ $t('message') }}

      <v-spacer />

      <v-btn @click="changeLocalization(langToChoose)" text>
        <span class="mr-2"> {{ $t('changeLocalization') }}</span>
        <v-icon>mdi-cached</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'About' }" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      {{ myData }}
      <v-btn @click="loadData"> Load DATA via store</v-btn>
      {{ myModifiedData }}
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

const langs = {
  sk: 'sk',
  en: 'en'
}

export default {
  name: 'App',
  computed: {
    ...mapState(['myData', 'myData2']),
    // myData2: function () {
    //   // ['myData', 'myData2'].map(i => this.computed[i] = this.$store.state[i])
    //   return this.$store.state.myData
    // },
    ...mapGetters(['myModifiedData'])
    // myModifiedData: function () {
    //   return this.$store.getters.myModifiedData
    // }
  },
  data: () => ({
    langToChoose: langs.sk
  }),
  methods: {
    changeLocalization(langToChoose) {
      this.$vuetify.lang.current = langToChoose // "sk"/"en"
      this.$i18n.locale = langToChoose
      
      this.langToChoose = langToChoose == langs.sk ? langs.en : langs.sk
    },
    loadData() {
      this.$store.dispatch('loadMyData')
    }
  }
}
</script>
