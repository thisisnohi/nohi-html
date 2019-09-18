require('bootstrap');
import Vue from 'vue';

import 'select2';      // globally assign select2 fn to $ element
import 'select2/dist/css/select2.css'; // optional if you have css loader

// 应用组件
window.app = require('main');  //以别名方式引入,参见webpack.config.js  resolve alias


Vue.component('demo-table', {
    template: '#grid-template'
    , props: {
        columns: Array
        , gridData: Array
        , filterKey: String
    }
    , data: function () {
        var sortMap = {};
        this.columns.forEach(function (key) {
            sortMap[key] = 'asc';
        });
        return {
            sortKey: ''
            , sortMap: sortMap
            , isEmpty: false
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key;
            var order = this.sortMap[key];
            order = (!order) ? 'asc' : order;
            order = order == 'asc' ? 'desc' : 'asc';
            this.sortMap[key] = order;
        }
    },
    computed: {
        getData: function () {
            var filterKey = this.filterKey.toLowerCase();
            var data = this.gridData;
            var v_sortKey = this.sortKey;

            //过滤数据
            if (filterKey) {
                data = data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }

            //排序
            if (v_sortKey) {
                var order = this.sortMap[v_sortKey];
                data = data.slice().sort(function (a, b) {
                    a = a[v_sortKey]
                    b = b[v_sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * (order == 'desc' ? -1 : 1);
                });

            }
            if (data && data.length > 0) {
                this.isEmpty = false;
            } else this.isEmpty = true;
            this.data = data;
            return data;
        },

    }
});


$(document).ready(function () {
    console.info('document ready');
    new Vue({
        el: '#grid',
        data: {
            columns: ['name', 'value']
            , gridData: [
                {name: 'Chuck Norris', value: Infinity},
                {name: 'Bruce Lee', value: 9000},
                {name: 'Jackie Chan', value: 7000},
                {name: 'Jet Li', value: 8000}
            ]
            , filterKey: ''
        }
        ,
        watch: {
            input: function (newValue, oldValue) {
                console.info('newValue:' + newValue + ',oldValue:' + oldValue);
            }
        }

    });

    //显示树
    tree();

    svg();

    // 模式组件
    model();

    //　内部组件
    innerComponent();

    var data = [
        {"id": 1, "text": "选项 1（普通选项）"},
        {"id": 2, "text": "选项 2（默认选中）", "selected": true},
        {"id": 3, "text": "选项 3（不可选）", "disabled": true}
    ];

    console.info('value:' + $('#jquery-select2'));
    console.info($('#jquery-select2'));

    var placeholder = "请选择";
    $('#jquery-select2').select2({
        placeholder: placeholder,
        data: data,
        language: 'zh-CN'
    });
});

var treeData = {
    name: 'My Tree',
    children: [
        {name: 'T1'},
        {name: 'T2'},
        {
            name: 'T3',
            children: [
                {name: 'T3_1'},
                {name: 'T3_2'}
            ]
        },
        {
            name: 'T4',
            children: [
                {name: 'T4_1'}
            ]
        }
    ]
};

Vue.component('demo-tree', {
    template: '#tree-template',
    props: {
        model: Object
    },
    data: function () {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function () {
            return this.model.children && this.model.children.length > 0;
        }
    },
    methods: {
        toggle: function () {
            this.open = this.open ? false : true;
        },
        dbclick: function () {

        }
    }

});

function tree() {
    new Vue({
        el: '#tree',
        data: {
            treeData: treeData
        }
    });
}

function svg() {
    // The raw data to observe
    var stats = [
        {label: 'A', value: 100},
        {label: 'B', value: 100},
        {label: 'C', value: 100},
        {label: 'D', value: 100},
        {label: 'E', value: 100},
        {label: 'F', value: 100}
    ]

// A resusable polygon graph component
    Vue.component('polygraph', {
        props: ['stats'],
        template: '#polygraph-template',
        computed: {
            // a computed property for the polygon's points
            points: function () {
                var total = this.stats.length
                return this.stats.map(function (stat, i) {
                    var point = valueToPoint(stat.value, i, total)
                    return point.x + ',' + point.y
                }).join(' ')
            }
        },
        components: {
            // a sub component for the labels
            'axis-label': {
                props: {
                    stat: Object,
                    index: Number,
                    total: Number
                },
                template: '#axis-label-template',
                computed: {
                    point: function () {
                        return valueToPoint(
                            +this.stat.value + 10,
                            this.index,
                            this.total
                        )
                    }
                }
            }
        }
    })

// math helper...
    function valueToPoint(value, index, total) {
        var x = 0
        var y = -value * 0.8
        var angle = Math.PI * 2 / total * index
        var cos = Math.cos(angle)
        var sin = Math.sin(angle)
        var tx = x * cos - y * sin + 100
        var ty = x * sin + y * cos + 100
        return {
            x: tx,
            y: ty
        }
    }

// bootstrap the demo
    new Vue({
        el: '#demo',
        data: {
            newLabel: '',
            stats: stats
        },
        methods: {
            add: function (e) {
                e.preventDefault()
                if (!this.newLabel) return
                this.stats.push({
                    label: this.newLabel,
                    value: 100
                })
                this.newLabel = ''
            },
            remove: function (stat) {
                if (this.stats.length > 3) {
                    this.stats.splice(this.stats.indexOf(stat), 1)
                } else {
                    alert('Can\'t delete more!')
                }
            }
        }
    })
}

function model() {
    Vue.component('model', {
        template: '#model-template'
    });

    new Vue({
        el: '#demo-model',
        data: function () {
            return {
                showModel: false
            }
        }
    });
}

function innerComponent() {
    Vue.component('select2', {
        template: '#select2-template',
        props : [
            'options' ,
            'value' ,
        ],
        mounted : function () {
            console.info('this.value:' + this.value);
            var vm = this;
            console.info("$(this.$el):" + $(this.$el));
            $(this.$el).select2({
                data: this.options
            }).val(this.value)
            .trigger('change')
            // emit event on change.
            .on('change', function () {
                vm.$emit('input', this.value)
            })
            ;
        }
    });

    new Vue({
        el: '#inner-component',
        template: '#inner-template',
        data : {
            options : [
                {id : 1 , text : 'this is noe'} ,
                {id : 2 , text : 'this is Two'} ,
                {id : 3 , text : 'three'} ,
            ] ,
            selected : 2
        }
    });
}