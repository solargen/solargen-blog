module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-85414008-1",
    base: "/",
    markdown: {
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "solargen",
            description: "我变强了，也变秃了"
        }
    },
    head: [["link", {rel: "icon", href: `/img/logo.png`}]],
    themeConfig: {
        repo: "baomidou/mybatis-plus",
        docsRepo: "baomidou/mybatis-plus-doc",
        editLinks: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: "spring",
                        link: "/spring/"
                    },
                    {
                        text: "springboot",
                        link: "/springboot/"
                    },
                    {
                        text: "springcloud",
                        link: "/springcloud/"
                    },
                ],
                sidebar: {
                    "/guide/": genGuideSidebar(true)
                }
            }
        }
    }
};

function genGuideSidebar(isZh) {
    return [
        {
            title: "Java课程",
            collapsable: false,
            children: [""]
        },
        {
            title: "技术文章",
            collapsable: false,
            children: []
        }
    ]
}

