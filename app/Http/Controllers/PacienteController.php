<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Bixer/Pacientes', [
            'pacientes' => Paciente::with('user:id,name')->latest()->get()
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
        $validated = $request -> validate([
            'name' => 'required|string|max:50',
            'lastname' => 'required|string|max:50',
            'lastname2' => 'required|string|max:50',
            'CURP' => 'required|string|max:18',
            'weight' => 'numeric',
            'height' => 'numeric',
            'date_birth' => 'string',
        ]);

        $request->user()->pacientes()->create($validated);

        return redirect(route('pacientes.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Paciente $paciente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paciente $paciente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Paciente $paciente)
    {
        $this->authorize('update', $paciente);

        $validated = $request -> validate([
            'name' => 'required|string|max:50',
            'lastname' => 'required|string|max:50',
            'lastname2' => 'required|string|max:50',
            'CURP' => 'required|string|max:18',
            'weight' => 'numeric',
            'height' => 'numeric',
            'date_birth' => 'string',
        ]);

        $paciente->update($validated);

        return redirect(route('pacientes.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paciente $paciente)
    {
        $this->authorize('delete', $paciente);

        $paciente->delete();

        return redirect(route('pacientes.index'));
    }
}
