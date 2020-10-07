<?php

namespace App\Http\Controllers;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Mail\ResetPasswordMail;
use Mail;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\changePasswordRequest;
use Illuminate\Support\Collection ;





class PasswordController extends Controller
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
        return !!User::where('email' , $email )->first();
    }
    
    public function send($email)
    {
        $token = $this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token->token));
    }

    public function createToken($email)
    {
        $oldToken = DB::table('password_resets')->where('email' , $email)->first();
        if($oldToken)
        {
            return $oldToken;
        }
        $token = Str::random(60);
        // $token = $this->mssql_escape($token);
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

    public function resetPassword(changePasswordRequest $request)
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
        $user = User::where('email' , $request['email'])->first();
        $user->update(['password' => $request['password']]);
        $this->getPasswordResetTableRow($request);
        return response()->json(['data'=>'Password changed successfully'] ,Response::HTTP_CREATED);
        
       
    }
    private function getPasswordResetTableRow($request)
    {
        return (DB::table('password_resets')->where('email' , $request->email)->where('token' , $request->resetToken))->delete();
        // return response()->json(['data'=>'Password Changed'] ,Response::HTTP_CREATED);
       
    }


}
