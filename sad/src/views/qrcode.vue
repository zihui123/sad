<template>
  <div class="content">
    <button @click="startScanning">開始掃描</button>
    <qr-stream @decode="onDecode" class="mb">
      <div style="color: red;" class="frame"></div>
    </qr-stream>
    <!--
    <qr-capture @decode="onDecode" class="mb">
      <div style="color: red;" class="frame"></div>
    </qr-capture>
    -->
  
    {{ data }}
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { QrStream } from 'vue3-qr-reader'

export default defineComponent({
  components: { QrStream },
  name: 'QrStreamExample',
  setup() {
    const state = reactive({
      data: null,
      scanning: false, 
    })

    function onDecode(data) {
      state.data = data
    }
    function startScanning() {
      state.scanning = true
    }
    return {
      ...toRefs(state),
      onDecode,
      startScanning,
    }
  }
})
</script>
