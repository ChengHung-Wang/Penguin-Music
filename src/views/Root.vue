<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div
        class="w-56 h-screen flex-shrink-0"
        v-bind:class="{'menu-mobile': isMobile, 'menu-hide': isMobile && !displayMenu}">
      <Menu/>
    </div>
    <div class="flex-1 flex flex-col max-100vw">
      <div class="h-14 container" style="margin: 0 auto; position: relative;">
        <Header/>
      </div>
      <div class="flex-1 overflow-hidden mb-5">
        <ElScrollbar>
          <div class="container mx-auto">
            <RouterView/>
          </div>
        </ElScrollbar>
      </div>
      <div class="h-20">
        <Footer/>
      </div>
    </div>

    <PlayList/>

  </div>
</template>

<script setup lang="ts">

import Menu from "@/components/layout/menu/Menu.vue";
import Header from "@/components/layout/header/Header.vue";
import Footer from "@/components/layout/footer/Footer.vue";
import PlayList from "@/components/layout/playList/PlayList.vue";

import {useMenuStore} from "@/stores/menu";
import {storeToRefs} from "pinia";

const {displayMenu, isMobile} = storeToRefs(useMenuStore());

</script>
<style scoped>

</style>
