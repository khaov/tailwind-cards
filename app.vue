<template>
  <UContainer>
    <section class="my-10">
      <h2 class="my-10 text-2xl leading-8 font-medium text-slate-900 [&>span]:text-emerald-400">
        <span>Вера Михайловна</span>, вам оказаны услуги
      </h2>

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
          <div 
            class="
              grid gap-y-4 h-full px-8 py-10 
              rounded-[32px] 
              bg-[#1F1F1F] 
              bg-gradient-to-bl from-[#34D399] to-[#000000] to-50%
              
            "
          >
            <h3 class="text-xl leading-6 font-medium text-white">{{ item.title }}</h3>
            <p class="text-sm leading-5 font-normal text-slate-300">{{ item.description }}</p>

            <UButton v-if="item.link" class="text-emerald-400" size="lg" variant="link" icon="heroicons:arrow-down-solid" trailing>Ознакомиться</UButton>
            <UButton v-else block size="lg" variant="solid" disabled>Рейтинг заёмщика</UButton>
          </div>
        </li>
      </ul>
    </section>

    <section class="my-10">
      <ul class="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        <li
          v-for="(support, index) in [
            {
              icon:   'mdi:vk-circle',
              title:  'Помощь VK',
              color:  'from-blue-500 to-[#79ACFF]'
            },
            {
              icon:   'basil:telegram-solid',
              title:  'Бот в телеграм',
              color:  'from-[#376AC6] to-[#1CB4F9]'
            },
            {
              icon:   'i-heroicons-rocket-launch-solid',
              title:  'Помощь тех.поддержки',
              color:  'from-[#000000] to-[#0CC591] bg-pos-0 hover:bg-pos-100'
            },
          ]"
          :key="index"
        >
          <div 
            class="cursor-pointer grid gap-y-4 h-full px-8 py-6 rounded-[32px] bg-gradient-to-r transition-all duration-1000"
            :class="support.color" 
          >
            <div class="flex items-center">
              <UIcon :name="support.icon" class="w-8 h-8 mr-4 text-white" />
              <h3 class="text-xl leading-6 font-medium text-white">{{ support.title }}</h3>
            </div>

            <UButton block size="lg" color="white" variant="outline">Написать</UButton>
          </div>
        </li>
      </ul>
    </section>
  </UContainer>
</template>

<style>
  body {
    background-color: #F1F5F9;
  }
</style>
