<template lang="pug">
.acordion
  .p-3.pb-0.p-md-4.pb-md-0(v-for="(elm, index) of elements" :key="elm.id" :class="[{'acordeon__selected': selected === elm.id}, cardClass, 'mb-3']")
    
    .acordion__header.mb-3.mb-md-4(
      @click="selected = selected != elm.id ? elm.id : 0"
      @mouseover="mostrarIndicador = mostrarIndicador && index === 1 ? false : mostrarIndicador"
    )
      .d-flex.align-items-center
        .acordion__accion(v-if="tipo === 'a'")
          .acordion__accion__btn--a.h3.mb-0.me-3
            i.fas.fa-minus(v-if="selected === elm.id")
            i.fas.fa-plus(v-else)
            .indicador__container(v-if="mostrarIndicador && index === 1")
              .indicador--click.indicador--sm

        .acordion__titulo
          h3.mb-0 {{elm.titulo}}

      .acordion__accion(v-if="tipo === 'b'")
        .acordion__accion__btn--b.h3.mb-0
          i.fas.fa-angle-up(v-if="selected === elm.id")
          i.fas.fa-angle-down(v-else)
          .indicador__container.indicador--left(v-if="mostrarIndicador && index === 1")
            .indicador--click.indicador--sm
    
    .acordion__contenido(
      :style="{ height: rendered && selected === elm.id ? getActiveHeight(elm.id) : 0 } "
    )
      .acordion__contenido__item.pb-3.pb-md-4(:ref="elm.id" v-child="elm.elm")

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'AcordeonB',
  mixins: [componentSlotMixins],
  props: {
    claseTarjeta: {
      type: String,
      default: '',
    },
    tipo: {
      type: String,
      default: 'a',
    },
  },
  data: () => ({
    mostrarIndicador: true,
  }),
  computed: {
    cardClass() {
      if (this.claseTarjeta.length) {
        return this.claseTarjeta
      } else {
        return 'tarjeta tarjeta--blanca mb-3'
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.domUpdated()
      }, 5000)
    })
  },
}
</script>

<style lang="sass">
.acordeon__selected
  background: linear-gradient(180deg, rgba(216,204,236,.7) 0%, rgba(217,237,252,.7) 100%)
</style>
