//# sourceURL="mobileapp.store.navigations"
Ext.define('mobileapp.store.navigations' , {
    extend:'Ext.data.TreeStore',
    requires:[
        'mobileapp.model.navigation'
    ],
    config: {
        model: "mobileapp.model.navigation",
        defaultRootProperty: 'items',

        root:{
            id: 'root',
            text: 'Kitchen Sink',
            items: [
                {
                    text: 'User Interface',
                    id: 'ui',
                    cls: 'launchscreen',
                    items: [
                        {
                            text: '会员管理',
                            leaf: true,
                            id: 'User'
                        },
                        {
                            text: 'Forms',
                            leaf: false,
                            id: 'forms',
                            items: [
                                {
                                    text: 'Form Panel',
                                    leaf: true,
                                    view: 'FormPanel',
                                    id: 'formpanel'
                                },
                                {
                                    text: 'Sliders',
                                    leaf: true,
                                    view: 'Sliders',
                                    id: 'sliders'
                                },
                                {
                                    text: 'Toolbar Inputs',
                                    leaf: true,
                                    view: 'ToolbarInput',
                                    id: 'toolbarinput'
                                }
                            ]
                        },
                        {
                            text: 'DataViews',
                            leaf: false,
                            id: 'dataviews',
                            items: [
                                {
                                    text: 'Basic',
                                    leaf: true,
                                    view: 'BasicDataView',
                                    id: 'basicdataview'
                                },
                                {
                                    text: 'Horizontal',
                                    leaf: true,
                                    view: 'HorizontalDataView',
                                    id: 'horizontaldataview'
                                },
                                {
                                    text: 'Inline',
                                    leaf: true,
                                    view: 'InlineDataView',
                                    id: 'inlinedataview'
                                }
                            ]
                        },
                        {
                            text: 'Lists',
                            leaf: false,
                            id: 'lists',
                            items: [
                                {
                                    text: 'Basic',
                                    leaf: true,
                                    view: 'BasicList',
                                    id: 'basiclist'
                                },
                                {
                                    text: 'Grouped',
                                    leaf: true,
                                    view: 'GroupedList',
                                    id: 'groupedlist'
                                },
                                {
                                    text: 'Disclosure',
                                    leaf: true,
                                    view: 'DisclosureList',
                                    id: 'disclosurelist'
                                }
                            ]
                        },
                        {
                            text: 'Nested List',
                            view: 'NestedList',
                            leaf: true,
                            id: 'nestedlist'
                        },
                        {
                            text: 'Icons',
                            leaf: true,
                            id: 'icons'
                        },
                        {
                            text: 'Toolbars',
                            leaf: true,
                            id: 'toolbars'
                        },
                        {
                            text: 'Carousel',
                            leaf: true,
                            id: 'carousel'
                        },
                        {
                            text: 'Tabs',
                            leaf: true,
                            id: 'tabs'
                        },
                        {
                            text: 'Bottom Tabs',
                            view: 'BottomTabs',
                            leaf: true,
                            id: 'bottom-tabs'
                        },
                        {
                            text: 'Overlays',
                            leaf: true,
                            id: 'overlays'
                        },
                        {
                            text: 'Menus',
                            leaf: true,
                            id: 'menus'
                        }
                    ]
                }
            ]
        },

        /**
         * use proxy
         *

        proxy: {
            type: 'ajax',
            url: 'data/navigation.json'
        }

         */
    }

})