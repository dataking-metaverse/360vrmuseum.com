<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="version" content="{{ config('version') }}" />

    @if (config('app.debug') === true)
    <meta name="debug" content="1"/>
    @endif

    {{--<title>{{ $text['title'] }}</title>--}}

    <!-- config and app -->
    <script type="text/javascript">
        window.user = function() { return {!! json_encode($user, JSON_UNESCAPED_UNICODE) !!}; };
        window.config = function() { return {!! json_encode($config, JSON_UNESCAPED_UNICODE) !!}; };
        window.app = function() { return {!! json_encode($app, JSON_UNESCAPED_UNICODE) !!}; };
        {{--window.lang = function() { return {!! json_encode($lang, JSON_UNESCAPED_UNICODE) !!}; };--}}
    </script>
</head>
<body>
    <div id="app"></div>
    <div id="app-back-to-top-portal"></div>
    <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
