@extends('layouts.app')

@section('title')
    {{ $product->title }}
@endsection

@section('content')
    <div class="col-md-8">
        <div class="row">
            <div class="product--show">
                <img src="https://dummyimage.com/890x350/000/fff" class="img-responsive" />
                <div class="product--show-footer clearfix">
                    <div class="product--show-title">
                        <h1>{{ $product->title }}</h1>
                        <small>{{ $product->created_at->diffForHumans()}}</small>
                        <small>Php {{ number_format($product->price, 2) }}</small>
                    </div>
                    <div class="product--show-user">{{ $product->user->name }}</div>
                    <div>100000 views</div>
                    
                </div>
            </div>
        <div class="comment">
            <div class="comment-header">
                COMMENTS 1231231
                
                
            </div>
            <div class="comment--form">
                <div class="form-group">
                    <textarea class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-default ml-auto">add comment</button>
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
        <div>You may also like</div>    
    </div>
        
    <div id="app">
        
    </div>
@endsection
