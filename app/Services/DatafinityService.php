<?php

namespace App\Services;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\RequestException;
use Illuminate\Http\Client\Response;

class DatafinityService
{
    public PendingRequest $client;

    public function __construct($apiKey)
    {
        $this->client = \Http::contentType('application/json')
            ->baseUrl('https://api.datafiniti.co/v4')
            ->withToken($apiKey);
    }

    /**
     * @throws RequestException
     */
    public function properties($page = 1, $numberOfRecords = 9): array
    {
        $response = $this->client
            ->withQueryParameters([
                'limit' => $numberOfRecords,
                'page' => $page
            ])
            ->post("/properties/paginate", [
                'query' => "country:US",

            ])->throw();

        $records = $response->json()['records'];
        foreach ($records as &$record) {
            // @TODO: Need to implement this
            $record['distance_from_search'] = null;
        }

        return $records;
    }
}
