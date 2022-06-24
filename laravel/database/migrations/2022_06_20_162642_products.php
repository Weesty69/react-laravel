<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('album');
            $table->string('artiste');
            $table->string('price');
            $table->string('image');
            $table->timestamps();
        });
    }

    public function down()
    {
        //
    }
};
