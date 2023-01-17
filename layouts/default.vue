<template>
  <div class="relative">
    <nuxt />
  </div>
</template>

<script>
import GLOBAL_QUERY from '~/graphql/global'

export default {
  methods: {
    async loadData(){
      const client = this.$nuxt.$apolloProvider.defaultClient;

      const { data } = await client.query({
        query: GLOBAL_QUERY,
      })

      const global = data?.global
      this.$store.commit('SET_GLOBAL_DATA', global)
    }
  },
  mounted (){
    if(!this.$store.getters.getGlobalData){
      this.loadData();
    }
  },
  computed: {
    global() {
      return this.$store.getters.getGlobalData
    },
    notice() {
      const global = this.$store.getters.getGlobalData;
      return global?.notice[0]
    }
  },
};
</script>
