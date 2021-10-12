<template>
  <nav class="nav">
    <router-link to="/" >Overview</router-link>
    <router-link :to="{    name: 'transactions-route' }">Transactions</router-link>
    <router-link to="/budgets">Budgets</router-link>
    <router-link to="/report">Report</router-link>
    <router-link to="/settings">Settings</router-link>
  </nav>
</template>
