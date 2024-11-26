<script setup lang="ts">
import type { Link } from '#build/components';
import { _disabled } from '#tailwind-config/theme/aria';
</script>

<template>
  <div>
    <ul class="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
      <li
        v-for="(item, index) in [
          {
            title: 'Готовые предложения',
            description: 'С одобрением и выгодной процентной ставкой',
            link: true
          },

          {
            title: 'Предложения партнеров',
            description: 'Готовые рассмотреть вашу заявку и дать ответ',
            link: true
          },

          {
            title: 'Рейтинг заёмщика',
            description: 'Рейтинг заёмщика доступен при платной подписке',
            link: false
          },
        ]"
        :key="index"
      >
        <div class="grid gap-y-4 h-full px-8 py-10 rounded-[32px] bg-[#1F1F1F]">
          <h3 class="text-xl leading-6 font-medium text-white">{{ item.title }}</h3>
          <p class="text-sm leading-5 font-normal text-slate-300">{{ item.description }}</p>

          <UButton v-if="item.link" class="text-emerald-400" size="lg" variant="link" icon="heroicons:arrow-down-solid" trailing>Ознакомиться</UButton>
          <UButton v-else size="lg"  variant="solid" disabled>Рейтинг заёмщика</UButton>

        </div>
      </li>
    </ul>
  </div>
</template>
