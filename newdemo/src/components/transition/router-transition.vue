<template>
  <router-view v-slot="{ Component }">
    <transition name="zoom-fade" mode="out-in" appear>
      <keep-alive :include="keepAliveComponents" :max="10">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

export default defineComponent({
  name: 'RouterTransition',
  props: {
    notNeedKey: {
      type: Boolean,
      default: false,
    },
    animate: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    // const router = useRouter()
    // 需要缓存的路由组件
    const keepAliveComponents = ref<string[]>([]);

    // 获取需要缓存的组件
    onBeforeRouteLeave((to, from) => {
      console.log('router-transition onBeforeRouteLeave to, from ---> ', to, from);
      const currentComName = from.matched.find(item => item.name === from.name)?.components?.default.name;
      if (currentComName && !keepAliveComponents.value.includes(currentComName) && from.meta?.keepAlive) {
        // 需要缓存的组件
        keepAliveComponents.value.push(currentComName);
      } else if (!from.meta?.keepAlive || to.name === 'Redirect') {
        // 不需要缓存的组件
        const index = keepAliveComponents.value.findIndex(name => name === currentComName);
        if (index !== -1) {
          keepAliveComponents.value.splice(index, 1);
        }
      }
    });

    return {
      keepAliveComponents,
    };
  },
});
</script>
