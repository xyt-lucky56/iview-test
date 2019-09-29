
export const routesList = [
    {
        path: "*",
        // name: "login",
        component: resolve => require(["@/views/login/login"], resolve),
    },
    {
        path: "/",
        name: "login",
        component: resolve => require(["@/views/login/login"], resolve),
    },
    {
        path: "/resetPassword",
        name: "resetPassword",
        component: resolve => require(["@/views/login/resetPassword"], resolve),
    },
    {
        path: '/admin/role',
        name: "role",
        component: resolve => require(["@/views/role/role"], resolve),
    },
    {
        path: '/admin/home',
        name: 'home',
        component: resolve => require(["@/views/home"], resolve),
        children: [{
            path: '/admin/formList',
            name: 'formList',
            component: resolve => require(["@/views/v-form/formList"], resolve),
        }, {
            path: '/admin/formListTwo',
            name: 'formListTwo',
            component: resolve => require(["@/views/v-form/formListTwo"], resolve),
        },{
            path: '/admin/table',
            name: 'table',
            component: resolve => require(["@/views/v-table/table"], resolve),
        }, {
            path: '/admin/imageLazy',
            name: 'imageLazy',
            component: resolve => require(["@/views/imageLazy"], resolve),
        }, {
            path: '/admin/uploadImg',
            name: 'uploadImg',
            component: resolve => require(["@/views/uploadImg"], resolve),
        },
        {
            path: '/admin/treeList',
            name: 'treeList',
            component: resolve => require(["@/views/treeList"], resolve),
        },
        {
            path: '/admin/checkboxTable',
            name: 'checkboxTable',
            component: resolve => require(["@/views/v-table/checkboxTable"], resolve),
        },
        {
            path: '/admin/jump',
            name: 'jump',
            component: resolve => require(["@/views/jump"], resolve),
        },
        {
            path: '/admin/btnPage',
            name: 'btnPage',
            component: resolve => require(["@/views/btnPage"], resolve),
        },
        {
            path: '/admin/tableLazy',
            name: 'tableLazy',
            component: resolve => require(["@/views/v-table/tableLazy"], resolve),
        },
        // {
        //     path: '/admin/login',
        //     name: 'login',
        //     component: resolve => require(["@/views/login/login"], resolve),
        // },
        {
            path: '/admin/tableTwo',
            name: 'tableTwo',
            component: resolve => require(["@/views/v-table/tableTwo"], resolve),
        },
        {
            path: '/admin/select',
            name: 'select',
            component: resolve => require(["@/views/v-components/select"], resolve),
        },
        {
            path: '/admin/radio',
            name: 'radio',
            component: resolve => require(["@/views/v-components/radio"], resolve),
        },
        {
            path: '/admin/cascader',
            name: 'cascader',
            component: resolve => require(["@/views/v-components/cascader"], resolve),
        },
        {
            path: '/admin/complaints',
            name: '我要吐槽',
            component: resolve => require(["@/views/headerPages/complaints"], resolve),
        },
        {
            path: '/admin/needHelp',
            name: '我要帮助',
            component: resolve => require(["@/views/headerPages/needHelp"], resolve),
        },
        {
            path: '/admin/notice',
            name: '公告',
            component: resolve => require(["@/views/headerPages/notice"], resolve),
        },
        {
            path: '/admin/userCenter',
            name: '个人中心',
            component: resolve => require(["@/views/headerPages/userCenter"], resolve),
        },
        ]
    }
]
