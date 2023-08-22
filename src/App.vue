<template>
  <div>
    <NavBar />
    <UserList />
    <div class="container"></div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import UserList from "./components/UserList.vue";

export default {
  name: "App",
  components: { NavBar, UserList },
};
</script>

<style>
body {
  background: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-title {
  margin: 15px 15px;
}
.m-portlet {
  margin-bottom: 2.2rem;
}
.m-portlet {
  -webkit-box-shadow: 0 1px 15px 1px rgba(113, 106, 202, 0.08);
  -moz-box-shadow: 0 1px 15px 1px rgba(113, 106, 202, 0.08);
  box-shadow: 0 1px 15px 1px rgba(113, 106, 202, 0.08);
  background-color: #fff;
}
.m-portlet .m-portlet__head {
  border-bottom: 1px solid #ebedf2;
}
.m-widget4 .m-widget4__item {
  display: table;
  padding-top: 1.15rem;
  padding-bottom: 1.25rem;
}
.m-widget4 .m-widget4__item .m-widget4__img {
  display: table-cell;
  vertical-align: middle;
}
.m-widget4 .m-widget4__item .m-widget4__img.m-widget4__img--logo img {
  width: 3.5rem;
  border-radius: 50%;
}
.m-widget4 .m-widget4__item .m-widget4__img.m-widget4__img--pic img {
  width: 4rem;
  border-radius: 50%;
}
.m-widget4 .m-widget4__item .m-widget4__img.m-widget4__img--icon img {
  width: 2.1rem;
}
.m-widget4 .m-widget4__item .m-widget4__info {
  display: table-cell;
  width: 100%;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  font-size: 1rem;
  vertical-align: middle;
}
.m-widget4 .m-widget4__item .m-widget4__info .m-widget4__title {
  font-size: 1rem;
  font-weight: bold;
}
.m-widget4.m-widget4--progress .m-widget4__info {
  width: 50%;
}
</style>
