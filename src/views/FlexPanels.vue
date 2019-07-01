<template>
  <div>
    <h1>Flex panels</h1>
    <div id="app" class="panels">
      <div class="panel panel1" v-bind:class="{'open-active': Active[0].is }" v-on:click="open(0)">
        <p v-for="(text, index) in panel_1" :key="index">{{ text.p }}</p>
      </div>

      <div class="panel panel2" v-bind:class="{  'open-active': Active[1].is}" v-on:click="open(1)">
        <p v-for="(text, index) in panel_2" :key="index">{{ text.p }}</p>
      </div>
      <div class="panel panel3" v-bind:class="{ 'open-active': Active[2].is }" v-on:click="open(2)">
        <p v-for="(text, index) in panel_3" :key="index">{{ text.p }}</p>
      </div>

      <div class="panel panel4" v-bind:class="{ 'open-active': Active[3].is }" v-on:click="open(3)">
        <p v-for="(text, index) in panel_4" :key="index">{{ text.p }}</p>
      </div>

      <div class="panel panel5" v-bind:class="{ 'open-active': Active[4].is }" v-on:click="open(4)">
        <p v-for="(text, index) in panel_5" :key="index">{{ text.p }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlexPanels',
  data () {
    return {
      panel_1: [{ p: 'Hey' }, { p: 'Lets' }, { p: 'Dance' }],
      panel_2: [{ p: 'Give' }, { p: 'Take' }, { p: 'Receive' }],
      panel_3: [{ p: 'Experience' }, { p: 'It' }, { p: 'Today' }],
      panel_4: [{ p: 'Give' }, { p: 'All' }, { p: 'You can' }],
      panel_5: [{ p: 'Life' }, { p: 'In' }, { p: 'Motion' }],
      Active: [
        { is: false },
        { is: false },
        { is: false },
        { is: false },
        { is: false }
      ]
    }
  },
  methods: {
    open: function (number) {
      if (this.Active[number].is) {
        this.Active[number].is = false
      } else {
        this.Active[number].is = true
      }
    }
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.panels {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
}

.panel {
  background: #6B0F9C;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  font-size: 20px;
  background-size: cover;
  background-position: center;
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.panel1 { // source.unsplash.com/gYl-UtwNg_I/1500x1500); }
  background-image: url('https://source.unsplash.com/gYl-UtwNg_I/1500x1500'); // source.unsplash.com/gYl-UtwNg_I/1500x1500); }
}

.panel2 { // source.unsplash.com/rFKUFzjPYiQ/1500x1500); }
  background-image: url('https://source.unsplash.com/rFKUFzjPYiQ/1500x1500'); // source.unsplash.com/rFKUFzjPYiQ/1500x1500); }
}

.panel3 { // images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d); }
  background-image: url('https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d'); // images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d); }
}

.panel4 { // source.unsplash.com/ITjiVXcwVng/1500x1500); }
  background-image: url('https://source.unsplash.com/ITjiVXcwVng/1500x1500'); // source.unsplash.com/ITjiVXcwVng/1500x1500); }
}

.panel5 { // source.unsplash.com/3MNzGlQM7qs/1500x1500); }
  background-image: url('https://source.unsplash.com/3MNzGlQM7qs/1500x1500'); // source.unsplash.com/3MNzGlQM7qs/1500x1500); }
}

/* Flex Items */
.panel > * {
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0);
}

.panel > *:last-child {
  transform: translateY(100%);
}

.panel.open-active > *:last-child {
  transform: translateY(0);
}

.panel p {
  text-transform: uppercase;
  font-family: 'Amatic SC', cursive;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 2em;
}

.panel p:nth-child(2) {
  font-size: 4em;
}

.panel.open {
  flex: 5;
  font-size: 40px;
}

@media only screen and (max-width: 600px) {
  .panel p {
    font-size: 1em;
  }
}
</style>
