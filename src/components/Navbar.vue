<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Javascript30
    </mu-appbar>

    <mu-container>
     <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
        <mu-list>
          <mu-list-item button to='/day1'>
            <mu-list-item-title>
              Day 1 - Drumkit
            </mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Day 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button to='/day5'>
            <mu-list-item-title>Day 5 - Flex Panels</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      docked: false,
      open: false,
      position: 'left'
    }
  }
}
</script>
