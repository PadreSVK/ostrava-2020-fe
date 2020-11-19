<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      {{ $t("message") }}

      <v-spacer />

      <v-btn @click="changeLocalization(langToChoose)" text>
        <span class="mr-2"> {{ $t("changeLocalization") }}</span>
        <v-icon>mdi-cached</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'About' }" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const langs = {
  sk: "sk",
  en: "en",
};

export default {
  name: "App",
  data: () => ({
    langToChoose: langs.sk,
  }),
  methods: {
    changeLocalization(langToChoose) {
      this.$i18n.locale = langToChoose;
      this.$vuetify.lang.current = langToChoose;
      this.langToChoose = langToChoose == langs.sk ? langs.en : langs.sk;
    },
  },
};
</script>
