Page({
    data: {
        containerStyle: {},
        // 规定灵活项目的方向
        flex: [
            {
                title: "flex-direction(规定灵活项目的方向)",
                value: "flex-direction",
                children: [
                    {
                        name: "竖向排列(column)",
                        value: "column",
                        checked: true
                    },
                    {
                        name: "竖向排列（元素以相反的顺序 - column-reverse)",
                        value: "column-reverse"
                    },
                    {
                        name: "横向排列(row)",
                        value: "row"
                    },
                    {
                        name: "横向排列（元素以相反的顺序 - row-reverse）",
                        value: "row-reverse"
                    },
                    {
                        name: "默认值",
                        value: "initial"
                    }
                ]
            }
        ]
    },
    onLoad() {

    }
})