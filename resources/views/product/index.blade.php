@extends('layouts.app')

@section('content')
    <div id="app">
        <product-list :products="{{$products}}"></product-list>
    </div>
@endsection

@section('scripts')
    <script src="{{asset('js/app.js')}}"></script>
@endsection