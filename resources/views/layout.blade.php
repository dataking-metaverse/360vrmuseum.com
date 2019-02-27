<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {{--<title>{{ $text['title'] }}</title>--}}

    <!-- config and app -->
    <script type="text/javascript">
        window.config = function() { return {!! json_encode($config) !!}; };
        window.app = function() { return {!! json_encode($app) !!}; };
    </script>
</head>
<body>
    <div id="app"></div>
    <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
