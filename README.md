# RSS Feed Viewer Using Express.js

## Initialization

Install the following NodeJS packages:

```console
yarn add rss-parser
yarn add express
yarn add express-handlebars
```

## Run

```console
node app.js
```

## RSS Feed Object Example

Output example of `rss-parser` for [`https://virgool.io/feed/@virgool`](https://virgool.io/feed/@virgool)

```json
[
  {
    "items": [
      {
        "title": "آدرس انتشارات خود را شخصی کنید",
        "link": "https://virgool.io/@virgool/%D8%A2%D8%AF%D8%B1%D8%B3-%D8%A7%D9%86%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AE%D9%88%D8%AF-%D8%B1%D8%A7-%D8%B4%D8%AE%D8%B5%DB%8C-%DA%A9%D9%86%DB%8C%D8%AF-nxh2n2v7u5qq",
        "pubDate": "2021-11-06T12:24:14.000Z",
        "author": "ویرگول",
        "content": "<figure class=\"md-block-image md-block-image-has-caption\"><img src=\"https://files.virgool.io/upload/users/1/posts/nxh2n2v7u5qq/ducrhc6h5jsy.gif\" alt=\"دامنه شخصی در ویرگول\" /><figcaption className=\"md-block-image-caption\">دامنه شخصی در ویرگول</figcaption></figure><p class=\"md-block-unstyled\"><br/></p><p class=\"md-block-unstyled\">نام دامنه شما بخش مهمی از برند شما است و رابطه بین شما و خواننده را روشن می‌کند. پیش از این به نویسندگان اجازه داده بودیم تا دامنه‌های سفارشی خود را در ویرگول تنظیم کنند، اما هرگز در مورد آن صحبتی نشد، زیرا معتقدیم ویژگی‌هایی باید معرفی شوند که استفاده از آن  برای همه‌ی افراد به سادگی میسر باشد، اما امروز خوشحالیم که اعلام کنیم تمامی نویسندگان از این پس و با ساختن یک انتشارات، به سادگی می‌توانند آدرس انتشارات خود را به نام دامنه‌ی خود پیوند زنند. </p><blockquote class=\"md-block-blockquote\">به طور مثال انتشارات خود با دامنه <strong class=\"md-inline-bold\">virgool.io/business </strong>را به سادگی به <strong class=\"md-inline-bold\">blog.business.com</strong> تغییر دهید.</blockquote><h3 class=\"md-block-header-three\"></h3><h3 class=\"md-block-header-three\">دامنه چیست؟</h3><p class=\"md-block-unstyled\"><strong class=\"md-inline-bold\">دامنه‌</strong> (Domain) در شبکه‌ی اینترنت نامی است که وبسایت و یا صفحه شما از طریق آن قابل دسترسی خواهد بود. شما در اینترنت با دامنه خود شناخته خواهید شد و هر بازدیدکننده با استفاده از دامنه می تواند وب‌سایت شما را مشاهده کند. </p><h3 class=\"md-block-header-three\"></h3><h3 class=\"md-block-header-three\">نحوه اتصال انتشارات به دامنه شخصی</h3><ol class=\"md-block-ordered-list-item\"><li>برای تنظیم یک دامنه شخصی برای انتشارات خود، به سادگی به بخش «<strong class=\"md-inline-bold\"><a class=\"md-inline-link\" href=\"https://virgool.io/me/publications\" target=\"_blank\" rel=\"noopener nofollow\">انتشارات</a></strong>» در تنظیمات پروفایل خود بروید و به عنوان مدیر و یا دبیر انتشارات روی «دامنه شخصی» کلیک کنید.</li><li>سپس از طریق آموزش موجود، می‌بایست از طریق پنل مدیریت دامنه‌تان، آدرس دامنه یا زیردامنه خود را به سرورهای ویرگول متصل کنید.</li><li>در مرحله بعد می‌بایست آدرس دامنه‌ای که در مرحله قبل به سرورهای ویرگول وصل کردید را وارد کنید و سپس اقدام به پرداخت هزینه اشتراک این قابلیت نمایید.</li></ol><hr class=\"md-block-hr\"/><p class=\"md-block-unstyled\"><br/></p><p class=\"md-block-unstyled\">امیدواریم با کمک دامنه‌ی شخصی بیش از پیش انتشارات خود در ویرگول را، خانه‌ی خود بدانید. <br/>همچنین خوشحال خواهیم شد با دامنه‌های شخصی شما بیشتر آشنا شویم، پس بعد از اتصال انتشارت به دامنه شخصی خود، در انتهای این پست دامنه (Domain) خود را در بخش نظرات با ما به اشتراک بگذارید.</p><h4 class=\"md-block-header-four\"></h4>",
        "contentSnippet": "دامنه شخصی در ویرگول\n\nنام دامنه شما بخش مهمی از برند شما است و رابطه بین شما و خواننده را روشن می‌کند. پیش از این به نویسندگان اجازه داده بودیم تا دامنه‌های سفارشی خود را در ویرگول تنظیم کنند، اما هرگز در مورد آن صحبتی نشد، زیرا معتقدیم ویژگی‌هایی باید معرفی شوند که استفاده از آن  برای همه‌ی افراد به سادگی میسر باشد، اما امروز خوشحالیم که اعلام کنیم تمامی نویسندگان از این پس و با ساختن یک انتشارات، به سادگی می‌توانند آدرس انتشارات خود را به نام دامنه‌ی خود پیوند زنند. \nبه طور مثال انتشارات خود با دامنه virgool.io/business را به سادگی به blog.business.com تغییر دهید.\n\nدامنه چیست؟\nدامنه‌ (Domain) در شبکه‌ی اینترنت نامی است که وبسایت و یا صفحه شما از طریق آن قابل دسترسی خواهد بود. شما در اینترنت با دامنه خود شناخته خواهید شد و هر بازدیدکننده با استفاده از دامنه می تواند وب‌سایت شما را مشاهده کند. \n\nنحوه اتصال انتشارات به دامنه شخصی\n\nبرای تنظیم یک دامنه شخصی برای انتشارات خود، به سادگی به بخش «انتشارات» در تنظیمات پروفایل خود بروید و به عنوان مدیر و یا دبیر انتشارات روی «دامنه شخصی» کلیک کنید.\nسپس از طریق آموزش موجود، می‌بایست از طریق پنل مدیریت دامنه‌تان، آدرس دامنه یا زیردامنه خود را به سرورهای ویرگول متصل کنید.\nدر مرحله بعد می‌بایست آدرس دامنه‌ای که در مرحله قبل به سرورهای ویرگول وصل کردید را وارد کنید و سپس اقدام به پرداخت هزینه اشتراک این قابلیت نمایید.\n\n\n\nامیدواریم با کمک دامنه‌ی شخصی بیش از پیش انتشارات خود در ویرگول را، خانه‌ی خود بدانید. \nهمچنین خوشحال خواهیم شد با دامنه‌های شخصی شما بیشتر آشنا شویم، پس بعد از اتصال انتشارت به دامنه شخصی خود، در انتهای این پست دامنه (Domain) خود را در بخش نظرات با ما به اشتراک بگذارید.",
        "summary": "آدرس انتشارات خود در ویرگول را به دامنه‌تان تغییر دهید",
        "id": "https://virgool.io/@virgool/%D8%A2%D8%AF%D8%B1%D8%B3-%D8%A7%D9%86%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AE%D9%88%D8%AF-%D8%B1%D8%A7-%D8%B4%D8%AE%D8%B5%DB%8C-%DA%A9%D9%86%DB%8C%D8%AF-nxh2n2v7u5qq",
        "isoDate": "2021-11-06T12:24:14.000Z"
      }
    ],
    "link": "https://virgool.io/feed/@virgool",
    "feedUrl": "https://virgool.io/feed/@virgool",
    "title": " نوشته های ویرگول",
    "lastBuildDate": "2021-11-06T15:54:14+03:30"
  }
]
```

## Resources

- [rss-parser](https://www.npmjs.com/package/rss-parser)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html)
- [Express.js view engine for handlebars.js](https://github.com/express-handlebars/express-handlebars)
- [How To: Handlebars - Iterate over Arrays with the Each Helper](http://jsdev.wikidot.com/howto:11)
- [A Step By Step Guide To Using Handlebars With Your Node js App](https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65)