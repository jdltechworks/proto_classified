@extends('layouts.app')

@section('title')
    {{ $product->title }}
@endsection

@section('content')
<div class="container-fluid product">
    <div class="col-md-8">
        <div class="row">
            <div class="product--show">
                <img src="https://dummyimage.com/1024x384/000/fff" class="img-responsive" />
                <div class="product--show-footer clearfix">
                    <div class="product--show-title">
                        <h1>{{ $product->title }}</h1>
                        <small>{{ $product->created_at->diffForHumans()}}</small>
                    </div>
                    <p>{{$product->description}}</p>
                    <div>100000 views</div>
                    
                </div>
            </div>
        <div class="comment">
            <div class="comment-header">
                COMMENTS {{ $product->comments->count() }}
            </div>
            <div class="comment--form">
                <div class="form-group">
                    <textarea wrap="off" class="form-control"></textarea>
                </div>
                <div class="form-group text-right">
                    <button class="btn btn-block btn-default ml-auto">add comment</button>
                </div>
            </div>
                @foreach($product->comments as $comment)
                
                    <div class="media">
                      <div class="media-left"> <a href="#"> <img src="https://dummyimage.com/64x64/000/fff" style="width: 64px; height: 64px;"> </a> </div>
                      <div class="media-body">
                        <div>{{ $comment->user->name }}
                        <small>{{ $comment->created_at->diffForHumans() }}</small>                       
                        </div>
                        <p>{{ $comment->body }}</p> 
                      </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-heading text-center">
                Php {{ number_format($product->price, 2, '.', ',') }}
            </div>
            <div class="panel-body">
                {{ $product->user->name }}
                {{ $product->user->email }}
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                You might also like
            </div>
            <div class="panel-body">
                    @foreach($related as $key => $related_product)
                    <div class="media">
                      <div class="media-left"> <a href="#"> <img src="https://dummyimage.com/64x64/000/fff" style="width: 64px; height: 64px;"> </a> </div>
                      
                      <div class="media-body">
                        <div class="media-heading">{{ $related_product->title }}</div>
                        <small>{{ $related_product->created_at->diffForHumans() }}</small>
                        <strong>{{ number_format($related_product->price, 2, '.', ',') }}</strong>
                        
                      </div>
                    </div>
                    @endforeach
            </div>
        </div>  
    </div>
        
    <div id="app">
        
    </div>
</div>
@endsection
