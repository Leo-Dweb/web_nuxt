import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | D-Web',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],

    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    // Google Fonts - Icons
      // { rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons' },
      
    //  Google Fonts
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=KoHo:wght@300&display=swap' }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    // Form validations - vee-validate
    "~/plugins/vee-validate"

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primaryweb: '#003840',
          blueweb: '#35495E',
          darkfoot: '#121514',
          dark:'#333333',
          naranja: '#F7931E',
          mint: '#42B883'
          
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Transpile Rules VEE
    transpile:['vee-validate/dist/rules'  
      ],

    extend(config, ctx) {}

  }
}
