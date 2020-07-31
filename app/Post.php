<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'image', 'user_id', 'category_id', 'content_long', 'content_short',
    ];
    public function category(){
        return  $this->hasOne('App\Category','id', 'category_id');
    }
    public function user(){
        return  $this->hasOne('App\User','id', 'user_id');
    }
}
