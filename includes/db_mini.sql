-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 16, 2020 at 05:11 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mini`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mini`
--

CREATE TABLE `tbl_mini` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(40) NOT NULL,
  `PRICE` varchar(60) NOT NULL,
  `ENGINE_ARCHITECTURE` varchar(80) NOT NULL,
  `OUTPUT` varchar(80) NOT NULL,
  `IMG` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mini`
--

INSERT INTO `tbl_mini` (`ID`, `NAME`, `PRICE`, `ENGINE_ARCHITECTURE`, `OUTPUT`, `IMG`) VALUES
(1, '2021 MINI COOPER S 3 DOOR', '$30,756', '4 Cylinder 16 Valve Twin Power Turbo', '189 hp @ 5,000 - 6,000', 'cooperS.png'),
(2, '2021 MINI COOPER 3 DOOR', '$26,456', '3 Cylinder 12 Valve Twin Power Turbo', '134 hp @ 4,500 - 6,000', 'cooper.png'),
(3, '2021 MINI JOHN COOPER WORKS 3 DOOR', '$38,406 ', '4 Cylinder 16 Valve Twin Power Turbo', '228 hp @ 5,200 - 6,000', 'cooper-works.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_mini`
--
ALTER TABLE `tbl_mini`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_mini`
--
ALTER TABLE `tbl_mini`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
