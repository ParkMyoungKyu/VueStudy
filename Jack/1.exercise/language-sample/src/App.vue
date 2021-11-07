<template>
  <div>
    <button @click="this.$i18n.locale = (this.$i18n.locale == 'en') ? 'ko' : 'en'">변환</button>
    <h2>{{$t('label1')}}</h2>
    <h2>{{$t('label2')}}</h2>
    <h2>{{$t('label3')}}</h2>
  </div>
</template>

<script>

import i18nEn from './assets/json/i18n.en.json';
import i18nKo from './assets/json/i18n.ko.json';

export default {
  name: 'App',
  mounted() {
    this.$i18n.messages.ko = i18nKo[this.screenId];
    this.$i18n.messages.en = i18nEn[this.screenId];
  },
  data(){
    return {
      screenId : "SCR0001",
    }
  },
  components: {
  }
}
</script>

