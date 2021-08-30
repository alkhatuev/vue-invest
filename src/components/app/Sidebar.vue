<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
      <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to='link.url'
          exact>
        <a href="#" class="waves-effect waves-light pointer">{{link.title}}</a>
      </router-link>
      
    </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Главная', url: '/'},
      {title: 'Инвестирование', url: '/history'},
      {title: 'Рынок', url: '/home'},
      {title: 'Торговля', url: '/home'},
      {title: 'Авторизация', url: '/login'}
    ]
  })
}
</script>