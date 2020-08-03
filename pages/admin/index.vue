<template>
  <div>
    <h1>Admin</h1>
    <!-- <ul>
      <li>
        <nuxtLink to="/admin/artist">Artist</nuxtLink>
      </li>
      <li>
        <nuxtLink to="/admin/picture">Picture</nuxtLink>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  // middleware({ redirect }) {
  //   return redirect('/admin/new');
  // },
  layout: 'admin'
}
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  justify-content: start;
  margin: 0;
  padding: 0;
}

li {
  margin: 5px;
}

a {
  text-decoration: none;
}
</style>
