<template>
  <div>
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link :to="{ name: 'Home' }" class="navbar-brand">HODL Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link :to="{ name: 'Portfolio'}" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link :to="{ name: 'Stocks'}"activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End Day</a></li>
          <li class="dropdown">
            <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Save & Load <span class="caret"></span>

            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Save</a></li>
              <li><a href="#">Load</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
