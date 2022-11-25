<template>
  <div>
    <VueMultiselect
      v-model="selected"
      :options="options"
      deselect-label=""
      select-label=""
      selected-label=""
      :searchable="false"
      :allow-empty="false">
    </VueMultiselect>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import { CheckIcon } from '@heroicons/vue/24/outline'
export default {
  components: { VueMultiselect,CheckIcon },
  data () {
    return {
      selected: null,
      options: ['Калининград', 'Москва', 'Самара', 'Екатеринбург', 'Омск', 'Красноярск', 'Иркутск', 'Якутск', 'Владивосток', 'Магадан', 'Камчатка']
    }
  },
  mounted() {
    this.selected = this.options[0];
  }
}
</script>

<style src="../assets/styles/multiselect.css"></style>
