<?php

$url = 'https://api.linkedin.com/v2/jobSearch';
$search_query = $_GET['q'];

// Set up the API request
$query_params = array(
  'keywords' => $search_query,
  'sort' => 'RELEVANCE'
);
$query_string = http_build_query($query_params);
$request_headers = array(
  'Content-Type: application/json',
  'x-li-format: json',
  'X-Restli-Protocol-Version: 2.0.0'
);

// Make the API request using cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url . '?' . $query_string);
curl_setopt($ch, CURLOPT_HTTPHEADER, $request_headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

// Return the API response to the JavaScript function as a JSON object
echo $response;
?>
