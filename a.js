var app = new Vue({
    el: "#app3",
    data: {
        message: 'default message'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split("").reverse().join('')
        }
    }
})

var app4 = new Vue({
    el: "#app5",
    data: {
        message: 'my message'
    }
})


Vue.component('todo-item', {
    props: ['val'],
    template: '<li v-model="val.key">{{val.text}}</li>'
})


var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { key: 0, text: '蔬菜' },
            { key: 1, text: '奶酪' },
            { key: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})

var app8 = new Vue({
    el: "#app8",
    data: {
        message:'app8自动执行'
    },
    created:function() {
        alert(this.message)
    }
})