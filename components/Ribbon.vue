<template>
  <div>
    <canvas id="robbon_canvas" ref="robbon_canvas" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Ribbon extends Vue {
  // ribbonCanvas: any = this.$refs.robbon_canvas
  windowHeight: number = 0
  windowWidth: number = 0
  ribbonSize: number = 300
  q: Array<any> = []
  r: number = 0
  pi: number = Math.PI * 2
  canvasContext: any = {}

  mounted () {
    if (process.browser) {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
      this.initDraw()
    }
  }

  initDraw () {
    const ribbonCanvas: any = this.$refs.robbon_canvas
    this.canvasContext = ribbonCanvas.getContext('2d')
    ribbonCanvas.width = this.windowWidth
    ribbonCanvas.height = this.windowHeight

    document.onclick = this.redraw
    document.ontouchstart = this.redraw

    this.redraw()
  }

  redraw () {
    this.canvasContext.clearRect(0, 0, this.windowWidth, this.windowHeight)
    this.q = [{ x: 0, y: this.windowHeight * 0.7 + this.ribbonSize }, { x: 0, y: this.windowHeight * 0.7 - this.ribbonSize }]
    while (this.q[1].x < this.windowWidth + this.ribbonSize) {
      this.draw(this.q[0], this.q[1])
    }
  }

  draw (i: any, j: any) {
    this.canvasContext.beginPath()
    this.canvasContext.moveTo(i.x, i.y)
    this.canvasContext.lineTo(j.x, j.y)
    const k: number = j.x + (Math.random() * 2 - 0.25) * this.ribbonSize
    const n: any = this.line(j.y)
    this.canvasContext.lineTo(k, n)
    this.canvasContext.closePath()
    this.r -= this.pi / -50
    this.canvasContext.fillStyle = '#' + (Math.cos(this.r) * 127 + 128 << 16 | Math.cos(this.r + this.pi / 3) * 127 + 128 << 8 | Math.cos(this.r + this.pi / 3 * 2) * 127 + 128).toString(16)
    this.canvasContext.fill()
    this.q[0] = this.q[1]
    this.q[1] = { x: k, y: n }
  }

  line (p: any):any {
    const t: number = p + (Math.random() * 2 - 1.1) * this.ribbonSize
    return (t > this.windowHeight || t < 0) ? this.line(p) : t
  }
}
</script>

<style lang="scss">
#robbon_canvas {
  position: fixed;
  left: 0;
  top: 0;
  // z-index: 0;
  opacity: .6;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
