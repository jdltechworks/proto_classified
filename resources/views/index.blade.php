<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body>
        @if(Auth::user())
        	<div id="app">
                <app :user="{{Auth::user()}}"></app>
            </div>
        @else
            @if(isset($products))
                <div id="app">
                    <app :initial-products="{{$products}}"></app>
                </div>
            @elseif(isset($product))
                <div id="app">
                    <app :product="{{$product}}" :related="{{$related}}"></app>
                </div>
            @else
                 <div id="app">
                    <app></app>
                </div>               
            @endif

        @endif        
    <script src={{mix('js/app.js')}}></script>
    </body>
</html>
