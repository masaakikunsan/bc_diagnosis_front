<template>
  <AppCard>
    <div class="formWrapper">
      <select v-model="selected" class="select">
        <option>事業部を選択してください</option>
        <template v-for="(val, key) in products">
          <option :key="key">{{val}}</option>
        </template>
      </select>
    </div>
    <div v-if="users.length" class="userTable">
      <div class="userTableRow">
        <div class="userTableName">氏名</div>
        <div class="userTableDepartment">部署</div>
        <div class="userTablePosition">役職</div>
        <div></div>
      </div>
      <template v-for="(user, key) in getShowUsers">
        <div :key="key" class="userTableRow">
          <div class="userTableName">{{user.name}}</div>
          <div class="userTableDepartment">{{user.department}}</div>
          <div v-if="user.position" class="userTablePosition">{{user.position}}</div>
          <div v-else class="userTablePosition">-</div>
          <nuxt-link class="button" :to="`/users/${user.userId}`">
            詳細を見る
          </nuxt-link>
        </div>
      </template>
    </div>
  </AppCard>
</template>

<script lang="ts">
import Vue from 'vue'

import { getCompanies, getProducts, getUsers } from '~/utils/fetch'

export default Vue.extend({
  async asyncData() {
    const companiesData = await getCompanies()
    const productsData = await getProducts(companiesData.companyIds[0])
    const usersData = await getUsers(companiesData.companyIds[0])
    return {
      companies: companiesData.companyIds,
      products: productsData.products,
      users: usersData.users,
      selected: '事業部を選択してください'
    }
  },
  computed: {
    getShowUsers() {
      if (this.selected === '事業部を選択してください') return this.users
      return this.users.filter(user => {
        return user.product === this.selected
      }).sort((a, b) => {
        if (a.department > b.department) {
          return 1
        } else {
          return -1
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.formWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .select {
    width: 250px;
    padding: 13px 10px;
    border: 1px solid #b2b7b7;
    border-radius: 4px;
    background: #fff;
    font-size: 14px;
    box-sizing: border-box;
  }
}

.userTable {
  margin-top: 30px;
  border: 1px solid #BBBBBB;
  border-radius: 6px;
  padding: 15px;

  .userTableRow {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    border-bottom: 1px solid #BBBBBB;

    &:last-child {
      border-bottom: 0;
    }

    .userTableName {
      width: 200px;
    }

    .userTableDepartment {
      width: 200px;
    }

    .userTablePosition {
      width: 200px;
    }

    .button {
      color: #13a5a1;
      display: block;
      text-decoration: none;
    }
  }
}
</style>
