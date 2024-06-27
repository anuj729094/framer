<?php
include dirname(_DIR_) . '/functions.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
  try {
    // Fetch latest blog post
    $blogsSql = "SELECT image, title, slug, SUBSTRING_INDEX(SUBSTRING(description, 1, 1500), ' ', 400) AS short_description FROM blogs WHERE (deleted_at IS NULL OR deleted_at = '') AND DATE(date) <= CURDATE() ORDER BY date DESC LIMIT 1";
    $blogsStmt = $pdo->prepare($blogsSql);
    $blogsStmt->execute();
    $blog = $blogsStmt->fetch(PDO::FETCH_ASSOC);

    // Clean up the HTML tags and decode HTML entities in the description
    $blog['short_description'] = strip_tags($blog['short_description']);
    $blog['short_description'] = html_entity_decode($blog['short_description']);

    // Modify the blog slug or url for use in the href attribute
    $blog['url'] = strtolower($blog['slug']);

    // Set the Content-Type header to HTML
    header('Content-Type: text/html; charset=utf-8');
  } catch (PDOException $e) {
    // Handle any PDO exceptions that occur
    http_response_code(500); // Internal Server Error
    echo json_encode([
      'error' => 'Failed to read data',
      'errorMessage' => $e->getMessage()
    ]);
    return; // Important: Stop further execution on error
  }

  // Check that data is complete and valid
  if (!isset($blog)) {
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Incomplete data']);
    return; // Stop if data is incomplete
  }

  // If everything is okay, include the template
  include dirname(_DIR_) . '/blog_template.php';
}