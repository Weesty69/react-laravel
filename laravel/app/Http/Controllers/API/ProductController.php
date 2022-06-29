<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        return response()->json([
            $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'album' => 'required|max:255',
            'artiste' => 'required|max:255',
            'price' => 'required|max:255',
            'image' => 'required|max:255',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur, Vérifiez les champs .'
            ]);
        } else {
            $product = new Product;
            $product->album = $request->album;
            $product->artiste = $request->artiste;
            $product->price = $request->price;
            $product->image = $request->image;
            $product->save();

            return response()->json([
                'success' => true,
                'message' => 'Produit bien ajouté .'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $product = Product::where('id', $request->id)->first();
        $user = User::where('token', $request->token)->first();

        if ($user && $product) {
            $product->album = $request->album;
            $product->artiste = $request->artiste;
            $product->price = $request->price;
            $product->image = $request->image;
            $product->save();

            return response()->json([
                'success' => true,
                'message' => 'Produit mis à jour'
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Erreur, produit non trouvé ou session invalide .'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $product = Product::where('id', $request->id)->first();
        $user = User::where('token', $request->token)->first();

        if ($user && $product) {
            $product->delete();

            return response()->json([
                'success' => true,
                'message' => 'Produit Supprimé'
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Erreur, produit non trouvé ou session invalide .'
            ]);
        }
    }
}
