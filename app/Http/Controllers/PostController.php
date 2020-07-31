<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts->load('category'));
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
            'category_id' => 'required',
            'content_long' => 'required',
            'content_short' => 'required',

        ]);
        if ($validator->fails()) {
            $obj = (object) array('error' => true, 'message' => $validator->errors());
            return response()->json($obj, 400);
        }
        $post = Post::create([
            'title' => $request->title,
            'user_id' => $request->user_id,
            'category_id' => $request->category_id,
            'content_long' => $request->content_long,
            'content_short' => $request->content_short,
        ]);

        if ($request->file('file')) {
            $post->image = $request->file('file')->store('posts', 'public');
            $post->save();
        }

        return response()->json($post, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $posts = Post::find($id);
        return response()->json($posts->load('category')->load('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = new Post();

        $post->find($id)->delete();

        $res = ['delete' => true, 'id'=> $id];
        return response() -> json($res, 200);
    }
}
