<template>
  <div>
    <h1>News Page</h1>
    <b-table :items="items" striped hover> </b-table>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      objects: []
    }
  },
  async asyncData({ params, $axios }) {
    console.log('!!! asyncDataBegin')
    const { data } = await $axios.post('/api/new/get')
    console.log('!!! asyncDataEnd')
    console.log(data)
    return { objects: data }
  }
}
</script>
