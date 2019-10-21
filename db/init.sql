CREATE DATABASE IF NOT EXISTS mutant_log;

USE mutant_log;

CREATE TABLE IF NOT EXISTS `registry` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `dna` longtext NOT NULL,
  `is_mutant` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;