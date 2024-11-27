<template>
  <section>
    <h2>Вера Михайловна, вам оказаны услуги</h2>

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
          <UButton v-else size="lg" variant="solid" disabled>Рейтинг заёмщика</UButton>

        </div>
      </li>
    </ul>
  </section>

  <section>
    <ul class="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
      <li
        v-for="(support, index) in [
          {
            icon:   '',
            title:  'Помощь VK',
          },

          {
            icon:   '',
            title:  'Бот в телеграм',
          },

          {
            icon:   'i-heroicons-rocket-launch-solid',
            title:  'Помощь тех.поддержки',
          },
        ]"
        :key="index"
      >
        <div class="grid gap-y-4 h-full px-8 py-6 rounded-[32px] bg-[#1F1F1F]">

          <div class="flex gap-x-4">
            <UIcon name='' class="w-8 h-8 text-white" />
            <h3 class="text-xl leading-6 font-medium text-white">{{ support.title }}</h3>
          </div>

          <UButton class="text-center" size="lg" color="white" variant="outline">Написать</UButton>
        </div>
      </li>
    </ul>
  </section>
</template>
