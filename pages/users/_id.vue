<template>
  <AppCard>
    <div class="candidateWrapper">
      <p class="name"><span class="label">氏名:</span> {{user.name}}</p>
      <p class="product"><span class="label">事業部:</span> {{user.product}}</p>
      <p class="department"><span class="label">部署:</span> {{user.department}}</p>
    </div>
    <div class="allCompatibilityWrapper">
      <h2 class="heading2"><img class="headingIcon" src="/people-arrows-solid.png">類似従業員</h2>
      <div class="allCompatibility">
        <div class="arrowWrapper">
          <p class="text">似ている</p>
          <div class="arrow"></div>
          <p class="text">似ていない</p>
        </div>
        <div class="mainContentWrapper">
          <div class="mainContent">
            <p class="percent">100%</p>
            <div class="compatibilityCandidate100">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[100]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[100].length > 7">他{{allCompatibility[100].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">90%</p>
            <div class="compatibilityCandidate90">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[90]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[90].length > 7">他{{allCompatibility[90].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">80%</p>
            <div class="compatibilityCandidate80">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[80]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[80].length > 7">他{{allCompatibility[80].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">70%</p>
            <div class="compatibilityCandidate70">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[70]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[70].length > 7">他{{allCompatibility[70].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">60%</p>
            <div class="compatibilityCandidate60">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[60]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[60].length > 7">他{{allCompatibility[60].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">50%</p>
            <div class="compatibilityCandidate50">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[50]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[50].length > 7">他{{allCompatibility[50].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">40%</p>
            <div class="compatibilityCandidate40">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[40]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[40].length > 7">他{{allCompatibility[40].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">30%</p>
            <div class="compatibilityCandidate30">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[30]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[30].length > 7">他{{allCompatibility[30].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">20%</p>
            <div class="compatibilityCandidate20">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[20]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[20].length > 7">他{{allCompatibility[20].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">10%</p>
            <div class="compatibilityCandidate10">
              <div class="nameWrapper">
                <template v-for="(val, key) in allCompatibility[10]">
                  <p v-if="key === 0" :key="key">{{val}}</p>
                  <p v-else-if="key < 7" :key="key"><span class="delimiterLeft" />/<span class="delimiterRight" />{{val}}</p>
                </template>
              </div>
              <p v-if="allCompatibility[10].length > 7">他{{allCompatibility[10].length - 7}}名</p>
            </div>
          </div>
          <div class="mainContent">
            <p class="percent">0%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="allMismatchPossibilityWrapper">
      <h2 class="heading2"><img class="headingIcon" src="/people-arrows-solid.png">配属時のミスマッチ可能性</h2>
      <div class="mismatchPossibilityWrapper">
        <div class="mismatchPossibilityLeft">
          <div class="mismatchPossibilityTextWrapper">
            <h3 class="heading3">
              {{getDepartment}}でのミスマッチ可能性
              <span v-if="getMismatchText[0] === '小'" class="textGreen">{{getMismatchText[0]}}</span>
              <span v-else-if="getMismatchText[0] === '中'" class="textYellow">{{getMismatchText[0]}}</span>
              <span v-else class="textRed">{{getMismatchText[0]}}</span>
            </h3>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="mismatchPossibilityText" v-html="getMismatchText[1]"></p>
          </div>
          <h3 class="heading3">{{getDepartment}}部署での相性の割合</h3>
          <div class="pieChart" :style="{ background: getPieChartColor }">
            <div class="smallPieChart">{{getDepartmentNumber}}人</div>
            <div v-if="getGoodCompatibilityRatio > 0" class="goodCompatibilityText" :style="{ top: getGoodChartTextPosition[0], left: getGoodChartTextPosition[1], transform: getGoodChartTextPosition[2] }">{{getGoodCompatibilityRatio}}%</div>
            <div v-if="getNormalCompatibilityRatio > 0" class="normalCompatibilityText" :style="{ top: getNormalChartTextPosition[0], left: getNormalChartTextPosition[1], transform: getNormalChartTextPosition[2] }">{{getNormalCompatibilityRatio}}%</div>
            <div v-if="getBadCompatibilityRatio > 0" class="badCompatibilityText" :style="{ top: getBadChartTextPosition[0], left: getBadChartTextPosition[1], transform: getBadChartTextPosition[2] }">{{getBadCompatibilityRatio}}%</div>
          </div>
          <div class="pieChartDescription">
            <div class="goodDescriptionWrapper">
              <div class="goodDescription"></div>
              <p class="goodDescriptionText">良い</p>
            </div>
            <div class="normalDescriptionWrapper">
              <div class="normalDescription"></div>
              <p class="normalDescriptionText">普通</p>
            </div>
            <div class="badDescriptionWrapper">
              <div class="badDescription"></div>
              <p class="badDescriptionText">悪い</p>
            </div>
          </div>
        </div>
        <div class="mismatchPossibilityRight">
          <div class="goodCompatibility">
            <h3 class="heading3">相性が良い</h3>
            <template v-for="(val, key) in getGoodCompatibility">
              <div v-if="key < 3" :key="key" class="compatibilityNameWrapper">
                <p class="name">{{val.name}}</p>
                <div class="percentWrapper">
                  <img class="percentIcon" src="/icon-heart.png">
                  <p class="percent">{{val.rate}}%</p>
                </div>
              </div>
            </template>
            <template v-if="!getGoodCompatibility.length">
              <div class="compatibilityNameWrapper">該当者なし</div>
              <div class="compatibilityNameWrapper">該当者なし</div>
              <div class="compatibilityNameWrapper">該当者なし</div>
            </template>
            <template v-else-if="getGoodCompatibility.length && getGoodCompatibility.length === 1">
              <div class="compatibilityNameWrapper">該当者なし</div>
              <div class="compatibilityNameWrapper">該当者なし</div>
            </template>
            <template v-else-if="getGoodCompatibility.length && getGoodCompatibility.length === 2">
              <div class="compatibilityNameWrapper">該当者なし</div>
            </template>
          </div>
          <div class="badCompatibility">
            <h3 class="heading3">相性が悪い</h3>
            <template v-for="(val, key) in getBadCompatibility">
              <div v-if="key < 3" :key="key" class="compatibilityNameWrapper">
                <p class="name">{{val.name}}</p>
                <div class="percentWrapper">
                  <img class="percentIcon" src="/icon-heart.png">
                  <p class="percent">{{val.rate}}%</p>
                </div>
              </div>
            </template>
            <template v-if="!getBadCompatibility.length">
              <div class="compatibilityNameWrapper">該当者なし</div>
              <div class="compatibilityNameWrapper">該当者なし</div>
              <div class="compatibilityNameWrapper">該当者なし</div>
            </template>
            <template v-else-if="getBadCompatibility.length && getBadCompatibility.length < 3">
              <div class="compatibilityNameWrapper">該当者なし</div>
              <div class="compatibilityNameWrapper">該当者なし</div>
            </template>
            <template v-else-if="getBadCompatibility.length && getBadCompatibility.length < 2">
              <div class="compatibilityNameWrapper">該当者なし</div>
            </template>
          </div>
          <div class="showAllmismatchPossibility">一覧で見る</div>
          <div class="changeDepartmentBtn" @click="clickChangeDepartment">他部署でのミスマッチ可能性を見る<img class="iconPlus" src="/icon-plus.png"></div>
          <select v-if="changeDepartment" v-model="selected" class="select" @change="changeDepartmentEvent">
            <option>部署を選択してください</option>
            <template v-for="(val, key) in user.departments">
              <option :key="key">{{val}}</option>
            </template>
          </select>
        </div>
      </div>
    </div>
  </AppCard>
</template>

<script lang="ts">
import Vue from 'vue'
import { getUser } from '~/utils/fetch'

export default Vue.extend({
  async asyncData({ params }) {
    const req = {
      userId: params.id,
      department: null
    }
    const user = await getUser(req)
    const allCompatibility = {
      100: [],
      90: [],
      80: [],
      70: [],
      60: [],
      50: [],
      40: [],
      30: [],
      20: [],
      10: []
    }
    user.user.allCompatibility.forEach(candidate => {
      if (candidate.rate > 90) {
        allCompatibility[100].push(candidate.name)
      } else if (candidate.rate > 80) {
        allCompatibility[90].push(candidate.name)
      } else if (candidate.rate > 70) {
        allCompatibility[80].push(candidate.name)
      } else if (candidate.rate > 60) {
        allCompatibility[70].push(candidate.name)
      } else if (candidate.rate > 50) {
        allCompatibility[60].push(candidate.name)
      } else if (candidate.rate > 40) {
        allCompatibility[50].push(candidate.name)
      } else if (candidate.rate > 30) {
        allCompatibility[40].push(candidate.name)
      } else if (candidate.rate > 20) {
        allCompatibility[30].push(candidate.name)
      } else if (candidate.rate > 10) {
        allCompatibility[20].push(candidate.name)
      } else {
        allCompatibility[10].push(candidate.name)
      }
    })
    return {
      user: user.user,
      distanceStandard: user.user.total / 3,
      allCompatibility,
      selected: '部署を選択してください',
      changeDepartment: false
    }
  },
  computed: {
    getDepartment() {
      if (this.selected === '部署を選択してください') {
        return this.user.department
      } else {
        return this.selected
      }
    },
    getDepartmentNumber() {
      return this.user.departmentCompatibility.length
    },
    getGoodCompatibility() {
      return this.user.departmentCompatibility.filter(val => {
        return val.distance < this.distanceStandard
      })
    },
    getBadCompatibility() {
      return this.user.departmentCompatibility.filter(val => {
        return val.distance >= (this.distanceStandard * 2)
      })
    },
    getNormalCompatibility() {
      return this.user.departmentCompatibility.filter(val => {
        return val.distance >= this.distanceStandard && val.distance < (this.distanceStandard * 2)
      })
    },
    getGoodCompatibilityRatio() {
      return Math.floor(this.getGoodCompatibility.length / this.getDepartmentNumber * 1000) / 10
    },
    getBadCompatibilityRatio() {
      return Math.floor(this.getBadCompatibility.length / this.getDepartmentNumber * 1000) / 10
    },
    getNormalCompatibilityRatio() {
      return Math.floor(this.getNormalCompatibility.length / this.getDepartmentNumber * 1000) / 10
    },
    getMismatchText() {
      if (this.getGoodCompatibilityRatio > 50) {
        return ['小', `過半数のメンバーが類似しているのでミスマッチ可能性は低いです。似ている従業員が多い為、現在のチーム状況を元に似ている人材が必要なのかで判断しましょう。`]
      } else if (this.getGoodCompatibilityRatio >= 50 && this.getNormalCompatibilityRatio >= 50) {
        return ['小', `過半数のメンバーが類似しているのでミスマッチ可能性は低いです。似ている従業員が多い為、現在のチーム状況を元に似ている人材が必要なのかで判断しましょう。`]
      } else if (this.getNormalCompatibilityRatio > 50) {
        return ['中', `過半数のメンバーと類似性がありません。ミスマッチの可能性もある為、注意が必要です。`]
      } else {
        return ['大', `過半数のメンバーが類似性がないのでミスマッチ可能性が大です。相性の似ている人材を探し、その人材がメンバーに必要か考えることをおすすめします。`]
      }
    },
    getPieChartColor() {
      if (this.getBadCompatibilityRatio === 0 && this.getNormalCompatibilityRatio === 0) {
        return '#B8E5E3'
      } else if (this.getGoodCompatibilityRatio === 0 && this.getBadCompatibilityRatio === 0) {
        return '#D9D9D9'
      } else if (this.getGoodCompatibilityRatio === 0 && this.getNormalCompatibilityRatio === 0) {
        return '#F5D1D1'
      } else if (this.getBadCompatibilityRatio === 0) {
        return `conic-gradient(#B8E5E3 0% ${this.getGoodCompatibilityRatio}%, #D9D9D9 ${this.getGoodCompatibilityRatio}% 100%)`
      } else if (this.getNormalCompatibilityRatio === 0) {
        return `conic-gradient(#B8E5E3 0% ${this.getGoodCompatibilityRatio}%, #F5D1D1 ${this.getGoodCompatibilityRatio}% 100%)`
      } else if (this.getGoodCompatibilityRatio === 0) {
        return `conic-gradient(#D9D9D9 0% ${this.getNormalCompatibilityRatio}%, #F5D1D1 ${this.getNormalCompatibilityRatio}% 100%)`
      } else {
        return `conic-gradient(#B8E5E3 0% ${this.getGoodCompatibilityRatio}%, #D9D9D9 ${this.getGoodCompatibilityRatio}% ${this.getGoodCompatibilityRatio + this.getNormalCompatibilityRatio}%, #F5D1D1 ${this.getGoodCompatibilityRatio + this.getNormalCompatibilityRatio}% 100%)`
      }
    },
    getGoodChartTextPosition() {
      if (this.getGoodCompatibilityRatio === 100) {
        return ['30px', '50%', 'translateX(-50%)']
      } else if (this.getGoodCompatibilityRatio >= 50) {
        return ['50%', '72%', 'translateX(-0%) translateY(-50%)']
      } else {
        return [`calc(${this.getGoodCompatibilityRatio}% - 15px)`, `70%`, 'translateX(-0%) translateY(-0%)']
      }
    },
    getNormalChartTextPosition() {
      if (this.getNormalCompatibilityRatio === 100) {
        return ['30px', '50%', 'translateX(-50%)']
      } else if (this.getGoodCompatibilityRatio === 0) {
        if (this.getNormalCompatibilityRatio >= 50) {
          return ['50%', '75%', 'translateX(-0%) translateY(-50%)']
        } else {
          return [`calc(${this.getNormalCompatibilityRatio}% - 15px)`, `${100 - this.getNormalCompatibilityRatio}%`, 'translateX(-0%) translateY(-0%)']
        }
      } else if (this.getBadCompatibilityRatio === 0) {
        if (this.getGoodCompatibilityRatio < 50) {
          return ['50%', '20px', 'translateX(-0%) translateY(-50%)']
        } else {
          return [`calc(${100 - this.getNormalCompatibilityRatio}% - 15px)`, `20px`, 'translateX(-0%) translateY(-0%)']
        }
      } else if (this.getGoodCompatibilityRatio === this.getNormalCompatibilityRatio && this.getBadCompatibilityRatio === this.getNormalCompatibilityRatio) {
        return [`75%`, `50%`, 'translateX(-50%) translateY(-0%)']
      } else if (this.getNormalCompatibilityRatio >= 50) {
        return ['50%', '20px', 'translateX(-0%) translateY(-50%)']
      } else if (this.getGoodCompatibilityRatio < 50 && this.getNormalCompatibilityRatio >= 25){
        return [`70%`, `25%`, 'translateX(-0%) translateY(-0%)']
      } else {
        return [`50%`, `20px`, 'translateX(-0%) translateY(-50%)']
      }
    },
    getBadChartTextPosition() {
      if (this.getBadCompatibilityRatio === 100) {
        return ['30px', '50%', 'translateX(-50%)']
      } else if (this.getGoodCompatibilityRatio === this.getNormalCompatibilityRatio && this.getBadCompatibilityRatio === this.getNormalCompatibilityRatio) {
        return [`calc(${this.getBadCompatibilityRatio}% - 15px)`, `30px`, 'translateX(-0%) translateY(-0%)']
      } else if (this.getBadCompatibilityRatio >= 50) {
        return ['50%', '20px', 'translateX(-0%) translateY(-50%)']
      } else if (this.getBadCompatibilityRatio > 25) {
        return [`calc(${this.getBadCompatibilityRatio}% - 15px)`, `30px`, 'translateX(-0%) translateY(-0%)']
      } else {
        return [`calc(${this.getBadCompatibilityRatio}% - 15px)`, `${this.getBadCompatibilityRatio}%`, 'translateX(-0%) translateY(-0%)']
      }
    }
  },
  methods: {
    clickChangeDepartment() {
      this.changeDepartment = !this.changeDepartment
    },
    async changeDepartmentEvent() {
      if (this.selected === '部署を選択してください') return
      const updateUser = await getUser({
        userId: this.user.userId,
        department: this.selected
      })
      this.user = updateUser.user
      this.changeDepartment = false
    }
  }
})
</script>

<style lang="scss" scoped>
.candidateWrapper {
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  .name {
    width: 150px;
    margin-right: 30px;
  }

  .product {
    width: 200px;
    margin-right: 30px;
  }

  .label {
    color: #999;
  }
}

.allCompatibilityWrapper {
  margin-bottom: 60px;

  .allCompatibility {
    display: flex;
    
    .arrowWrapper {
      width: 60px;
      margin-right: 20px;
      text-align: center;
      flex-shrink: 0;

      .arrow {
        width: 1px;
        height: 364px;
        position: relative;
        background: #000;
        margin: 10px auto;

        &::before {
          content: '';
          width: 8px;
          height: 8px;
          border: 1px solid #000;
          border-left: 0;
          border-bottom: 0;
          transform: rotate(-45deg);
          transform-origin: top right;
          position: absolute;
          top: -0.5px;
          right: 50%;
        }

        &::after {
          content: '';
          width: 8px;
          height: 8px;
          border: 1px solid #000;
          border-right: 0;
          border-top: 0;
          transform: rotate(-45deg);
          transform-origin: top right;
          position: absolute;
          bottom: 2.5px;
          right: 50%;
        }
      }

      .text {
        font-size: 12px;
      }
    }

    .mainContentWrapper {
      width: 100%;
    }

    .mainContent {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 6px;

      .percent {
        line-height: 1;
        font-size: 12px;
        margin-right: 8px;
        margin-top: -6px;
        width: 40px;
      }

      .compatibilityCandidate100 {
        width: 100%;
        height: 34px;
        background: rgba(19, 168, 162, 0.4);
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate90 {
        width: 100%;
        height: 34px;
        background: rgba(19, 168, 162, 0.3);
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate80 {
        width: 100%;
        height: 34px;
        background: rgba(19, 168, 162, 0.2);
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate70 {
        width: 100%;
        height: 34px;
        background: rgba(19, 168, 162, 0.1);
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate60 {
        width: 100%;
        height: 34px;
        background: #F6F6F6;
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate50 {
        width: 100%;
        height: 34px;
        background: #F6F6F6;
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate40 {
        width: 100%;
        height: 34px;
        background: rgba(206, 25, 25, 0.1);
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate30 {
        width: 100%;
        height: 34px;
        background: rgba(206, 25, 25, 0.2);
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate20 {
        width: 100%;
        height: 34px;
        background: rgba(206, 25, 25, 0.3);
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }

      .compatibilityCandidate10 {
        width: 100%;
        height: 34px;
        background: rgba(206, 25, 25, 0.4);
        font-size: 14px;
        padding: 8px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nameWrapper {
          display: flex;

          .delimiterLeft {
            margin-left: 5px;
          }

          .delimiterRight {
            margin-right: 5px;
          }
        }
      }
    }
  }
}

.allMismatchPossibilityWrapper {
  width: 100%;

  .mismatchPossibilityWrapper {
    display: flex;
    justify-content: space-between;

    .mismatchPossibilityLeft {
      width: 48%;

      .mismatchPossibilityTextWrapper {
        border: 1px solid #BBBBBB;
        border-radius: 6px;
        padding: 20px;
        margin-bottom: 42px;

        .mismatchPossibilityText {
          font-size: 12px;
          line-height: 17px;
        }
      }

      .pieChart {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        margin: 0 auto 8px;
        position: relative;

        .smallPieChart {
          position: absolute;
          width: 100px;
          height: 100px;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          background: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .goodCompatibilityText {
          position: absolute;
          font-size: 22px;
          line-height: 30px;
        }

        .normalCompatibilityText {
          position: absolute;
          font-size: 22px;
          line-height: 30px;
        }

        .badCompatibilityText {
          position: absolute;
          font-size: 22px;
          line-height: 30px;
        }
      }

      .pieChartDescription {
        display: flex;
        justify-content: center;
        align-items: center;

        .goodDescriptionWrapper {
          margin-right: 12px;
          display: flex;
          align-items: center;

          .goodDescription {
            margin-right: 6px;
            width: 20px;
            height: 10px;
            background: #B8E5E3;
          }

          .goodDescription {
            font-size: 10px;
            line-height: 12px;
          }
        }

        .normalDescriptionWrapper {
          margin-right: 12px;
          display: flex;
          align-items: center;

          .normalDescription {
            margin-right: 6px;
            width: 20px;
            height: 10px;
            background: #D9D9D9;
          }

          .normalDescription {
            font-size: 10px;
            line-height: 12px;
          }
        }

        .badDescriptionWrapper {
          margin-right: 12px;
          display: flex;
          align-items: center;

          .badDescription {
            margin-right: 6px;
            width: 20px;
            height: 10px;
            background: #F5D1D1;
          }

          .badDescription {
            font-size: 10px;
            line-height: 12px;
          }
        }
      }
    }

    .mismatchPossibilityRight {
      width: 48%;

      .goodCompatibility {
        margin-top: 10px;
        margin-bottom: 40px;

        .compatibilityNameWrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #BBBBBB;
          font-size: 14px;
          padding: 10px 0;

          &:last-child {
            border-bottom: 1px solid #BBBBBB;
          }

          .percentWrapper {
            display: flex;
            align-items: center;

            .percentIcon {
              width: 14px;
              height: 14px;
              margin-right: 5px;
            }

            .percent {
              font-weight: 700;
            }
          }
        }
      }

      .badCompatibility {
        margin-bottom: 25px;

        .compatibilityNameWrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #BBBBBB;
          font-size: 14px;
          padding: 10px 0;

          &:last-child {
            border-bottom: 1px solid #BBBBBB;
          }

          .percentWrapper {
            display: flex;
            align-items: center;

            .percentIcon {
              width: 14px;
              height: 14px;
              margin-right: 5px;
            }

            .percent {
              font-weight: 700;
            }
          }
        }
      }

      .showAllmismatchPossibility {
        display: flex;
        justify-content: flex-end;
        font-size: 14px;
        margin-bottom: 26px;
      }

      .changeDepartmentBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid #13A8A2;
        border-radius: 6px;
        font-size: 14px;
        line-height: 17px;
        color: #13A8A2;
        padding: 15px 0;

        &:hover {
          cursor: pointer;
        }

        .iconPlus {
          margin-left: 6px;
          width: 17px;
          height: 17px;
        }
      }
    }
  }
}

.heading2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  .headingIcon {
    width: 30px;
    height: auto;
    margin-right: 20px;
  }
}

.heading3 {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  .textGreen {
    color: #13A8A2;
    margin-left: 10px;
  }

  .textYellow {
    color: #FFC700;
    margin-left: 10px;
  }

  .textRed {
    color: #CE1919;
    margin-left: 10px;
  }
}

.select {
  width: 100%;
  padding: 13px 10px;
  border: 1px solid #b2b7b7;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  box-sizing: border-box;
}
</style>