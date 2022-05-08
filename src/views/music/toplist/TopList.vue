<template>
  <!-- topListDetailData == topListGroup  -->
  <div class="top-list-group mt-5" v-for="topList in topListDetailData">
    <div class="row">
      <div class="col-12" v-if="topList.title != '巅峰榜'">
        <div class="text-xl pb-3 font-bold">{{ topList.title }}</div>
      </div>
    </div>
    <div class="row">
      <div v-for="item in topList.list" :key="item.topId" class="col-sm-6 col-xl-4 mb-3">
        <div class="flex bg-dc rounded-lg items-center cursor-pointer" @click="toPlaylist(item)">
          <CoverPlay :name="item.label" :pic-url="item.picUrl" :play-count="item.listenNum" class="w-36 flex-shrink-0" show-play-count/>
          <div class="px-3 flex-1 flex-shrink-0 flex flex-col">
            <div class="text-xl font-bold">{{ item.label }}</div>
            <div class="text-xs text-main mt-2">
              <div v-for="track in item.song" class="mt-2">
                <div class="flex">
                  <span class="mr-1">{{ track.rank }}. </span>
                  <div class="flex-auto w-20 truncate">
                    {{ track.title }} - {{ track.singerName }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, toRefs} from "vue";
import {useRouter} from "vue-router";
import CoverPlay from "@/components/common/CoverPlay.vue";
import {useMusicStore} from "@/stores/music";
import type {TopListDetail} from "@/models/toplist_detail";

const {topListDetailData} = toRefs(useMusicStore());
const {getTopListDetailData} = useMusicStore();
const router = useRouter()
onMounted(async () => {
  await getTopListDetailData()
})
const toPlaylist = (topListDetail: TopListDetail) => {
  router.push({name: 'playlist', query: {id: topListDetail.topId}})
}
</script>

<style lang="scss">

</style>
