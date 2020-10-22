<?php

namespace App\Http\Controllers;
use App\Admin;
use Mail;
use Carbon\Carbon;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection ;
use App\Http\Requests\adminChangePasswordRequest;
use App\Mail\AdminResetPasswordMail;




use Illuminate\Http\Request;

class AdminPasswordController extends Controller
{
    // 1-Sending Email for Password Reset
    public function sendEmail(Request $request)
    {
        if (!$this->validateEmail($request->email))
        {
            return $this->failedResponse();
        }
        $this->send($request->email);
        return $this->successResponse();
    }

    public function validateEmail($email)
    {
        return !!Admin::where('email' , $email )->first();
    }
    
    public function send($email)
    {
        $token = $this->createToken($email);
        Mail::to($email)->send(new AdminResetPasswordMail($token->token));
    }

    public function createToken($email)
    {
        $oldToken = DB::table('password_resets')->where('email' , $email)->first();
        if($oldToken)
        {
            return $oldToken;
        }
        $token = Str::random(60);
        $this->saveToken($token , $email);
        return $token;
    }
    
    public function saveToken($token , $email)
    {
        DB::table('password_resets')->insert([
            'email'=> $email,
            'token'=> $token,
            'created_at'=> Carbon::now()
            ]);
        }
    public function successResponse()
    {
        return response()->json([
            'data' => 'Email Found check your inbox',
        ], Response::HTTP_OK);
    }
    public function failedResponse()
    {
        return response()->json([
            'error' => 'Email doesn\'t exist',
        ], Response::HTTP_NOT_FOUND);
    }


    // 2-Actual Password Reset

    public function resetPassword(adminChangePasswordRequest $request)
    {
        if($this->getPasswordResetTableRowCount($request) >0 ) 
        { 
            return $this->changePassword($request);
        } 
        else 
        {
            return $this->tokenNotFoundResponse();
        };

    }

    private function getPasswordResetTableRowCount($request)
    {
        return DB::table('password_resets')->get()->where('email' , $request->email)->where('token' , $request->resetToken)->count();
       
    }
        

    private function tokenNotFoundResponse()
    {
        return response(['error' => 'Token not Found'] , Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changePassword($request)
    {
        $admin = Admin::where('email' , $request['email'])->first();
        $admin->update(['password' => $request['password']]);
        $this->getPasswordResetTableRow($request);
        return response()->json(['data'=>'Password changed successfully'] ,Response::HTTP_CREATED);
        
       
    }
    private function getPasswordResetTableRow($request)
    {
        return (DB::table('password_resets')->where('email' , $request->email)->where('token' , $request->resetToken))->delete();
       
    }
}
