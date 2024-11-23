<template>
    <div>
      <h1 style="text-align: center;">j-toastify Demo</h1>
      <div>
        <h2>Install</h2>
        <div>
          <button>npm install j-toastify</button>
        </div>
      </div>
      <div>
        <h2>Base Usage</h2>
        <div>
          <button @click="testToastifyEvent">Base Click</button>
        </div>
      </div>
      <div>
        <h2>Position Usage</h2>
        <div class="btn-group">
          <button @click="testToastifyEvent({'position': 'top-left'})">top-left</button>
          <button @click="testToastifyEvent({'position': 'top'})">top</button>
          <button @click="testToastifyEvent({'position': 'top-right'})">top-right</button>
          <button @click="testToastifyEvent({'position': 'center'})">center</button>
          <button @click="testToastifyEvent({'position': 'bottom-left'})">bottom-left</button>
          <button @click="testToastifyEvent({'position': 'bottom'})">bottom</button>
          <button @click="testToastifyEvent({'position': 'bottom-right'})">bottom-right</button>
        </div>
      </div>
      <div>
        <h2>Type Usage</h2>
        <div class="btn-group">
          <button @click="testToastifyEvent({'type': 'primary'})">primary</button>
          <button @click="testToastifyEvent({'type': 'success'})">success</button>
          <button @click="testToastifyEvent({'type': 'warning'})">warning</button>
          <button @click="testToastifyEvent({'type': 'danger'})">danger</button>
        </div>
      </div>
      <div>
        <h2>AutoClose && Timeout Usage</h2>
        <div class="btn-group">
          <button @click="testToastifyEvent({'autoClose': true})">autoClose true</button>
          <button @click="testToastifyEvent({'autoClose': false})">autoClose false</button>
          <button @click="testToastifyEvent({'timeout': 10000})">timeout 10000</button>
        </div>
      </div>
      <div>
        <h2>Icon Usage</h2>
        <div class="btn-group">
          <button @click="testToastifyEvent({'icon': true})">Icon true</button>
          <button @click="testToastifyEvent({'icon': false})">Icon false</button>
        </div>
      </div>
      <div>
        <h2>Confirm && Cancel Button Usage</h2>
        <div class="btn-group">
          <button @click="testToastifyEvent({'confirmText': 'confirm', 'autoClose': false})">confirmText</button>
          <button @click="testToastifyEvent({'cancelText': 'cancel', 'autoClose': false})">cancelText</button>
          <button @click="testToastifyEvent({'confirmText': 'confirm', 'cancelText': 'cancel', 'autoClose': false})">confirmText && cancelText</button>
        </div>
      </div>
      <div>
        <h2>Code</h2>
        <div style="text-align: left">
            <codemirror
              v-model="code"
              placeholder="Code goes here..."
              :style="{ height: '500px' }"
              :indent-with-tab="true"
              :tab-size="4"
              :disabled="true"
            />
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  //  import {JToastify} from './packages/JToastify'
  import { JToastify } from 'j-toastify'
  
  const code = ref(`
  import { JToastify } from 'j-toastify'
  
  JToastify.alert({
    message: 'Hello World! ',  // required
    position: 'center',        // default is 'top-right'
    autoClose: false,          // default is true
    timeout: 10000,            // default is 5000
    type: 'success',           // default is 'primary'
    icon: true,                // default is true
    confirmText: 'confirm',    // default is null, if need to show, the autoClose should be false
    cancelText: 'cancel',      // default is null, if need to show, the autoClose should be false
    confirmEvent: (bool) => {
      console.log(bool) // output: true
    },
    cancelEvent: (bool) => {
      console.log(bool) // output: false
    },
    closeEvent: () => {
      // close icon event
    }
  }, () => {
    // callback
  })
  `)
  
  const testToastifyEvent = (props) => {
    JToastify.alert({
      message: `Hello World! `,
      ...props
    })
  }
  </script>
  
  <style>
  .btn-group {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }
  </style>