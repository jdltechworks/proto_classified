<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body>
        @if(isset($collection))
            <div id="app">
                <app :collection="{{$collection}}"
                    :csrf="{{json_encode([ 'token' => csrf_token() ])}}">
                </app>
            </div>
        @else
            @yield('content')
        @endif
        <script src={{mix('js/pace.min.js')}}></script>
        <script src={{mix('js/app.js')}}></script>
    </body>
</html>
