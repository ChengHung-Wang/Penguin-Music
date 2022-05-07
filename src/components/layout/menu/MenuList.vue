<template>
  <ElScrollbar>
    <div class="mt-10 pl-6 pr-6 space-y-1.5 mt-15" v-for="menuItem in menus">
      <div class="menu-title text-main">{{ menuItem.name }}</div>
      <div
          class="menu-item hover-bg-main text-main"
          v-for="menu in menuItem.menus"
          :key="menu.key"
          :class="{ 'active': currentKey === menu.key }"
          @click="click(menu)"
      >
        <IconPark :icon="menu.icon" size="22" :theme="menu.theme"/>
        <span class="ml-1">{{ menu.name }}</span>
      </div>
    </div>
    <div class="mobile-close-control" v-if="isMobile" @click="displayMenu = false">
      <IconPark :icon="Close" size="18" theme="outline"/>
    </div>
  </ElScrollbar>
</template>

<script setup lang="ts">


import {userMenu} from "@/components/layout/menu/useMenu";
import IconPark from "@/components/common/IconPark.vue";
import {useMenuStore} from "@/stores/menu";
import {storeToRefs} from "pinia";

import {Close} from '@icon-park/vue-next'



const {menus, currentKey, click} = userMenu()
const {isMobile, displayMenu} = storeToRefs(useMenuStore());
</script>


<style lang="scss" scoped>
.menu-title {
  @apply text-xs pl-4 pr-4 pb-2;
}

.menu-item {
  @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}

.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}

.mobile-close-control {
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 15px;
}
</style>
