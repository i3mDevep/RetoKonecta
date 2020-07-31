<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use function GuzzleHttp\Promise\all;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json(compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            $obj = (object) array('error' => true, 'message' => $validator->errors());
            return response()->json($obj, 400);
        }
        $category = Category::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
        ]);

        if ($request->file('file')) {
            $category->image = $request->file('file')->store('categories', 'public');
            $category->save();
        }
        $res = (object) array('error' => false, 'category' => $category);
        return response()->json($res, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $c = new Category();
        $posts = new Post();

        $c->find($category->id)->delete();
        $posts->where('category_id','=',$category->id)->delete();

        $res = ['delete' => true, 'id' => $category->id];
        return response()->json($res, 200);
    }
}
