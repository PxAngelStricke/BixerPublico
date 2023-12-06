<?php

namespace App\Http\Controllers;

use App\Models\Bixer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BixerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    public function inicio() {
        return Inertia::render('Bixer/Inicio', [

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Bixer $bixer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bixer $bixer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bixer $bixer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bixer $bixer)
    {
        //
    }
}
