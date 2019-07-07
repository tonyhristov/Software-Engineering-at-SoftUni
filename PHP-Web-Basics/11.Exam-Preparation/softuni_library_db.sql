-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.40-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for softuni_library
CREATE DATABASE IF NOT EXISTS `softuni_library` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `softuni_library`;

-- Dumping structure for table softuni_library.books
CREATE TABLE IF NOT EXISTS `books` (
                                       `id` int(11) NOT NULL AUTO_INCREMENT,
                                       `title` varchar(50) NOT NULL,
                                       `author` varchar(50) NOT NULL,
                                       `description` text NOT NULL,
                                       `image_url` text NOT NULL,
                                       `genre_id` int(11) NOT NULL,
                                       `user_id` int(11) NOT NULL,
                                       `added_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                       PRIMARY KEY (`id`),
                                       KEY `_books_genres` (`genre_id`),
                                       KEY `_books_users` (`user_id`),
                                       CONSTRAINT `_books_genres` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
                                       CONSTRAINT `_books_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table softuni_library.books: ~3 rows (approximately)
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` (`id`, `title`, `author`, `description`, `image_url`, `genre_id`, `user_id`, `added_on`) VALUES
(1, 'some book', 'some author', 'some description', 'some url', 3, 1, '2019-07-03 18:58:11'),
(2, 'something', 'somthing', 'somethiing', 'somthing', 3, 2, '2019-07-03 20:55:43'),
(5, 'something interesting', 'something interesting', 'something interesting', 'https://www.rd.com/wp-content/uploads/2017/11/How-Much-Does-a-Book-Need-to-Sell-to-Be-a-Bestseller-509582812-Billion-Photos-1024x683.jpg', 1, 1, '2019-07-05 16:35:42');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

-- Dumping structure for table softuni_library.genres
CREATE TABLE IF NOT EXISTS `genres` (
                                        `id` int(11) NOT NULL AUTO_INCREMENT,
                                        `name` varchar(50) NOT NULL DEFAULT '0',
                                        PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table softuni_library.genres: ~2 rows (approximately)
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Drama'),
(2, 'Educational'),
(3, 'Adventure');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;

-- Dumping structure for table softuni_library.users
CREATE TABLE IF NOT EXISTS `users` (
                                       `id` int(11) NOT NULL AUTO_INCREMENT,
                                       `username` varchar(255) NOT NULL,
                                       `password` varchar(255) NOT NULL,
                                       `full_name` varchar(255) NOT NULL,
                                       `born_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                       PRIMARY KEY (`id`),
                                       UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table softuni_library.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `password`, `full_name`, `born_on`) VALUES
(1, 'ivan', '$argon2i$v=19$m=1024,t=2,p=2$R0FQR09aekd5dERnYVg2eQ$sehaVgiTBQcsfnNg0eIjMmJ3atUhISoUiUT2nwkSOyw', 'Ivan Ivanov', '2005-11-11 00:00:00'),
(2, 'pesho', '$argon2i$v=19$m=1024,t=2,p=2$aFFBMXVDOXcwallhcTVaSA$GDGIwcreEMXnonHi1b+DJpx2kGidbGSp5AkUIQZeyQw', 'Pesho Peshov', '1999-11-11 00:00:00'),
(3, 'maria', '$argon2i$v=19$m=1024,t=2,p=2$V0hVRVI4OGJmWnhjNWVjcQ$1Gvd3sw5lSYQmXMi9Cs0ub93vxy17jDKNXJPtMAVibw', 'Maria Ivanova', '1985-11-10 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
