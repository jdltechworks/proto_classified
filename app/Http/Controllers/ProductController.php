<?php

namespace App\Http\Controllers;

use App\Product;
use App\Category;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct() {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::with(['images', 'user', 'categories'])->latest()->take(12)->get();
        $title = 'Products';

        if($request->wantsJson()) {
            return response(compact('title', 'products'), 200);
        } else {
            return view('index', compact('title', 'products'));
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product, Request $request)
    {   
        $keys = $product->categories->modelKeys();
        $related = $product->related($keys, $product->id)->get();
        $product->images;
        $product->comments;
        $product->user;
        if($request->wantsJson()) {
            return response(compact('product', 'related'), 200);
        } else {
            return view('index',compact('product', 'related'));
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
