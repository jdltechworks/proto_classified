<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{

    public function __construct()
    {

    }

    /**
     * Index view on auth page login and signup
     * @return view
     */
    public function index()
    {
        
        return view('auth.index');
    }


}
