<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request){
        $data = $request->validated();
        $profile = $request->file('user_profile');
        $profile_name = 'profile-'.time().'.'.$profile->getClientOriginalExtension();
        $profile_path = $profile->storeAs('profiles', $profile_name);
        /** @var User $user */
        $user = User::create([
            "first_name" => $data['first_name'],
            "last_name" => $data['last_name'],
            "email" => $data['email'],
            "phone" => $data['phone_number'],
            "password" => bcrypt($data['password']),
            "user_profile" => $profile_path
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));

    }
    public function login(LoginRequest $request){
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Provided email address or password is incorrect'
            ]);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }
    public function logout(Request $request){
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
    }
}

