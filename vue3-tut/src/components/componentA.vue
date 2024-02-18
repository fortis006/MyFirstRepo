<template>  

<button v-on:click = "ChangeView(1)">顯示單向綁定</button>   <!--button*2-->
<button @click = "ChangeView(2)">顯示雙向綁定</button>
<button @click = "ChangeView(10000)">沒畫面</button>

<div class = "container-1" v-if = "view === 1"> 
<p>單向綁定</p>
{{data}}
</div>

<div class = "container-2" v-if = "view === 2">
<p>雙向綁定</p>
<input type="text" v-model="text"/>
<p>{{text}}</p>
</div>

<div v-show = "view != 1 && view !=2">
    沒畫面
</div>

</template>

<script setup>

import {ref} from "@vue/reactivity" //監聽變數

const data = "vue111"    //以資料驅動畫面
const text = ref("123") //text會被監聽變化，畫面資料相互驅動
const view = ref(1) //預設值是1
const ChangeView = (index) => {  //arrow function
    view.value = index
}

</script>

<style>

.container-1{
    border: 2px red solid;
}

.container-2{
    border: 2px skyblue solid;
}

</style>