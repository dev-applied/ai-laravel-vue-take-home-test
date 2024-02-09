<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\DatafinityService;
use Illuminate\Http\Client\RequestException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class PropertyController extends Controller
{
    /**
     * @throws ValidationException
     * @throws RequestException
     */
    public function index(Request $request, DatafinityService $datafinityService): JsonResponse
    {
        $data = $this->validate($request, [
            'page' => 'nullable|integer'
        ]);

        $properties = $datafinityService->properties($data['page']);


        return response()->json(compact('properties'));
    }
}
