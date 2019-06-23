<template>
  <div class="body">
    <h1>Drumkit</h1>
    <div id="app">
      <div class="keys">
        <div class="key" :class="sound.isPlaying ? 'playing' : '' " v-for="(sound, index) in sounds"  :key="`${index}`">
          <kbd >{{sound.key}}</kbd>
          <span class="sound">{{sound.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DrumKit',
  created: function () {
    window.addEventListener('keyup', this.sound)
  },
  data () {
    return {
      sounds: [{
        key: 'A',
        name: 'Kick',
        isPlaying: false
      },
      {
        key: 'S',
        name: 'Snare',
        isPlaying: false

      }, {
        key: 'D',
        name: 'Openhat',
        isPlaying: false

      }, {
        key: 'F',
        name: 'Perc',
        isPlaying: false

      },
      {
        key: 'W',
        name: 'Shaker',
        isPlaying: false

      },
      {
        key: 'Q',
        name: 'Tom',
        isPlaying: false

      }]
    }
  },
  methods: {
    sound (event) {
      switch (event.key) {
        case 'a':
          const kick = new Audio(require('../assets/audio/kick.wav'))
          kick.play()
          this.sounds[0].isPlaying = true
          let that = this
          setTimeout(function () {
            that.sounds[0].isPlaying = false
          }, 70)
          break
        case 's':
          const snare = new Audio(require('../assets/audio/snare.wav'))
          snare.play()
          that = this
          this.sounds[1].isPlaying = true
          setTimeout(function () {
            that.sounds[1].isPlaying = false
          }, 70)
          break
        case 'd':
          const openhat = new Audio(require('../assets/audio/openhat.wav'))
          openhat.play()
          that = this
          this.sounds[2].isPlaying = true
          setTimeout(function () {
            that.sounds[2].isPlaying = false
          }, 70)
          break
        case 'f':
          const perc = new Audio(require('../assets/audio/perc.wav'))
          perc.play()
          that = this
          this.sounds[3].isPlaying = true
          setTimeout(function () {
            that.sounds[3].isPlaying = false
          }, 70)
          break
        case 'w':
          const shake = new Audio(require('../assets/audio/shake.wav'))
          shake.play()
          that = this
          this.sounds[4].isPlaying = true
          setTimeout(function () {
            that.sounds[4].isPlaying = false
          }, 70)
          break
        case 'q':
          const tom = new Audio(require('../assets/audio/tom.wav'))
          tom.play()
          that = this
          this.sounds[5].isPlaying = true
          setTimeout(function () {
            that.sounds[5].isPlaying = false
          }, 70)
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped>
.body {
  background: url(http://i.imgur.com/b9r5sEL.jpg) bottom center;
  background-size: cover;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.key {
  border: 0.4rem solid black;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  transition: all 0.07s ease;
  width: 7rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 0.5rem black;
}
h1{
  color: rgb(175, 162, 47);
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-family: "Helvetica Neue", sans-serif;
  margin-top: 0;
  font-size: 100px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
}
.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}

kbd {
  display: block;
  font-size: 2rem;
}

 .sound {
   width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #ffc600;
}
</style>
