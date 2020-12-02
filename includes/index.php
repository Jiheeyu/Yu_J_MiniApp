<?php
    include("connect.php");
    include("functions.php");

    if(isset($_GET["id"])) {
        $targetID = $_GET["id"];
        $result = getSingleCar($pdo, $targetID);

        return $result;

    } else {
        $allCars = getAllCars($pdo);

        return $allCars;
    }