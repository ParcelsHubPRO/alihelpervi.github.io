{
  "version": 1,
  "features":{
    "webviewSearch":true,
    "userX":true,
    "rateUs":true,
    "fixSsl":false
  },
  "settings":{
    "webviews":{
      "currency":{
        "url":{
          "setCookie":"https://login.aliexpress.{domain}/setCommonCookie.htm?fromApp=false&currency={currencyCode}&region=UA&bLocale=ru_RU&site=rus&province=&city=",
          "currency":"https://m.aliexpress.{domain}/account.html#/currency?site=glo",
          "post":"https://m.aliexpress.{domain}/api/setting/currency?currency={currencyCode}",
          "referrer":"https://m.aliexpress.{domain}/account.html"
        },
        "check":{
          "setCookie":".*setCommonCookie\\.htm.*",
          "api":".*/api/currency/list.*",
          "response":".*\"code\":200.*\"success\":true.*"
        },
        "ignore":{
          "errors":[
            ".*check.gif\\?.*"
          ]
        }
      },
      "search":{
        "url":{
          "category":"https://m.aliexpress.{domain}/category.html?site=glo",
          "query":"https://m.aliexpress.{domain}/wholesale/{query}.html?site=glo&channel=direct",
          "js": "https://alihelpervi.github.io/mobile.js"
        },
        "check":{
          "login":"^https://login\\..*",
          "productClicked":".*/item/.*",
          "categoryAll":".*category\\.html.*",
          "subCategory":".*category-amp\\.subcat.*",
          "items":".*categoryName=.*|.*/wholesale/.*"
        },
        "ignore":{
          "navigations":[
            ".*/shopcart/list\\.html.*",
            ".*/login\\.html.*",
            ".*/account\\.html.*",
            ".*category-amp\\.footer.d_home.*",
            "^https://m\\.aliexpress\\.{domain}/$"
          ]
        }
      },
      "general":{
        "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
      }
    }
  }
}
