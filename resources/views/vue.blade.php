<!DOCTYPE html>
<html>
<head>
    <title>{{ config('app.name') }}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="{{ asset('/images/favicon.png') }}">
    @vite(['resources/assets/main.scss', 'resources/main.ts'])
</head>
<body>
<noscript>
    <strong>
        We're sorry but <?= config('app.name') ?> doesn't work properly without JavaScript enabled. Please enable it to
        continue.
    </strong>
</noscript>
<div id="app"></div>


</body>
</html>
