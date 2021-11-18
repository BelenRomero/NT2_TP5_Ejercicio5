<template>

  <section class="src-components-juego">

        <!-- Agregar los componentes que se generen (el que borré por error tambiéeeen :( )-->
      <div>
           <!--<NavBar (agregar lo que trae)>
          </NavBar> */-->
      </div>

  </section>

</template>

<script>

//Generar componentes para el resto de las partes
//import NavBar from './navbar.vue'

  export default  {
    name: 'src-components-juego',
    props: [],
    components: {
        //Agregar los componentes generados
        //Navbar
    },
    mounted () {
    },
    data () {
      return {
        color               : 'RGB(110, 96, 166)',
        colorHeader         : 'steelblue',
        msj                 : 'dasd',
        cant                : 6,
        arrColors           : [],
        arrBackGronunColor  : [],
        msjButton           : 'New colors'
      }
    },
    methods: {
      
      setValor(valor) {
        this.cant = valor
      },

      setColor(valor) {
        this.color = valor
        this.colorHeader = "steelblue"
      },

      setArrColors(valor) {
          this.msjButton = 'New colors'
          this.arrColors = valor
          this.arrBackGronunColor = []
      },

      setBackGronunColor( valor ) {
          this.arrBackGronunColor = valor
      },

      getColorHeader() {
          return { 'background': this.colorHeader }
      },

      colorSelect(valor) {
        if( this.color === valor ) {
          this.msjButton = "PLAY AGAIN!"
          this.colorHeader = valor
          console.log("sd")
        } else {
          console.log('no es')
        }

      },
      setStyleBr( color ){
            return {  'background': color  }
        }
    },
    computed: {
    }
}
</script>





<style scoped lang="css">
  .src-components-juego {

     }
</style>