import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    test: false,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#1EB980',
        secondary: '#045D56',
        tertiary: '#FF6859',
        quaternary: '#FFCF44',
        quinary: '#B15DFF',
        senary: '#72DEFF',
      },
    },
  },
});
