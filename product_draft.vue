<template>
  <h1>product detail page</h1>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <p><strong>category:</strong> {{ product.category }}</p>
    <p><strong>close_preorder_days:</strong> {{ product.close_preorder_days }}</p>
    <p><strong>open_preorder_days:</strong> {{ product.open_preorder_days }}</p>
    <p><strong>desc:</strong> {{ product.desc }}</p>
    <p><strong>image:</strong> {{ product.image }}</p>
    <p><strong>is_supply:</strong> {{ product.is_supply }}</p>
    <p><strong>price:</strong> {{ product.price }}</p>
    <p><strong>range:</strong> {{ product.range }}</p>
    <p><strong>stall:</strong> 
      <router-link :to="`/stall/${product.slug}`" class="product-card-link">{{ product.stall }}</router-link>
    </p>


      <h3>inventory:</h3>
      <ul>
        TODO 判断是否是自己的店铺 如果是 不显示
        <button @click="addToCart()">Add to Cart</button> 
        TODO 只显示有supply的inventory 过去日期的不显示 
        <li v-for="inv in product.inventory" :key="inv">
          <p>{{ inv.date }} | {{ inv.already_ordered }} | {{ inv.max_supply }} | 
          <input 
          type="number" 
          v-model.number="orderitems[inv.id]" 
          min="0" 
          :max="inv.max_supply-inv.already_ordered" 
          placeholder="Enter quantity"
          />
        </p>
        </li>
      </ul>


  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductDetail',
  props: ['product_slug'],  // 从路由中接收 `bar_name` 参数
  data() {
    return {
      product: null,
      orderitems: {}
    };
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:8000/product/${this.product_slug}`);
      console.log(response.data)
      this.product = response.data;
      // Initialize quantities for each inventory item
      this.product.inventory.forEach(inv => {
          this.orderitems[inv.id] = 0; // Set default quantity to 0
        });
    } catch (error) {
      console.error('Error fetching product  detail:', error);
    }
  },
  methods: {
    addToCart() {
      console.log(this.orderitems);
      const filteredorderitems = Object.fromEntries(
          Object.entries(this.orderitems).filter(([key, value]) => value > 0)
      );
      console.log(filteredorderitems)
      const fullorderItems=[]
      for (const item in filteredorderitems){
        const newItem={}
        newItem['inventory_id']=parseInt(item)
        newItem['stall']=this.product.stall.name
        newItem['quantity']=filteredorderitems[item]
        newItem['product_name']=this.product.title
        newItem['date']=this.product.inventory.find(x=>x.id===parseInt(item)).date
        newItem['price']=parseFloat(this.product.price)
        newItem['stripe_token']=this.product.stripe_token
        fullorderItems.push(newItem)
      }
      
      // console.log(fullorderItems)
      this.$store.commit('addToCart',fullorderItems)
    }
  },
};
</script>

<style scoped>
.red-text {
  color: red;
}
</style>
