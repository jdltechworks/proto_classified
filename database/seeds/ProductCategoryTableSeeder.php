<?php

use Illuminate\Database\Seeder;

class ProductCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(range(1, App\Product::count()) as $index) {
            DB::table('category_product')->insert([
                'product_id' => rand(1, App\Product::count()),
                'category_id' => rand(1, App\Category::count())
            ]);
        }
    }
}
