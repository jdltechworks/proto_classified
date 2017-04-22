@extends('layouts.app')

@section('title')
  {{ $title }}
@endsection

@section('content')
    <div id="app">
        <product-menu></product-menu>
        <product-list :products="{{$products}}"></product-list>
    </div>
@endsection

@section('scripts')
    <script src="{{asset('js/app.js')}}"></script>
@endsection