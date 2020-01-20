<template>
<div class="mb-4 flex">
  <iframe width="560" height="315" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
  
</div>
</template>

<script lang='ts'>
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component({})
export default class Video extends Vue{
  @Prop({type: String, required:true})
  url:any;
}

</script>

<style>

</style>