@extends('layouts.app')
@section('title')
Create product
@endsection
@section('content')
<div id="app">
  <product-create></product-create>
</div>
@endsection

@section('scripts')
  <script src="{{asset('js/app.js')}}"></script>
@endsection