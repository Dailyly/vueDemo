<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
    	<p>v-bind绑定属性</p>
      <img :src='imgSrc'/>
      <a :href="webUrl">技术胖</a>
      <p :class='className'>1.我是绑定的class的文字哟</p>
      <p :class={classA:isOk}>2.我是用来判断class的哟</p>
      <input type="checkbox" v-model="isOk" id="isOk"/>
      <label for="isOk">isOk={{isOk}}</label>
      <p :class='[classA,classB]'>3.绑定Class中的数组</p>
      <p :class="isOk?classA:classB">4.绑定class的三元运算符</p>
      <p :style="{color:red,fontSize:font}">绑定style的样式</p>
      <p :style="styleObject">用样式对象绑定style</p>
   		<div class="box">
   			<span>vue.directive自定义指令</span>
   			<p v-color='styleObject.color'>{{num}}</p>
   			<button @click="addNum()">add</button>
   		</div>
   		<p>关于对ref的理解</p>
   		<p ref="outsideDomRef">ref在外面的元素上</p>
   		<son ref="child"></son>
   	<!--	<span ref="second">我是第二个</span>-->
    <div>
         <div></div>
    </div> 
  </div>
</template>

<script>
	import 	Vue from 'vue'
	import son from '@/components/son'
//	Vue.directive('color',function(el,binding){
//		console.log(el)
//		console.log(binding)
//		el.style="color:"+binding.value
//	})
export default {
  name: 'HelloWorld',
  components:{son},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgSrc:'https://www.ifcar99.com/v2/images/csd_none.jpg',
      webUrl:'http://jspang.com',
      className:'classA',
      isOk:false,
      classA:'classA',
      classB:'classB',
      red:'red',
      font:'20px',
      styleObject:{
      	color:'red',
      	fontSize:'20px'
      },
      num:0,
      first:[],
      second:[]
    }
  },
  created(){
		console.log(this.$refs.child);
  },
  methods:{
  	addNum(){
  		this.num += 1;
  	},
  	printMes(){
  		console.log(this.$ref);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.classA{
	color: orange;
}
.classB{
	font-size: 18px;
}
.box{
	border: 1px solid #000;
}
</style>
