@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    You are logged in!
                </div>
            </div>
        </div>
    </div>
    <div id="app">
        <clients></clients>
        <authorized-clients></authorized-clients>
        <personal-access-tokens></personal-access-tokens>
    </div>
</div>
@endsection

@section('scripts')
    <script src="{{asset('js/app.js')}}"></script>
@endsection
