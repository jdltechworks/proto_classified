<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $fillable = [
    'title',
    'user_id',
    'description',
    'price'
  ];
  public function setTitleAttribute($value) {
    $this->attributes['title'] = $value;
    $this->attributes['slug'] = str_slug($value);
  }
  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function comments()
  {
    return $this->hasMany(Comment::class);
  }
  public function categories() 
  {
    return $this->belongsToMany(Category::class);
  }
  public function getRouteKeyName() {
    return 'slug';
  }
}
