<?php 

    include_once __DIR__ . '/../db/index.php';

    // var_dump(DIR);

    header('Content-type: application/json');
    echo json_encode( $database );

?>