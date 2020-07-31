<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
        'content_long' => $faker->text(800),
        'content_short' => $faker->text(80),
        'user_id' => 1,
        'category_id' => 1,
    ];
});
