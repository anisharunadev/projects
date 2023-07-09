<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
    }

    public function register(RegisterRequest $request)
    {
        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ]);
        return response()->json([
            "data" => $user,
            "success" => true,
            "status" => 201
        ], 201);
    }

    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->only(["email", "password"]))) {
            return response()->json([
                "status" => "401",
                "message" => "email or Password does not match our records"
            ], 401);
        }

        $user = User::where("email", $request->email)->firstOrFail();

        return response()->json([
            "status" => "success",
            "message" => "logged in successfully",
            "token" => $user->createToken("API TOKEN")->plainTextToken,
            "data" => $user->get(["name", "email"])
        ], 200);
    }
}
