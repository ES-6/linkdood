"use strict";
export default [
  {
    path: '/',
    component: require('components/list/ChatList'),
    children:[
      {path: 'chatToPeople/:item/:id',component: require('components/MessageBox')}
    ]
  },
  {
    path: '/contacts',
    component: require('components/list/ContactsList'),
    children:[
      {path: 'userIntroduction/:item/:id',component: require('components/card/ContactsInformation')}
    ]
  },
  {path: '/more',component: require('components/More')},
  {
    path: '*',
    redirect: '/'
  }
];
