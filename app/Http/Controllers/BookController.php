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

public function update(StoreBookRequest $request, Book $book) {
    $book->update($request->validated());

    $books = Book::all();
    return BookResource::collection($books);
}
}
