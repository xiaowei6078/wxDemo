Page({
    data: {
        containerStyle: "",
        // 规定灵活项目的方向
        flex: {
            flexDirection: {
                title: "flex-direction(规定灵活项目的方向)",
                value: "flex-direction",
                children: [
                    {
                        name: "竖向排列(column)",
                        value: "column",
                        checked: false
                    },
                    {
                        name: "竖向排列（元素以相反的顺序 - column-reverse)",
                        value: "column-reverse",
                        checked: true
                    },
                    {
                        name: "横向排列(row)",
                        value: "row",
                        checked: false
                    },
                    {
                        name: "横向排列（元素以相反的顺序 - row-reverse）",
                        value: "row-reverse",
                        checked: false
                    },
                    {
                        name: "默认值",
                        value: "initial",
                        checked: false
                    }
                ]
            }
        }
    },
    onLoad() {
        this.formatStyle();
    },
    formatStyle() {
        const attrData = this.data.flex;
        const attrs = [];
        for (let key in attrData) {
            let children = attrData[key].children;
            const chilItem = children.filter(item => item.checked);
            if (chilItem[0]) {
                attrs.push(`${attrData[key].value}: ${chilItem[0].value}`)
            }
        }
        this.setData({
            containerStyle: attrs.join(";")
        });
    },
    attrChange(e) {
        const key = e.target.dataset.key;
        const val = e.detail.value;
        const children = this.data.flex[key].children;
        children.map(item => {
            const isTrue = item.value === val;
            item.checked = isTrue;
        });
        this.formatStyle();
    }
})