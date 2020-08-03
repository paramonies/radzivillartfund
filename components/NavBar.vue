<template>
  <div>
    <ul>
      <li>
        <nuxtLink to="/">Home</nuxtLink>
      </li>
      <li>
        <nuxtLink to="/artist">Artists</nuxtLink>
      </li>
      <li>
        <nuxtLink to="/new">News</nuxtLink>
      </li>
      <li>
        <nuxtLink to="/about">About</nuxtLink>
      </li>
      <li>
        <nuxtLink to="/contacts">Contacts</nuxtLink>
      </li>
      <li>
        <nuxtLink to="/search">Search</nuxtLink>
      </li>
      <li>
        <nuxtLink to="/admin">Admin</nuxtLink>
      </li>
    </ul>
  </div>
</template>

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
