import Vue from 'vue'

const LoadingUi = Vue.extend(require('./loading-ui'));
let instance;

export default {
  open(option = {}) {
    if(!instance) {
      instance = new LoadingUi({
        el: document.createElement('div')
      })
    }
    if(instance.visible) return;
    instance.text = typeof option === 'string' ? options : options.text || '';
    instance.spinnerType = options.spinnerType || 'snake';

    instance.$el.children[0].className = 'loading-api';
    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  colse() {
    if(instance) {
      instance.visible = false;
    }
  }
}