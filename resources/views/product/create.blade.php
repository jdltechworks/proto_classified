@extends('layouts.app')
@section('title')
Create product
@endsection
@section('content')
<div id="app">
  <upload></upload>
  <div class="container">
      <div class="row">
          <div class="col-md-8 col-md-offset-2">
              <div class="panel panel-default">
                  <div class="panel-body">
                      <form>
                        <div class="form-group">
                           <editor></editor> 
                          </div>
                        <button type="submit" class="btn btn-warning btn-block">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
@endsection

@section('scripts')
  <script src="{{asset('js/app.js')}}"></script>
@endsection