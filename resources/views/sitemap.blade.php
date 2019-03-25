<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @foreach($linkList as $link)
        <sitemap>
            <loc>{{ $link }}</loc>
            <lastmod>2019-02-25T11:40:13+09:00</lastmod>
        </sitemap>
    @endforeach
</sitemapindex>
