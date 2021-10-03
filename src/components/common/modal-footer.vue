<template>
  <div>
    <i-button type="text" @click="onCancel">{{cancelText}}</i-button>
    <i-button type="success" :loading="loading" @click="onSave">{{saveText}}</i-button>
  </div>
</template>

<script>
import { Button } from "iview";
export default {
  props: {
    loading: {type: Boolean,default: false},
    saveText: {type: String,default: "保存"},
    cancelText: {type: String,default: "取消"}
  },
  methods: {
    onSave() {this.$emit("on-save");},
    onCancel() {this.$emit("on-cancel");}
  },
  components: {iButton: Button}
};
</script>

<style>

</style>
