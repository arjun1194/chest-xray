<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Online Chest Xray
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuList" :key="index">

          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>

          <q-separator v-if="menuItem.separator" />

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        left: false,
         menuList :[
          {
            icon: 'home',
            label: 'Home',
            separator: true,
            path:'',
          },
           {
            icon: 'query_builder',
            label: 'History',
            separator: true,
            path:'/history',

           },
           {
             icon: 'info',
             iconColor: 'primary',
             label: 'About',
             separator: false,
             path:'/info',

           },
           {
             icon: 'power_settings_new',
             iconColor: 'primary',
             label: 'Logout',
             separator: false,
             path:'',
           }
        ]

      }
    }
  }
</script>
