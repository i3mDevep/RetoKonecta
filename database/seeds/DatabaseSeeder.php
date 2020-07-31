<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $user = App\User::create([
            'name' => 'Michael Atehortua',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin12345'),
            'role' => true,
            'cellphone' => '3206408264'
        ]);

        factory(App\User::class, 8)->create();
        factory(App\Category::class, 1)->create();
        factory(App\Post::class, 10)->create();

    }
}
