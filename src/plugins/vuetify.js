import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken4,
        secondary: colors.lightGreen.lighten2,
        accent: colors.orange.lighten3,
        aside: colors.lime.darken4,
        info: colors.cyan.darken1,
        error: colors.red.accent3,
      },
      dark: {
        background: colors.grey.darken3,
      },
    },
  },
});
