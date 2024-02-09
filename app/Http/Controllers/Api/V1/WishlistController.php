<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\DatafinityService;
use Illuminate\Http\Client\RequestException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class WishlistController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $properties = $request->session()->get('properties', []);

        return response()->json(compact('properties'));
    }

    /**
     * @throws ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        $data = $this->validate($request, [
            'property' => 'required|array'
        ]);
        $request->session()->push('properties', $data['property']);

        return response()->json()->setStatusCode(201);
    }

    /**
     * @throws ValidationException
     */
    public function destroy(Request $request, string $id): JsonResponse
    {
        $properties = collect($request->session()->get('properties', []));
        $properties = $properties->reject(fn($property) => $property['id'] === $id);
        $request->session()->put('properties', $properties);

        return response()->json()->setStatusCode(201);
    }
}
