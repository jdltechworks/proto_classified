<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\User::class, 5)->create()->each(function ($u) {
        $u->products()->save(factory(App\Product::class)->make());
        $u->comments()->save(factory(App\Comment::class)->make());
      });
    }
}
