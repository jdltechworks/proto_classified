<?php

namespace App\Http\Requests\User;

use App\User;
use App\Mail\Verification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed'
        ];
    }

    public function persist() {
        $code = str_random(30);
        $collection = collect($this->only(
            ['name', 'email', 'password']
        ));

        $input = $collection->merge([ 'confirmation_code' => $code ])->toArray();
        $user = User::create($input);

        auth()->login($user);

        Mail::to($user)->send(new Verification($user));
        
    }
}
