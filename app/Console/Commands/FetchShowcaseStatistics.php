<?php

namespace App\Console\Commands;

use Cache;
use GuzzleHttp\Client;
use GuzzleHttp\Cookie\CookieJar;
use Illuminate\Console\Command;

class FetchShowcaseStatistics extends Command
{

    const CACHE_KEY = '2ba24aec190006c2df992a7619bc8017'; // md5('fetch:showcase:statistics')

    protected $signature = 'fetch:showcase:statistics';
    protected $description = 'Get the statistics of all showcases and save them into cache';
    private $cookieJar = null;

    public function __construct() {
        parent::__construct();
        $this->cookieJar = CookieJar::fromArray([], 'my.matterport.com');
    }

    public function handle()
    {

        // login to matterport and grab the access token
        $username = env('MATTERPORT_USERNAME');
        $password = env('MATTERPORT_PASSWORD');

        // making request
        static::getAccessToken($username, $password);

        // get all showcase ids
        $showcaseKeys = static::showcasesKeys();

        // get all statistics from showcases
        $statistics = static::showcasesStatistics($showcaseKeys);

        // caching
        Cache::forever(static::CACHE_KEY, $statistics);

        // response
        $this->info('All showcases are fetched and cached');
    }

    private function getAccessToken(string $username, string $password) {
        $url = config('matterport.api.login');
        (new Client())->request('POST', $url, [
            'cookies' => $this->cookieJar,
            'form_params' => [
                'username' => $username,
                'password' => $password,
            ],
        ]);
    }

    private function showcasesKeys(): array {
        $output = [];
        foreach(config('360vrmuseum.showcases') as $showcase) {
            $output[] = $showcase['mid'];
        }
        return $output;
    }

    private function showcasesStatistics(array $showcaseKeys): array {
        $output = [];
        $urlFormat = config('matterport.api.models.statistics');
        foreach($showcaseKeys as $mid) {
            $this->info('Fetching showcase: ' . $mid);
            $url = sprintf($urlFormat, $mid);
            $response = (new Client())->request('GET', $url, [
                'cookies' => $this->cookieJar,
            ]);
            $body = json_decode((string)$response->getBody(), true);
            $output[$mid] = $body['results'];
            $this->info('Fetching showcase: ' . $mid . ' >>> Done');
        }
        return $output;
    }
}
