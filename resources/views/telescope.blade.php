<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="version" content="{{ config('version') }}" />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&amp;subset=korean" rel="stylesheet" />

    @if (config('app.debug') === true)
        <meta name="debug" content="1"/>
@endif


<!-- config and app -->
    <script type="text/javascript">
        window.__PRELOADED_STATE__ = {!! $preloadedState !!};
    </script>
</head>
<body>
<div id="app"></div>
<script type="text/javascript" src="{{ mix('/js/telescope.js') }}"></script>
</body>
</html>
