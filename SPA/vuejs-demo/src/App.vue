<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      {{ $t("message") }}

      <v-spacer></v-spacer>

      <v-btn @click="changeLocalization(langToChoose)" text>
        {{ $t("changeLocalization") }}
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
const langs = {
  sk: "sk",
  en: "en",
};

export default {
  name: "App",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
  },

  data: () => ({
    langToChoose: langs.sk
  }),
  methods: {
    changeLocalization(langToChoose) {
      this.$i18n.locale = langToChoose;
      this.$vuetify.lang.current = langToChoose
      this.langToChoose = langToChoose == langs.sk ? langs.en : langs.sk;
    },
  },
};
</script>
