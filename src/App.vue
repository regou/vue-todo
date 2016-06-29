<template>
    <div>


        <div class="index-office intro">
            <office-index></office-index>
        </div>
        <!--<router-view></router-view>-->
    </div>
</template>

<script>


import officeIndex from './components/officeIndex';


export default {
    data: function () {
        return {
        }
    },
    components: {
        'office-index': officeIndex
    }
}

</script>

<style>
html {
  height: 100%;
}

body{
    height:100%;
}
#master-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
