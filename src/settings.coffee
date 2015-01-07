'use strict'

@Settings =
    Version: '0.0.5'
    CountStories: 54
    ApplyTheme: ->
        if localStorage.getItem('theme') == null
            localStorage.setItem('theme', '1')
        switch localStorage.getItem('theme')
            when '1'
                localStorage.setItem('textColor', '#000')
                localStorage.setItem('highlightColor', '#2578d9')
                localStorage.setItem('bgColor', '#ffffff')
            when '2'
                localStorage.setItem('textColor', '#babdb6')
                localStorage.setItem('highlightColor', '#729fcf')
                localStorage.setItem('bgColor', '#2e3436')
            when '3'
                localStorage.setItem('textColor', '#c8c8c8')
                localStorage.setItem('highlightColor', '#fefefe')
                localStorage.setItem('bgColor', '#000000')
        styles = new CSSCreator()
        textColor = localStorage.getItem('textColor')
        bgColor = localStorage.getItem('bgColor')
        highlightColor = localStorage.getItem('highlightColor')
        styles.addRules([
            ['body'
                ['color', textColor],
                ['background-color', bgColor]
            ],
            ['a, a:visited'
                ['color', highlightColor]
            ],
            ['a:hover'
                ['color', bgColor],
                ['background-color', highlightColor]
            ],
            ['nav ul li.tab-current:before',
                ['background-color', highlightColor]
            ]
            ['nav, nav ul li'
                ['border-color', highlightColor]
            ],
            ['nav ul li.tab-current'
                ['-webkit-box-shadow', 'inset 0 3px ' + highlightColor],
                ['box-shadow', 'inset 0 3px ' + highlightColor]
            ]
        ])
        globalStyles.replace(styles)
