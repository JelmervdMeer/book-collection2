<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index(Book $book)
    {
        return response()->json(
            $book->reviews
        );
    }


    public function store(Request $request, Book $book)
    {
        $validated = $request->validate([
            'reviewer_name' => 'required|string|max:255',
            'comment' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
        ]);


        $book->reviews()->create($validated);


        return response()->json(
            $book->reviews
        );
    }


    public function update(Request $request, Review $review)
    {
        $validated = $request->validate([
            'reviewer_name' => 'required|string|max:255',
            'comment' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
        ]);


        $review->update($validated);


        return response()->json(
            $review
        );
    }


    public function destroy(Review $review)
    {
        $review->delete();


        return response()->json([
            'message' => 'Review succesvol verwijderd'
        ]);
    }
}