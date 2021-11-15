<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
          <router-link class="navbar-brand" aria-current="page" to="/">
            <img src="./assets/img/flo.png" width="50">
          </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/recent">최신차트</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/category">장르 콜렉션</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/myList">장르 보관함</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>

  <div>
    <router-view></router-view>
    <!--  <List :todayChart="todayChart"/>-->
  </div>

  <div>
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Fixed bottom</a>
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
  },
}
</script>

<style>
</style>
