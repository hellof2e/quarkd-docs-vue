<template>
  <div class="search-bar">
    <svg
      t="1660736522656"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4767"
      width="200"
      height="200"
    >
      <path
        d="M789.804097 737.772047 742.865042 784.699846 898.765741 940.600545 945.704796 893.672746Z"
        p-id="4768"
      ></path>
      <path
        d="M456.92259 82.893942c-209.311143 0-379.582131 170.282245-379.582131 379.582131s170.270988 379.570875 379.582131 379.570875c209.287607 0 379.558595-170.270988 379.558595-379.570875S666.210197 82.893942 456.92259 82.893942zM770.128989 462.477097c0 172.721807-140.508127 313.229934-313.206398 313.229934-172.720783 0-313.229934-140.508127-313.229934-313.229934s140.508127-313.229934 313.229934-313.229934C629.620861 149.247162 770.128989 289.75529 770.128989 462.477097z"
        p-id="4769"
      ></path>
    </svg>

    <input
      type="text"
      class="search-input"
      :placeholder="isZhLang ? '在 Quarkd 中搜索...' : 'Search in Quarkd...'"
      v-model="data.searchVal"
      ref="refInput"
      @blur="onblur"
      @keyup="choseList"
    />

    <div class="quick-search" @click="quickSearch">⌘K</div>

    <ul class="search-list" v-show="data.searchList.length > 0">
      <li
        :class="data.searchCurName == item.name ? 'cur' : ''"
        @click="checklist(item)"
        v-for="(item, index) in data.searchList"
        :key="index"
      >
        <router-link :to="item._name">
          {{ item.name }}
          <span v-if="isZhLang">{{ item.cName }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  onMounted,
  watch,
  ref,
  nextTick,
} from "vue";
import { nav } from "@/config/index";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "search",
  setup() {
    const router = useRouter();
    const data = reactive({
      nav,
      navList: [],
      searchIndex: 0,
      searchList: [],
      searchVal: "",
      searchCName: "",
    });
    const refInput = ref();

    onMounted(() => {
      nav.forEach((item) => {
        item.packages.forEach((value) => {
          data.navList.push(value);
        });
      });

      // command + k 快捷键
      document.onkeydown = function (event) {
        if (event.metaKey && event.keyCode === 75) {
          // console.log(refInput, 111);
          nextTick(() => {
            refInput.value.focus();
          });
        }
      };
    });

    watch(
      () => data.searchVal,
      (sVal) => {
        if (sVal) {
          data.searchList = data.navList.filter((item) => {
            if (item.show === false) return false;

            item._name = `/${localStorage.getItem("language")}/component/${
              item.name
            }`;
            const rx = new RegExp(sVal, "gi");
            return rx.test(item.name + " " + item.cName + "" + item.desc);
          });
        } else {
          // data.searchCName = "";
          // data.searchIndex = 0;
          // data.searchList = [];
        }
      }
    );

    const quickSearch = () => {
      nextTick(() => {
        refInput.value.focus();
      });
    };

    const onblur = (e) => {
      setTimeout(() => {
        data.searchList = [];
        data.searchVal = "";
      }, 200);
    };

    const checklist = () => {
      data.searchVal = "";
      data.searchCurName = "";
      data.searchIndex = 0;
    };

    const choseList = (e) => {
      let searchIndex = data.searchIndex;
      if (e.keyCode === 40) {
        searchIndex++;
      }
      if (e.keyCode === 38) {
        searchIndex--;
      }
      if (searchIndex < 0) {
        searchIndex = 0;
      }
      const searchList = data.searchList;
      if (searchList.length > 0) {
        const cName = searchList[searchIndex] && searchList[searchIndex].name;
        if (cName) {
          data.searchCurName = cName;
          data.searchIndex = searchIndex;
          if (e.keyCode === 13) {
            router.push({
              path: `/${localStorage.getItem("language")}/component/${
                searchList[searchIndex].name
              }`,
              // "/" + searchList[searchIndex].name,
            });
            data.searchCurName = "";
            data.searchIndex = 0;
            data.searchVal = "";
          }
        }
      }
    };

    return {
      data,
      choseList,
      onblur,
      checklist,
      isZhLang: localStorage.getItem("language") === "zh-CN",
      refInput,
      quickSearch,
    };
  },
});
</script>

<style lang="scss">
.quick-search {
  position: absolute;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 20px;
  margin-left: 5px;
  border: 1px solid #535d6b;
  padding: 0px 8px;
  border-radius: 5px;
  right: 20px;
  top: 4px;
  color: #535d6b;
  cursor: pointer;
}

.search-list {
  position: absolute;
  width: 300px;
  z-index: 9999;
  top: 27px;
  padding: 0;
  background-color: #252529;
  li {
    height: 40px;
    line-height: 40px;
    font-size: 12px;

    a {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      padding-left: 40px;
      text-decoration: none;
      color: #fff;
    }

    &:hover {
      color: #0da6e9;

      a {
        color: #0da6e9;
      }
    }
  }

  .cur {
    background: #0da6e9;
    color: #fff;

    &:hover {
      color: #fff;
      font-weight: bold;

      a {
        color: #fff;
      }
    }

    a {
      color: #fff;
    }
  }
}

.search-input {
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 2rem;
  display: flex;
  left: 2.5rem;
  position: absolute;
  background: transparent;
  color: var(--text-font-color);
}
.search-bar {
  display: flex;
  align-items: center;
  border-color: #666;
  border: 1px solid #666;
  border-radius: 1.5rem;
  height: 34px;
  min-width: 300px;
  position: relative;
  > svg {
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    left: 1rem;
  }
}
</style>
