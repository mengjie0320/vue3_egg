<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <!-- <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p> -->
    <button @click="testSR">请求</button>
  </div>
</template>

<script>
import ajax from '../common/ajax';
import { reactive, ref } from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    // let count = ref(0);
    // return {count};

    function testSR(){
      ajax.fetch({
        url: '/eggServer/testProxy',
        type: 'get',
        data: {
          params: { testName: 'xxx'}
        }
      }).then((res) => {
        console.log('res ---> ', res);
      });
    }

    const state = reactive({
      count: 0,
      testSR,
    });
    return state;
  }
}
</script>
