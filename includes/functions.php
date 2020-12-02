<?php
    // include the file we just wrote - connect
     // like a JS import statement

    $result = array();

    function getAllCars($conn) {
        $query = "SELECT * FROM tbl_mini";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo (json_encode($result));
    }

    function getSingleCar($conn, $id) {
        $query = "SELECT * FROM tbl_mini WHERE id=" . $id . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo (json_encode($result));
    }