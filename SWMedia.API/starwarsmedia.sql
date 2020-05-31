-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Attributes`
--

DROP TABLE IF EXISTS `Attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Attributes` (
  `Id` tinyint(4) DEFAULT NULL,
  `ProductId` tinyint(4) DEFAULT NULL,
  `AttributeName` varchar(8) DEFAULT NULL,
  `Value` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attributes`
--

LOCK TABLES `Attributes` WRITE;
/*!40000 ALTER TABLE `Attributes` DISABLE KEYS */;
INSERT INTO `Attributes` VALUES (1,1,'Material','Cotton'),(2,1,'Size','M'),(3,1,'Color','Black'),(4,2,'Material','Not cotton'),(5,2,'Size','L'),(6,2,'Color','Black'),(7,3,'Material','Polyester'),(8,3,'Size','XL'),(9,3,'Color','Black');
/*!40000 ALTER TABLE `Attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categories` (
  `CategoryId` tinyint(4) DEFAULT NULL,
  `CategoryName` varchar(23) DEFAULT NULL,
  `CategoryUrl` varchar(140) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'T-Shirts','https://res.cloudinary.com/nevereverlie/image/upload/v1590265651/SWMedia_Shop/Categories/photo_2020-04-22_15-17-26_t3r2ma.jpg'),(2,'Hoodies','https://res.cloudinary.com/nevereverlie/image/upload/v1590265662/SWMedia_Shop/Categories/87759-6d0ce6-2_ftjcf8.jpg'),(3,'Handbags','https://res.cloudinary.com/nevereverlie/image/upload/v1590265669/SWMedia_Shop/Categories/photo_2020-04-22_15-29-12_zmtdrt.jpg'),(4,'Caps','https://res.cloudinary.com/nevereverlie/image/upload/v1590881323/SWMedia_Shop/Categories/star-wars-new-era-9fifty-snapback-cap-00_mxk1f0.jpg'),(5,'Cups','https://res.cloudinary.com/nevereverlie/image/upload/v1590881331/SWMedia_Shop/Categories/111_tkbfzr.jpg'),(6,'Smartphone Cases','https://res.cloudinary.com/nevereverlie/image/upload/v1590881311/SWMedia_Shop/Categories/photo_2020-04-22_15-42-25_gq06ru.jpg'),(7,'Keychains and Figurines','https://res.cloudinary.com/nevereverlie/image/upload/v1590881300/SWMedia_Shop/Categories/photo_2020-04-22_15-46-15_r63wgl.jpg'),(8,'Notebooks','https://res.cloudinary.com/nevereverlie/image/upload/v1590265642/SWMedia_Shop/Categories/photo_2020-04-22_15-54-16_qt2t8a.jpg');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GoogleUsers`
--

DROP TABLE IF EXISTS `GoogleUsers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GoogleUsers` (
  `GoogleUserId` tinyint(4) DEFAULT NULL,
  `FirstName` varchar(5) DEFAULT NULL,
  `LastName` varchar(7) DEFAULT NULL,
  `Email` varchar(26) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GoogleUsers`
--

LOCK TABLES `GoogleUsers` WRITE;
/*!40000 ALTER TABLE `GoogleUsers` DISABLE KEYS */;
INSERT INTO `GoogleUsers` VALUES (2,'Danil','Gladkov','danil.gladkov.dg@gmail.com');
/*!40000 ALTER TABLE `GoogleUsers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Messages`
--

DROP TABLE IF EXISTS `Messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Messages` (
  `Id` tinyint(4) DEFAULT NULL,
  `SenderId` tinyint(4) DEFAULT NULL,
  `Username` varchar(4) DEFAULT NULL,
  `Text` varchar(25) DEFAULT NULL,
  `SendTime` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Messages`
--

LOCK TABLES `Messages` WRITE;
/*!40000 ALTER TABLE `Messages` DISABLE KEYS */;
INSERT INTO `Messages` VALUES (1,1,'luke','May the force be with you','01:31'),(2,7,'Han','always','01:32');
/*!40000 ALTER TABLE `Messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orders` (
  `Id` tinyint(4) DEFAULT NULL,
  `ProductId` tinyint(4) DEFAULT NULL,
  `UserId` tinyint(4) DEFAULT NULL,
  `Amount` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES (92,1,8,1),(93,3,1,1);
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `ProductId` tinyint(4) DEFAULT NULL,
  `Title` varchar(15) DEFAULT NULL,
  `Description` varchar(18) DEFAULT NULL,
  `CategoryId` tinyint(4) DEFAULT NULL,
  `ImageUrl` varchar(125) DEFAULT NULL,
  `Price` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'First T-shirt','I am description',1,'https://res.cloudinary.com/nevereverlie/image/upload/v1590265734/SWMedia_Shop/T-Shirts/photo_2020-04-22_15-22-09_y8uwwd.jpg',200),(2,'Second T-shirt','Wow',1,'https://res.cloudinary.com/nevereverlie/image/upload/v1590265734/SWMedia_Shop/T-Shirts/photo_2020-04-22_15-13-29_lmjfm1.jpg',199),(3,'Thirt one','Description3',1,'https://res.cloudinary.com/nevereverlie/image/upload/v1590265734/SWMedia_Shop/T-Shirts/photo_2020-04-22_15-13-30_anwt1w.jpg',250),(4,'Forth T-shirt','I Have description',1,'https://res.cloudinary.com/nevereverlie/image/upload/v1590265734/SWMedia_Shop/T-Shirts/photo_2020-04-22_15-13-33_nofevv.jpg',250),(5,'Fifth T-shirt','Description',1,'https://res.cloudinary.com/nevereverlie/image/upload/v1590265728/SWMedia_Shop/T-Shirts/photo_2020-04-22_15-13-28_vkp0dw.jpg',300),(6,'Sixth T-shirt','I am the sixth',1,'https://res.cloudinary.com/nevereverlie/image/upload/v1590265728/SWMedia_Shop/T-Shirts/photo_2020-04-22_15-13-27_uonvxb.jpg',200),(7,'Seventh T-Shirt','i am tired ',1,'https://res.cloudinary.com/nevereverlie/image/upload/v1590265727/SWMedia_Shop/T-Shirts/photo_2020-04-22_15-13-29_2_tfisai.jpg',225),(9,'Ninth T-Shirt','The last one',1,'https://res.cloudinary.com/nevereverlie/image/upload/v1590265727/SWMedia_Shop/T-Shirts/photo_2020-04-22_15-14-54_poqdec.jpg',350);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `UserId` tinyint(4) DEFAULT NULL,
  `Username` varchar(6) DEFAULT NULL,
  `Email` varchar(16) DEFAULT NULL,
  `Phone` varchar(12) DEFAULT NULL,
  `PasswordHash` varchar(0) DEFAULT NULL,
  `PasswordSalt` varchar(0) DEFAULT NULL,
  `DateOfBirth` varchar(19) DEFAULT NULL,
  `SelfDescription` varchar(9) DEFAULT NULL,
  `Country` varchar(7) DEFAULT NULL,
  `City` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'luke','luke@nure.ua','398098098','','','1976-01-01 00:00:00','','',''),(7,'han','hansolo@nure.ua','38990809','','','2001-01-01 00:00:00','','',''),(8,'john','ed','dd','','','0001-01-01 00:00:00','','',''),(9,'anakin','anakin@nure.ua','380680535844','','','0001-01-01 00:00:00','','',''),(10,'vader','darkSide@nure.ua','380680535834','','','2000-01-01 00:00:00','Dark side','Ukraine','Lviv');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `__EFMigrationsHistory`
--

DROP TABLE IF EXISTS `__EFMigrationsHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `__EFMigrationsHistory` (
  `MigrationId` varchar(33) DEFAULT NULL,
  `ProductVersion` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `__EFMigrationsHistory`
--

LOCK TABLES `__EFMigrationsHistory` WRITE;
/*!40000 ALTER TABLE `__EFMigrationsHistory` DISABLE KEYS */;
INSERT INTO `__EFMigrationsHistory` VALUES ('20200526120541_InitialCreate','3.0.0'),('20200527203301_MessageEntityAdded','3.0.0');
/*!40000 ALTER TABLE `__EFMigrationsHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sqlite_sequence`
--

DROP TABLE IF EXISTS `sqlite_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sqlite_sequence` (
  `name` varchar(11) DEFAULT NULL,
  `seq` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sqlite_sequence`
--

LOCK TABLES `sqlite_sequence` WRITE;
/*!40000 ALTER TABLE `sqlite_sequence` DISABLE KEYS */;
INSERT INTO `sqlite_sequence` VALUES ('Categories',8),('Attributes',9),('Users',10),('Products',9),('Orders',102),('Messages',2),('GoogleUsers',2);
/*!40000 ALTER TABLE `sqlite_sequence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-22 15:20:27
