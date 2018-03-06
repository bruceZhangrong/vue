import Vue from 'vue'
import Counter from '@/components/Counter'

describe('Counter.vue', () => {
  it('click button, the value of count is 1', () => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    const btn = vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    btn.dispatchEvent(clickEvent)
    vm._watcher.run()
    expect(Number(vm.$el.querySelector('.num').textContent)).to.equal(1)
  })
  it('click button2, the value of count is 1 after 1 minite', (done) => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    const btn = vm.$el.querySelector('.btn2')
    const clickEvent = new window.Event('click')
    btn.dispatchEvent(clickEvent)
    vm._watcher.run()
    setTimeout(() => {
      expect(Number(vm.$el.querySelector('.num1').textContent)).to.equal(1)
      done()
    })
  })
})
