<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;
use App\Http\Requests\AdminSignUpRequest;
use Auth;
use Tymon\JWTAuth\Facades\JWTAuth;


class AdminController extends Controller
{
    
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {

        $this->middleware('auth:admin', ['except' => ['login', 'signup' ]]);
      
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = Auth::guard('admin')->attempt($credentials)) {
            return response()->json(['error' => "Email or Pssword doesn't exist"], 401);
        }

        return $this->respondWithToken($token);
        
    }

    public function signup(AdminSignUpRequest $request)
    {
        $admin= Admin::create($request->all());
        return $this->login($admin);

    }


    /**
     * Get the authenticated Admin.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me(Request $request)
    {
        // $user = JWTAuth::toUser(JWTAuth::getToken());
        $adminData =
        [
            'admin' =>  Auth::guard('admin')->user() ,
            'payload' => Auth::guard('admin')->payload()
        ];
        return $adminData ;

    }

    /**
     * Log the Admin out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::guard('admin')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(Auth::guard('admin')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'admin' => Auth::guard('admin')->user()->name
        ]);
    }
}
