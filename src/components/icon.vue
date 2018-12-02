<template>
  <!-- 这里删除了v-if -->
  <svg class="j-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import "assets/svg"; //svg的本地化
export default {
  props: ["name"]
};
</script>
<style scoped>
.j-icon {
  width: 1em;
  height: 1em;
}
</style>