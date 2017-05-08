@extends('layouts.app')

@section('title')
  {{ $title }}
@endsection

@section('content')
    <div class="container-fluid">
        <div id="app" class="product">
            <product-menu></product-menu>
            <product-list :products="{{$products}}"></product-list>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{asset('js/app.js')}}"></script>
@endsection