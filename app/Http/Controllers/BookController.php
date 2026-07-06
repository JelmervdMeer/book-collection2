<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Resources\BookResource;
use App\Http\Requests\StoreBookRequest;

class BookController extends Controller
{
    public function index()
    {
        return BookResource::collection(Book::all());
    }

    public function store(StoreBookRequest $request)
{
    Book::create($request->validated());

    return BookResource::collection(Book::all());
}
}
