<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:15',
            'email' => 'required|email|max:60',
            'password' => 'required|max:30',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()
            ]);
        } else {
            $user_register = User::where('email', $request->email)->first();
            if ($user_register) {
                return response()->json([
                    "error" => 'Compte déja existant',
                ]);
            } else {
                $user = new User;
                $user->name = $request->name;
                $user->email = $request->email;
                $user->password = Hash::make($request->password);
                $token = Str::random(80);
                $user->token = $token;
                $user->save();
                return response()->json([
                    "error" => false,
                    'token' => $user->token
                ]);
            }
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:60',
            'password' => 'required|max:30',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'email ou mot de passe incorrect'
            ]);
        } else {
            $user = User::where('email', $request->email)->first();
            if ($user && Hash::check($request->password, $user->password)) {
                $token = Str::random(80);
                $user->token = $token;
                $user->save();
                return response()->json([
                    'status' => true,
                    'token' => $user->token
                ]);
            } else {
                return response()->json([
                    'error' => 'email ou mot de passe incorrect',
                ]);
            }
        }
    }

    public function auth(Request $request)
    {
        $user = User::where('token', $request->token)->first();
        if ($user) {
            return response()->json([
                'status' => true,
            ]);
        } else {
            return response()->json([
                'status' => false,
            ]);
        }
    }

    public function show(User $user)
    {
        //
    }

    public function update(Request $request, $token)
    {
        $user = User::where('token', $token)->first();

        if($user) {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email|max:60',
                'name' => 'required|max:15',
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'error' => $validator->errors()
                ]);
            } else {
                $user->update([
                    'email' => $request->email,
                    'name' => $request->name
                ]);
            }
        }
    }

    // public function reset_password(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'email' => 'required|email|max:60',
    //         'reset_question' => 'required|max:30',
    //         'new_password' => 'required|max:30|confirmed',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'error' => $validator->errors()
    //         ]);
    //     } else {
    //         $user = User::where('email', $request->email)->first();
    //         $reset_question = User::where('reset_question', $request->reset_question)->first();
    //         if ($user && $reset_question) {//ZZZZZZZZZZZZZZZ A FINIR VERIF LES DEUX
    //             $user->update([
    //                 'password' => Hash::make($request->new_password)
    //             ]);
    //             return response()->json([
    //                 'message' => 'password updated',
    //             ]);
    //         }
    //     }
    // }

    // public function destroy($user_token, $id)
    // {
    //     $user = User::where('id', $id)->first();
    //     $user_token = User::where('session_token', $user_token)->first();

    //     if ($user_token && $user) {
    //         $user->delete();
    //         return response()->json([
    //             'status' => true,
    //             'message' => 'Account deleted with success'
    //         ]);
    //     } else {
    //         return response()->json([
    //             'status' => false,
    //         ]);
    //     }
    // }
}