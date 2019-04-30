<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @foreach($linkList as $link)
        <url>
            <loc>{{ $link }}</loc>
            <lastmod>{{ $lastMod }}</lastmod>
        </url>
    @endforeach
</urlset>
